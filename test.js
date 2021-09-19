function metricUnitCheck(unitName) {
  // Your code here
  return unitName.endsWith('meter') ? 'is a metric unit' : 'not a metric unit';
}

console.log(metricUnitCheck('kilometer'));
