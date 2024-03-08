function getFirstElement(arr: (string | number)[]) {
    return arr[0];
}

const el = getFirstElement([1, 2, 3]);
console.log(el); // logs 1
const pl = getFirstElement(["Aditya", "Abhishek", "Rahul"]);
console.log(pl); // logs Aditya

// problems in this approach

// 1.User can send different types of values in inputs, without any type errors
// const el = getFirstElement([1, 2, '3']);

// 2. Typescript isn’t able to infer the right type of the return type
// const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
// console.log(el.toLowerCase())

// to Overcome the above prolem, we use Generics
// Generics
// Generics enable you to create components that work with any data type while still providing compile-time type safety.

function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
console.log(output1); // logs myString
let output2 = identity<number>(100);
console.log(output2); // logs 100