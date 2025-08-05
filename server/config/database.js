require("dotenv").config(); // Load environment variables from .env file

const { MongoClient } = require("mongodb");

// Use logical OR (||) for fallback.
// It's also common practice to use UPPER_SNAKE_CASE for environment variables.
const uri = process.env.MONGO_DB_URI;

// For debugging, you might want to log the URI, but be cautious in production
// console.log("MongoDB URI:", uri);

// Create a new MongoClient instance
const client = new MongoClient(uri);

/**
 * Connects to the MongoDB database.
 * @returns {Promise<Db>} The connected database instance.
 * @throws {Error} If the connection fails.
 */
async function connectToDatabase() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected successfully to MongoDB!");

    // Access your database
    const db = client.db("carRentalservice");
    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    // Re-throw the error so calling code can handle it
    throw error;
  }
}

/**
 * Closes the MongoDB client connection.
 */
async function closeDatabaseConnection() {
  try {
    await client.close();
    console.log("MongoDB connection closed.");
  } catch (error) {
    console.error("Error closing MongoDB connection:", error);
  }
}

// Export the connection function and optionally the client/close function
module.exports = {
  connectToDatabase,
  client, // Export client if you need direct access to it elsewhere
  closeDatabaseConnection, // Export close function for graceful shutdown
};
