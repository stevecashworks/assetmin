 const btn= document. getElementById('btn')
const amount= document.getElementById('amount')
console.log(amount)
btn.onclick=async()=>{
 await fetch(`user/addInvest/${new URLSearchParams(location.search).get('ref')}`,{
     method: 'PUT',
     headers:{
         'Content-Type': 'application/json'
     },
     body: JSON.stringify({amount:Math.abs(amount.value)})
 }).then(res=>res.json()).then(data=>alert(data))
 location.assign(`./deposit.html?ref=${new URLSearchParams(location.search).get('ref')}`)
}