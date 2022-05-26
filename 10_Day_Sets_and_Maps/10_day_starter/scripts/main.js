// Sets and Maps
// Level 1
const newSet = new Set(countries);

console.log(newSet);
// 1. create an empty set
const loopSet = new Set();

// 2. Create a set containing 0 to 10 using loop
function addNumbers() {
  for (i = 1; i < 11; i++) {
    loopSet.add(i);
  }
}

addNumbers();
console.log(loopSet);
// 3. Remove an element from a set
loopSet.delete(2);
console.log(loopSet);
// 4. Clear a set
newSet.clear()
console.log(newSet)
// 5. Create a set of 5 string elements from array
const colors = ['green', 'blue', 'red', 'yellow', 'brown', 'brown', 'blue', 'pink'];

stringSet = new Set();
for (const color of colors) {
  stringSet.add(color);
}
console.log(stringSet);// note that only unique values will be added to the set

// 6. Create a map of countries and number of characters of a country
let list = [];
countries.map((country) => {
  let temp = [];
  temp.push(country.name);
  temp.push(country.name.length);
  return list.push(temp);
});
console.log(list);
const map = new Map(list);
console.log(map);

// Level 2
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const places = ['Finland', 'Sweden', 'Norway'];
// 1. Find a union b (a U b) - all values in both sets not duplicated
let c = [...a, ...b];
let C = new Set(c);
console.log(C);
// Output: Set(6) { 4, 5, 8, 9, 3, 7 }

// 2. Find a intersection b (values in common)
let A = new Set(a);
let B = new Set(b);

let d = a.filter((num) => B.has(num));
let D = new Set(d);
console.log(D);
// Output: Set(2) { 4, 5 }

// 3. Find a with b (values in a that are also in b)
let e = a.filter((num) => B.has(num));
let E = new Set(e);
console.log(E);
// Output: Set(2) { 4, 5 }

// Level 3
// 1. How many languages are there in the countries object file.
let languages = [];
countries.filter((country) => {
  for (i = 0; i < country.languages.length; i++) {
    languages.push(country.languages[i]);
  }
});
console.log(languages);
let uniqueLanguages = new Set(languages);
console.log(uniqueLanguages);
const counts = [];
const count = {};
for (const i of uniqueLanguages) {
  const filteredLangs = languages.filter((lang) => lang === i);
  console.log(filteredLangs);
  counts.push({ lang: i, count: filteredLangs.length })
}
console.log(counts);
console.log(`There are ${counts.length} languages`);
// 2. *** Use the countries data to find the 10 most spoken languages:
// function mostSpokenLanguages(num) {}
