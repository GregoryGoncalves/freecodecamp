const express = require('express');
const helmet = require('helmet');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const server = express();
const root = process.cwd();
const api_root = '/api/books/';
const library = require('./controllers/book/index');
const comments = require('./controllers/comment/create');

mongoose.connect("mongodb://localhost:27017/personallibrary");
/*
    security
    POST to /api/books, return title and id
    GET api/books return title, id and comment count
    GET api/books/:title return book, id, array of comments
    POST api/books/:title to add a comment, return title, id and comment count
    DELETE /api/books/:title, return 'delete successful'
*/
server.use(helmet());
server.use('/public', express.static(root + '/public'));
server.use(body_parser.json());
server.use(body_parser.urlencoded( {extended: true} ));

server.get('/', (request, response) => {
    response.render(root + '/views/index.ejs');
});

server.post(api_root, library.create);
//server.post(api_root+':title', comments.create);
//server.put(api_root+':title', library.update);
//server.get(api_root, library.fetch);
//server.get(api_root+':title', TO.do);
//server.delete(api_root+':title', library.delete);

server.get('*', (request, response) => {
    response.send('<p>Bad, bad user. No donuts for you.</p>');
});

server.listen(process.env.PORT || 3000, () => {
    console.log("Listening");
});

module.exports = server; // for testing
