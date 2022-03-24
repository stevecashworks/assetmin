const moni=document.getElementById('moni');
const nellow=document.getElementById('nellow');
const clotedfre=document.getElementById('clotedfre');
clotedfre.addEventListener('click',()=>{
   nellow.style.display="none";
});
moni.addEventListener('click',()=>{
    nellow.style.display="block";
});