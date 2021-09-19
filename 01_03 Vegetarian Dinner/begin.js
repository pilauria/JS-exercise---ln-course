/*
  WRITE YOUR SOLUTION HERE
*/
const menu = [
  {
    name: 'Chicken parmesan',
    isVegetarian: false,
  },
  {
    name: 'Penne a la vodka',
    isVegetarian: true,
  },
  {
    name: 'Mushroom risotto',
    isVegetarian: true,
  },
  {
    name: 'Veal saltambuca',
    isVegetarian: false,
  },
  {
    name: 'Filet mignon',
    isVegetarian: false,
  },
];

const menuNode = document.querySelector('#menu');

function vegetarianMenu(menu) {
  const vegetarianOptions = menu.filter(option => option.isVegetarian === true);
  vegetarianOptions.forEach(option => {
    let dish = document.createElement('li');
    dish.textContent = option.name;
    menuNode.appendChild(dish);
  });
}
vegetarianMenu(menu);
