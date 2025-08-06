const User = require("../../models/user.model"); // user.models.js

const userResolvers = {
  Query: {
    users: async () => {
      // Find all users from the database
      return await User.find();
    },
    user: async (_, { id }) => {
      // Find a single user by ID
      return await User.findById(id);
    },
  },
  Mutation: {
    createUser: async (_, { fullname, email, password }) => {
      // Create a new user with 'manual' provider
      const newUser = new User({
        fullname,
        email,
        password,
        provider: "manual",
      });
      // Mongoose's pre-save hook will automatically hash the password
      return await newUser.save();
    },
    createGoogleUser: async (_, { fullname, email, googleId }) => {
      // Create a new user with 'google' provider
      const newUser = new User({
        fullname,
        email,
        googleId,
        provider: "google",
      });
      return await newUser.save();
    },
    updateUser: async (_, { id, fullname, email }) => {
      // Find and update a user by ID
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { fullname, email },
        { new: true, runValidators: true } // `new: true` returns the updated document
      );
      return updatedUser;
    },
    deleteUser: async (_, { id }) => {
      // Find and delete a user by ID
      const deletedUser = await User.findByIdAndDelete(id);
      return deletedUser;
    },
  },
};

module.exports = { userResolvers };
