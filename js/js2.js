/**
 * ES 6
 * let/const
 * spread operator
 * rest operator
 * destructuring
 * arrow function
 * template literals
 * for...of
 * map/set
 * promise
 * class
 */

// spread operator ...
// shallow copy: create a new reference for the container, but any nested objects will point to the same reference
const arr = [1, 2, 3, 4, 5];
const arr2 = [...arr];
console.log(arr, arr2);
console.log(arr === arr2);

const person = {
  name: "alice",
  id: 1,
  address: {
    city: "xxx",
    street: "zzz",
    no: "123123",
  },
  date: new Date(),
};

const personCopy = {
  ...person,
};

console.log(person, personCopy);
console.log(person.address === personCopy.address);

/**
 * deep copy: create a completely new object
 *  how to do it
 * 1. write our own funtion
 * 2. lodash
 * 3. structuredClone(), does not copy functions, classes, undefined
 * 4. JSON.stringify()/JSON.parse(), works for plain object/array with primitive data types, special objects like date will become string, map/set will be discarded
 *
 *
 * prototype
 * prototype chain
 */

const personJSONCopy = JSON.parse(JSON.stringify(person));
console.log(personJSONCopy);

// rest operator ...
// collect arguments for functions, and put them into one array
function restOperatorExample(arr, ...args) {
  console.log(arr, args);
  console.log(arguments); // array-like object
}

restOperatorExample(1, 2, 3, 4, 5, 6, 7, 8, 9);

// destructuring
// const personName = person.name;
// const personId = person.id;
// const personCity = person.address.city

// name: personName -  for renaming a key in the object to another variable name
// address: {city} -  destructuring from nested object

const {
  name: personName,
  id,
  address: { city },
} = person;
console.log(personName, id, city);

const [num1, num2, num3] = arr;
console.log(num1, num2, num3);

/**
 * regular function vs arrow function
 * 1. syntax
 *    arrow fn: more concise, commonly used for callback fn, one liners
 * 2. hoisting
 *     regular fn: hoisted completely, can be invoked before decalaration
 *     arrow fn: cannot be invoked before initialization, exact behavior depends on the keyword you use during declaration
 * 3. "this"
 *    regular fn: the value of "this" depends on the caller of the function
 *    arrow fn: lexical, depending on the surrounding scope when the function is defined, refer to the "this" from the outer scope
 * 4. arguments
 *     regular fn: yes
 *     arrow fn: no
 * 5. constructor
 *     regular fn: can be used as a constructor
 *     arrow fn: no
 */

function regularFn() {
  console.log("hello from regular function");
  console.log(this);
}

regularFn();
// arrowFn();
// console.log(arrowFn);
var arrowFn = () => 1;

console.log(arrowFn());

const obj = {
  value: 10,
  regularFn: function () {
    console.log(this);
    const innerFn = () => {
      console.log(this);
    };
    innerFn();
  },
  arrowFn: () => {
    console.log(this);
  },
};

obj.regularFn();
// obj.arrowFn();

// const fn = obj.regularFn;
// fn();

// for ... of es6
// iterable objects: arrays, string, map, set

for (const ele of arr) {
  console.log(ele);
}

console.log(Object.entries(person));
for (const ele of Object.entries(person)) {
  console.log(ele);
}

// for ... in
// loop over enumerable properties of an object

for (const ele in person) {
  console.log(person[ele]);
}

for (const ele in arr) {
  console.log(ele);
}

console.log(arr);

console.log(Object.keys(person).length);

const obj2 = {
  1: "a",
  2: "b",
  true: "c",
};

console.log(Object.keys(obj2));
console.log(obj2["1"]);

const setExample = new Set([1, 2, 2, 2, 2, 3, 4, 5, 5]);
console.log(setExample);
setExample.add(1);
console.log(setExample);
