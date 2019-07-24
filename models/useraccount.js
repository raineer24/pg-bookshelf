"use strict";

const bookshelf = require("../config/database");

const User = bookshelf.Model.extend(
  {
    tableName: "useraccount",
    returnFullName: function() {
      return this.get("firstname") + this.get("lastname");
    }
    // findUs: function(email) {
    //   return bookshelf.knex
    //     .raw("SELECT * FROM useraccount WHERE email = ?", [email])
    //     .then(data => {
    //       if (data.rows < 1) {
    //       }
    //     });
    // }
  },
  {
    findUs: function(email) {
      return bookshelf.knex
        .raw("SELECT * FROM useraccount WHERE email = ?", [email])
        .then(data => {
          data.rows[0];
          //console.log(data.rows[0]);
        });
    }
  }
);

module.exports = User;
