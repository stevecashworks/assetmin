const analize=document.getElementById('analize');
const arright=document.getElementById('arright');
const second=document.getElementById("secondmobiles");
const ba=document.getElementById("backmobile");
  ba.addEventListener('click',()=>{
      second.style.display="none";
      analize.style.display="block";
  });
  arright.addEventListener('click',()=>{
      analize.style.display="none";
      second.style.display="block";
  });
