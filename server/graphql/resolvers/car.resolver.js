require("dotenv").config();
const mongoose = require("mongoose");
const Car = require("../../models/cars.model.js");
const Category = require("../../models/category.model.js");

const carResolvers = {
  Query: {
    // Fetches all cars
    cars: async () => {
      if (mongoose.connection.readyState !== 1) {
        throw new Error("Database connection not ready");
      }
      return await Car.find({});
    },
    // Fetches a single car by its ID
    car: async (_, { id }) => {
      if (mongoose.connection.readyState !== 1) {
        throw new Error("Database connection not ready");
      }
      return await Car.findById(id);
    },
  },

  Mutation: {
    // Creates a new car from the provided input
    createCar: async (_, { input }) => {
      if (mongoose.connection.readyState !== 1) {
        throw new Error("Database connection not ready");
      }
      // Best practice: Ensure the category exists before creating the car
      const categoryExists = await Category.findById(input.categoryId);
      if (!categoryExists) {
        throw new Error("Cannot create car: Category ID does not exist.");
      }

      const newCar = new Car(input);
      await newCar.save();
      return newCar;
    },
  },

  // This is a relational resolver. When a Car is queried,
  // this function resolves its 'category' field.
  Car: {
    category: async (parent) => {
      if (mongoose.connection.readyState !== 1) {
        throw new Error("Database connection not ready");
      }
      // Find the category that matches the car's stored categoryId
      return await Category.findById(parent.categoryId);
    },
  },
};

module.exports = { carResolvers };
