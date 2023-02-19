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

//render home
app.get("/index", (req, res) => {
  res.render("index");
});

//render contact
app.get("/contact", (req, res) => {
  res.render("contact", { staff: staff });
});

//render company
app.get("/company", (req, res) => {
  res.render("company");
});

//render quotes template
app.get("/past", (req, res) => {
  res.render("past", { past: past }); // pass the staff array to the staff.ejs template
});

//render quotes template
app.get("/staff", (req, res) => {
  res.render("staff", { staff: staff }); // pass the staff array to the staff.ejs template
});

//get title names from links
const getTitle = (links) => {
  const titleArray = [];
  for (let i = 0; i < links.length; i++) {
    const inputString = links[i].title;
    const index = inputString.indexOf("|");
    if (index !== -1) {
      const outputString = inputString.substring(0, index - 1);
      titleArray.push(outputString);
    }
  }
  return titleArray;
};
const title = getTitle(links);
console.log(title)
// grab url information from links array
const getUrls = () =>{
const urlArray = []
for (i = 0; i < links.length; i++) {
  urlArray.push(links[i].url)
}
return urlArray
}

const urls = getUrls()
//render links template
app.get("/links", (req, res) => {
  res.render("links", { urls: urls, title: title }); // pass the staff array to the staff.ejs template
});


// =======================
//       LISTENER
// =======================
app.listen(3000, () => {
  console.log("Server started on port 3000");
});

console.log(__dirname);