// things to learn - return type for callback functions (different from normal functions)
function secondFunction(num: number, firstFunction: (num: number) => number): void {
    setTimeout(() => {
        console.log(`Second function called`);
        console.log(`The number passed is ${num}`);
        console.log(`Calling callback function with num+10`);
        const ans = firstFunction(num+10);
        console.log(`Callback Function returned ${ans}`);
    }, 5000);
}

function firstFunction(num: number): number {
    console.log(`Callback function called`);
    console.log(`The number passed is ${num}`);
    console.log(`Returning with num + 10`);
    return num+10;
}

secondFunction(15, firstFunction);