const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

//* Connect Database
connectDB();

const PORT = process.env.PORT || 8000;
const URL = process.env.BASE_URL || "127.0.0.1";

app.listen(PORT, URL, () => {
  console.log(`Listening to http://${URL}:${PORT}`);
});
