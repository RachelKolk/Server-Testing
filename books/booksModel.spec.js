const request = require('supertest');

const db = require('../data/dbConfig.js');
const Books = require('./booksModel.js');

describe('books model', () => {
    
    describe('insert()', () => {
        it('should insert the title into the books database/ create a new entry', async () => {
            let book = await Books.insert({title: 'The Witches'});
            expect(book.title).toBe('The Witches');
        });
    });
})