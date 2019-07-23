"use strict";

const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/useraccount");
const router = express.Router();
const knex = require("../config/database");

function isValidId(req, res, next) {
  if (!isNaN(req.params.id)) return next();
  next(new Error("Invalid ID"));
}

// function validateEmail(email) {
//   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function findUser(email) {
  return knex.knex
    .raw("SELECT * FROM useraccount WHERE email = ?", [email])
    .then(data => {
      if (data.rows < 1) {
      }
    });
}

router.post("/signup", (req, res, next) => {
  console.log(req.body);
  if (validateEmail(req.body.email)) {
    //insert into db
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        return res.status(500).json({
          error: err
        });
      } else {
        const user = new User({
          username: req.body.username,
          email: req.body.email,
          password: hash,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          uiid: req.body.uiid,
          gender: req.body.gender,
          mobile_number: req.body.mobile_number,
          birth_date: req.body.birth_date,
          deactivated: req.body.deactivated,
          forced_reset: req.body.forced_reset,
          created_at: req.body.created_at,
          updated_at: req.body.updated_at
        });
        user
          .save()
          .then(result => {
            console.log(result.toJSON());
            res.status(201).json({
              message: "User Created"
            });
          })
          .catch(err => {
            if (err.routine === "_bt_check_unique") {
              return res.status(400).send({
                message: "User with that EMAIL already exist"
              });
            }
            return res.status(400).send(error);
          });
      }
    });
  } else {
    next(new Error("Invalid Email add"));
  }
});

router.get("/viewUsers", function(req, res) {
  new User()
    .fetchAll()
    .then(function(users) {
      res.send(users.toJSON());
    })
    .catch(function(error) {
      console.log(error);
      res.send("An error occured");
    });
});

router.post("/login", function(req, res) {
  const userReq = req.body.email;
  let user;
  // User.where({ email: req.body.email })
  //   .fetch()
  //   .then(user => {
  //     console.log(knex);

  //     //res.json(user.toJSON());
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(500).json({
  //       error: err
  //     });
  //   });

  // findUser(req.body.email)
  //   .then(user => {
  //     console.log("user", user);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(500).json({
  //       error: err
  //     });
  //   });

  User.findUs(req.body.email)
    .then(user => {
      // if (user.rows.length < 1) {
      //   return res.status(401).json({
      //     message: "Auth failed"
      //   });
      // }
      console.log("user", user);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
