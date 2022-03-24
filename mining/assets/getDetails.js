const params= window.location.search
const fId=  new URLSearchParams(params).get('ref')
const deposit= document.getElementById('deposit')
const id= fId.split('-')[0]
const btc= document.getElementById('btc')
const eth= document.getElementById('eth')
const dog= document.getElementById('dog')
const litecoin= document.getElementById('litecoin')
const coin1= document.getElementById('coin1')
const coin2= document.getElementById('coin2')
const elementsArray=[btc,eth,dog,litecoin,coin1,coin2]

deposit.addEventListener('click',()=>{window.location.assign(`../investPlan.html?ref=${id}#4668`)})
const addRate=(element,rate)=>{
     if(rate<=5){
         element.style.color='red'
     }
     else{element.style.color='green'}
     element.innerHTML=`%${rate}`
}

const nameElement= document.getElementById('name');
const balanceInp= document.getElementById('balanceinp')
 const investInp= document.getElementById('investInp')
nameElement.innerHTML='name'
fetch(`../user/getOne/${id}`).then(res=>res.json()).then(data=>{
    nameElement.innerHTML=data.userName;
    balanceInp.innerHTML=data.balance;
    investInp.innerHTML= data.investment

    addRate(btc,data.rates.btc)
    addRate(eth,data.rates.eth)
    addRate(dog,data.rates.dog)
    addRate(litecoin,data.rates.liteCoin)
    addRate(coin1,data.rates.coin1)
    addRate(coin2,data.rates.coin2)
})


