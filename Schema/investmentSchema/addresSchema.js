const mongoose= require('mongoose')
const addressSchema= new mongoose.Schema({
    address:String
})
module.exports= mongoose.model('compAddress', addressSchema)