exports.up = function(knex, Promise) {
  return knex.raw(`
    ALTER TABLE blogs 
RENAME COLUMN "createdAt" TO created_at;
ALTER TABLE blogs RENAME COLUMN "updatedAt" TO updated_at;
  `);
};

exports.down = function(knex, Promise) {
  return knex.raw(`
   ALTER TABLE "blogs"
ALTER TABLE blogs RENAME COLUMN "createdAt" TO created_at;
ALTER TABLE blogs RENAME COLUMN "updatedAt" TO updated_at;
  `);
};
