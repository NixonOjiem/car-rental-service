const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference the User model
      required: true, // A booking must belong to a user
    },
    // Link the booking to the Car model (assuming you have a Car model)
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car", // Reference the Car model
      required: true,
    },
    // Details from the booking form
    pickupDate: {
      type: Date,
      required: true,
    },
    returnDate: {
      type: Date,
      required: true,
    },
    pickupLocation: {
      type: String,
      required: true,
    },
    // Example for customer details (using a String, but ID is a better long-term choice)
    customerID: {
      type: String,
      required: true,
      default: "Guest User",
    },
    bookedAt: {
      type: Date,
      default: Date.now,
    },
    // New Status Field
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled", "Completed"], // Recommended to use enum for statuses
      default: "Pending",
    },
  },
  { timestamps: true }
); // Adding timestamps is generally useful here

// create and export the booking model (Capitalized variable is convention)
const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
