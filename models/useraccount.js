"use strict";

const bookshelf = require("../config/database");

const Blog = bookshelf.Model.extend({
  tableName: "useraccount"
});

module.exports = Blog;
