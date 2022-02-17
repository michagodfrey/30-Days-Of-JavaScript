const firstName = 'Mikee';
const lastName = 'Tyson';
let country = 'Argentina';
console.log(typeof firstName);
console.log('10' === 10);
console.log(parseInt('9.8') === 10);
console.log(4 == '4'); // true
console.log(4 === '4'); // false
console.log(('python').length === ('jargon').length);
console.log(!(4 === '4'));

// const agree = confirm('Window confirm() method');
// console.log(agree);

console.log(Date());
const time = new Date()
console.log(time);
console.log(time.getFullYear());
console.log(time.getMonth() + 1);
console.log(time.getDate());
console.log(time.getHours());
console.log(time.getMinutes());
console.log(time.getTime());

// let base = prompt('enter base');
// console.log(base);
// let height = prompt('enter height');
// console.log(height);
// let areaTri = console.log(0.5 * base * height)

// If the length of your name is greater than 7 say, your name is long else say your name is short.
// let name = prompt('enter name');
name.length > 7 ? console.log(`${name} is a long name`) : console.log(`${name} is a short name`);

firstName.length >= lastName.length ? console.log(`Your first name, ${firstName} is as long or longer than your last name ${lastName}`) : console.log(`Your first name, ${firstName} is shorter than your last name ${lastName}`);

let myAge = 250;
let yourAge = 25;

console.log(`I am ${myAge - yourAge} years older than you`);

// let year = prompt("What year were you born?");

// year < 2004 ? console.log(`You are ${2022 - year}, old enough to drive.`) : console.log(`You are ${2022 - year} too young to drive. Wait ${18 - (2022 - year)} more years.`);

let years = prompt('How many years old are you?');

seconds = years * 31557600;

console.log(`You are ${seconds} seconds old`);

console.log(`${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`);
