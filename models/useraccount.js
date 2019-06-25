"use strict";

const bookshelf = require("../config/database");

const User = bookshelf.Model.extend({
  tableName: "useraccount"
});

module.exports = User;
