const config = require("../config/auth.config");
const db = require("../models");
const PrizeList = db.prizeList
var ObjectId = require('mongodb').ObjectID;
var jwt = require("jsonwebtoken");

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.createList = (req, res) => {
  console.log(ObjectId(req.userId));
  const prizeList = new PrizeList({
    listName: req.body.listName,
    prize: [],
    users: [ObjectId(req.userId)]
  });
  prizeList.save(err => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send({ message: "User was registered successfully!" });
  });
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};