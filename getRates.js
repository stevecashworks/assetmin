const userSchema= require('./Schema/userSchema/userSchema')
const getRates= ()=>{
    setInterval(async()=>{
        const   randRates=[]
        while(randRates.length<6){
            randRates.push(Number((Math.random()*10).toFixed(2)))
        }
        console.log(randRates)
        const coinRates= {btc :randRates[0],eth:randRates[1],dog:randRates[2],liteCoin:randRates[3],coin1:randRates[4],coin2:randRates[5]}
         const updated= await userSchema.updateMany({},{rates:coinRates})
         console.log(updated)
    },(100000/*60*60*24*/))
    
}
module.exports= getRates