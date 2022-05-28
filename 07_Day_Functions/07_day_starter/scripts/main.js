function fullName(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
}

fullName("Michael", "Godfrey");

function addNumbers(a, b) {
  let sum = a + b;
  console.log(sum);
  return sum;
}

addNumbers(4, 7);

function findMax(a, b, c) {
  let max;
  if (a > b &&  a && c) {
    max = a;
  } else if (b > a && b > c) {
    max = b;
  } else if (c > a && c > b) {
    max =  c;
  } else {
    console.log("it's a draw");
  }
  console.log(max);
}

findMax(1,1,0);

// Level 2
//1
function solveLinEquation(a, b, c, x, y) {
  let sum = (a * x) + (b * y) + c;
  console.log(sum)
}

solveLinEquation(3, 5, 2, 7, 2)

//2
function solveQuadratic(a, b, c, x) {
  let sum = (a * x * 2) + (b * x) + c;
  return sum
}

//3
const places = [
  'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'
];

function printArray (arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArray(places);

//4
function showDateTime() {
  const now = new Date();
  let day = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();
  console.log(`${day}/${month}/${year}`);
}

showDateTime();

//5
function swapValues(x, y) {
  let placeHolder
  placeHolder = x
  x = y
  y = placeHolder
  return `${x} ${y}`
}

console.log(swapValues(3, 4)) // x => 4, y=>3
console.log(swapValues(4, 5))

//6
function reverseArray(arr) {
  let arrReversed = []
  for (i=0; i<arr.length; i++) {
    arrReversed.unshift(arr[i])
  }
  return arrReversed
}

// alternative to unshift you can start looping from the end
// note the for conditions, arr.length -1 and i >= 0
// without -1 and >= it truncates the array a bit
function reverseArray2(arr) {
  let arrReversed = []
  for (let i = arr.length -1; i >= 0; i--) {
    arrReversed.push(arr[i])
  }
  return arrReversed
}

console.log(reverseArray2([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray2(['A', 'B', 'C']))

//7
const lowerCaseNames = ['ali', 'jay', 'tim', 'john'];

function capitalizedarray(arr) {
  let capitalizedArr= []
  for (i = 0; i < arr.length; i++) {
     capitalizedArr.push(arr[i][0].toUpperCase() + arr[i].substring(1))
  }
  return capitalizedArr
}

console.log(capitalizedarray(lowerCaseNames))
