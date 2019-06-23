const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const GetSecAndMinRotation = (time) => {
  return (time * 6) + 90;
};

const GetHourRotation = (time) => {
  return (time * 12) + 90;
};

const SetClock = () => {
  const date = new Date;

  const sec = date.getSeconds();
  const secDegree = GetSecAndMinRotation(sec);
  secHand.style.transform = `rotate(${secDegree}deg)`;

  const min = date.getMinutes();
  const minDegree = GetSecAndMinRotation(min);
  minHand.style.transform = `rotate(${minDegree}deg)`;

  const hour = date.getHours();
  const hourDegree = GetHourRotation(hour);
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
};

SetClock();
setInterval(SetClock, 1000);

console.log(new Date)

//get the time
//set the time for hours, min, sec
// depending on the time from 1-60 set the rotation of each 
// element based on the number taken in.
