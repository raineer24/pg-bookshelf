exports.up = function(knex, Promise) {
  return knex.raw(`
    ALTER TABLE blogs 
ADD created_at bigint;
ALTER TABLE blogs ADD updated_at bigint;
  `);
};

exports.down = function(knex, Promise) {
  return knex.raw(`
   ALTER TABLE "blogs"
ALTER TABLE blogs ADD created_at bigint;
ALTER TABLE blogs ADD updated_at bigint;
  `);
};
