//* Innehåller konfigurationen för att ansluta till MongoDB-databasen med Mongoose.

const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected 😀");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
