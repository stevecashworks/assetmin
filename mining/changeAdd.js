const inp= document.getElementById('inp')
const update= document.getElementById('update')
update.onclick=async()=>{
    if(!inp.value){
        alert('please input new address amd try again')
    }
    else{
        await fetch('../user/changeAddress',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({newAddress:inp.value})
        }).then(res=>res.json()).then(data=>alert(data))
    }
}