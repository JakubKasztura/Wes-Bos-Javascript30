// start with strings, numbers and booleans
let name1 = "john";
let name2 = name1;
name2 = "jacob";

let num1 = 2;
let num2 = num1;
num2 = 3;

let cond1 = true;
let cond2 = cond1;
cond2 = false;
// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.

// You might think we can just do something like this:
// const people = players;

// however what happens when we update that array?
// people.push("Ann");

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
// const people = players.slice(); // slice does not destroy original array
// const people2 = players.splice(0, players.length); // splice does destroy original array, splice returns all elements that have been set in scope
// people2.push("Ann");

// or create a new array and concat the old one in

// const people = [].concat(players);
// people.push("Ann");
// or use the new ES6 Spread

const people = [...players];
people.push("Ann");

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// and think we make a copy:

// const person2 = person;
// person2.city = "LA";

// how do we take a copy instead?
const person2 = Object.assign({}, person); // only go 1 leve depth
person2.city = "LA";

const person3 = JSON.parse(JSON.stringify(person));
person3.city = "Los Angeles";

// We will hopefully soon see the object ...spread
// const person2 = { ...person };
// person2.city = "LA";

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const person5 = {
  name: "John",
  age: 80,
  adress: {
    city: "LA",
    street: "Main street",
  },
};
// Object.assign will not work to adress depth we got to use:

const person6 = JSON.parse(JSON.stringify(person5));
person6.adress.city = "New York";
