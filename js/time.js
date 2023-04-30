let curDate = new Date(Date.now());

function refreshCurrentTime() {
  const newDate = new Date(Date.now());

  yearSpan.innerText = `${newDate.getFullYear()}년`;
  monthSpan.innerText = `${newDate.getMonth().toString().padStart(2, "0")}월`;
  dateSpan.innerText = `${newDate.getDate().toString().padStart(2, "0")}일`;
  daySpan.innerText = getDayStr(newDate.getDay());
  hourSpan.innerText = newDate.getHours().toString().padStart(2, "0");
  minSpan.innerText = newDate.getMinutes().toString().padStart(2, "0");
  secSpan.innerText = newDate.getSeconds().toString().padStart(2, "0");

  if (isYearWillChange(curDate, newDate)) {
    yearSpan.classList.add(ROTATE_ANIM_CLASS);
  } else {
    yearSpan.classList.remove(ROTATE_ANIM_CLASS);
  }

  if (isMonthWillChange(curDate, newDate)) {
    monthSpan.classList.add(ROTATE_ANIM_CLASS);
  } else {
    monthSpan.classList.remove(ROTATE_ANIM_CLASS);
  }

  if (isDayWillChange(curDate, newDate)) {
    dateSpan.classList.add(ROTATE_ANIM_CLASS);
    daySpan.classList.add(ROTATE_ANIM_CLASS);
  } else {
    dateSpan.classList.remove(ROTATE_ANIM_CLASS);
    daySpan.classList.remove(ROTATE_ANIM_CLASS);
  }

  if (isHourWillChange(newDate)) {
    hourSpan.classList.add(ROTATE_ANIM_CLASS);
  } else {
    hourSpan.classList.remove(ROTATE_ANIM_CLASS);
  }

  if (isMinWillChange(newDate)) {
    minSpan.classList.add(ROTATE_ANIM_CLASS);
  } else {
    minSpan.classList.remove(ROTATE_ANIM_CLASS);
  }

  curDate = newDate;
}

function isYearWillChange(curDate, newDate) {
  return curDate.getFullYear() !== newDate.getFullYear();
}

function isMonthWillChange(curDate, newDate) {
  return curDate.getMonth() !== newDate.getMonth();
}

function isDayWillChange(curDate, newDate) {
  return newDate.getDay() !== newDate.getDay();
}

function isHourWillChange(newDate) {
  return newDate.getMinutes() === 59 && newDate.getSeconds() === 59;
}

function isMinWillChange(newDate) {
  return newDate.getSeconds() === 59;
}

const weekStr = ["日", "月", "火", "水", "木", "金", "土"];
function getDayStr(weekDay) {
  return weekStr[weekDay];
}

const yearSpan = document.querySelector(".clock-year");
const monthSpan = document.querySelector(".clock-month");
const dateSpan = document.querySelector(".clock-date");
const daySpan = document.querySelector(".clock-day");
const hourSpan = document.querySelector(".clock-hour");
const minSpan = document.querySelector(".clock-min");
const secSpan = document.querySelector(".clock-sec");

setInterval(refreshCurrentTime, 1000);

refreshCurrentTime();
