"use strict";

const express = require("express");
const bcrypt = require("bcrypt");
const Blog = require("../models/useraccount");
const router = express.Router();

router.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err
      });
    } else {
      const user = new Blog({
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
          console.log(result);
          res.status(201).json({
            message: "User Created"
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error: err
          });
        });
    }
  });
});

module.exports = router;
