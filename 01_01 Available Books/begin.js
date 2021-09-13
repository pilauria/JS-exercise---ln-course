/*
  WRITE YOUR SOLUTION HERE
*/
// Note:Anything written as a class can be written as a function
// // Function component
// function Book(title, author, ISBN, numCopies) {
//   this.name = name;
//   this.author = author;
//   this.ISBN = ISBN;
//   this.numCopies = numCopies;
// }

// Book.prototype.getAvailability = function () {
//   if (this.numCopies === 0) {
//     return 'out of stock';
//   } else if (this.numCopies < 10) {
//     return 'low stock';
//   } else {
//     return 'in stock';
//   }
// };

// Book.prototype.sell = function (numCopiesSold = 1) {
//   this.numCopies -= numCopiesSold;
// };

// Book.prototype.restock = function (numCopiesStocked = 5) {
//   this.numCopies += numCopiesStocked;
// };

// let HungerGames = new Book('mamma', 'mimmo', 25324534, 0);
// console.log(HungerGames.getAvailability());
// HungerGames.restock(20);
// console.log(HungerGames.getAvailability());
// HungerGames.sell(17);
// console.log(HungerGames.getAvailability());

// Refactor into a class component. We make use of 'Encapsulation: all of our book-related code lives inside of the book class//
class Book {
  constructor(title, author, ISBN, numCopies) {
    this.name = name;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  get availability() {
    return this.getAvailability();
  }

  getAvailability() {
    if (this.numCopies === 0) {
      return 'out of stock';
    } else if (this.numCopies < 10) {
      return 'low stock';
    } else {
      return 'in stock';
    }
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }

  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

let HungerGames = new Book('mamma', 'mimmo', 25324534, 0);
console.log(HungerGames.availability);
HungerGames.restock(20);
console.log(HungerGames.availability);
HungerGames.sell(17);
console.log(HungerGames.availability);
//
