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



// 5 Get all keys or properties of users object
// 6 Get all the values of users object
// 7 Use the countries object to print a country name, capital, populations and languages.

// for (country in countries) {
//   console.log(countries[country].name)
//   console.log(countries[country].capital)
//   console.log(countries[country].languages)
//   console.log(countries[country].population)
// }

// level 3

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
