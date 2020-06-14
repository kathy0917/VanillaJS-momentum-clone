const clock = document.querySelector(".clock");

function displayCurrentTime() {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clock.innerText = `${hour < 10 ? `0${hour}` : `${hour}`}:${
    minutes < 10 ? `0${minutes}` : `${minutes}`
  }:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
}

function init() {
  displayCurrentTime();
  setInterval(displayCurrentTime, 1000);
}

init();
