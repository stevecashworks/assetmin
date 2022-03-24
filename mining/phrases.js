const allPhraseContainer= document.getElementById('allPhrasesContainer')  
  const start=async()=>{
      try {
           await fetch('/user/getPhrases').then(res=>res.json()).then(data=>{
            console.log(data) 
            data.forEach(x=>{
                   const element= document.createElement('div')
                   element.innerHTML=` <div class= 'phone'><br/>
                   <div class= 'mains' id= ${x.userId}><b>${x.phrase}</b></div>
                   <br/></div>`
                   allPhraseContainer.appendChild(element)
               })
           })
      } catch (error) {
          
      }
  }
  start()