const text=document.querySelector('.content h2');
const popup=document.querySelector('.popup');
text.addEventListener("click", ()=>{
     popup.classList.add('active');
     CopyToClipboard();
});
  popup.addEventListener("animationed",()=>{
       popup.classList.remove('active');
 });
    function CopyToClipboard(){
      const textarea=document.createElement('textarea');
      textarea.setAttribute('readonly','');
      textarea.style.position="absolute";
      textarea.value=text.innerText;
      document.body.appendChild(textarea) ;
      textarea.select();
      document.execCommand('copy');
    };


    var timer_counter = 0;
    var how_quick = 90
    document.getElementById("t").innerHTML = timer_counter;

    console.log(timer_counter);

    setInterval(time, how_quick)

    function time() {
      if (timer_counter != 6600) {
        timer_counter++;
        document.getElementById("t").innerHTML = timer_counter;
        console.log(timer_counter);
      }

      else {
        timer_counter = 0;
        time()
      }
    }

    time() 
