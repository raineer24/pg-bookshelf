exports.up = function(knex, Promise) {
  return knex.raw(`
    ALTER TABLE blogs 
DROP COLUMN created_at;
ALTER TABLE blogs DROP COLUMN updated_at;
  `);
};

exports.down = function(knex, Promise) {
  return knex.raw(`
   ALTER TABLE "blogs"
ALTER TABLE blogs DROP COLUMN created_at;
ALTER TABLE blogs DROP COLUMN updated_at;
  `);
};
