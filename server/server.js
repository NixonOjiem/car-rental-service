require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");

const app = express();
const port = process.env.Port || 3000;

// Importing type definitions and resolvers
const { mergeTypeDefs } = require("@graphql-tools/merge");
const { mergeResolvers } = require("@graphql-tools/merge");
const { userTypeDefs } = require("./graphql/schema/user.schema");
const { userResolvers } = require("./graphql/resolvers/user.resolver");
const typeDefs = mergeTypeDefs([userTypeDefs]);
const resolvers = mergeResolvers([userResolvers]);

// CORRECTED LINE: Use destructuring to get connectToDatabase
const {
  connectToDatabase,
  closeDatabaseConnection,
} = require("./config/database");

app.use(cors());
app.use(express.json());

async function main() {
  try {
    const db = await connectToDatabase(); // Now connectToDatabase is correctly a function
    console.log("✅Database connection established in main function.");

    // Initialize Apollo Server
    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
    });

    // Start the Apollo Server
    await apolloServer.start();
    // Apply Apollo middleware to the Express app
    apolloServer.applyMiddleware({ app, path: "/gql" });

    // Basic API endpoint
    app.get("/api/message", (req, res) => {
      res.json({ message: "Hello from the Node.js server!" });
    });

    // Listen on the specified port
    app.listen(port, () => {
      console.log(`🚀Server is running on http://localhost:${port}`);
      console.log(
        `🚀GraphQL endpoint is at http://localhost:${port}${apolloServer.graphqlPath}`
      );
    });
  } catch (error) {
    console.error("❌Application failed:", error);
    // Exit the process if the database connection fails at startup
    process.exit(1);
  }
}

// Call main to connect to the database and perform initial operations
main();

// Graceful shutdown for database connection
process.on("SIGINT", async () => {
  console.log("SIGINT signal received: closing MongoDB connection.");
  await closeDatabaseConnection();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  console.log("SIGTERM signal received: closing MongoDB connection.");
  await closeDatabaseConnection();
  process.exit(0);
});
