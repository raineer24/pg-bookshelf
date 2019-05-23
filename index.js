#!/usr/bin/env node

"use strict";

var express = require("express");
var bodyParser = require("body-parser");

var blogRoute = require("./routes/blog");

var app = express();

var port = process.env.PORT || 3000;

const morgan = require("morgan");

app.use(morgan("combined"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 1000000
  })
);
app.use("/blog", blogRoute);

app.listen(port, function(err) {
  if (err) throw err;

  console.log("Blogs server listening on port %s.", port);
});
