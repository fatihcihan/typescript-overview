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

//Access Modifier
class Car {
    public brand: string;
    private model: string;
    protected year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    public displayDetails(): void {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
}

class SUV extends Car {
    private towCapacity: number;

    constructor(brand: string, model: string, year: number, towCapacity: number) {
        super(brand, model, year);
        this.towCapacity = towCapacity;
    }

    public displayDetails(): void {
        super.displayDetails();
        console.log(`Towing Capacity: ${this.towCapacity} lbs`);
    }
}

const car1 = new Car("Toyota", "Camry", 2020);
console.log(car1.brand); // Public member, accessible
// console.log(car1.model); // Error: 'model' is private and only accessible within class 'Car'
// console.log(car1.year); // Error: 'year' is protected and only accessible within class 'Car' and its subclasses

const suv1 = new SUV("Ford", "Explorer", 2021, 5000);
console.log(suv1.brand); // Public member, accessible
// console.log(suv1.model); // Error: 'model' is private and only accessible within class 'Car'
// console.log(suv1.year); // Error: 'year' is protected and only accessible within class 'Car' and its subclasses
// console.log(suv1.towCapacity); // Error: 'towCapacity' is private and only accessible within class 'SUV'

suv1.displayDetails(); // Accessing public method of the class

//Generics
function reverseArray<T>(array: T[]): T[] {
    return array.reverse();
}

const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers);       // [ 5, 4, 3, 2, 1 ]

const strings = ['apple', 'banana', 'orange'];
const reversedStrings = reverseArray(strings);
console.log(reversedStrings);

//Async
function delayedGreeting(name: string): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('hello ' + name);
            reject('An error occured');
        }, 2000);
    });
};

async function greetAsync() {
    try {
        const greeting = await delayedGreeting('John');
        console.log(greeting);
    } catch (error) {
        console.log(error);
    }
}

greetAsync();