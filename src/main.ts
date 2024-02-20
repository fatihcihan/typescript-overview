// Types
let a: number = 5;
let b: string = 'test';
let c: boolean = true;
let d: any;
let e: number[] = [1, 2, 3, 4, 5];
let f: Array<string> = ['hello', 'world'];
let g: any[] = [1, 'test', true, undefined];
let h: [string, number, boolean] = ['test', 1, false]      // tuple

const loanPayment = 0;
const transferPayment = 1;
const eftPayment = 2;

/* enum Payment { loan, transfer, eft };
let loan = Payment.loan;            // 0
let transfer = Payment.transfer;    // 1
let eft = Payment.eft;              // 2 */

enum Payment { loan = 0, transfer = 1, eft = 2 }

// Type Assertions
let message;
message = 'Hello world';        // type of message any 
let count = (<string>message).length;
let length = (message as string);

//Functions
/* function getAverage(a: number, b: number, c?: number): string {
    let total = a + b;
    let result: number;
    if (c !== undefined) {
        total += c;
        result = total / 3;
    } else {
        result = total / 2;
    }
    return 'result: ' + result;
}

console.log(getAverage(10, 20, 30));
console.log(getAverage(10, 20)); */

// rest parameter example
/* function getAverage(...rest: number[]): string {
    let total = 0;
    let count = 0;

    for (let i = 0; i < rest.length; i++) {
        total += rest[i];
        count++;
    }

    const result = total / count;
    return 'result: ' + result;
}

console.log(getAverage(10, 20, 30, 40, 50));    // as much as we want we can give parameter */

// arrow function representation of getAverage function
const getAverage = (...rest: number[]): string => {
    let total = 0;
    let count = 0;

    for (let i = 0; i < rest.length; i++) {
        total += rest[i];
        count++;
    }

    const result = total / count;
    return 'result: ' + result;
}

//Interface
interface Person {
    name: string;
    age: number;
    greet(): void;
}

class Student implements Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and i'm ${this.age} years old.`);
    }
}

const student1 = new Student("John", 20);
student1.greet();
