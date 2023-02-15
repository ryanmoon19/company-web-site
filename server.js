const express = require("express");
const app = express();


const home = require("./models/home");
const history = require("./models/history");
const past = require("./models/past");
const staff = require("./models/staff");
const contact = require("./models/contact");
const links = require("./models/links");

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

