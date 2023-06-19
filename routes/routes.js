// For writing all the routes of the particular application
const express = require("express");
const router = express.Router();
const Info = require("../models/info");

router.post("/add", (req, res) => {
  const info = new Info({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    dateofbirth: req.body.dateofbirth,
    gender: req.body.gender,
    telephone: req.body.telephone,
    email: req.body.email,
  });
  console.log(info);
  info.save((err) => {
    if (err) {
      res.json({ message: err.message, type: "danger" });
    } else {
      req.session.message = {
        type: "success",
        message: "New data is inserted",
      };
      res.redirect("/");
    }
  });
});

// Delete Account
router.get("/delete/:id", (req, res) => {
  let id = req.params.id;
  Info.findByIdAndRemove(id, (err, result) => {
    if (err) {
      res.json({ message: err.message });
    } else {
      req.session.message = {
        type: "success",
        message: "Data Deleted Successfully",
      };
      res.redirect("/");
    }
  });
});

// // Get all accounts to the Holders page
router.get("/", (req, res) => {
  Info.find().exec((err, info) => {
    if (err) {
      res.json({ message: err.message });
    } else {
      res.render("Dashboard", {
        info: info,
      });
    }
  });
});

router.get("/", (req, res) => {
  res.render("DashBoard");
});

router.get("/add", (req, res) => {
  res.render("Form");
});

module.exports = router;
