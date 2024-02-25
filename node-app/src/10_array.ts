function findMax(arr: number[]):number {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(findMax([1, 2, 3]));

// Given a list of users, filter out the users that are legal (greater than 18 years of age)

interface User2 {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: User2[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ]));