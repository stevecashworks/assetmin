function showTime(){
  var date = new Date();
  var h = date.getHours(); 
  var m = date.getMinutes(); 
  var s = date.getSeconds(); 
  var session = "AM US Time";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM US Time";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("DigitalCLOCK").innerText = time;
  document.getElementById("DigitalCLOCK").textContent = time;
  
  setTimeout(showTime, 1000);
  
}

showTime();
const mainhi=document.getElementById('mainhi');
const traca=document.getElementById('traca');
const tradis=document.getElementById('tradis');
const livet=document.getElementById('livet');
const livedrop=document.getElementById('livedrop');
const userclose=document.getElementById('userclose'); 
userclose.addEventListener('click',()=>{
  livedrop.style.display="none";
});
livet.addEventListener('click',()=>{
   livedrop.style.display="block";
});
tradis.addEventListener('click',()=>{
  mainhi.style.display="block";
});
traca.addEventListener('click',()=>{
    mainhi.style.display="none";
});