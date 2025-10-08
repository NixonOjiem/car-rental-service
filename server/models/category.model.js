const mongoose = require("mongoose");

// ## CATEGORY SCHEMA ##
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create and export the Category model
const Category = mongoose.model("Category", categorySchema, "carCategories");
module.exports = Category;
