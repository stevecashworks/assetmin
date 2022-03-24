const cert=document.getElementById("cert");
const iamge=document.getElementById("iamge");
const benclo=document.getElementById("benclo");
benclo.addEventListener("click",()=>{
    cert.style.display="none";
})
   iamge.addEventListener("click",()=>{
       cert.style.display="block";
   });
