// try {
//     error code
// }
// catch() {
//     error handling
// }
console.log("Program started");
try {
    let a = 10/b; //exception
    console.log(a);
} 
catch(error) {
    console.log("Error occurred and handled", error.message);
}
finally {
    console.log("Program ended");
}

//throw
let age = 2;
try {
    if(age < 18) {
        throw new Error("Age should be greater than 18, not eligible");
    } 
}
catch(e) {
    console.log(e.message);
}
finally {
    console.log("Thank You");
}
