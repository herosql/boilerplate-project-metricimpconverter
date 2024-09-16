const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  

  test('Convert', function(done){
    chai
    .request(server)
    .get('/api/convert?input=3.1mi')
    .end(function(err, res) {
      assert.equal(res.status, 200);
      assert.deepEqual(res.body, { initNum: 3.1, initUnit: 'mi', returnNum: 4.98895, returnUnit: 'km', string: '3.1 miles converts to 4.98895 kilometers' });
    });
    done();
  });

  test('Convert', function(done){
    chai
      .request(server)
      .get('/api/convert?input=1gal')
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, {
          "initNum": 1,
          "initUnit": "gal",
          "returnNum": 3.78541,
          "returnUnit": "L",
          "string": "1 gallon converts to 3.78541 liter"
      });
      });
      done();

  });

  test('Convert', function(done){
    chai
      .request(server)
      .get('/api/convert?input=1l')
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, {
          "initNum": 1,
          "initUnit": "L",
          "returnNum": 0.26417,
          "returnUnit": "gal",
          "string": "1 liter converts to 0.26417 gallon"
      });
      });
      done();

    });

  test('Convert', function(done){
    chai
    .request(server)
    .get('/api/convert?input=10lbs')
    .end(function(err, res) {
      assert.equal(res.status, 200);
      assert.deepEqual(res.body, {
        "initNum": 10,
        "initUnit": "lbs",
        "returnNum": 4.53592,
        "returnUnit": "kg",
        "string": "10 pounds converts to 4.53592 kilogram"
    });
    });
    done();

  });

  test('Convert', function(done){
    chai
    .request(server)
    .get('/api/convert?input=1min')
    .end(function(err, res) {
      assert.equal(res.status, 200);
      assert.deepEqual(res.body, {error:"invalid unit"});
    });
    done();
  });

});