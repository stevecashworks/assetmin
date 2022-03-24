// alert("Hello welcome to assetmining company all transactions on this company are secured with blockchain");
const closeone=document.getElementById('closeone');
const firstclick=document.getElementById('firstclick');
const secondslide=document.getElementById('secondslide');
const secback=document.getElementById('secback');
const jamo=document.getElementById("jamo");
const con=document.getElementById("con");
const target=document.getElementById('target');
const bonus=document.getElementById("bonus");
const ipsut=document.getElementById('ipsut');
const amet=document.getElementById('amet');
const elit=document.getElementById('elit');
const natus=document.getElementById('natus');
const right=document.getElementById('right');
const left=document.getElementById('left');
const next=document.getElementById('next');
const text=document.getElementById('text');
const label=document.getElementById('label');
const selick=document.getElementById('selick');
const goback=document.getElementById('goback');
const surve=document.getElementById('surve');
const plan=document.getElementById('plan');
const liveline=document.getElementById('liveline');
const lives=document.getElementById('lives');
const conp=document.getElementById('conp');
const yes=document.getElementById('yes');
const outus=document.getElementById('outus'); 
firstclick.addEventListener('click',()=>{
    closeone.style.display="none";
    secondslide.style.display="block";  
});  

outus.addEventListener('click',()=>{
    abot.scrollIntoView({
        behavior:"smooth"
    })
})
conp.addEventListener('click',()=>{
    yes.scrollIntoView({
        behavior:"smooth"
    })
})
lives.addEventListener('click',()=>{
    liveline.scrollIntoView({
        behavior:"smooth"
    })
})
surve.addEventListener("click",()=>{
    plan.scrollIntoView({
        behavior:"smooth"
    });
});
goback.addEventListener('click',()=>{
    label.style.display="none";
    secondslide.style.display="block";
});
 selick.addEventListener('click',()=>{
     label.style.display="block";
     secondslide.style.display="none";
 });
  left.addEventListener('click',()=>{
    left.style.backgroundColor="#ff6600";
    right.style.backgroundColor="black";
    next.style.display="block";
    text.style.display="none";
});
right.addEventListener('click',()=>{
  right.style.backgroundColor="#ff6600";
  left.style.backgroundColor="black";
  text.style.display="block";
  next.style.display="none";
});
bonus.addEventListener('click',()=>{  
    target.style.color="black";
    jamo.style.color="black";
    jamo.style.borderBottom="none"; 
    con.style.color="black";
    con.style.borderBottom="none";
    target.style.borderBottom="none";
    ipsut.style.display="none";
    amet.style.display="none";
    elit.style.display="none";
    natus.style.display="block";
    bonus.style.color=" #ff6600";
    bonus.style.borderBottom="#ff6600 solid 2px "; 
});

target.addEventListener('click',()=>{ 
    jamo.style.color="black";
    con.style.color=" black";
    bonus.style.color="black";
    natus.style.display="none";
    elit.style.display="block";
    bonus.style.borderBottom="none";
    con.style.borderBottom="none"; 
    jamo.style.borderBottom="none";
    target.style.color=" #ff6600";
    target.style.borderBottom="#ff6600 solid 2px "; 
    ipsut.style.display="none";
    amet.style.display="none";
});
con.addEventListener('click',()=>{
    ipsut.style.display="none";
     jamo.style.color="black";
     natus.style.display="none";
     bonus.style.color="black";
     bonus.style.borderBottom="none";
     target.style.color=" black";
     target.style.borderBottom="none"; 
     jamo.style.borderBottom="none";
     con.style.color=" #ff6600";
     con.style.borderBottom="#ff6600 solid 2px "; 
     amet.style.display="block";
     elit.style.display="none";
});

jamo.addEventListener('click',()=>{ 
    ipsut.style.display="block";
    con.style.color="black";
    natus.style.display="none";
    bonus.style.color="black"; 
    bonus.style.borderBottom="none"; 
    con.style.borderBottom="none";
    amet.style.display="none";
    target.style.color="black ";
    target.style.borderBottom="none"; 
    jamo.style.color=" #ff6600";
    elit.style.display="none";
    jamo.style.borderBottom="#ff6600 solid 2px "; 
});
secback.addEventListener('click',()=>{ 
    secondslide.style.display="none"; 
    closeone.style.display="block";
});
 