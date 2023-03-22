const seconds = document.querySelector(".seconds .number"),
  minutes = document.querySelector(".minutes .number"),
  hours = document.querySelector(".hours .number"),
  days = document.querySelector(".days .number");

const countDownDate = new Date("2023-04-08T23:59:59").getTime(); 

const timeFunction = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now; 

  const daysValue = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hoursValue = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesValue = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secondsValue = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance < 0) { 
    clearInterval(timeFunction);
    days.textContent = '00';
    hours.textContent = '00';
    minutes.textContent = '00';
    seconds.textContent = '00';
  } else {
    days.textContent = daysValue < 10 ? `0${daysValue}` : daysValue;
    hours.textContent = hoursValue < 10 ? `0${hoursValue}` : hoursValue;
    minutes.textContent = minutesValue < 10 ? `0${minutesValue}` : minutesValue;
    seconds.textContent = secondsValue < 10 ? `0${secondsValue}` : secondsValue;
  }
}, 1000); 
