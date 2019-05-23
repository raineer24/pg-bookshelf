#!/usr/bin/env node

"use strict";

var express = require("express");
var bodyParser = require("body-parser");

var blogRoute = require("./routes/blog");

var app = express();

var port = process.env.PORT || 3000;

const morgan = require("morgan");

app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/blog", blogRoute);

app.listen(port, function(err) {
  if (err) throw err;

  console.log("Blogs server listening on port %s.", port);
});
