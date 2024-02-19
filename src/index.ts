/* let name: string = 'name 1';
name = "name 2"
// name = 30;      // type 'number' is not assignable to type 'string' */


/* let test: string | number;      // supports both types
test = "test 1"
test = 30;
// console.log(typeof test);       // number */

/* let myBool = true;
myBool = !myBool;
myBool = !!name;
console.log(myBool);
// !! -> is used to convert a value to boolean type and also to check if the value is "truthy" or "falsy". */

let surName: any = "surname ";      // any -> can be any type
// any -> (for example, integration with external libraries or working with existing JavaScript code) can be useful

let time: undefined;    // only specifies the type of the time variable as undefined
console.log(time);      // undefined

// Primitive types -> boolean, number, string, null, undefined, symbol
// Complex types -> array, tuple, object, function, class, enum


// Object

const person: {
    name: string,
    surname: string,
    age: number,
    test: "test1" | "test2"
} = {
    name: "John",
    surname: "Done",
    age: 30,
    test: "test1"                // ---> a string type, but can only take the values "test1" or "test2".
}


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

const myArr: [string, string, number, boolean] = ['John', 'Doe', 30, true];

const [name, surname, age, isActive] = myArr;
// myArr[1].toFixed();     // error because string
// myArr[2].toFixed();