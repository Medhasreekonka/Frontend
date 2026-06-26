//Primitve
//Number
let a = 10;
console.log(typeof a,a);//number 10

a = "GAMANA"
console.log(typeof a, a); //String GAMANA

//JS is a loosely typed language - multiple statements in a line requires semicolon
 let b = 3.16;
 const pi = 3.14;
 console.log(typeof b, b);

//String - " ", ' '. ` `
let str = "ankit"
console.log(str, typeof str)
//My namr is " " aged arounf 10, pi value os 3.14
console.log("My name is " + str + "aged around " + a + ", pi value is " + pi);
console.log("My name is" , str) //one space

//ES6 string literals `${pi}`
console.log(`My name is ${str} aged around ${a}, pi value is ${pi}`)

//boolean
let isvalid = true;
console.log(typeof isvalid, isvalid)

//undefined
let name;
console.log(name);

let z = -10/0;
// z = 0/10 
// 0/0 is a NaN 
console.log(z)

//null
let payment = null;
console.log(payment)

//bigint
let g = 100n
console.log(typeof g, g)

//symbol
let x = Symbol("user");
console.log(x)
console.log(typeof x, x)


//complex
//Array - []
let arr = [1,2,3];
console.log(arr, arr[1])

//object
let person = {
    name: "Alice",
    age: 30
};
console.log(person.name);
//console.log(person.age);
console.log(Object.keys(person));
console.log(person)

//function
function add() {
    c = 3+3;
    console.log(c);
}
add() //call the function