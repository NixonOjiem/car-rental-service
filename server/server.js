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
const { bookingTypeDefs } = require("./graphql/schema/booking.schema");
const { bookingResolvers } = require("./graphql/resolvers/booking.resolver");
const typeDefs = mergeTypeDefs([
  userTypeDefs,
  carTypeDefs,
  categoryTypeDefs,
  bookingTypeDefs,
]);
const resolvers = mergeResolvers([
  userResolvers,
  carResolvers,
  categoryResolvers,
  bookingResolvers,
]);

const {
  connectToDatabase,
  closeDatabaseConnection,
} = require("./config/database");

// =================================================================
// START: CORS CONFIGURATION
// =================================================================
const allowedOrigins = [
  "https://carrentalwithnode.netlify.app",
  "http://lovehomemart.com",
  "http://localhost:5173", // Example: for a local Vite React app
  "http://localhost:3000", // Example: for another local server
  "http://localhost:5174",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
// =================================================================
// END: CORS CONFIGURATION
// =================================================================

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});
app.get("/car", (req, res) => {
  res.json({ message: "Hello from the Node.js server!" });
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
    apolloServer.applyMiddleware({ app, path: "/car/gql" });

    app.get("/car/api/message", (req, res) => {
      res.json({ message: "Hello from the Node.js server!" });
    });
    app.get("/car", (req, res) => {
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
