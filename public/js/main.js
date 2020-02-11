let clock = document.getElementById("clock");
let title = document.getElementById("title");
let Session = document.getElementById("session");
let Break = document.getElementById("break");

let start = document.getElementById("start");
let pause = document.getElementById("pause");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let incSession = document.getElementById("increment_session_length");
let decSession = document.getElementById("decrement_session_length");

let incBreak = document.getElementById("increment_break_length");
let decBreak = document.getElementById("decrement_break_length");

function increment(e) {
  clock.innerHTML = `${Number(Session.innerHTML) + 1}:00`;

  if (e.srcElement.id == "increment_session_length") {
    if (Number(Session.innerHTML) > 9) {
      Session.innerHTML = (Number(Session.innerHTML) || 0) + 1;
    } else {
      Session.innerHTML = `0${(Number(Session.innerHTML) || 0) + 1}`;
    }
  } else {
    if (Number(Break.innerHTML) >= 9) {
      Break.innerHTML = (Number(Break.innerHTML) || 0) + 1;
    } else {
      Break.innerHTML = `0${(Number(Break.innerHTML) || 0) + 1}`;
    }
  }
}
function decrement(e) {
  clock.innerHTML = `${Number(Session.innerHTML) - 1}:00`;
  if (
    e.srcElement.id == "decrement_session_length" &&
    Number(Session.innerHTML) > 1
  ) {
    if (Number(Session.innerHTML) > 9) {
      Session.innerHTML = (Number(Session.innerHTML) || 0) - 1;
    } else {
      Session.innerHTML = `0${(Number(Session.innerHTML) || 0) - 1}`;
    }
  } else if (
    e.srcElement.id != "decrement_session_length" &&
    Number(Break.innerHTML) != 1
  ) {
    if (Number(Break.innerHTML) >= 9) {
      Break.innerHTML = (Number(Break.innerHTML) || 0) - 1;
    } else {
      Break.innerHTML = `0${(Number(Break.innerHTML) || 0) - 1}`;
    }
  }
}

incSession.addEventListener("click", increment);
decSession.addEventListener("click", decrement);

incBreak.addEventListener("click", increment);
decBreak.addEventListener("click", decrement);

let isPaused = false;
let Timer;

function startTimer() {
  title.innerHTML = "Session";
  let seconds = 59;
  let placholder = Number(Session.innerHTML) - 1;
  Timer = setInterval(() => {
    if (!isPaused) {
      if (
        clock.innerHTML.slice(0, clock.innerHTML.indexOf(":")) == 0 &&
        seconds == 0
      ) {
        breakTime();
      }
      if (seconds < 0) {
        clock.innerHTML = `${clock.innerHTML.slice(
          0,
          clock.innerHTML.indexOf(":")
        ) - 1}:00`;
        placholder -= 1;
        seconds = 59;
      } else {
        clock.innerHTML =
          seconds > 9
            ? `${placholder}:${seconds}`
            : `${placholder}:0${seconds}`;
        seconds -= 1;
      }
    }
  }, 900);
  function breakTime() {
    clearInterval(myvar);
  }
}

function pauseTimer() {
  isPaused = !isPaused;
  console.log(isPaused);
}
function stopTimer() {
  clearInterval(Timer);
  clock.innerHTML = `${Session.innerHTML}:00`;
}
function resetTimer() {
  Session.innerHTML = 25;
  Break.innerHTML = 05;
  clock.innerHTML = `${Session.innerHTML}:00`;
}

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
