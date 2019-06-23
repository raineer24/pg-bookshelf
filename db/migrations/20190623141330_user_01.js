exports.up = function(knex, Promise) {
  return Promise.resolve().then(() =>
    knex.schema.createTable("useraccount", table => {
      table
        .increments("id")
        .primary()
        .notNullable();
      table.text("username").notNullable();
      table.text("password").notNullable();
      table
        .text("email")
        .defaultTo("")
        .nullable();
      table.text("first_name").notNullable();
      table.text("last_name").notNullable();
      table
        .text("uiid")
        .defaultTo("")
        .nullable();
      table
        .text("gender")
        .defaultTo("")
        .nullable();
      table
        .text("mobile_number")
        .defaultTo("")
        .nullable();
      table.date("birth_date").nullable();
      table.string("deactivated", 1).defaultTo("0");
      table.string("forced_reset", 1).defaultTo("0");
      table.datetime("created_at").notNullable();
      table.datetime("updated_at").notNullable();
    })
  );
};

exports.down = function(knex, Promise) {
  return Promise.resolve().then(() => knex.schema.dropTable("useraccount"));
};
