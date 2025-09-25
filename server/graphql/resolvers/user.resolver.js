require("dotenv").config();
const User = require("../../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const { UserInputError } = require("apollo-server-express");
const mongoose = require("mongoose"); // Add mongoose

// Initialize Google Auth client
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Helper function to generate a JWT
const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

const userResolvers = {
  Query: {
    /// Add connection check
    users: async () => {
      // Add connection check
      if (mongoose.connection.readyState !== 1) {
        throw new Error("Database connection not ready");
      }
      return await User.find();
    },
    user: async (_, { id }) => {
      if (mongoose.connection.readyState !== 1) {
        throw new Error("Database connection not ready");
      }
      return await User.findById(id);
    },
  },

  Mutation: {
    // --- Manual Registration ---
    registerUser: async (_, { fullname, email, password }) => {
      // Check connection state
      if (mongoose.connection.readyState !== 1) {
        throw new Error("Database connection not ready");
      }
      // 1. Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new UserInputError("An account with this email already exists.");
      }

      // 2. Create and save the new user (password will be hashed by pre-save hook)
      const newUser = new User({
        fullname,
        email,
        password,
        provider: "manual",
      });
      const savedUser = await newUser.save();

      // 3. Generate a token and return the AuthPayload
      const token = generateToken(savedUser);
      return { token, user: savedUser };
    },

    // --- Manual Login ---
    loginUser: async (_, { email, password }) => {
      if (mongoose.connection.readyState !== 1) {
        throw new Error("Database connection not ready");
      }
      // 1. Find user by email, but also select the password field
      const user = await User.findOne({ email }).select("+password");
      if (!user || user.provider !== "manual") {
        throw new UserInputError("Invalid credentials or user not found.");
      }

      // 2. Check if password matches
      const isMatch = await user.matchPassword(password);
      if (!isMatch) {
        throw new UserInputError("Invalid credentials.");
      }

      // 3. Generate a token and return the AuthPayload
      const token = generateToken(user);
      return { token, user };
    },

    // --- Google Login/Signup ---
    loginWithGoogle: async (_, { googleToken }) => {
      if (mongoose.connection.readyState !== 1) {
        throw new Error("Database connection not ready");
      }
      // 1. Verify the Google token
      let googlePayload;
      try {
        const ticket = await client.verifyIdToken({
          idToken: googleToken,
          audience: process.env.GOOGLE_CLIENT_ID,
        });
        googlePayload = ticket.getPayload();
      } catch (error) {
        throw new UserInputError("Invalid Google Token. Please try again.");
      }

      const { email, name, sub: googleId } = googlePayload;

      // 2. Find or create the user
      let user = await User.findOne({ email });

      if (user) {
        // --- THIS IS THE UPDATED LOGIC ---
        // User exists. If they signed up manually, link their Google account.
        if (user.provider === "manual") {
          user.googleId = googleId;
          user.provider = "google"; // Update their provider
          // You might also want to update their name if it's different
          // user.fullname = name;
          await user.save(); // Save the changes
        }
        // If they were already a google user, we just proceed.
      } else {
        // If user does not exist, create a new one
        const newUser = new User({
          fullname: name,
          email,
          googleId,
          provider: "google",
        });
        user = await newUser.save();
      }

      // 3. Generate a token and return the AuthPayload
      const token = generateToken(user);
      return { token, user };
    },
  },
};

module.exports = { userResolvers };
