interface AnotherUser {
    firstName: string;
    lastName: string;
    email?: string; // optional argument (remember syntax)
    age: number;
}

function isLegal(anotherUser: AnotherUser): void {
    if (anotherUser.age > 18) {
        console.log("Legal");
    } else {
        console.log("Illegal");
    }
}
isLegal({
    firstName: "Aditya",
    lastName: "Padwal",
    age: 21
});