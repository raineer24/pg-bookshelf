"use strict";

var express = require("express");
var bodyParser = require("body-parser");

var contactRoute = require("./routes/contact");

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/contact", contactRoute);

app.listen(port, function(err) {
  if (err) throw err;

  console.log("Contacts server listening on port %s.", port);
});
