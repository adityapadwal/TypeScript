// used for assigning types to objects ???

const user = {
	firstName: "harkirat",
	lastName: "singh",
	email: "email@gmail.com",
	age: 21
}

// we can use interface to assign type to an object
interface user {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}