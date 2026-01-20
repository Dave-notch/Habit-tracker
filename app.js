  let nameHapit=document.getElementById("nameHapit");
  let habitName=document.getElementById("habitName");
  let option_select=document.getElementById("option_select");
  let dateDisplay=document.getElementById("dateDisplay");
  let submit=document.getElementById("Submit");
  let showResults=document.getElementById("showResults");
  let goalDisplay=document.getElementById("goalDisplay");
  let goalSet=document.getElementById("goalSet");
  let RMdays=document.getElementById("RMdays");

  let daysGoal;

  let YN_div=document.getElementById("YN_div");
  let goal_div=document.getElementById("goal_div");
  let option_div=document.getElementById("option_div");
  let Date_div=document.getElementById("date_div");
  let habit_div=document.getElementById("habit_div");

  let addNewH=document.getElementById("addNewH");
  let FloatingBtn=document.getElementById("FloatingBtn");

  let resultAreaContent=document.getElementById("resultAreaContent");


 
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
   

        daysGoal=Number(goalSet.value)
        if(!daysGoal){
          goalDisplay.innerHTML=""
        }else{
          goalDisplay.innerHTML=`${daysGoal} Days`
        }

 
        
    


    let select=habit_select.value
        if(select==""){
          option_select.innerHTML=""
          
        }else{
          option_select.innerHTML=select
        }
        RMdaycounter=daysGoal
    
  if(daysGoal  && showDate && hapit){
     if(!intervalStarted) {
        setInterval(updateSeconds, 1000);
        setInterval(remainingCounter, 1000)
        intervalStarted = true; 
     }
  option_div.style.display="none"
  YN_div.style.display="none"
  Date_div.style.display="none"
  habit_div.style.display="none"
  goal_div.style.display="none"
  submit.style.display="none"
  addNewH.style.display="block"

   RMminutes.innerHTML = mins;
  RMhours.innerHTML = HRS;
  RMseconds.innerHTML=secs
    if (daysGoal > 9) {
      RMdays.innerHTML = daysGoal;
    } else {
      RMdays.innerHTML = "0" + daysGoal;
    }
  }





    })

    addNewH.addEventListener("click",(event)=>{
      event.preventDefault();
        option_div.style.display="block"
        YN_div.style.display="block"
        Date_div.style.display="block"
        habit_div.style.display="block"
        goal_div.style.display="block"
        submit.style.display="block"
        addNewH.style.display="none"

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
  let startingSeconds=1;
  let time=startingSeconds;


  

  let mincounter=0;
  let hourCounter=0;
  let dayCounter=0;


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

  let RMsecoCounter=59;
  let secs=RMsecoCounter
  let RMmincounter=59;
  let mins=RMmincounter
  let RMhourCounter=23;
  let HRS=RMhourCounter




  function remainingCounter(){
    if (RMdaycounter == null) return;
    if (RMsecoCounter > 10) {
      RMseconds.innerHTML = secs;
    } else {
      RMseconds.innerHTML = "0" + secs;
    }

    secs-=1


    if(secs<0){
      secs=RMsecoCounter
      mins-=1

    

    if(mins<0){
      mins=RMmincounter
      HRS-=1
    }

    if(HRS<0){
      HRS=RMhourCounter
      daysGoal--
    }

    if(daysGoal<=0){
      daysGoal=0
      HRS=0
      mins=0
      secs=0
    }





    if (mins > 9) {
      RMminutes.innerHTML = mins;
    } else {
      RMminutes.innerHTML = "0" + mins;
    }

    if (HRS > 9) {
      RMhours.innerHTML = HRS;
    } else {
      RMhours.innerHTML = "0" + HRS;
    }

     if (daysGoal > 9) {
      RMdays.innerHTML = daysGoal;
    } else {
      RMdays.innerHTML = "0" + daysGoal;
    }

  }

  }




  


  