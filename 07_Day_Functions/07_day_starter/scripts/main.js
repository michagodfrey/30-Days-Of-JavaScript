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

const places = [
  'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'
];

function printArray (arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArray(places);

function showDateTime() {
  const now = new Date();
  let day = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();
  console.log(`${day}/${month}/${year}`);
}

showDateTime();
