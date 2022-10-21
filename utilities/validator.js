const ObjectId = require("mongoose").Types.ObjectId


//**********************************************************************//

//==Request Body Validation
let isValidRequestBody = function (body) {
    if (Object.keys(body).length === 0) return false;
    return true;
}
//**********************************************************************//

//==Mandatory Field Validation
let isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false;
    if (typeof value === 'string' && value.trim().length === 0) return false;
    return true;
}
//**********************************************************************//

//==ObjectId Validation
let isValidObjectId = function (objectId) {
    if (!ObjectId.isValid(objectId)) return false;
    return true;
}
//**********************************************************************//

//==Email Validation
let isValidEmail = function (email) {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return emailRegex.test(email)
}
//**********************************************************************//

//==Mobile Number Validation
let isValidMobile = function (phone) {
    let mobileRegex =/^[6-9]\d{9}$/;
    return mobileRegex.test(phone);  //^\d{10}$/
}
//**********************************************************************//
//==Name Validation
let isValidName=function(name){
    let nameRegex=/^[A-Za-z\s]{1,}[A-Za-z\s]{0,}$/;
    return nameRegex.test(name);
    }
 //**********************************************************************//
    
//*******************************************************************//

//==Price Validation
let isValidamount=function(amount){
    let priceRegex=/^(\d+(\.\d+)?)$/;
    return priceRegex.test(amount);
    }
//^\d+(?:\.\d{1,4})?$/
//*******************************************************************//

//*******************************************************************//

//==Number Validation
const isValidNum = (number) => {
    if (/^\d+$/.test(number)) {
      return true
    } else {
      return false;
    };
  };
//************************************************************************ */
  const isValidSize = (Size) => {
    let correctSize = ["Small","Medium","Large"]
    return (correctSize.includes(Size))
  }
  

    module.exports = {  isValidSize, isValidRequestBody,isValidNum, isValid, isValidObjectId, isValidEmail, isValidMobile, isValidName, isValidamount }

//*****************************************************************//
