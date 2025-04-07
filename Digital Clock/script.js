let intervalId;
let isRunning = false;
let alarmTime = null;

const clockElement = document.getElementById("clock");
const alarmSound = document.getElementById("alarmSound");

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const currentTime = `${hours}:${minutes}:${seconds}`;
  clockElement.textContent = currentTime;

  if (alarmTime === `${hours}:${minutes}` && seconds === "00") {
    alarmSound.play();
  }
}

// Start clock
document.getElementById("startBtn").addEventListener("click", () => {
  if (!isRunning) {
    intervalId = setInterval(updateClock, 1000);
    updateClock(); // Call immediately
    isRunning = true;
  }
});

// Stop clock
document.getElementById("stopBtn").addEventListener("click", () => {
  clearInterval(intervalId);
  isRunning = false;
});

// Reset clock
document.getElementById("resetBtn").addEventListener("click", () => {
  clearInterval(intervalId);
  clockElement.textContent = "00:00:00";
  isRunning = false;
});

// Set alarm
document.getElementById("setAlarmBtn").addEventListener("click", () => {
  const input = document.getElementById("alarmTime").value;
  if (input) {
    alarmTime = input;
    alert(`✅ Alarm set for ${alarmTime}`);
  }
});

// Clear alarm
document.getElementById("clearAlarmBtn").addEventListener("click", () => {
  alarmTime = null;
  alarmSound.pause();
  alarmSound.currentTime = 0;
  alert("🧹 Alarm cleared");
});
