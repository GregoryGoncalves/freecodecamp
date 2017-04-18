const chai = require('chai');
const assert = chai.assert;
let converter = require('../controllers/converter');

converter = new converter();

suite('Unit testing', () => {
  
  suite('Sanitization', () => {
    test('Validate input', (done) => {
      assert.equal(converter.validateInput('1gal'), true);
      assert.equal(converter.validateInput('gal1'),true);
      assert.equal(converter.validateInput('gal'), false);
      assert.equal(converter.validateInput('1'), false);
      assert.equal(converter.validateInput('-1'), false);
      assert.equal(converter.validateInput(1), false);
      done();
    });
  });

  suite('Input processing', () => {
    test('Expected data types', (done) => {
      // assert.typeOf(converter.processInput('1gal'), 'object');
      // assert.typeOf(converter.processInput('1gal').value, 'number');
      // assert.typeOf(converter.processInput('1gal').type, 'string');
      done();
    });
    
    test('Expected object values', (done) => {
      // assert.deepEqual(converter.processInput('1gal'), {value: 1, type: 'gal'});
      // assert.deepEqual(converter.processInput('1lbs'), {value: 1, type: 'lbs'});
      // assert.deepEqual(converter.processInput('1mi'),  {value: 1, type: 'mi'});
      // assert.deepEqual(converter.processInput('1l'),   {value: 1, type: 'l'});
      // assert.deepEqual(converter.processInput('1kg'),  {value: 1, type: 'kg'});
      // assert.deepEqual(converter.processInput('1km'),  {value: 1, type: 'km'});
      done();
    }); 
    
    test('Expected invalid inputs', (done) => {
      // assert.deepEqual(converter.processInput('x'),   converter.input_format_error);
      // assert.deepEqual(converter.processInput('1'),   converter.input_format_error);
      // assert.deepEqual(converter.processInput('km'),  converter.input_format_error);
      // assert.deepEqual(converter.processInput('km5'), converter.input_format_error);
      done();
    });
  });
});