const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const knex = require("knex");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(intialPath, "index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(intialPath, "loginindex.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(intialPath, "register.html"));
});

app.listen(3000, (req, res) => {
  console.log("listening on port 3000......");
});
