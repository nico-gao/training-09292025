// console.log("hello world");
// const button = document.querySelector(".click-btn");
// console.log(button);

// ECMAScript: syntax standard for javascript
// es5, es6 (2015)
// broswer: WebAPI + ECMAScript
// node: NodeAPI + ECMAScript

/**
 * primitive data types
 * number
 * string
 * boolean
 * null
 * undefined
 *
 * bigint
 * symbol
 *
 *
 * reference data types
 * objects
 * array
 * function
 */

// var, let, const

var userName = "nicole";
userName = 1;
userName = true;

let userId = 1;

const age = 18;
// age = 20;

console.log(typeof userName);
console.log(typeof userId);
console.log(typeof undefined);
console.log(typeof null);

const obj = {
  name: "nicole",
  id: 1,
};

console.log(obj.name);

const arr = [1, 2, 3, 4, "qweqw", "qweqw", [1, 2], obj, () => {}];

function foo() {
  return;
}

// es 6: arrow function
const foo2 = (arg1, arg2) => {
  // function
  console.log("arrow function");
  return;
};

foo2();

// primitive data type
// passing by value
let num1 = 1;
let num2 = num1;
num1 = 5;

// type coercion, implicit type conversion
// explicit type conversion
// ==: loose comparison
// ===: strict comparsion
console.log(num1, num2);
console.log(num1 === num2);

// reference data type
// passing by reference
const obj1 = {
  name: "alice",
}; // 00001

const obj2 = obj1; // 00001

obj1.name = "bob";
const obj3 = {
  name: "alice",
}; // 00002

console.log(obj1, obj2);
console.log(obj1 === obj3);

function foo1(input) {
  console.log(input);
  input = 2;
  console.log(input);
}

let num = 1;
foo1(num);
console.log(num);

function foo3(input) {
  console.log(input);
  input.name = "bob";
  console.log(input);
}

let obj4 = {
  name: "alice",
};
foo3(obj4);
console.log(obj4);

//               var       |       let       |       const
// scope:     function            block              block
// hoisting:    yes                 no                no
// redeclare:   yes                 no                no
// reassign:    yes                 yes               no

function foo4() {
  var a; // declaration is hoisted, not assignment
  if (true) {
    console.log(a);
    var a = 1;
  }
  console.log(a);
}

foo4();

function foo5() {
  if (true) {
    let a = 1;
    console.log(a);
  }
  // console.log(a);
}

foo5();

var str = "1";

str = "qkwjehqwkej";

let str1 = "123123";
str1 = 12312;

const obj5 = {
  name: "alice",
};

obj5.name = "bob";

// closure

function fn() {
  let counter = 0;
  function add() {
    counter++;
  }

  function print() {
    console.log("counter is:", counter);
  }
  return {
    add,
    print,
  };
}

const counterObj = fn();
counterObj.print();
counterObj.add();
counterObj.print();

var myFunc;
{
  const secretValue = 5;
  var myFunc = () => {
    console.log(`My secret value: ${secretValue}`); // string template, es6
    // if you uncomment the below, it will cause an error on the first console log
    // let secretValue = 4;
  };
}
myFunc();
