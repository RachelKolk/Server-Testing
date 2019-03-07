const express = require('express');

const books = require('../books/booksModel.js');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({api : 'up'});
});




server.post('/books', async (req, res) => {
    try {
        const post = await books.insert(req.body);
        res.status(200).json(post);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Error adding book to database'});
    }
});

module.exports = server;