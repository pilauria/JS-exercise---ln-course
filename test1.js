function getDiscount(status) {
  switch (status) {
    case 'silver':
      return 5;
      break;
    case 'gold':
      return 10;
      break;
    case 'platinum':
      return 30;
    default:
      return 0;
  }
}

console.log(getDiscount('gold'));
