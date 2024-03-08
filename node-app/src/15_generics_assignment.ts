// Function to return the first element of the array
// array can be or numbers or strings

function returnFirstElement<T>(arr: T[]): T {
    return arr[0];
};

let result1 = returnFirstElement<string>(["Aditya", "Abhishek", "Rahul", "Virat"]);
console.log(result1);
let result2 = returnFirstElement<number>([1, 2, 3, 4, 5]);
console.log(result2);