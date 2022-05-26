//1
const arr1 = Array()
console.log(arr1)
//2
const arr2 = Array(6).fill(0)
console.log(arr2)
//3
console.log(arr2.length)
//4
console.log(arr2[0], arr2[5], arr2[3])
//5 
const intArr = Array(2).fill(0)
const charArr = Array(2).fill('x')
const stringArr = Array(2).fill('hello')
const mixedDataTypes = intArr.concat(charArr).concat(stringArr)
console.log(mixedDataTypes)
//6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
//7
console.log(itCompanies)
//8
console.log(itCompanies.length);
//9
console.log(itCompanies[0], itCompanies[3], itCompanies[6])
//10
for (i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i])
}
//11
for (i = 0; i < itCompanies.length; i++) {
    let newCase = itCompanies[i].toUpperCase()
  console.log(newCase);
}
//12
console.log(`${itCompanies.slice(0,6).join(', ').toString()} and ${itCompanies.slice(6)} are IT companies`)
//13
for (i = 0; i < itCompanies.length; i++) {
  if (itCompanies.includes('Apple')) {
      console.log('found')
  } else {
      console.log('not found')
  }
}
//14
let maxOneOList = [];
for (i = 0; i < itCompanies.length; i++) {
  let split = itCompanies[i].split('')
  let oCount = 0;
  for (j = 0; j < split.length; j++) {
    if (split[j] === 'o' || split[j] === 'O') {
        oCount ++
    } 
  }
  if (oCount > 1) {
    maxOneOList.push(itCompanies[i]);
  }
}
console.log(maxOneOList);
//15
// const sorted = itCompanies.sort();
// console.log(sorted)
//16 
// const reversed = itCompanies.reverse();
// console.log(reversed);
//17
console.log(itCompanies.slice(3))
//18 
console.log(itCompanies.slice(0,4))
//19
console.log(itCompanies.slice(3,4))
//20
// itCompanies.shift()
console.log(itCompanies)
// 21 ???????????
// console.log(itCompanies.splice(3,4))
//22
console.log(itCompanies.pop())
//23
console.log(itCompanies.splice())

// level 2
//1 file set up
//2
console.log(countries)
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

const noPunc = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
const words = noPunc.split(" ")
  
console.log(noPunc);
console.log(noPunc.length);

//3
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.unshift('meat')
shoppingCart.push('sugar')
if (shoppingCart.includes('Honey')) {
  // remove honey ?
}
shoppingCart[3] = 'green tea'
console.log(shoppingCart)
//4
if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA')
} else {
  contries.push('Ethiopia')
}
//5 
if (noPunc.includes("Sass")) {
  console.log('Sass is a CSS preprocess')
}
// need to convert back to array then to string etc but whatever
//6 
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd)

console.log(fullStack);

// level 3
//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

const agesSorted = ages.sort()
console.log(agesSorted)
console.log(ages.length)
const median = agesSorted.slice(4,5)
console.log(median)
const average = ages.reduce((a, b) => a + b / ages.length, 0)
console.log(average)
// whatever

//2
console.log(countries.length)
console.log(countries[95])

//3
const firstList = countries.slice(0, 96);
const secondList = countries.slice(96, 193);

console.log(firstList)
console.log(secondList)