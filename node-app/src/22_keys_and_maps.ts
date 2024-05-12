// Records and maps are a clearner way to deal with objects in Ts

type UserRM = {
    id: string,
    age: number
}

type UsersRM = {
    [key: string]: UserRM
}

const users: UsersRM = {
    "123": {
        id: '123',
        age: 25
    },
    "456": {
        id: '456',
        age: 26
    }
}

// hence, this is the way in which we apply types to the keys of an object
// But this is an ugly way to do it
// using records and maps is a better way to do it

// Records
// implementation without records
interface UserRM2 {
    id: string,
    name: string
}

type UsersRM2 = {
    [key: string]: UserRM2
}

const userRecords: UsersRM2 = {
    "123": {
        id: '123',
        name: 'Aditya'
    },
    "456": {
        id: '456',
        name: 'Padwal'
    }
}

// implementation with records
interface UserRM3 {
    id: string,
    name: string
}

type UsersRM3 = Record<string, UserRM3>

const userRecords2: UsersRM3 = {
    "123": {
        id: '123',
        name: 'Aditya'
    },
    "456": {
        id: '456',
        name: 'Padwal'
    }
}

// Maps
// maps give you even fancier way to deal with objects
// it is similar to maps in C++
interface UserRM4 {
    id: string,
    name: string
}

// Initialize an empty map
const userMap = new Map<string, UserRM4>();

// Adding users to the map using .set
userMap.set("123", { id: '123', name: 'Aditya'});
userMap.set("456", { id: '456', name: 'Padwal'});

console.log(userMap.get("123"));

// Records are a TS thing
// Maps are a JS thing
