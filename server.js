const express = require("express");
const { v4: uuidv4 } = require("uuid");
const session = require("express-session");
const connectDB = require("./db");
const bodyParser = require("body-parser");

const app = express();
require("dotenv").config();

// Connecting to the Database
connectDB();

// Adding the middlewares to the server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: uuidv4(),
    saveUninitialized: false,
    resave: false,
  })
);

app.use("/css", express.static("css"));

// Storing the session message
app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});

// Setting up the Template Engine
app.set("view engine", "ejs");

app.use("/", require("./routes/routes"));

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
