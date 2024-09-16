'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  app.get("/api/convert",(req,res)=>{
    let initUnit;
    let initNum;
    let unitAndNumErrorCount = 0;
    let errorMessage = "";
    try{
       initUnit = convertHandler.getUnit(req.query.input);
    }catch(error){
      errorMessage = error.message;
      unitAndNumErrorCount++;
    }

    try{
      initNum = convertHandler.getNum(req.query.input);
    }catch(error){
      errorMessage = error.message;
      unitAndNumErrorCount++;
    }
    if(unitAndNumErrorCount == 2){
      errorMessage = "invalid number and unit";
      res.json({error:errorMessage});
    }

    if(unitAndNumErrorCount != 0){
      res.json({error:errorMessage});
    }

    const returnNum = convertHandler.convert(initNum,initUnit);
      const returnUnit = convertHandler.getReturnUnit(initUnit);
      res.json({ initNum: initNum,
         initUnit: initUnit,
          returnNum: returnNum,
           returnUnit: returnUnit,
            string:  convertHandler.getString(initNum,initUnit,returnNum,returnUnit)});
   
  });
};


