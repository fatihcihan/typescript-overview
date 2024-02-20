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