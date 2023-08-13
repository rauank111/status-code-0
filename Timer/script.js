const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");

let totalSeconds = 30 * 60; // 30 minutes in seconds

function updateTimer() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  minutesSpan.textContent = minutes.toString().padStart(2, "0");
  secondsSpan.textContent = seconds.toString().padStart(2, "0");

  if (totalSeconds === 0) {
    clearInterval(interval);
    alert("Timer has ended!");
  } else {
    totalSeconds--;
  }
}

updateTimer(); // Initial call
const interval = setInterval(updateTimer, 1000); // Update every second
