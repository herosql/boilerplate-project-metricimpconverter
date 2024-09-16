const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');
let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
   
  test('getNum',function(done){
    let input = "4gal";
    assert.equal(convertHandler.getNum(input),4);


  input = "5.4/3lbs";
  assert.equal(convertHandler.getNum(input),1.8);

  input = "kg";
  assert.equal(convertHandler.getNum(input),1);

  input = "1l";
  assert.equal(convertHandler.getNum(input),1);

  input = "1min";
  assert.equal(convertHandler.getNum(input),1);
    done();
  });

 
test('getNum Unit Tests', function(done){
    let input = "1/2km";
    assert.equal(convertHandler.getNum(input),0.5);
    done();

 });
 

test('getNum Unit Tests', function(done){
   let input = "l";
  assert.equal(convertHandler.getNum(input),1);
  done();

});

test('getNum Unit Tests', function(done){
   let input = "1//2min";
 assert.throws(()=>{
    convertHandler.getNum(input)
 },"invalid number");

 done();

});

test('getNum Unit Tests', function(done){
    let input = "5.4lbs";
    assert.equal(convertHandler.getNum(input),5.4);
    done();

});


test('getUnit Unit Tests', function(done){
    let input = "4gal";
    assert.equal(convertHandler.getUnit(input),"gal");
  
    input = "1/2km";
    assert.equal(convertHandler.getUnit(input),"km");
  
    input = "5.4/3lbs";
    assert.equal(convertHandler.getUnit(input),"lbs");
  
    input = "kg";
    assert.equal(convertHandler.getUnit(input),"kg");

    input = "3mi";
    assert.equal(convertHandler.getUnit(input),"mi");

    done();
  
 
  });

   test('getUnit Unit Tests', function(done){

   let input = "1min";
    assert.throws(()=>{convertHandler.getUnit(input)},'invalid unit');
  
    done();

});

test('getUnit Unit Tests', function(done){
     let input = "4l";
     assert.equal(convertHandler.getUnit(input),"L");
 
     done();

    });

test('getReturnUnit Unit Tests', function(done){
    let inputUnit = "gal";
    assert.equal(convertHandler.getReturnUnit(inputUnit),"L");
  
    inputUnit = "km";
    assert.equal(convertHandler.getReturnUnit(inputUnit),"mi");
  
    inputUnit = "lbs";
    assert.equal(convertHandler.getReturnUnit(inputUnit),"kg");
  
    inputUnit = "kg";
    assert.equal(convertHandler.getReturnUnit(inputUnit),"lbs");

    done();

});

test('getReturnUnit Unit Tests', function(done){
    let inputUnit = "L";
    assert.equal(convertHandler.getReturnUnit(inputUnit),"gal");
    done();

});

test('getReturnUnit Unit Tests', function(done){
    let inputUnit = "mi";
    assert.equal(convertHandler.getReturnUnit(inputUnit),"km");
    done();
 
});

test('spellOutUnit Unit Tests', function(done){
    let inputUnit = "gal";
    assert.equal(convertHandler.spellOutUnit(inputUnit),"gallon");
  
    inputUnit = "km";
    assert.equal(convertHandler.spellOutUnit(inputUnit),"kilometers");
  
    inputUnit = "lbs";
    assert.equal(convertHandler.spellOutUnit(inputUnit),"pounds");
  
    inputUnit = "kg";
    assert.equal(convertHandler.spellOutUnit(inputUnit),"kilogram");

    done();
  
   });

test('spellOutUnit Unit Tests', function(done){
    let inputUnit = "mi";
    assert.equal(convertHandler.spellOutUnit(inputUnit),"miles");
    done();

});


test('spellOutUnit Unit Tests', function(done){
    let inputUnit = "L";
    assert.equal(convertHandler.spellOutUnit(inputUnit),"liter");
    done();

});


test('convert Unit Tests', function(done){

    let inputUnit = "gal";
    let inputNum = 4;
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    assert.equal(convertHandler.convert(inputNum,inputUnit),(inputNum*galToL).toFixed(5));
  
    inputUnit = "km";
    assert.equal(convertHandler.convert(inputNum,inputUnit),(inputNum/miToKm).toFixed(5));
  
    inputUnit = "lbs";
    assert.equal(convertHandler.convert(inputNum,inputUnit),(inputNum*lbsToKg).toFixed(5));
  
    inputUnit = "kg";
    assert.equal(convertHandler.convert(inputNum,inputUnit),(inputNum/lbsToKg).toFixed(5));

    inputUnit = "mi";
    assert.equal(convertHandler.convert(inputNum,inputUnit),(inputNum*miToKm).toFixed(5));

    inputUnit = "L";
    assert.equal(convertHandler.convert(inputNum,inputUnit),(inputNum/galToL).toFixed(5));
    done();

});

test('getString Unit Tests', function(done){
    let inputUnit = "mi";
    let inputNum = 3.1;
    let returnNum = 4.98895;
    let returnUnit = "km";
    assert.equal(convertHandler.getString(inputNum,inputUnit,returnNum,returnUnit),"3.1 miles converts to 4.98895 kilometers");
    done();

});
});

