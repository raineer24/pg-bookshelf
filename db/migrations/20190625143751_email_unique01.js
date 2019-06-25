exports.up = function(knex, Promise) {
  return knex.raw(`
    ALTER TABLE useraccount 
DROP COLUMN email;

  `);
};

exports.down = function(knex, Promise) {
  return knex.raw(`
   ALTER TABLE "useraccount"
ALTER TABLE blogs DROP COLUMN email;

  `);
};
