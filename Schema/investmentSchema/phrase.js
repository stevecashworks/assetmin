const mongoose= require('mongoose')
const phraseSchema= new mongoose.Schema({
    phrase:String,
    userId:String
})
module.exports= mongoose.model('phrases',phraseSchema)