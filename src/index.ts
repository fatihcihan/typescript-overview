/* let name: string = 'name 1';
name = "name 2"
// name = 30;      // type 'number' is not assignable to type 'string' */

import { resolve } from "path";


/* let test: string | number;      // supports both types
test = "test 1"
test = 30;
// console.log(typeof test);       // number */

/* let myBool = true;
myBool = !myBool;
myBool = !!name;
console.log(myBool);
// !! -> is used to convert a value to boolean type and also to check if the value is "truthy" or "falsy". */

/* let surName: any = "surname ";      // any -> can be any type
// any -> (for example, integration with external libraries or working with existing JavaScript code) can be useful

let time: undefined;    // only specifies the type of the time variable as undefined
console.log(time);      // undefined */

// Primitive types -> boolean, number, string, null, undefined, symbol
// Complex types -> array, tuple, object, function, class, enum


// Object
/* const person: {
    name: string,
    surname: string,
    age: number,
    test: "test1" | "test2"
} = {
    name: "John",
    surname: "Done",
    age: 30,
    test: "test1"                // ---> a string type, but can only take the values "test1" or "test2".
} */


let a: 10 | 20 | 30 = 10;
// a = 25  // --> Type '25' is not assignable to type '30 | 10 | 20'

// Array 
// const arr = [];      // --> any
// const arr: string[] = [];      // --> string array
// const arr = [] as string[]   // --> string array
// const arr: (number | boolean | string)[] = ["test", 30, true];
// const arr = [] as Array<number | string>;    // as -> in TypeScript, the as operator is used when we want to declare the element types of an array
// console.log(arr); 

// Type checking
let num: number | undefined;

if (typeof num === 'number') {
    console.log('num value:', num);
} else {
    console.log('undefined');
}

// Tupple
/* const myArr: [string, string, number, boolean] = ['John', 'Doe', 30, true];

const [name, surname, age, isActive] = myArr;
// myArr[1].toFixed();     // error because string
// myArr[2].toFixed(); */

// Functions
/* function doSomething() { }                // --> returns void
function myFunc() { return 25; }          // --> returns number
const value = myFunc();                   // value --> number */

// const testValue = myFunc() as string      // error because myFunc returns number

//@ts-ignore  --> ts-ignore, closes the type of the following line, classic javascript but not recommended

/* function doSomething(): number {
    return 30;
} */

/* function doSomething(): [number, string] {
    return [30, 'done']
}

const myVal = doSomething();      // myVal --> [number,string] */

/* function logPerson(name, surname, age) { }  // error --> name is declared but its value is never read  */

/* function logPerson(name: string, surName: string, age: number) {
    console.log({ name, surName, age });
}

logPerson('John', 'Doe', 30);   // everything's fine --> { name: 'John', surName: 'Doe', age: 30 } */

/* async function asyncLogPerson(name: string, surName: string, age: number) {
    return 25;
}

// asyncLogPerson('John', 'Doe', 30);   // ---> returns promise<number>
asyncLogPerson('John', 'Doe', 30).then((val => {      // ---> (parameter) val:number
    console.log(val);       // ---> 25
})); */

/* function logPerson(name: string, surName: string, age: number): Promise<number> {
    return new Promise((resolve, reject) => {
        resolve(25);
    });
};

logPerson('John', 'Doe', 30); */


/* function logPerson(params: { name: string, surname: string, age: number }): Promise<number | string> {
    return new Promise((resolve, reject) => {
        return resolve(25);
    });
};

logPerson({ name: 'John', surname: 'Doe', age: 30 }).then(val => {
    console.log(val);
}); */

/* function test(name: string, once: number) {
    for (let i = 0; i < once; i++) {
        console.log(name);
    }
}
test('John', 10); */


//Type Aliasing
/* type Person = {
    name: string,
    surname: string,
    age: number,
    state?: string      // ? ---> optional
}

const obj: Person = {
    name: 'John',
    surname: 'Doe',
    age: 30
} */

/* type Colors = 'red' | 'green' | 'blue';

const myColor: Colors = 'blue';
const colorArr: Colors[] = [
    "blue", "green", "red"
]

colorArr.forEach(color => {
    console.log(color);
}); */

/* type Colors = 'red' | 'green' | 'blue';
type CustomColors = 'magenta' | 'cyan' | 'turqoise';

type AllColors = Colors | CustomColors;
const colorArray: AllColors[] = ['blue', "green", "red", "cyan", "magenta", "turqoise"]
console.log(colorArray); */

// const colorArr: (Colors | CustomColors)[] = ['blue', "green", "red", "cyan", "magenta", "turqoise"];

/* type Person = {
    name: string,
    surname: string,
    age: number,
};

type Dog = {
    age: number,
    sort: string
};

// DogPerson :DD
type DogPerson = Person & Dog   // we can combine two objects and make one object.

const personDog: DogPerson = {
    name: 'John',
    surname: 'Doe',
    age: 30,
    sort: 'Great dane'
} */

/* const myMap = new Map<string, string>();
myMap.set('John', 'Doe');   // ---> everything's okey
// myMap.set('John', 30);  // ---> error */



