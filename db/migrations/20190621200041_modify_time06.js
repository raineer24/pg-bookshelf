exports.up = function(knex, Promise) {
  return knex.raw(`
    ALTER TABLE blogs 
ADD created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE blogs ADD updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP;
  `);
};

exports.down = function(knex, Promise) {
  return knex.raw(`
   ALTER TABLE "blogs"
ALTER TABLE blogs ADD created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE blogs ADD updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP;
  `);
};
