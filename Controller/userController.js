const userModel = require("../models/userModel");
const registerUser = async function (req, res) {
    try{
//==validating request body==//
     let requestBody = req.body
     if (!isValidRequestBody(requestBody)) return res.status(400).send({ status: false, msg: "Invalid request, please provide details" })
     let { name,email,phone } = requestBody

//==validating first name==//
    if (!isValid(name)) return res.status(400).send({ status: false, msg: "Name is a mandatory field" })
    if (!isValidName(name)) return res.status(400).send({ status: false, msg: "Name must contain only alphabates" })
//==validating email==//
if (!isValid(email)) return res.status(400).send({ status: false, msg: "email is a mandatory field" })
if (!isValidEmail(email)) return res.status(400).send({ status: false, msg: `${email} is not valid` })
let isUniqueEmail = await userModel.findOne({ email: email })
if (isUniqueEmail) return res.status(400).send({ status: false, msg: `${email} is already exist` })

//==validating phone==//        
if (!isValid(phone)) return res.status(400).send({ status: false, msg: "Phone number is a mandatory field" })
if (!isValidMobile(phone)) return res.status(400).send({ status: false, msg: `${phone} number is not a valid` })
let isUniquePhone = await userModel.findOne({ phone: phone })
if (isUniquePhone) return res.status(400).send({ status: false, msg: `${phone} number is already exist` })

userData = { name,email,phone,password };
const saveUser = await userModel.create( userData)
return res.status(201).send({ status: true, message: "User profile details", data: saveUser })
}catch (err) {
    return res.status(500).send({ status: false, error: err.message })
}

}
module.exports={registerUser};