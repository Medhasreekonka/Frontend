//function declaration
function greet() {
    console.log("Hello, Everyone from function declaration");
}
greet()

//function expression
let greet1 = function() {
    console.log("Hello Everyone from function expression");
}
greet1();

//Arrow function
let greet2 = () => {
    console.log("Hello Everyone from Arrow expression");
}
greet2();

//IIFE -- Immediately Invoked FUnction Expression (also called as Anonymous function)
(function() {
    console.log("Hello Everyone from IIFE");
})();