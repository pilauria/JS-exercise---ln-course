function calculateTotalPrice(baseAmount, tax) {
  taxRate = baseAmount * tax;
  let totatPrice = baseAmount + taxRate / 100;
  return totatPrice;
}

console.log(calculateTotalPrice(8, 5));
