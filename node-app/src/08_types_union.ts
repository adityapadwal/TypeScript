// Let’s say you want to print the id of a user, which can be a number or a string.
type userId = string | number;

function printUserId(id: userId) {
    console.log(`ID is => ${id}`);
}
// or
// function printUserId(id: (number | string)) {
//     console.log(`ID is => ${id}`);
// }

printUserId(100);
printUserId('1q2w3e');

type Labour = {
    firstName: string; 
    lastName?: string; // optional argument (same as interfaces)
    age?: number | string; 
}

function printLabour(id: Labour) {
    console.log(`First Name of ID => ${id.firstName}`);
    console.log(`Last Name of ID => ${id.lastName}`);
    console.log(`Age of ID => ${id.age}`);
}

printLabour({
    firstName: "Alex",
    lastName: "Johnson",
    age: "21",
});

printLabour({
    firstName: "Will",
    lastName: "Young",
    age: 32,
});

interface worker {
    firstName: string;
    lastName: string;
    age: number | string;
}

function printWorer(id: worker) {
    console.log(`First Name of Worker => ${id.firstName}`);
    console.log(`Last Name of Worker => ${id.lastName}`);
    console.log(`Age of Worker => ${id.age}`);
}

printWorer ({
    firstName: "Will",
    lastName: "Young",
    age: 32,
})
printWorer ({
    firstName: "Will",
    lastName: "Young",
    age: "34",
});