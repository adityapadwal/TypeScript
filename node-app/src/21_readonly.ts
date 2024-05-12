/*
So, in Js/Ts we can change the internal contents of an array or an object
even if it is a const.
*/

const arr = [1, 2, 3];
arr[0] = 4;
console.log(arr); // [4, 2, 3]

const obj = { a: 1, b: 2 };
obj.a = 3;
console.log(obj); // { a: 3, b: 2 }

// This can be prevented in Ts by using readonly
type UserBasicDetails = {
    name: string;
    age: number;
}

const basicUser: UserBasicDetails = {
    name: 'Aditya',
    age: 22
}
console.log(basicUser); // { name: 'Aditya', age: 22 }
basicUser.name = 'Abhishek';
console.log(basicUser); // { name: 'Abhishek', age: 22 }

// using readOnly
type ReadonlyUserBasicDetails = {
    readonly name: string;
    readonly age: number;
}

const ReadonlyBasicUser: ReadonlyUserBasicDetails = {
    name: 'Aditya',
    age: 22
}
console.log(ReadonlyBasicUser); // { name: 'Aditya', age: 22 }
// ReadonlyBasicUser.name = 'Abhishek'; // error

// now, the thing is that, if we have large number of elements inside the typee / interface
// we need to add readOnly multiple times
// so an alternative way to represent the whole object is readonly

const ReadonlyBasicUser2: Readonly <ReadonlyUserBasicDetails> = {
    name: 'Aditya',
    age: 22
}

// Article: https://projects.100xdevs.com/tracks/ts-hard/ts-hard-4