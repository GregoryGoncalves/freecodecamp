const chai_http = require('chai-http');
const chai = require('chai');
const server = require('../server');
const assert = chai.assert;
const expect = chai.expect;

chai.use(chai_http);

let books = [{title: 'The witcher: time of contempt', comment: 'Ciri a qtie', id: ''},
             {title: 'The second foundation', comment: 'The mule was right tho', id: ''}]

suite('Functional testing', () => {
    suite('Create a new book', () => { 
        for (let book of books){
            test('Create a book', (done) => {
                chai.request(server).post('/api/books').send({title: book.title}).end((request, response) => {
                    expect(response.body).to.have.property('title');
                    expect(response.body).to.have.property('_id');
                    assert.isString(response.body.title);
                    assert.deepEqual(response.body.title, book.title);  
                    book.id = response.body._id;   
                    done();                     
                });
            });
        }
    });
});