const express = require('express');

const server = express();

const books = require('../books/booksModel.js');

server.use(express.json());

module.exports = server;