console.log(countries);

for (i = 0; i < 11; i++) {
  console.log(i);
}

let j = 0;
while (j < 11) {
  console.log(j);
  j++;
}


let k = 0;
do {
  console.log(k);
  k++;
} while (k < 11)

let hash = '#';
let h = 1;
do {
  console.log(hash.repeat(h))
  h++
} while (h < 8)

for (i = 0; i < 11; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

for (i = 0; i < 11; i++) {
  console.log(`${i} ${i ** 2} ${i ** 3}`);
}

for (i = 0; i < 101; i++) {
  (i % 2) == 0 ? console.log(i) : console.log();
}

for (i = 0; i < 101; i++) {
  (i % 2) != 0 ? console.log(i) : console.log();
}

let sum = 0;
for (i = 0; i < 101; i++) {
  sum = sum + i;
  // console.log(sum);
}

console.log(`the sum of the numbers from 0 to 100 is ${sum}`);

// sum odd and even numbers separately
let evenSum = 0;
let oddSum = 0;
for (i = 0; i < 101; i++) {
  (i % 2) == 0 ? evenSum = evenSum + i : oddSum = oddSum + i;
}

console.log(evenSum);
console.log(oddSum);

// print results in an array
const results = [];
results.push(evenSum, oddSum);
console.log(results);
// gerate 5 random numbers
for (i = 0; i < 5; i++) {
  console.log(Math.floor(Math.random() * 9999999))
}
// generate random characters
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
randomString = '';
for (i = 0; i < 10; i++) {
  randomString += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(randomString);
// generate random characters at random numbers of characters
randomVariableString = '';
randomLength = Math.floor(Math.random() * (25 - 10) + 10);
for (i = 0; i < randomLength; i++) {
  randomVariableString += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(randomVariableString);

// generate a hexidecimal numbers
const hexChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let hexidecimal = '';
for (i = 0; i < 6; i++) {
  hexidecimal += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
}
console.log(hexidecimal);

// print as new array in capital letters
const places = [
  'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'
];
let uppercase = [];
for (i = 0; i < places.length; i++) {
  uppercase.push(places[i].toUpperCase());
}
console.log(uppercase);
// print array of countries lengths
let lengths = [];
for (i = 0; i < places.length; i++) {
  lengths.push(places[i].length);
}
console.log(lengths);
// create new full on array with above info
let superArray = [];
for (i = 0; i < places.length; i++) {
  let array  = [];
  array.push(places[i], places[i].substr(0,3).toUpperCase(), places[i].length);
  superArray.push(array);
}
console.log(superArray);

// In above countries array, check if there is a country or countries containing the word 'land'.

let containsLand = [];
for (i = 0; i < places.length; i++) {
  if (places[i].endsWith('land')) {
    containsLand.push(places[i]);
  }
}
console.log(containsLand);

// country with most characters in name
let maxChar = '';
for (i = 0; i < places.length; i++) {

}

console.log(maxChar);

// countries with 5 characters in name
let fiveChars = [];
for (i = 0; i < places.length; i++) {
  if (places[i].length === 5) {
    fiveChars.push(places[i]);
  }
}

console.log(fiveChars)

// acronym

const apps = ["MongoDB", "Express", "React", "Node"];
let acronym = '';

for (const app of apps) {
  acronym = app[0].toString();
}

console.log(acronym);
