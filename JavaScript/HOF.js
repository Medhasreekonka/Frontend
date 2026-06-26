//Takes another function as an argument (input)
function order(callprepare, callserve) {
    console.log("1. Order Food");
    callprepare();
    callserve();
}

//call back functions
function prepare() {
    console.log("2. Preparation started");
}

function servecustomer() {
    console.log("3. Enjoy your food");
}

order(prepare, servecustomer);


function greet(name) {
    console.log(`Hello, ${name}!`);
}

function processUser(name, callback) {
    callback(name);
}

processUser("Alice", greet); //Output: Hello, Alice!


//HOF ' s
const numbers = [1, 2, 3, 4, 5, 6];
//Step 1
const doubled = numbers.map(num => num * 2);
//Step 2
const filtered = numbers.filter(num => num > 5);
//Step 3: Find the sum of remaining numbers
const total = filtered.reduce((sum, num) => sum + num, 0);
console.log("Doubled:", doubled);
console.log("Filtered:", filtered);
console.log("Total:", total);
