const express = require('express');
const server = express();
const root = process.cwd();
const helmet = require('helmet');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const issue = require('./controllers/issue');

mongoose.connect("mongodb://localhost:27017/issuetracker");

server.use(helmet());
server.use('/public', express.static(root + '/public'));
server.use(body_parser.json());
server.use(body_parser.urlencoded({ extended: true }));

server.get('/', (request, response) => {
    response.render(root + '/views/index.ejs');
});

server.post('/api/issues/:project', issue.create);
server.put('/api/issues/:project', issue.update);
server.get('/api/issues/:project', issue.fetch);
server.delete('/api/issues/:project', issue.remove);



server.get('*', (request, response) => {
    response.send('<p>Bad, bad user. No donuts for you.</p>');
});

server.listen(process.env.PORT || 3000, () => {
    console.log("Listening");
});

module.exports = server;