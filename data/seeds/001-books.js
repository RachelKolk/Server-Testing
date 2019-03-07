
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {id: 1, title: 'American Gods'},
        {id: 2, title: 'Season of Storms'},
        {id: 3, title: 'The Winter People'}
      ]);
    });
};
