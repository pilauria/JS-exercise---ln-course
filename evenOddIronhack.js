function pickEvenOdd(arr) {
  const even = []; // do not remove or change this line
  const odd = []; // do not remove or change this line

  // Your code here

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return [even, odd]; // do not remove or change this line
}

console.log(pickEvenOdd([2, 10, 2, 6]));
