const mongoose = require("mongoose");

// ## CAR SCHEMA ##
const carSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    image: String,
    price: {
      type: Number,
      required: true,
    },
    specs: {
      seats: { type: String, required: true },
      transmission: { type: String, required: true },
      fuel: { type: String, required: true },
    },
    // This link works because 'Category' is registered as a model name
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category", // No changes needed here!
      required: true,
    },
  },
  { timestamps: true }
);

// Create and export the Car model
const Car = mongoose.model("Car", carSchema);
module.exports = Car;
