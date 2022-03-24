const express= require("express");
const userRoute= require('./UserRoute/router')
console.log("assetmining")
const getRates= require('./getRates')
require('dotenv').config()
// const bodyParser= require('body-parser')
const connectDb= require('./connect')
const path= require ('path');

const  app= express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.resolve(__dirname,'./assetmining')))

app.get('/',(req,res)=>{
    return res.sendFile(path.join(__dirname,'./assetmining/assets/index.html'))
})
app.use('/user' ,userRoute)
const start= async()=>{
    try {
     await connectDb(process.env.mongo_uri)  
     app.listen(5000,()=>{getRates()})
    } catch (error) {
        console.log(error)
    }
    
}

start()
