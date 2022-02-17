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

let evenSum = 0;
let oddSum = 0;
for (i = 0; i < 101; i++) {
  (i % 2) == 0 ? evenSum = evenSum + i : oddSum = oddSum + i;
}

console.log(evenSum);
console.log(oddSum);
