interface UserDetails {
    name: string,
    age: number
}

function sumOfAge(user1: UserDetails, user2: UserDetails) {
    return user1.age + user2.age;
}

const age = sumOfAge(
    {
        name: "Aditya",
        age: 20
    },
    {
        name: "Abhishek",
        age: 10
    }
);

console.log(age);