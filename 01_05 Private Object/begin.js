/*
  WRITE YOUR SOLUTION HERE
*/

const username = Symbol('username');
const password = Symbol('password');

const user = {
  [username]: 'IO',
  [password]: '543534a',
  age: 32,
};

console.log(user.age);
