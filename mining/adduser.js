let ethInp,btcInp,emailInp,passInp,nameInp,data,phonInp
 const processResponse=(res)=>{
     if(res.success){
        window.location.assign(`./assets/userDash.html?id=${res.data._id+"-12bc"}`)
     }
     else{
         alert(res.reason)
     }
 }
const addUser=async(e)=>{
    e.preventDefault()
    const data= {
        userName:nameInp,
        btcAdd:btcInp,
        password:passInp,
        email:emailInp,
        ethAdd:ethInp,
        phone:phonInp
    }
  fetch("/user/submituser",{
      method:"POST",
      headers:{
      "Content-Type":'application/json'
    },
      body:JSON.stringify(data)
  }).then(res=>res.json()).then(data=>{processResponse(data)})
    
}
const eth= document.getElementById('eth')
const btc= document.getElementById('btc')
const email= document.getElementById('email')
const password= document.getElementById('password')
const username= document.getElementById('username')
const phone= document.getElementById('phone')
const form = document.getElementById('signUpForm')
eth.addEventListener("change",(e)=>{ethInp= e.target.value})
btc.addEventListener("change",(e)=>{btcInp= e.target.value})
email.addEventListener("change",(e)=>{emailInp= e.target.value})
password.addEventListener("change",(e)=>{passInp= e.target.value})
username.addEventListener("change",(e)=>{nameInp= e.target.value})
phone.addEventListener("change",(e)=>{phonInp= e.target.value})
form.addEventListener("submit",(e)=>{addUser(e)})
 