var express = require('express');
var router = express.Router();
var usersModel = require('../models/users')

module.exports = {
  postNewMember: function (req, res) {
    usersModel
      // .create({ name: 'david', author: 'kezi' })
      .create({
        name: req.body.name,
        author: req.body.author
      })
      .then(data => {
        console.log(data)
        return res.send(data)
      })
      .catch(err => {
        res.status(500).send(err.message);
      });
  },
  showAllMembers: function (req, res) {
    usersModel.find({})
      .then((data) => {
        console.log(data)
        return res.status(200).json(data)
      })
      .catch(err => res.status(500).send(err.message));
  },
  showSingleMember: function (req, res) {
    usersModel.find({ _id: req.params.id })
      .then((data) => {
        console.log(data)
        return res.status(200).json(data)
      })
      .catch(err => res.status(500).send(err.message));
  },

}