const express = require('express')
const router = express.Router()
const { registerUser } = require("../Controller/userController")
const{createProduct,updateProduct,deleteProduct}=("../Controller/productController")


router.post('/register', registerUser)
router.post('/products',createProduct)
router.put('/update',updateProduct)
router.delete('/deletes',deleteProduct)
 
module.exports=router