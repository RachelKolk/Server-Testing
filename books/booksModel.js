const db = require('../data/dbConfig.js');

module.exports = {
    insert,
    remove,
    getAll,
};

async function insert(book) {
    const [id] = await db('books').insert(book);

    return db('books')
      .where({id})
      .first();
}

function remove(id) {
    return db('books')
      .where('id', id)
      .del();
}

function getAll() {
    return db('books');
}