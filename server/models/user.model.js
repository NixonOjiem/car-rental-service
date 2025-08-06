// models/User.js

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      // More robust email validation using a regex pattern
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: function () {
        return !this.googleId;
      },
      select: false, // Prevents the password from being returned in queries by default
    },
    googleId: {
      type: String,
      required: function () {
        return !this.password;
      },
    },
    provider: {
      type: String,
      enum: ["manual", "google"],
      default: "manual",
    },
  },
  { timestamps: true }
);

// Mongoose middleware (pre-save hook) to hash the password
userSchema.pre("save", async function (next) {
  // Only hash the password if it has been modified or is new
  if (!this.isModified("password")) {
    return next();
  }

  // Generate a salt and hash the password
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare submitted password with the stored hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
  // Use bcrypt to compare the plain text password with the hashed password
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
