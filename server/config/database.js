require("dotenv").config();
const mongoose = require("mongoose");

const uri = process.env.Mongo_db_uri;

// Event listeners for connection monitoring
mongoose.connection.on("connected", () => {
  console.log("✅ Mongoose connected to DB");
  console.log("Connected to database:", mongoose.connection.name);
});
mongoose.connection.on("error", (err) =>
  console.error("❌ Mongoose connection error:", err)
);
mongoose.connection.on("disconnected", () =>
  console.log("ℹ️ Mongoose disconnected")
);

async function connectToDatabase() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // 30 seconds timeout
      socketTimeoutMS: 45000, // 45 seconds socket timeout
    });
    console.log("✅ Database connection established");
    return mongoose.connection;
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    throw error;
  }
}

async function closeDatabaseConnection() {
  try {
    await mongoose.disconnect();
    console.log("✅ Database connection closed");
  } catch (error) {
    console.error("❌ Error closing database connection:", error);
  }
}

module.exports = { connectToDatabase, closeDatabaseConnection };
