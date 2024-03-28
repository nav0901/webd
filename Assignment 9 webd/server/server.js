const express = require("express");
const app = express();

const cors = require("cors");
const mongoose = require("mongoose");

const mainRoute = require("./routes/MainRoute");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/assignment8db");

app.use(mainRoute);

app.listen(8000, () => {
  console.log("Server started at port 8000");
});
