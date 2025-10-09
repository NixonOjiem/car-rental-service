require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose"); // Add mongoose

const app = express();
const port = process.env.Port || 3000;

// Importing type definitions and resolvers
const { mergeTypeDefs } = require("@graphql-tools/merge");
const { mergeResolvers } = require("@graphql-tools/merge");
const { userTypeDefs } = require("./graphql/schema/user.schema");
const { userResolvers } = require("./graphql/resolvers/user.resolver");
const { carTypeDefs } = require("./graphql/schema/car.schema");
const { carResolvers } = require("./graphql/resolvers/car.resolver");
const { categoryTypeDefs } = require("./graphql/schema/category.schema");
const { categoryResolvers } = require("./graphql/resolvers/category.resolver");
const typeDefs = mergeTypeDefs([userTypeDefs, carTypeDefs, categoryTypeDefs]);
const resolvers = mergeResolvers([
  userResolvers,
  carResolvers,
  categoryResolvers,
]);

const {
  connectToDatabase,
  closeDatabaseConnection,
} = require("./config/database");

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp"); // Often needed alongside COOP
  next();
});

async function main() {
  try {
    // 1. Connect to database first
    await connectToDatabase();

    // 2. Initialize Apollo Server AFTER DB connection
    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
      context: () => {
        // Add DB connection check to context
        if (mongoose.connection.readyState !== 1) {
          throw new Error("Database connection not ready");
        }
      },
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({ app, path: "/gql" });

    app.get("/api/message", (req, res) => {
      res.json({ message: "Hello from the Node.js server!" });
    });

    // 3. Start server LAST
    app.listen(port, () => {
      console.log(`🚀 Server running on http://localhost:${port}`);
      console.log(
        `🚀 GraphQL endpoint: http://localhost:${port}${apolloServer.graphqlPath}`
      );
    });
  } catch (error) {
    console.error("❌ Application failed:", error);
    process.exit(1);
  }
}

main();

// Graceful shutdown handlers
process.on("SIGINT", async () => {
  console.log("SIGINT received: closing connections");
  await closeDatabaseConnection();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  console.log("SIGTERM received: closing connections");
  await closeDatabaseConnection();
  process.exit(0);
});
