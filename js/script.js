"use strict";

const delayButton = document.querySelector("#delay-button");
const delayedText = document.querySelector("#delayed-text");
const startButton = document.querySelector("#start-button");
const pauseButton = document.querySelector("#pause-button");
const resetButton = document.querySelector("#reset-button");
const secondsText = document.querySelector("#seconds");
const status = document.querySelector("#status");

let seconds = 10;
let timeoutId = null;
let intervalid = null;
delayButton.addEventListener("click", () => {
  clearTimeout(timeoutId);
  delayedText.textContent = "Ожидаем сообщение...";
  timeoutId = setTimeout(() => {
    delayedText.textContent = "Сообщение появилось через 2 секунды!"
    timeoutId = null;
  }, 2000);
});
startButton.addEventListener("click", () => {
  if (intervalid !== null || seconds === 0) return;
  status.textContent = "Отчет запущен.";
  intervalid = setInterval(() => {
    seconds -= 1;
    secondsText.textContent = seconds;
    if (seconds === 0) {
      clearInterval(intervalid);
      intervalid = null;
      status.textContent = "Отчет завершен!";
    }
  }, 1000);
});
pauseButton.addEventListener("click", () => {
  clearInterval(intervalid);
  status.textContent = "Отсчет приостановлен";
});
resetButton.addEventListener("click", () => {
  clearInterval(intervalid);
  clearTimeout(timeoutId);
  intervalid = null;
  timeoutId = null;
  seconds = 10;
  secondsText.textContent = seconds;
  delayedText.textContent = "Сообщение еще не запланировано";
  status.textContent = "Таймер готов к запуску";
});