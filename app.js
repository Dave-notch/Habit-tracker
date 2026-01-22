   
   let addNewH=document.getElementById("addNewH"); 
    let dynamicInput=` <form class="flex flex-col gap-4 " class="inputform">
            <div class="option_div">
              <label class="block label text-sm font-bold mb-1">do you wanna develop this habit or quit</label>
               <select class="w-full label rounded-xl bg-gray-100 px-5 py-2 h-10  outline-none mb-2 focus:ring-1 focus:ring-black-200 habit_select">
                  <option value="" class="text-sm">please choose one option</option>
                  <option value="quiting" class="font-semibold">quiting</option>
                  <option value="developing" class="font-semibold">developing</option>
               </select>
            </div> 

            <div class="habit_div">
              <label class="block  label text-sm font-semibold mb-1 ">Habit Name</label>
              <input
                type="search"
                placeholder="Enter habit name"
                class="w-[clamp(280px,90vw,420px)] rounded-xl bg-gray-100 h-10 py-2 label outline-none focus:ring-1 focus:ring-black-200 nameHapit"
                 />
            </div>

            <!-- Date -->
            <div class="date_div">
              <label class="block label text-sm font-semibold mb-1">Date</label>
              <input
                type="date"
                class="w-[clamp(280px,90vw,420px)] rounded-xl bg-gray-100 h-10 py-2 label outline-none focus:ring-1 focus:ring-black-200 date"
              />
            </div>

            <!-- goal -->
            <div class="goal_div">
              <label class="block label text-sm font-semibold mb-1">Set goal</label>
              <input
                type="text"
                placeholder="Days or hours"
                class="w-[clamp(280px,90vw,420px)] rounded-xl bg-gray-100 h-10 label py-2 outline-none focus:ring-1 focus:ring-black-200 goalSet"
              />
            </div>


          

            <!-- Spent Money -->
            <div class="YN_div">
              <label class="block label text-sm font-semibold mb-2">Did you spend money?</label>
              <div class="flex gap-6">
                <label class="flex items-center gap-2 ">
                  <input type="radio" name="spent" class="accent-blue-500 yesCheck">
                  Yes
                </label>
                <label class="flex items-center gap-2 label">
                  <input type="radio" name="spent" class="accent-blue-500 noCheck">
                  No
                </label>
              </div>
            </div>

            <!-- Amount -->
            <div class="AmountSpent hidden">
              <label class="block label text-sm font-semibold mb-1">Amount Spent $</label>
              <input
                type="number"
                placeholder="0.00"
                class="w-[clamp(280px,90vw,420px)] rounded-xl bg-gray-100 h-10 py-2 label outline-none focus:ring-1 focus:ring-black-200 Amount_Input"
              />
            </div>

            <!-- Submit -->
            <button
              type="submit"
              itemid=""
              class="w-full bg-blue-500 text-white h-10 text-xl rounded-xl font-semibold hover:bg-blue-600 transition Submit"
            >
              Save Habit
            </button>

            <button class="w-full bg-orange-500 text-white h-10 text-xl rounded-xl font-semibold hover:bg-orange-600 transition showResults">
              Show me the results
            </button>
            <button class="w-full bg-red-500 text-white h-10 text-xl rounded-xl font-semibold hover:bg-orange-600 transition animate-pulse ErrorMessage">
              Error Message
            </button>
            
                </form>`
          



    

                
   addNewH.addEventListener("click",(event)=>{
      event.preventDefault();
       let form_add = document.querySelector(".form_add");
      form_add.insertAdjacentHTML("beforeend", dynamicInput);
      addNewH.style.display="none"


          let noCheck        = document.querySelector(".noCheck");
          let yesCheck       = document.querySelector(".yesCheck");
          let AmountSpent      = document.querySelector(".AmountSpent");
          let SpentOn          = document.querySelector(".SpentOn");
          let ErrorMessage=document.getElementById("ErrorMessage");
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

                
  
  


let nameHapit      = document.querySelector(".nameHapit");


let submit         = document.querySelector(".Submit");
let showResults    = document.querySelector(".showResults");
let goalSet        = document.querySelector(".goalSet");
let RMdays         = document.querySelector(".RMdays");

let daysGoal;

let YN_div         = document.querySelector(".YN_div");
let goal_div       = document.querySelector(".goal_div");
let option_div     = document.querySelector(".option_div");
let Date_div       = document.querySelector(".date_div");
let habit_div      = document.querySelector(".habit_div");




 
  let FloatingBtn=document.getElementById("FloatingBtn");

 const resultAreaContent = document.querySelector(".resultAreaContent");

 
  let inputform=document.querySelector(".inputform");


 



 



    // addNewH.addEventListener("click",(event)=>{
    //   event.preventDefault();
    //     option_div.style.display="block"
    //     YN_div.style.display="block"
    //     Date_div.style.display="block"
    //     habit_div.style.display="block"
    //     goal_div.style.display="block"
    //     submit.style.display="block"
    //     ErrorMessage.style.display="block"
    //     AmountSpent.style.display="block"
    //     addNewH.style.display="none"


       

    //          resultAreaContent.insertAdjacentHTML("beforeend", newdiv);
        

    // })
    
    
    
  






//  showResults.addEventListener("click", ()=>{
//   resultArea.style.display="block"
//   form_add.style.display="none"
  


//  })






  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  let date           = document.querySelector(".date");


  let days             = document.querySelector(".days");
  let daylabel         = document.querySelector(".daylabel");
  let resultArea       = document.querySelector(".resultArea");
  let Amount_Input     = document.querySelector(".Amount_Input");
  let habit_select     = document.querySelector(".habit_select");


  




  toggle.addEventListener("click", () => {
    links.classList.toggle("active");
  });
  

  // date.addEventListener("input",(e)=>{
  //   let showDate=e.target.value
  //   console.log(showDate)
  // })
  let startingSeconds=1;
  let time=startingSeconds;


  

  let mincounter=0;
  let hourCounter=0;
  let dayCounter=0;




   let newdiv=`<div class="snap-start">
              <div class="flex flex-col gap-2 ">
              <div class="flex flex-row gap-30 text-xl justify-center  timer-ttle">
                <div>hour/min</div>
                <div>seconds</div>
                <div class="daylabel">day</div>
                </div>
                <div class="flex flex-col text-white text-3xl flex justify-center items-center">
                    <div class="flex flex-row gap-4">
                      <div class="bg-red-400 w-30 h-14 rounded-xl flex justify-center items-center Timer-boxes2 rounded-bl-none rounded-br-none"><span class="hours"></span><span style="font-weight:900;font-size:2rem;">:</span><span class="minutes"></span></div>
                      <div class="bg-red-400 w-30 h-14 rounded-xl flex justify-center items-center Timer-boxes2 rounded-bl-none rounded-br-none seconds"></div>
                      <div class="bg-red-400 w-30 h-14 rounded-xl flex justify-center items-center Timer-boxes2 rounded-bl-none rounded-br-none days"></div>
                    </div>

                    <div class="flex flex-row gap-4">
                      <div class="bg-green-500 w-30 h-14 rounded-xl flex justify-center items-center Timer-boxes2 rounded-tl-none rounded-tr-none"><span class="RMhours"></span><span style="font-weight:900;font-size:2rem;">:</span><span class="RMminutes"></span></div>
                      <div class="bg-green-500 w-30 h-14 rounded-xl flex justify-center items-center Timer-boxes2 rounded-tl-none rounded-tr-none RMseconds"></div>
                      <div class="bg-green-500 w-30 h-14 rounded-xl flex justify-center items-center Timer-boxes2 rounded-tl-none rounded-tr-none RMdays"></div>
                    </div>
                </div>
                <div class="bg-green-200 w-220 h-135  rounded-4xl shadow-3xl border border:blue-200 text-xl flex-col gap-2 font-semibold innerGR2-div ">
                  <div class="flex justify-center">
                  <div  class="font-semibold text-white text-3xl bg-red-400 w-30 h-10 rounded-4xl text-center habitName"></div>
                  </div>
                  <div class="">
                  </div>
                  <div class="flex flex-col gap-4 text-white text-3xl  justify-center items-center Col-Boxes">
                    <div class="flex flex-row gap-70 flex justify-center items-center "> 
                      <div class="text-black flex  items-center  w-50 h-10 text-indic">the date you started</div>
                      <div class="bg-blue-400 w-30 h-25 rounded-xl flex justify-center items-center Col-Box dateDisplay" ></div>
                    </div>
                    <div class="flex flex-row gap-70 flex justify-center items-center ">
                      <div class="text-black flex  items-center   w-50 h-10 text-indic">Quiting or Developing</div>
                      <div class="bg-blue-400 w-30 h-25 rounded-xl flex justify-center items-center Col-Box option_select"></div>
                    </div>
                    <div class="flex flex-row gap-70 flex justify-center items-center ">
                      <div class="text-black flex  items-center   w-50 h-10 text-indic">Your Goal</div>
                      <div class="bg-blue-400 w-30 h-25 rounded-xl flex justify-center items-center Col-Box goalDisplay"></div>
                    </div>
                    <div class="flex flex-row gap-70 flex justify-center items-center SpentOn ">
                      <div class="text-black flex items-center   w-50 h-10 text-indic" id="spentTtl">you've spent</div>
                      <div class="bg-blue-400 w-30 h-25 rounded-xl flex justify-center items-center Col-Box SpentDisplay"></div>
                    </div>
                    
                </div>
                  

                </div>
              </div>
             </div>`

             



       let intervalStarted = false;

  submit.addEventListener("click",(event)=>{
    event.preventDefault()
    resultAreaContent.insertAdjacentHTML("beforeend", newdiv);
    let habitName      = document.querySelector(".habitName");
    let dateDisplay    = document.querySelector(".dateDisplay");
    let SpentDisplay     = document.querySelector(".SpentDisplay");
    let goalDisplay    = document.querySelector(".goalDisplay");
    let option_select  = document.querySelector(".option_select");
    let RMdays         = document.querySelector(".RMdays");

  let RMhours          = document.querySelector(".RMhours");
  let RMminutes        = document.querySelector(".RMminutes");
  let RMseconds        = document.querySelector(".RMseconds");

  let hours            = document.querySelector(".hours");
  let minutes          = document.querySelector(".minutes");
  let seconds          = document.querySelector(".seconds");



  let days            = document.querySelector(".days");
  let daylabel         = document.querySelector(".daylabel");
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
        setInterval( function updateSeconds(){
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

   

  }, 1000);
        setInterval(function remainingCounter(){
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

  }, 1000)
        intervalStarted = true; 
     }
  option_div.style.display="none"
  YN_div.style.display="none"
  Date_div.style.display="none"
  habit_div.style.display="none"
  goal_div.style.display="none"
  submit.style.display="none"
  ErrorMessage.style.display="none"
  AmountSpent.style.display="none"
  addNewH.style.display="block"

   RMminutes.innerHTML = mins;
  RMhours.innerHTML = HRS;
  RMseconds.innerHTML=secs
    if (daysGoal > 9) {
      RMdays.innerHTML = daysGoal;
    } else {
      RMdays.innerHTML = "0" + daysGoal;
    }
    
    inputform.reset()
    
  }





    })

})


  


  