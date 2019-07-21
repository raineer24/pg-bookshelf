"use strict";

const bookshelf = require("../config/database");

const User = bookshelf.Model.extend(
  {
    tableName: "useraccount"
  },
  {
    byEmail: function(email) {
      return this.forge()
        .query({ where: { email: email } })
        .fetch();
    }
  },
  {
    findUser: function(email) {
      return bookshelf.knex
        .raw("SELECT * FROM useraccount WHERE email = ?", [userReq.email])
        .then(data => data.rows[0]);
    }
  }
);

module.exports = User;
