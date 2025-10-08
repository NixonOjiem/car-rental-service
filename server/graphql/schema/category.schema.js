const { gql } = require("apollo-server-express");

const categoryTypeDefs = gql`
  # The basic shape of a car category
  type Category {
    _id: ID!
    name: String!
    description: String!
    # A category can have a list of cars (resolved separately)
    cars: [Car!]
  }

  # Input type for creating a new category
  input CreateCategoryInput {
    name: String!
    description: String!
  }

  # Add category-specific queries to the root Query type
  type Query {
    categories: [Category!]
    category(id: ID!): Category
  }

  # Add category-specific mutations to the root Mutation type
  type Mutation {
    createCategory(input: CreateCategoryInput!): Category!
  }
`;
module.exports = { categoryTypeDefs };
