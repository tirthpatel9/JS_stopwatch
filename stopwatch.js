let timerOn = false;
let timerMs = 0;
let timerSecs = 0;
let timerMins = 0;
let timerHours = 0;
let interval = 0;

function StartTimer() {
  console.log("start btn clicked");
  if(timerOn === true) { //to prevent it from starting it again
    return;
  }
  timerOn = true;
  interval = setInterval(UpdateTimer, 1);
}

function StopTimer(){
  console.log("stop btn clicked");
  if(timerOn === false) { //to prevent it from starting it again
    return;
  }
  timerOn = false;
  clearInterval(interval);
}

//stops timer and reset timer to 0
function ResetTimer(){
  timerOn = false;
  clearInterval(interval);
  timerMins = 0;
  timerSecs = 0;
  timerMs = 0;
  let millisecs = timerMs.toString().padStart(3, "0");
  let seconds = timerSecs.toString().padStart(2,"0");
  let minutes = timerMins.toString().padStart(2,"0");
  let hours = timerHours.toString().padStart(2,"0");
  document.querySelector(".timer-time").innerHTML = `${hours}:${minutes}:${seconds}:${millisecs}`;
}
function UpdateTimer() {
  let millisecs = timerMs.toString().padStart(3, "0");
  let seconds = timerSecs.toString().padStart(2,"0");
  let minutes = timerMins.toString().padStart(2,"0");
  let hours = timerHours.toString().padStart(2,"0");
  if(timerMs >= 999){
    timerMs = 0;
    timerSecs++;
  }
  if(timerSecs >= 59) {
    timerSecs = 0;
    timerMins++;
  }
  if(timerMins >= 59){
    timerMins = 0;
    timerHours++;
  }
  document.querySelector(".timer-time").innerHTML = `${hours}:${minutes}:${seconds}:${millisecs}`;
  timerMs++;
  //timerSecs++;
  /*if (timerSecs > 9)
    document.querySelector(".timer-time").innerHTML = `00:${timerSecs}`;*/
}

window.addEventListener("load", () => {
  let startBtn = document.querySelector(".timer-startBtn");
  let stopBtn = document.querySelector(".timer-stopBtn");
  let resetBtn = document.querySelector(".timer-resetBtn");

  document.querySelector(".timer-time").innerHTML = "00:00:00:000";
  console.log("loaded");

  startBtn.addEventListener("click", StartTimer);
  stopBtn.addEventListener("click", StopTimer);
  resetBtn.addEventListener("click", ResetTimer);
});
