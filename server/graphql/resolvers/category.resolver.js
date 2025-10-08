require("dotenv").config();
const mongoose = require("mongoose");
const Car = require("../../models/cars.model.js");
const Category = require("../../models/category.model.js");

const categoryResolvers = {
  Query: {
    // Fetches all categories
    categories: async () => {
      if (mongoose.connection.readyState !== 1) {
        throw new Error("Database connection not ready");
      }
      return await Category.find({});
    },
    // Fetches a single category by its ID
    category: async (_, { id }) => {
      if (mongoose.connection.readyState !== 1) {
        throw new Error("Database connection not ready");
      }
      return await Category.findById(id);
    },
  },

  Mutation: {
    // Creates a new category from the provided input
    createCategory: async (_, { input }) => {
      if (mongoose.connection.readyState !== 1) {
        throw new Error("Database connection not ready");
      }
      const newCategory = new Category(input);
      await newCategory.save();
      return newCategory;
    },
  },

  // This is a relational resolver. When a Category is queried,
  // this function resolves its 'cars' field.
  Category: {
    cars: async (parent) => {
      if (mongoose.connection.readyState !== 1) {
        throw new Error("Database connection not ready");
      }
      // Find all cars where categoryId matches the parent category's ID
      return await Car.find({ categoryId: parent._id });
    },
  },
};

module.exports = { categoryResolvers };
