// instance, blueprint
// a prototype object: a blueprint that holds shared methods and properties for all the instances
// a constructor function: a factory that uses a prototype object(blueprint) to create instances
// prototype property: lives on the constructor function
// __proto__ property: lives on the instance

const arr = new Array();
console.log(Array); // constructor function
console.log(Array.prototype); // prototype object
const arr2 = [1, 2, 3]; // instance
console.log(arr2.__proto__);
console.log(Object.getPrototypeOf(arr));
console.log(Array.prototype.__proto__.__proto__);

// arr.__proto__ = Array.prototype -> Object.prototype -> null

//const arr = new Array();
/**
 * 1. create an object {}
 * 2. Link it to the Array prototype
 * {
 *  __proto__: Array.prototype
 * }
 * 3. initialize it with elements and a length property
 * {
 * 0: 1,
 * 1: 2,
 * 2: 3,
 * length: 3
 *  __proto__: Array.prototype
 * }
 */

function Shape(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
};

const shape = new Shape();
console.log(shape);
shape.move(1, 2);
console.log(shape);
const shape2 = new Shape();

/**
 * constructor function
 * 1. use with new keyword
 * 2. set the properties on "this"
 * 3. don't return
 * 4. capitalize by converntion
 */

// equivalent of const shape = new Shape();
const myShape = Object.create(Shape.prototype);
console.log(myShape);
Shape.call(myShape, 5, 10);
console.log(myShape);

// https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes

// class keyword is a syxtax sugar for constructor function + prototype patterns
/**
 * abstraction
 *  no abstraction in js
 * inheritance
 *  prototype chain
 *  extends
 * polymorphism
 *  overloading: not available in js
 *  overriding: same method name, different implementation in child and parent classes
 * encapsulation
 *  hiding information from the outside of the class, controlling what is visible or what can be modified from the outside
 */

class Person {
  #age;
  static count = 0;
  constructor(name, age) {
    this.name = name;
    this.#age = age;
    Person.count++;
  }

  greeting() {
    console.log(`hello from ${this.name}`);
  }

  set age(newAge) {
    console.log("in age setter method");
    this.#age = newAge;
  }

  get age() {
    console.log("in age getter method");
    return this.#age;
  }

  static getCount() {
    return Person.count;
  }

  // greeting(content){
  //   console.log(`${content} from  ${this.name}`)
  // }
}

const person = new Person("Alice", 18);
console.log(person);
person.greeting();

class Student extends Person {
  constructor(name, age, id) {
    super(name, age);
    this.id = id;
  }

  greeting() {
    console.log(`hello from student ${this.name}`);
  }
}

const student = new Student("Bob", 18, 1);
console.log(student);
student.greeting();

// person.age = 30;
console.log(person.age);

console.log(person.__proto__);
console.log(Person.prototype);

person.__proto__.walk = function () {
  console.log(`${this.name} is walking...`);
};

Person.prototype.run = function () {
  console.log(`${this.name} is running...`);
};

// instance methods
student.walk();
student.run();

// static methods: called directly on the constructor function
// they are usually utility functions
console.log(Person.getCount());

const myArray = [1, 2, 3, 4, 5];
myArray.forEach((value, index, array) => {
  console.log(value, index, array);
});

myArray.__proto__.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb.call(this, this[i], i, this);
  }
};

myArray.myForEach((value, index, array) => {
  console.log(value, index, array);
});
