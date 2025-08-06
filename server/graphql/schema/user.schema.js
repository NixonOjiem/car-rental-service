const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    fullname: String!
    email: String!
    provider: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    # Fetches all users
    users: [User!]!
    # Fetches a single user by their ID
    user(id: ID!): User
  }

  type Mutation {
    # Creates a new user with manual provider. Password is required for this.
    createUser(fullname: String!, email: String!, password: String!): User!

    # Creates a new user with Google provider. Google ID is required for this.
    createGoogleUser(
      fullname: String!
      email: String!
      googleId: String!
    ): User!

    # Updates an existing user by ID. All fields are optional.
    updateUser(id: ID!, fullname: String, email: String): User

    # Deletes a user by their ID
    deleteUser(id: ID!): User
  }
`;

module.exports = typeDefs;
