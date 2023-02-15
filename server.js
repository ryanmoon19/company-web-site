// =======================
//     DEPENDENCIES
// =======================
// -- packages
const express = require("express");
const app = express();


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

// get contacts page
app.get("/contact", (req, res) => {
	res.render("contact.ejs")
});


// =======================
//       LISTENER
// =======================
app.listen(3000, () => {
  console.log("Server started on port 3000");
});

