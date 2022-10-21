const productModel=require("../Models/productModel")

// ////create product of color and size

const{  isValidRequestBody}=require("../utilities/validator")


const createProduct = async (req, res) => {
    try {
        //==validating request body==//
        let data = req.body;
        let{color,Size}=req.body
        if (!isValidRequestBody(data))  return res.status(400).send({ status: false, message: 'No data provided' })

    
        
        //==validating Size==//
       if (!(isValid(data.Size))) return res.status(400).send({ status: false, message: "Please provide available size for your product1" })

        if (data.Size.toLowerCase().trim().split(',').map(value => isValidSize(value)).filter(item => item == false).length !== 0)  
          return res.status(400).send({ status: false, message: 'Size should be among ["Small","Medium","Large"] ' })
    
 
        
         
        
        
         
        const userData = { color,Size };
        const saveUser = await poductModel.create( userData)
        return res.status(201).send({ status: true, message: "product of color and size created", data: saveUser })
     } catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }
}

//*******************************************************************//
const updateProduct=async(req,res)=>{
    try{
        const productId = req.params.productId
        let updateData = req.body

        //==validating productId==//
        if (!isValidObjectId(productId)) return res.status(400).send({ status: false, msg: "invalid user Id" })

        //==finding product by productId==//
        let findProductId = await productModel.findById({ _id: productId, isDeleted: false })
        if (!findProductId) return res.status(404).send({ status: false, msg: "Product not found" })

        //==validating request body==//
        if (!isValidRequestBody(updateData)) return res.status(400).send({ status: false, msg: "please provide data to update" })
        let { color,Size} = updateData
         
    

    if(color == "") { return res.status(400).send({ status: false, message: "availablecolor is not valid" }) }
    else if (color) {
        if (updateData.color.toUpperCase().trim().split(',').map(color => color.filter(item => item == false).length !== 0)) { return res.status(400).send({ status: false, message: 'updatedcolor Should be Among  yellow' }) }
        const availablecolor = updateData.availableSizes.tolowerCase().trim().split(',').map(value => value.trim());
        updateData.availablecolor = availablecolor
    
}
if (Size == "") { return res.status(400).send({ status: false, message: "availableSizes is not valid" }) }
else if (Size) {
    if (updateData.Size.toUpperCase().trim().split(',').map(value => isValidSize(value)).filter(item => item == false).length !== 0) { return res.status(400).send({ status: false, message: 'updated size should be small' }) }
    const availableSizes = updateData.Size.tolowerCase().trim().split(',').map(value => value.trim());
    updateData.availableSizes = availableSizes
}
const updateDetails = await productModel.findByIdAndUpdate({ _id: productId }, updateData, { new: true })
return res.status(200).send({ status: true, message: "Product updated successfully", data: updateDetails })
}
catch (err) {
return res.status(500).send({ status: false, error: err.message })
}
}
// ////////////////////////////////////////////////////////////////////////////////////
const deleteProduct = async function (req, res) {
    try {
        //==validating productId==//    
        let id = req.params.productId
        if (!isValidObjectId(id)) {
            return res.status(400).send({ status: false, msg: "ProductId is invalid" })
        }
        const checkId = await prouctModel.findById({ _id: id })

        if (!checkId)
            return res.status(400).send({ status: false, msg: " This productId does not exist" })

        if (checkId.isDeleted == true)
            return res.status(400).send({ status: false, msg: " This Product is already deleted" })

        //==deleting product by productId==// 
        const deletedProduct = await productModel.findByIdAndUpdate({ _id: id, isDeleted: false },
            { isDeleted: true, deletedAt: new Date() },
            { new: true })
        return res.status(200).send({ status: true, msg: "successfully deleted" })
    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err })
    }
}
module.exports={createProduct,updateProduct,deleteProduct}