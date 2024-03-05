const calculateTax = (price: number, tax = 12): number => {
  return price * tax;
};
console.log(calculateTax(100, 0.08));
