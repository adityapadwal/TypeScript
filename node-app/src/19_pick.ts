// Pick allows you to create a new type / interface by selecting properties from an existing type / interface

interface CompleteUserDetails {
    id: number,
    name: string,
    email: string,
    password: string,
    address: string
}

// Lets say that, only the name, address and password of the user can be updated
// so we create a new type for it and pick on the properties (of CompleteUserDetails) that can be updated

type updatedUserDetails = Pick<CompleteUserDetails, 'name' | 'password' | 'address'>

function UpdateCompleteUserDetails(userDetails: updatedUserDetails) {
    console.log("Name to be updated: ", userDetails.name);
    console.log("Address to be upated: ", userDetails.address);
    console.log("Password to be updated: ", userDetails.password);
}

UpdateCompleteUserDetails({name: "Aditya", password: "12345abcde", address: "Pune"});
// UpdateCompleteUserDetails({name: "Aditya", password: "12345abcde", address: "Pune", email: "test@gmail.com", id: 12345});
