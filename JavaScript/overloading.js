//function overloading - func with same name but diff parameters
function add() {
    console.log(10 + 10); //0 para
}

function add(a) {
    console.log(a + 10); //1 para
}

function add(a, b) {
    console.log(a + b); //2 para
}

//add() //Nan
//add(10) //Nan
//add(10, 20) //30

//Spread operator
// ... = 0 - n = 10 []
function add(...numbers) {
    let sum = 0;
    for(let num of numbers) {
        sum = sum + num;
    }
    return sum;
}

console.log(add(10));
console.log(add(10, 30));
console.log(add(10, 30, 40));