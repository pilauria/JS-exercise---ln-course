/*
  WRITE YOUR SOLUTION HERE
*/
let input = [
  ['Tacos', 'Burgers'],
  ['Pizza'],
  ['Burgers', 'Fries'],
  ['Pizza', 'Calzones'],
];

function menu(array) {
  let arrayUnique = [...new Set(array.flat())];

  arrayUnique.forEach(item => console.log(`-${item}`));

  const menuNode = document.querySelector('#combined-menu');
  for (let item of arrayUnique) {
    let foodNode = document.createElement('li');
    foodNode.innerText = item;
    menuNode.appendChild(foodNode);
  }
}

console.log(menu(input));

// OR: see end.js
