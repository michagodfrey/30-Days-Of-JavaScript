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
let max = 0;
let mostSkilled = '';
for (user in users) {
  if (users[user].skills.length > max) {
    max = users[user].skills.length;
    mostSkilled = user;
  }
}
console.log(mostSkilled);
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
console.log(isLoggedIn);
console.log(over50);
for (user in users) {
  if (users[user].skills.includes('MongoDB', 'Express', 'React', 'Node'))
  console.log(user)
}
for (user in users) {
ad
}

for (user in users) {
  console.log(users[user])
}

const values = Object.values(users);
console.log(values);

const keys = Object.keys(users);
console.log(keys);

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
