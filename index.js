const express = require('express')


const route = require('./routes/route')
const mongoose = require('mongoose')
const app = express()


mongoose.connect("mongodb+srv://pragya_user1:tfr9Y2SlmidKsL1L@cluster0.e7bog.mongodb.net/group24Database?retryWrites=true&w=majority", {
    usenewurlParser: true
})
.then(() => console.log("MongoDb is connected..."))
.catch(error => console.log(error)) 

app.use("/", route)

app.listen(process.env.PORT || 3000, function(){
    console.log("Express app running on port " + (process.env.PORT || 3000))
