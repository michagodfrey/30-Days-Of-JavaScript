// level 1
const dog = {
  name: "fido",
  legs: 4,
  color: "brown",
  age: 3,
  bark: "woof woof"
}

console.log(dog);
console.log(dog.name);
console.log(dog.age);

dog.breed = "pug";

dog.getDogInfo = function() {
  console.log(`${this.name} is a ${this.breed} and has ${this.legs} legs and is ${this.color}. ${this.name} is ${this.age} years old and goes '${this.bark}'`);
}

dog.getDogInfo();

// level 2
// 1. Find the person who has many skills in the users object.
// console.log(users)
let manySkillsList  = [];
for (user in users) {
  if(users[user].skills.length >= 6) {
    console.log(users[user]);
  }
}

// for (user in users) {
//   console.log(users[user][0])
// }

//most skills
let max = 0;
let mostSkilled = '';
for (user in users) {
  if (users[user].skills.length > max) {
    max = users[user].skills.length;
    mostSkilled = user;
  }
}
console.log(mostSkilled);

// 2. Count logged in users, count users having greater than equal to 50 points from the following object.
isLoggedIn = 0;
over50 = 0;
for (user in users) {
  if (users[user].isLoggedIn) {
    isLoggedIn += 1;
  }
  if (users[user].points >= 50) {
    over50 += 1;
  }
}
console.log(`# logged in users ${isLoggedIn}`);
console.log(`# users with at least 50 points is ${over50}`);

// 3. Find people who are MERN stack developer from the users object
console.log('the users below are MERN stack developers')
for (user in users) {
  if (users[user].skills.includes('MongoDB', 'Express', 'React', 'Node'))

  console.log(user)
}

// 4. Set your name in the users object without modifying the original users object

const newUser = {
  Michael: {
    email: 'mike@mike.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node'],
    age: 39,
    isLoggedIn: false,
    points: 200
  }
}

const newObject = Object.assign(newUser, users);
console.log(newObject);

// 5 Get all keys or properties of users object

const keys = Object.keys(users)
console.log(keys)

// 6 Get all the values of users object

const values = Object.values(users)
console.log(values)

// 7 Use the countries object to print a country name, capital, populations and languages.

// for (country in countries) {
//   console.log(countries[country].name)
//   console.log(countries[country].capital)
//   console.log(countries[country].languages)
//   console.log(countries[country].population)
// }

// level 3

// 1. Create an object literal called _personAccount_.
//It has _firstName, lastName, incomes, expenses_ properties and it has _totalIncome,
// totalExpense, accountInfo,addIncome, addExpense_ and _accountBalance_ methods.
//Incomes is a set of incomes and its description and expenses is a set of incomes
//and its description.
const personAccount = {
  firstName: "",
  lastName: "",
  incomes: "",
  expenses: "",
  totalIncome: "",
  totalExpense: "",
  accountInfo:"",
  addIncome: "",
  addExpense: "",
  accountBalance: ""
}

// 2. **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()

const currentUsers = [
{
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt:'08/01/2020 9:00 AM',
    isLoggedIn: false
},
{
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt:'08/01/2020 9:30 AM',
    isLoggedIn: true
},
{
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt:'08/01/2020 9:45 AM',
    isLoggedIn: true
},
{
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt:'08/01/2020 9:50 AM',
    isLoggedIn: false
},
{
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt:'08/01/2020 10:00 AM',
    isLoggedIn: false
}
];

const products = [
{
_id: 'eedfcf',
name: 'mobile phone',
description: 'Huawei Honor',
price: 200,
ratings: [
  { userId: 'fg12cy', rate: 5 },
  { userId: 'zwf8md', rate: 4.5 }
],
likes: []
},
{
_id: 'aegfal',
name: 'Laptop',
description: 'MacPro: System Darwin',
price: 2500,
ratings: [],
likes: ['fg12cy']
},
{
_id: 'hedfcg',
name: 'TV',
description: 'Smart TV:Procaster',
price: 400,
ratings: [{ userId: 'fg12cy', rate: 5 }],
likes: ['fg12cy']
}
]

// Imagine you are getting the above currentUsers collection from a MongoDB database.
//   a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
//   b. Create a function called signIn which allows user to sign in to the application


function signUp(newUser) {
  for (user in currentUsers) {
    if (currentUsers[user].username.toLowerCase() === newUser.toLowerCase())
    console.log('That user already exists');
  }
}

signUp('thomas');

function signIn(email, password) {
  for (user in currentUsers) {
    if (currentUsers[user].email === email && currentUsers[user].password === password) {
      console.log('Welcome! You are logged in')
    } else {
      console.log('Sorry, email and password combination not recognized.');
    }
  }
}

signIn('thomas@thomas.com', '123333')

// 3. The products array has three elements and each of them has six properties.
//   a. Create a function called rateProduct which rates the product
//   b. Create a function called averageRating which calculate the average rating of a product




// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

// function signUp() {
//   let newUser = prompt('enter username');
//   for (user in users) {
//     if (newUser === this.user['username']) {
//       alert('sorry, username already exists')
//     }
//
//   }
//   console.log(newUser);
// }
//
// signUp()
