
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', tbl => {
      tbl.increments();

      tbl.string('title', 255)
        .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('books');
};
