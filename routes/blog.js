"use strict";

var express = require("express");

var Blog = require("../models/blog");

var router = express.Router();

router
  .route("/")
  .get(function(req, res) {
    Blog.where(req.query)
      .fetchAll()
      .then(function(blogs) {
        res.json({ blogs });
      });
  })
  .post(function(req, res) {
    new Blog({
      title: req.body.title,
      content: req.body.content
      //emailAddress: req.body.emailAddress
    })
      .save()
      .then(function(saved) {
        res.json({ saved });
      });
  });

router
  .route("/:id")
  .get(function(req, res) {
    Blog.where("id", req.body.id).then(function(blog) {
      res.json({ blog });
    });
  })
  .put(function(req, res) {
    Blog.where("id", req.params.id)
      .fetch()
      .then(function(blog) {
        blog
          .save({
            title: req.body.title,
            content: req.body.content
            //emailAddress: req.body.emailAddress
          })
          .then(function(saved) {
            res.json({ saved });
          });
      });
  });
delete function(req, res) {
  Blog.where("id", req.params.id)
    .destroy()
    .then(function(destroyed) {
      res.json({ destroyed });
    });
};

module.exports = router;
