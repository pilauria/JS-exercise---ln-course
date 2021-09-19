// /*
//   WRITE YOUR SOLUTION HERE
// */

// function currentTime() {
//   // create object with date class
//   let date = new Date();

//   let hour = date.getHours();
//   let min = date.getMinutes();
//   let sec = date.getSeconds();

//   hour = updateTime(hour);
//   min = updateTime(min);
//   sec = updateTime(sec);

//   // add time to the DOM (in the div)
//   document.querySelector('#clock').innerHTML = `${hour} ${min} ${sec}`;

//   // Set timer
//   let timer = setTimeout(() => {
//     currentTime();
//   }, 1000);
// }

// // display the elements of time in two-digit format 00
// function updateTime(t) {
//   return t < 10 ? '0' + t : t;
// }

// // call currentTime() function to initiate the process
// currentTime();

// New method .tolocaleTimeString
function clock() {
  const clockNode = document.querySelector('#clock');
  return setInterval(() => {
    let date = new Date();
    let tick = date.toLocaleTimeString();
    clockNode.textContent = tick;
  }, 1000);
}

clock();
