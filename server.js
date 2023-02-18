// =======================
//     DEPENDENCIES
// =======================
// -- packages
const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");

// middleware
app.use(express.static(__dirname + "/public"));


//add view engine and add views to path

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// -- database;
const past = require("./models/past");
const staff = require("./models/staff.js");

const links = require("./models/links.js");

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


//render quotes template
app.get("/staff", (req, res) => {
  res.render("staff", { staff: staff }); // pass the staff array to the staff.ejs template
});

//render quotes template
app.get("/links", (req, res) => {
  res.render("links", { links: links }); // pass the staff array to the staff.ejs template
});


// =======================
//       LISTENER
// =======================
app.listen(4000, () => {
  console.log("Server started on port 4000");
});

console.log(__dirname);