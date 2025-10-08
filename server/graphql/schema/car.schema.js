const { gql } = require("apollo-server-express");

const carTypeDefs = gql`
  # The basic shape of car specifications
  type Specs {
    seats: String!
    transmission: String!
    fuel: String!
  }

  # The basic shape of a car
  type Car {
    _id: ID!
    name: String!
    type: String!
    image: String
    price: Float!
    specs: Specs!
    # Each car belongs to one category
    category: Category!
  }

  # Input type for the nested specs object
  input SpecsInput {
    seats: String!
    transmission: String!
    fuel: String!
  }

  # Input type for creating a new car
  input CreateCarInput {
    name: String!
    type: String!
    image: String
    price: Float!
    specs: SpecsInput!
    categoryId: ID!
  }

  # Add car-specific queries to the root Query type
  type Query {
    cars: [Car!]
    car(id: ID!): Car
  }

  # Add car-specific mutations to the root Mutation type
  type Mutation {
    createCar(input: CreateCarInput!): Car!
  }
`;

module.exports = { carTypeDefs };
