let name: string = 'name 1';
name = "name 2"
// name = 30;      // type 'number' is not assignable to type 'string'


let test: string | number;      // supports both types
test = "test 1"
test = 30;
// console.log(typeof test);       // number

let myBool = true;
myBool = !myBool;
myBool = !!name;    
console.log(myBool);   
// !! -> is used to convert a value to boolean type and also to check if the value is "truthy" or "falsy".



