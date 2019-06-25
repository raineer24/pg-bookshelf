exports.up = function(knex, Promise) {
  return Promise.resolve().then(() =>
    knex.schema.createTable("blogs", table => {
      table.increments("id").primary();
      table.text("title");
      table.text("content");
      table.text("image_url");
      table.datetime("createdAt");
      table.datetime("updatedAt");
    })
  );
};

exports.down = function(knex, Promise) {
  return Promise.resolve().then(() => knex.schema.dropTable("blogs"));
};
