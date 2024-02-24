// Thing to learn - How to give types to arguments of a function
function greet(name: string) {
    console.log(`Hello, you entered ${name}`);
}
greet("Aditya");
// greet(10); error

// Things to learn - How to assign a return type to a function+
function sumFunction(a: number, b: number): number {
    return a+b;
}
const ans: number = sumFunction(7, 8);
console.log(ans);

// Thing to learn - Type inference
function isEligible(num: number) {
    if(num < 18) {
        return false;
    } else {
        return true;
    }
}
console.log(isEligible(16));

