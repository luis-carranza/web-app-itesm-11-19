require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: "secret", resave: false, saveUninitialized: true }));
app.use((req, res, next) => {
  res.locals.user = req.session.user;
  res.locals.message = req.session.message;
  delete req.session.message;
  delete req.session.user;
  next();
});

// set the template engine .
app.set("view engine", "ejs");

// Create routes prefix
app.use("", require("./routes/routes"));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
