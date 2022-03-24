const form= document.getElementById('signinForm')
const Uname= document.getElementById('name')
const pass= document.getElementById('pass')
const processResponse=(data)=>{
    if(!data.success){
        alert(data.reason)
    }else{
        const id= data.data.id;
        const isAdmin=data.data.isAdmin
        if(isAdmin){
            location.assign(`./assets/admindashboard.html?ref=${id}`)
        }
        else{
            location.assign(`./assets/userdash.html?ref=${id}`)
        }
    
    }
}
let userName,password,id
const Submit=async(e)=>{
    e.preventDefault()
  await  fetch('/user/login',{
        method:'POST',
        headers:{
            "Content-type":"application/json"
        },
            body:JSON.stringify({name:userName,password})
    }).then(res=>res.json()). then(data=>processResponse(data))

}
 form.addEventListener('submit',(e)=>{Submit(e)})
 Uname.addEventListener('change',(e)=>{userName=e.target.value})
 pass.addEventListener('change',(e)=>{password=e.target.value})