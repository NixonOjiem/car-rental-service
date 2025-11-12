const { gql } = require("apollo-server-express");

const bookingTypeDefs = gql`
  # NOTE: It is highly recommended to use a custom scalar like 'Date'
  # for pickupDate, returnDate, and bookedAt for type safety.

  type Booking {
    _id: ID!
    car: Car! # Assuming you have a Car type defined
    pickupDate: String!
    returnDate: String!
    pickupLocation: String!
    customerID: String # Output customerID
    bookedAt: String!
    status: String! # Added the new Status field (Output)
  }

  # 2. Define the Input Type for the Mutation
  input CreateBookingInput {
    carId: ID!
    pickupDate: String! # Captures the pickup date
    returnDate: String! # Captures the return date (as requested)
    pickupLocation: String!
    customerID: String! # Changed to String! to match the Mongoose model
    status: String # Status is optional here since the model provides a default
  }

  type Query {
    bookings: [Booking]
    booking(id: ID!): Booking
  }

  # 3. Add the Mutation to the main Mutation type
  type Mutation {
    createBooking(input: CreateBookingInput!): Booking!
  }
`;

module.exports = { bookingTypeDefs };
