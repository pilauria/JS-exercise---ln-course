/*
  WRITE YOUR SOLUTION HERE
*/
let nCoffee = [2, 5, 7, 1, 4];
let price = 1.25;

function totalAmount(nCoffee) {
  let total = nCoffee.reduce((acc, current) => {
    return acc + current * 1.25;
  }, 0);
  return `The total bill is ${total}`;
}

console.log(totalAmount(nCoffee));

// OR:
// function coffeeDate(coffeeArr) {
//   let coffeeSum = coffeeArr.reduce(
//     (totalCoffees, numCoffees) => (totalCoffees += numCoffees)
//   );
//   return `The total bill is $${coffeeSum * 1.25}`;
// }

// console.log(coffeeDate([2, 5, 7, 1, 4]));
