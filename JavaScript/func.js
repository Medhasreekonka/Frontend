//add 2 numbers - declared
function add() {
    let c = 10 + 20;
    console.log(c)
}
add()

//find square of a number
function square() {
    let num = 2;
    res = num * num;
    console.log(res);
}
square()

//find area and perimeter of circle
function circle() {
    let r = 4;
    let pi = 3.14;
    area = pi * r * r 
    perimeter = 2 * pi * r; 
    console.log(area, perimeter);
}
circle()

//function to find simple interest
function interest() {
    let p = 10000;
    let r = 5;
    let t = 2;

    si = (p*r*t) / 100
    console.log(si);
}
interest();

//square of a number
//1. w/o i/p and w/o op
function square1() {
    let num = 10;
    let res = num * num;
    console.log(res);
}
square1();

//2. with i/p and w/o op
function square2(num) {
    let res = num * num;
    console.log(res);
}
square2(4);

//3. w/o i/p and with op
function square3() {
    let num = 5;
    return num * num;
}
console.log(square3());

//4. with i/p and with op
function square4(num) {
    return num * num;
}

let res = square4(6);

console.log(`The square of the number is ${res}`);