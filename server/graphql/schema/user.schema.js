const { gql } = require("apollo-server-express");

const userTypeDefs = gql`
  type User {
    id: ID!
    fullname: String!
    email: String!
    provider: String!
    createdAt: String!
    updatedAt: String!
  }

  # This payload is returned on successful authentication
  type AuthPayload {
    token: String!
    user: User
  }

  type Query {
    # Fetches all users
    users: [User!]!
    # Fetches a single user by their ID
    user(id: ID!): User
  }

  type Mutation {
    # Renamed for clarity. Handles manual registration.
    registerUser(
      fullname: String!
      email: String!
      password: String!
    ): AuthPayload!

    # Handles manual email/password login
    loginUser(email: String!, password: String!): AuthPayload!

    # Handles Google Sign-In. We find or create the user.
    loginWithGoogle(googleToken: String!): AuthPayload!

    # These are fine but not the focus of this guide
    updateUser(id: ID!, fullname: String, email: String): User
    deleteUser(id: ID!): User
  }
`;

module.exports = { userTypeDefs };
