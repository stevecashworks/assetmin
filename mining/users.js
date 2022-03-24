const router = require("../UserRoute/router")

const usersContainer= document.querySelector('.firstlay-con')
const addCoin=async(e,payLoad)=>{
     const id= e.target.id
     const inpId= document.getElementById(id+"inp")
    const goAhead= confirm(`Are you sure you want to add ${inpId.value} to ${payLoad}?`)
    if(goAhead){
     fetch(`/user/addcoin/${id}`,{
         method:"PUT",
         headers:{
             'Content-Type':'application/json'
},
body:JSON.stringify({amount:inpId.value})
     }).then(res=>res.json()).then(data=>data)
    }
}
getUsers=async()=>{
 const users= await fetch('/user/getAll').then(res=>res.json()).then(data=>data.data)
 allUsers= users
 allUsers.forEach(x=>{
     const div= document.createElement('div')
     div.setAttribute('class','newuserone')
     const b= document.createElement('b')
     b.innerHTML=x.userName
     const h4Name= document.createElement('h4')
     const h4Email= document.createElement('h4')
     h4Name.innerHTML=`Name: ${x.userName}`
     h4Email.innerHTML=`Email: ${x.email}`
     const inpDiv= document.createElement('div')
     inpDiv.setAttribute('class','downadd')
     const inp= document.createElement('input')
     inp.setAttribute('type','number')
     inp.setAttribute('class','addin')
     inp.setAttribute('id',`${x._id}inp`)
     inp.setAttribute('palceholder','Add Coin')
     // The input is then added to the input div
     inpDiv.appendChild(inp)
     //BTN
     const btn= document.createElement('button')
     btn.innerHTML="ADD"
     btn.setAttribute('class','addbtn')
     btn.setAttribute('id',x._id)
     btn.addEventListener('click',(e)=>{addCoin(e,x.userName)})
      inpDiv.appendChild(btn)
     div.appendChild(b)
     div.appendChild(document.createElement('hr'))
     div.appendChild(h4Name)
     div.appendChild(h4Email)
     div.appendChild(inpDiv)
 usersContainer.appendChild(div)
    })
 
}


getUsers()