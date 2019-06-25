exports.up = function(knex, Promise) {
  return knex.raw(`
    ALTER TABLE useraccount 
ADD COLUMN email VARCHAR DEFAULT NULL UNIQUE;

  `);
};

exports.down = function(knex, Promise) {
  return knex.raw(`
   ALTER TABLE "useraccount"
ADD COLUMN email VARCHAR DEFAULT NULL UNIQUE;

  `);
};
