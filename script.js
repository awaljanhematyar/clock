// Grab references to the three hand elements on the page
const hourEl = document.querySelector(".hour-hand");
const minuteEl = document.querySelector(".minute-hand");
const secondEl = document.querySelector(".second-hand");

function updateClock() {
  // Get the current date/time
  const currenttime = new Date();

  // Extract hours (0-23), minutes (0-59), seconds (0-59)
  const hour = currenttime.getHours();
  const minutes = currenttime.getMinutes();
  const second = currenttime.getSeconds();

  // --- HOUR HAND ---
  // hour % 12 converts 24-hour time (like 15) into 12-hour form (3)
  // (hour % 12) / 12 gives a fraction of the full circle (0 to 1)
  // multiply by 360 to convert that fraction into degrees
  // + (minutes / 60) * 30 adds a small extra rotation so the hour hand
  // creeps forward smoothly as minutes pass, instead of jumping once per hour
  // (each hour = 30 degrees, so this scales minutes into that 30-degree slice)
  const hourDeg = ((hour % 12) / 12) * 360 + (minutes / 60) * 30;

  // Apply the rotation to the hour hand element
  // translate(-50%, -100%) keeps the hand anchored at the clock's center
  hourEl.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;

  // --- MINUTE HAND ---
  // minutes / 60 gives a fraction of the full circle (0 to 1)
  // multiply by 360 to get degrees
  const minuteDeg = (minutes / 60) * 360;

  // Apply rotation to the minute hand (its own element, not hourEl)
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;

  // --- SECOND HAND ---
  // second / 60 gives a fraction of the full circle (0 to 1)
  // multiply by 360 to get degrees
  const secondDeg = (second / 60) * 360;

  // Apply rotation to the second hand (its own element, not hourEl)
  secondEl.style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;
}

// Run once immediately so the clock shows the correct time right away,
// instead of waiting a full second for the first setInterval tick
updateClock();

// Then keep updating every 1000ms (1 second) after that
setInterval(updateClock, 1000);
