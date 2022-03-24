const funds=document.getElementById('funds');
const  uId= new URLSearchParams(location.search).get('ref')
const balanceinp=document.getElementById('balanceinp');
const may=document.getElementById('may');
const abot=document.getElementById('abot');
const circleshow=document.getElementById('circleshow');
const showing=document.getElementById('showing');
const cans=document.getElementById('cans');   
const reqBtn= document.getElementById('req')
const amountInp=document.getElementById('checking')
cans.addEventListener('click',()=>{
    showing.style.display="none";
});
  circleshow.addEventListener('click',()=>{
      showing.style.display="block";
  });
funds.addEventListener('click',()=>{
    
    if(Number(balanceinp.innerHTML) > 0){
        may.style.display="block";

    }
    else(alert('Insuficient fund'));
});
req.onclick=async()=>{
     if(Math.abs(Number(amountInp.value)>Number(balanceinp.innerHTML))){
       alert(`Transaction failed because you cannot withdraw more than your available balance which is $${balanceinp.innerHTML}`)
     }
     else{
         alert(uId)

         await fetch(`../user/withdraw/${uId}`
         
         ,{
             method:'POST',
             headers:{
                 'Content-Type':'application/json'
             },
             body:JSON.stringify({withdrawalAmt:(amountInp.value)})
         }
         ).then(res=>res.json()).then(data=>alert(data))
         location.reload()

     }
}
const swap= document.getElementById('swap')
const ref= swap.getAttribute('href')
swap.setAttribute('href', `${ref}?ref=${uId}`)