require("dotenv").config();
const mongoose = require("mongoose");
// Make sure this path is correct based on your file structure
const Booking = require("../../models/booking.model.js");

const bookingResolvers = {
  // Existing Query type resolvers (add any necessary data fetching here)
  Query: {
    // Example: Fetch all bookings
    bookings: async () => await Booking.find().populate("car"),

    // Example: Fetch a single booking by ID
    booking: async (_, { id }) => await Booking.findById(id).populate("car"),
  },

  Mutation: {
    async createBooking(_, { input }) {
      // 1. Destructure all fields, including the newly added customerID and status
      const {
        carId,
        pickupDate,
        returnDate,
        pickupLocation,
        customerID,
        status,
      } = input;

      // Basic validation for required fields
      if (
        !carId ||
        !pickupDate ||
        !returnDate ||
        !pickupLocation ||
        !customerID
      ) {
        // Note: status is optional in the input, as the model has a default
        throw new Error(
          "Car ID, pickup date, return date, location, and customer ID are required."
        );
      }

      // Convert date strings to Date objects (Mongoose model expects Date)
      const parsedPickupDate = new Date(pickupDate);
      const parsedReturnDate = new Date(returnDate);

      // Simple date validation
      if (parsedPickupDate >= parsedReturnDate) {
        throw new Error("Return date must be after the pickup date.");
      }

      // **Advanced Logic Placeholder:**
      // In a real application, you would also check if the car (using carId)
      // is actually available during the requested period (parsedPickupDate to parsedReturnDate).

      // 2. Create the new booking document with all fields
      const newBooking = new Booking({
        car: carId,
        pickupDate: parsedPickupDate,
        returnDate: parsedReturnDate,
        pickupLocation: pickupLocation,
        user: customerID,
        // If status is provided in input, use it; otherwise, the model's 'Pending' default is used.
        status: status,
      });

      try {
        // 3. Save the booking to MongoDB
        const booking = await newBooking.save();

        // 4. Populate the car field before returning, as required by your GraphQL schema
        await booking.populate("car");

        return booking;
      } catch (error) {
        console.error("Error creating booking:", error);
        throw new Error("Failed to create booking due to a database error.");
      }
    },
  },

  // Resolver to ensure dates are correctly returned as Strings (ISO 8601 format)
  // This is required since your schema defines the output types as 'String!'
  Booking: {
    pickupDate: (booking) => booking.pickupDate.toISOString(),
    returnDate: (booking) => booking.returnDate.toISOString(),
    bookedAt: (booking) => booking.bookedAt.toISOString(),
    // You can also add resolvers for other fields if needed, like fetching
    // the customer details using the customerID, or if you skipped step 4 above.
  },
};

module.exports = { bookingResolvers };
