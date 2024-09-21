function updateTime() {
  const currentData = new Date();
  document.querySelector("#currentTime").textContent =
    currentData.toLocaleTimeString();
}

setInterval(updateTime, 1000);
updateTime();

const currentDate = new Date();
const currentMoth = document.querySelector("#currentData");
const month = currentDate.getMonth();
const day = currentDate.getDate();
const dayOfWeek = currentDate.getDay();
const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];
const daysOfWeek = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

currentMoth.textContent =
  day + " " + months[month] + ", " + daysOfWeek[dayOfWeek];
