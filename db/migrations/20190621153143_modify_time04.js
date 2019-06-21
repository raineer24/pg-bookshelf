exports.up = function(knex, Promise) {
  return knex.raw(`
    ALTER TABLE blogs 
ADD created_at TIMESTAMPTZ;
ALTER TABLE blogs ADD updated_at TIMESTAMPTZ;
  `);
};

exports.down = function(knex, Promise) {
  return knex.raw(`
   ALTER TABLE "blogs"
ALTER TABLE blogs ADD created_at TIMESTAMPTZ;
ALTER TABLE blogs ADD updated_at TIMESTAMPTZ;
  `);
};
