const address= document.getElementById('address')
fetch('/user/getAdd').then(res=>res.json()).then(data=>address.innerHTML=data[0].address)