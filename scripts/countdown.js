// Функция для получения текущей даты и времени
function getCurrentDate() {
  return new Date();
}

// Функция для получения количества миллисекунд до Нового года
function getMillisecondsUntilNewYear() {
  const newYear = new Date(2025, 0, 1); // Год и дата Нового года
  return Math.abs(newYear.getTime() - getCurrentDate().getTime());
}

// Функция для обновления таймера обратного отсчета
function updateCountdownTimer() {
  const millisecondsUntilNewYear = getMillisecondsUntilNewYear();

  // Преобразование миллисекунд в дни, часы, минуты и секунды
  const days = Math.floor(millisecondsUntilNewYear / 1000 / 60 / 60 / 24);
  const hours = Math.floor((millisecondsUntilNewYear / 1000 / 60 / 60) % 24);
  const minutes = Math.floor((millisecondsUntilNewYear / 1000 / 60) % 60);
  const seconds = Math.floor((millisecondsUntilNewYear / 1000) % 60);

  // Обновление отображения
  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;

  // Повторное выполнение функции через определенные интервалы
  setTimeout(updateCountdownTimer, 1000);
}

// Инициализация таймера обратного отсчета
updateCountdownTimer();