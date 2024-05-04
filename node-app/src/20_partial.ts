// Partial
// Partial allows us to create a new type/interface with all the contents of the existing type/interface marked as optional

// Let's say that we have an interface that has all employee details
interface employeeDetails {
    id: number,
    name:string,
    age: number,
    email: string,
    password: string,
    address: string,
    salary: number
};

let employee1: employeeDetails = {
    id: 1234,
    name: "Aditya",
    age: 21,
    email: "a@gmail.com",
    password: "test",
    address: "Pune",
    salary: 12000
}

// creating a new type, that has only the properties of the employee that can be updated
type updateableEmployeeDetails = Pick<employeeDetails, "name" | "age" | "password" | "address" | "salary">

type flexibleUpdateableEmployeeDetials = Partial<updateableEmployeeDetails>

function updatedEmployee(user: flexibleUpdateableEmployeeDetials) {
    //updating user details (not updating password and address)
    user.name = "Abhishek",
    user.age = 15,
    user.salary = 20000
}

console.log(employee1);
updatedEmployee(employee1);
console.log(employee1);