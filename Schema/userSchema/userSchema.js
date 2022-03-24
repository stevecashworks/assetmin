const mongoose= require('mongoose')
 const userSchema= new  mongoose.Schema({
     userName: {type:String,required:true, unique:true},
     phone:{type:Number, deafult:'none'},
     isAdmin:{type:Boolean, default:false},
     btcAdd:{type:String, required:true},
     ethAdd:{type:String, required:true},
     password:{type:String, required:true},
     email:{type:String, required:true},
     balance:{type:Number, default:0},
     investment:{type:Number, default:0},
     rates:{type:Object, default:{ btc: 9.71, eth: 6.72,dog: 5.16,liteCoin: 0.83,coin1: 6.88, coin2: 4.31}},
     compAdd:{type:String ,default:'none'}
 }, {timestamps:true})
 module.exports=  mongoose.model("userInfo",userSchema)