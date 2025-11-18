let num: number = 1;
let str: string = "1";
let bool: boolean = true;
let u: undefined = undefined;
let n: null = null;

let numArr: number[] = [1, 2, 3, 4, 5, 6];

let person: { id: number; name: string } = {
  id: 1,
  name: "alice",
};

// type alias
type Id = number | string;
type TPerson = { id: Id; name: string };

let person2: TPerson = {
  id: 2,
  name: "bob",
};

// interface
interface IPerson {
  id: number | string; // union type
  name: string;
}

let person3: IPerson = {
  id: "1",
  name: "charlie",
};

// literal type
type Direction = "north" | "south" | "east" | "west";
let direction: Direction = "east";

// inersection type
type TStudent = TPerson & {
  studentId?: number;
};

let student: TStudent = {
  id: 1,
  name: "a",
  studentId: 1,
};

interface IStudent extends IPerson {
  studentId: number;
}

type AddFn = (x: number, y: number) => number;
type AddFn2 = {
  (x: number, y: number): number;
};

// function add(x: number, y: number): void {
//   // return x + y
//   console.log(x + y);
// }

const add4: AddFn2 = function (x: number, y: number) {
  return x + y;
  // console.log(x + y);
};

const add2: AddFn = (x, y) => x + y;

const add3: typeof add2 = (x, y) => x + y;

enum Direction2 {
  North,
  South,
  East,
  West,
}

let d: Direction2 = Direction2.East; // 2
console.log(d); // 2

function reducer(direction: Direction2) {
  switch (direction) {
    case Direction2.East:
      //...
      return;
    case Direction2.West:
      // ...
      return;
  }
}

// generic type
function toNumberArray(x: number, y: number): number[] {
  return [x, y];
}

function toStringArray(x: string, y: string): string[] {
  return [x, y];
}

function toArray<T>(x: T, y: T): T[] {
  return [x, y];
}

toArray<number>(1, 2);
toArray<string>("1", "2");

// tuple - array with defined length and type of elements
let arr: [string, number, boolean] = ["todo title", 1, true];

// Partial, Omit, Record, Readonly
