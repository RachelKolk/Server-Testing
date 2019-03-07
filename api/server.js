const express = require('express');

const Books = require('../books/booksModel.js');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({api : 'up'});
});


server.post('/books', async (req, res) => {
    try {
        const post = await Books.insert(req.body);
        res.status(200).json(post);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Error adding book to database'});
    }
});

server.delete('/:id', async (req, res) => {
    try {
        const deleteCount = await Books.remove(req.params.id);
        if(deleteCount > 0) {
            res.status(200).json({message: "The book has been deleted from our records"});
        } else {
            res.status(404).json({message: "That book could not be found"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "An error occurred"})
    }
});

module.exports = server;