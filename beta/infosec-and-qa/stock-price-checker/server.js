/* 
    Author: Selhar
    Date: 2017
    Contact: selhar@protonmail.com
    License: GPL
*/

const express = require('express');
const helmet = require('helmet');
const body_parser = require('body-parser');
const server = express();
const root = process.cwd();
const api_root = '/api/stock-prices/';
const mongoose = require('mongoose');
const index = require('./controllers/index');

server.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'", 'maxcdn.bootstrapcdn.com'],
        styleSrc: ["'self'", 'maxcdn.bootstrapcdn.com']
    }
}));

mongoose.connect('mongodb://localhost:27017/stock-prices');

server.use('/public', express.static(root + '/public'));
server.use(body_parser.json());
server.use(body_parser.urlencoded( {extended: true} ));

server.get('/', (request, response) => {
    response.render(root + '/views/index.ejs');
});

server.get(api_root, index.fetch);

server.get('*', (request, response) => {
    response.send('<p>Bad, bad user. No donuts for you.</p>');
});

server.listen(process.env.PORT || 3000, () => {
    console.log("Listening");
});

module.exports = server; // for testing
