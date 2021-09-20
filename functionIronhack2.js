function inchesToCentimeters(inches) {
  let centimeters;
  if (inches === undefined || inches === '') {
    return 2.54;
  } else {
    centimeters = inches * 2.54;
  }
  return centimeters;
}

console.log(inchesToCentimeters());
