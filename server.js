// =======================
//     DEPENDENCIES
// =======================
// -- packages
const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");

//add view engine and add views to path

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// -- database;
const past = require("./models/past");
const staff = require("./models/staff");

const links = require("./models/links");

// =======================
//       ROUTES
// =======================
// get root index
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

//render contact
app.get("/contact", (req, res) => {
  res.render("contact");
});


// =======================
//       LISTENER
// =======================
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
