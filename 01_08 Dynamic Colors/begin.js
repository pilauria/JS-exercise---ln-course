/*
  WRITE YOUR SOLUTION HERE
*/

let btn1 = document.querySelector('#blue');
let btn2 = document.querySelector('#pink');
let btn3 = document.querySelector('#green');

function changeColor(color) {
  return function () {
    document.body.style.background = color;
  };
}

const bgColorBlue = changeColor('blue');
const bgColorPink = changeColor('pink');
const bgColorGreen = changeColor('green');

btn1.addEventListener('click', bgColorBlue);
btn2.addEventListener('click', bgColorPink);
btn3.addEventListener('click', bgColorGreen);
