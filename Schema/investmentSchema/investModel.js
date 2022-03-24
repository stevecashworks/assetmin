const mongoose= require('mongoose')
 const userSchema=  new  mongoose.Schema({
      userId:{type:String, required:true},
     CoinType:{ required:true,type:String},
      amount:{ type:Number, required:true}
 },{timestamps:true} )
 module.exports=  mongoose.model("userInfo",userSchema)