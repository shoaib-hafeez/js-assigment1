var min = 00;
var sec = 00;
var msec = 00;

var minHed = document.getElementById("min");
var secHed = document.getElementById("sec");
var msecHed = document.getElementById("msec");

var interval;


function timer() {
  msec++;
  msecHed.innerHTML = msec;
  if (msec > 100) {
    sec++;
    secHed.innerHTML = sec;
    msec = 0;
  }
  if (sec >= 60) {
    min++;
    minHed.innerHTML = min;
    sec = 0;
  }
}
function Start() {
  interval = setInterval(timer, 10);
  
}
function Stop() {
  clearInterval(interval);
}

function Reset() {
  min = 0;
  sec = 0;
  msec = 0;

  minHed.innerHTML = min;
  secHed.innerHTML = sec;
  msecHed.innerHTML = msec;
  Stop();
}
