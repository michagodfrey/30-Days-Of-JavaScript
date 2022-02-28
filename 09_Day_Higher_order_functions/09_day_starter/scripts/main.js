const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
countries.forEach((country) => {
  console.log(country.name);
});
numbers.forEach((number) => {
  console.log(number);
});
const newCountries = countries.map((country) => {
  return country.name.toUpperCase();
});
console.log(newCountries);
const nameLengths = countries.map((country) => {
  return country.name.length;
});
console.log(nameLengths);
const squareNameLengths = nameLengths.map((name) => {
  return name ** 2;
})
console.log(squareNameLengths);
const forSale = products.map((product) => {
  return `${product.product} $${product.price}`
});
console.log(forSale);
const countriesWithoutLand = countries.filter((country) => {
  if (!country.name.includes('land')) {
    return country.name;
  }
});
console.log(countriesWithoutLand);
const notSixChars = countries.filter((country) => {
  if (country.name.length < 6 || country.name.length > 6) {
    return country.name;
  }
})
console.log(notSixChars);
const shortNames = countries.filter((country) => {
  if (country.name.length <= 5) {
    return country.name;
  }
})
console.log(shortNames);
const noLetterE = countries.filter((country) => {
  if (!country.name.startsWith('E')) {
    return country.name;
  }
});
console.log(noLetterE);
const notFree = products.filter((product) => {
  if (product.price > 0) {
    return product;
  }
});
console.log(notFree)
const sum = numbers.reduce((a, b) => a + b, 0);
console.log(sum);
const totalPrice = products.reduce((total, product) => {
  return total + product.price;
}, 0);
console.log(totalPrice);
