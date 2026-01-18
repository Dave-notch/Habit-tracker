  let nameHapit=document.getElementById("nameHapit");
  let habitName=document.getElementById("habitName");
  let option_select=document.getElementById("option_select");
  let dateDisplay=document.getElementById("dateDisplay");
  let submit=document.getElementById("Submit");
  let showResults=document.getElementById("showResults");
  let goalDisplay=document.getElementById("goalDisplay");
  let daysGoal=0;

  

 
 let intervalStarted = false;

  submit.addEventListener("click",(event)=>{
    event.preventDefault()
     let hapit=nameHapit.value
        if(!hapit){
          habitName.innerHTML=""
          
        }else{
          habitName.innerHTML=hapit
        }
     

    let showDate=date.value
        if(!showDate){
          dateDisplay.innerHTML=""
          
        }else{
          dateDisplay.innerHTML=showDate
        }

    let spent=Amount_Input.value
        if(!spent){
          SpentDisplay.innerHTML=""
          
        }else{
          SpentDisplay.innerHTML=`$ ${spent}`
        }
   

        daysGoal=goalSet.value
        if(!daysGoal){
          goalDisplay.innerHTML=""
        }else{
          goalDisplay.innerHTML=`${daysGoal} Days`
          RMdays.innerHTML=daysGoal
        }
        remainingCounter(daysGoal)
    


    let select=habit_select.value
        if(select==""){
          option_select.innerHTML=""
          
        }else{
          option_select.innerHTML=select
        }
    
  if(daysGoal  && showDate && hapit){
     if(!intervalStarted) {
        setInterval(updateSeconds, 1000);
        setInterval(remainingCounter, 1)
        intervalStarted = true; 
     }
  }

    })
    
    
    
  






//  showResults.addEventListener("click", ()=>{
//   resultArea.style.display="block"
//   form_add.style.display="none"
  


//  })






  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  const AmountSpent=document.getElementById("AmountSpent");
  const noCheck=document.getElementById("noCheck");
  const yesCheck=document.getElementById("yesCheck");
  const date=document.getElementById("date");

  let hours=document.getElementById("hours");
  let minutes=document.getElementById("minutes");
  let seconds=document.getElementById("seconds");
  let days=document.getElementById("days");
  let daylabel=document.getElementById("daylabel");
  let SpentOn=document.getElementById("SpentOn");
  let resultArea=document.getElementById("resultArea");
  let Amount_Input=document.getElementById("Amount_Input");
  let SpentDisplay=document.getElementById("SpentDisplay");
  let habit_select=document.getElementById("habit_select");
  let form_add=document.getElementById("form_add");

  let RMhours=document.getElementById("RMhours");
  let RMminutes=document.getElementById("RMminutes");
  let RMseconds=document.getElementById("RMseconds");
  let RMdays=document.getElementById("RMdays");




  toggle.addEventListener("click", () => {
    links.classList.toggle("active");
  });
  
  yesCheck.addEventListener("change",(e)=>{
    if(e.target.checked){
      AmountSpent.style.display="block"
      SpentOn.style.opacity=1
    }
  })

   noCheck.addEventListener("change",(e)=>{
    if(e.target.checked){
      AmountSpent.style.display="none"
      SpentOn.style.display="none"
    }
  })

  // date.addEventListener("input",(e)=>{
  //   let showDate=e.target.value
  //   console.log(showDate)
  // })
  let startingSeconds=0;
  let time=startingSeconds;


  

  let mincounter=0;
  let hourCounter=0;
  let dayCounter=0;
  let goalSet=document.getElementById("goalSet");

  function updateSeconds(){
     if (time < 10) {
      seconds.innerHTML = "0" + time;
    } else {
      seconds.innerHTML = time;
    }
    
    
    
    time+=1;
    if (mincounter < 10) {
      minutes.innerHTML = "0" + mincounter;  
    } else {
      minutes.innerHTML = mincounter;
    }
     if (hourCounter < 10) {
      hours.innerHTML = "0" + hourCounter;

    } else {
      hours.innerHTML = hourCounter;
    }

    
    

    if(time==60){
      time=startingSeconds
      mincounter+=1
      if (mincounter < 10) {
      minutes.innerHTML = "0" + mincounter;
    } else {
      minutes.innerHTML = mincounter;
    }

    if (hourCounter < 10) {
      hours.innerHTML = "0" + hourCounter;
    } else {
      hours.innerHTML = hourCounter;
    }

    if(mincounter==59){
      mincounter=0
      hourCounter+=1
    }
    if(hourCounter==23){
      hourCounter=0;
      dayCounter+=1;

    if (dayCounter < 10) {
      days.innerHTML = "0" + dayCounter;
      daylabel.innerHTML="day"
    } else {
      days.innerHTML = dayCounter;
      daylabel.innerHTML="days"
    }

    if(days==0){
      startingSeconds=0
    }
    
    }
    }

   

  }

  let RMsecoCounter=60;
  let secs=RMsecoCounter
  let RMmincounter=5;
  let mins=RMmincounter
  let RMhourCounter=5;
  let HRS=RMhourCounter


  function remainingCounter(){
    if (RMsecoCounter > 10) {
      RMseconds.innerHTML = secs;
    } else {
      RMseconds.innerHTML = "0" + secs;
    }

    secs-=1
  RMminutes.innerHTML = mins;
  RMhours.innerHTML = HRS;



    if(secs==0){
      secs=RMsecoCounter
      mins-=1

    

    if(mins==0){
      mins=RMmincounter
      HRS-=1
    }

    if(HRS==0){
      HRS=RMhourCounter
      daysGoal-=1
      // RMhourCounter-=1
    }




    if (mins > 10) {
      RMminutes.innerHTML = mins;
    } else {
      RMminutes.innerHTML = "0" + mins;
    }

    if (HRS > 10) {
      RMhours.innerHTML = HRS;
    } else {
      RMhours.innerHTML = "0" + HRS;
    }

     if (daysGoal > 10) {
      goalDisplay.innerHTML = daysGoal;
    } else {
      goalDisplay.innerHTML = "0" + daysGoal;
    }

  }

  }


  