//apocalyps date
const newyear = "1 Jan 2022";

// countdown tags
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("minutes");
const secsEl = document.getElementById("seconds");

function countdown() {
  const newYearDate = new Date(newyear);
  const currentDate = new Date();
  // manipulating dates returns results in milliseconds
  const totalsecs = (newYearDate - currentDate) / 1000;
  const days = Math.floor(totalsecs / 3600 / 24);
  const hours = Math.floor((totalsecs / 3600) % 24);
  const mins = Math.floor((totalsecs / 3600) % 60);
  const secs = Math.floor(totalsecs % 60);

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secsEl.innerHTML = formatTime(secs);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);
