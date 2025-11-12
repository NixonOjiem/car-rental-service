const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema();

// create and export the booking model
const booking = mongoose.model("Booking", bookingSchema);
module.exports = booking;
