const db = require('../data/dbConfig.js');

module.exports = {
    insert,
};

async function insert(book) {
    const [id] = await db('books').insert(book);

    return db('books')
      .where({id})
      .first();
}