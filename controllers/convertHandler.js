function ConvertHandler() {
  // l应该返回为L
  // 解析数字错误，抛异常，invalid number
  // 解析单位和数字均错误，抛异常，invalid number and unit
  // 没有提供数字，默认为1，可以解析分数和小数的数字
  // 16个单元测试
  // 5个功能测试
this.getNum = function(input) {
  let result;
  if(input.split('/').length - 1 >= 1){
      let unit = input.match(/[a-zA-Z]+/);
      result = input.substring(0, unit.index);
      result = Number(result.substring(0, result.indexOf("/"))) / Number(result.substring(result.indexOf("/") + 1));
      if(isNaN(result)){
        throw new Error("invalid number");
      }
  }else{
    let nums = input.match(/(\d+\.\d+|\d+)/);
    if(nums){
      result = Number(nums[0]);
    }else{
      result = 1;
    }
  }

  return result;
  
};

this.getUnit = function(input) {
  let result;
  let unit = input.match(/[a-zA-Z]+/);
  result = input.substring(unit.index);
  switch(result.toLocaleLowerCase()){
    case "mi":
      result = "mi";
    break;
    case "lbs":
      result = "lbs";
    break;
    case "gal":
      result = "gal";
    break;
    case "km":
      result = "km";
    break;
    case "kg":
      result = "kg";
    break;
    case "l":
      result = "L";
    break;
    default:
      throw new Error("invalid unit");
      break;
  }
  return result;
};

this.getReturnUnit = function(initUnit) {
  let result;
  switch(initUnit){
    case "mi":
      result = "km";
    break;
    case "gal":
      result = "L";
    break;
    case "lbs":
    result = "kg";
    break;
    case "km":
      result = "mi";
    break;
    case "L":
      result = "gal";
    break;
    case "kg":
    result = "lbs";
    break;
  }
  return result;
};

this.spellOutUnit = function(unit) {
  let result;
  switch(unit){
    case "km":
      result = "kilometers";
      break;
    case "kg":
      result = "kilogram";
      break;
    case "L":
      result = "liter";
      break;
    case "mi":
      result = "miles";
      break;
    case "lbs":
      result = "pounds";
      break;
    case "gal":
      result = "gallon";
      break;
  }
  return result;
};

this.convert = function(initNum, initUnit) {
  const galToL = 3.78541;
  const lbsToKg = 0.453592;
  const miToKm = 1.60934;
  let result;
  switch(initUnit){
    case "mi":
      result = initNum * miToKm;
    break;
    case "lbs":
      result = initNum * lbsToKg;
    break;
    case "gal":
      result = initNum * galToL;
    break;
    case "km":
      result = initNum / miToKm;
    break;
    case "L":
      result = initNum / galToL ;
    break;
    case "kg":
      result = initNum / lbsToKg;
    break;
  }
  return Number(result.toFixed(5));
};

this.getString = function(initNum, initUnit, returnNum, returnUnit) {
  let result;
  let initUnitFullName = this.spellOutUnit(initUnit);
  let returnUnitFullName = this.spellOutUnit(returnUnit);
  result = `${initNum} ${initUnitFullName} converts to ${returnNum} ${returnUnitFullName}`;
  return result;
};

}

module.exports = ConvertHandler;
