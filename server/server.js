require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.Port || 3000;

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

    console.log("Database connection established in main function.");

    // Now you have a connected database object.
    // You can perform operations on your `users` collection.
    const usersCollection = db.collection("users");

    // Example: Insert a new user document
    const newUser = {
      googleId: "101234567890123456789",
      displayName: "John Doe",
      email: "john.doe@example.com",
    };

    const result = await usersCollection.insertOne(newUser);
    console.log(`User inserted with _id: ${result.insertedId}`);

    // Example: Find a user
    const foundUser = await usersCollection.findOne({
      displayName: "John Doe",
    });
    console.log("Found user:", foundUser);

    // IMPORTANT: In a real application, you might not want to close the connection immediately after these examples
    // as your server will still need it for API requests.
    // Consider adding a graceful shutdown mechanism.
    // await closeDatabaseConnection(); // Only call this when your app is truly shutting down
  } catch (error) {
    console.error("Application failed:", error);
    // Exit the process if the database connection fails at startup
    process.exit(1);
  }
}

// Call main to connect to the database and perform initial operations
main();

// Basic API endpoint
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the Node.js server!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

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
