//Array 2 ways
// []
let stu_info = [102, "Abhi", 8.9, true]
console.log(stu_info)
console.log(stu_info[1]) // Abhi

//Array constructor
let arr = new Array(1, 2, 3, 4);
console.log(arr);

//Add elements
arr.push(5); //end
arr.push(6,7)
console.log(arr);
arr.unshift(0);
console.log(arr); //beginning

//Remove elemenents
arr.pop(); //end
arr.shift(); //beginning
console.log(arr);

//splice & slice
let nums = [10, 20, 30, 40, 50]
console.log(nums);
//array.splice(start index, deleteCount, item1, item2, .....)
//nums.splice(5, 0, 60, 70, 80);
//console.log(nums.splice(2,3));
//nums.splice(2, 1, 100)
console.log(nums);

let arr1 = nums.slice(1, 4);
//let arr1 = nums.slice(3, 5);
console.log(arr1);
console.log(nums);

let fruits = ["apple", "mango", "banana", "cherry"]
console.log(fruits.indexOf("banana"));
console.log(fruits.includes("cherry"));
console.log(fruits.sort());
console.log(fruits.reverse());

//forEach iteration
fruits.forEach(fruit => console.log(fruit));
//fruits.forEach(fruit => process.stdout.write(fruit + " "));
let numbers = [1, 2, 3];
numbers.forEach(i => console.log(`The number is ${i * 5}`));

//Map
let digits = [1, 2, 3]
let squared = digits.map(num => num * num);
console.log(squared);
console.log(digits);

//filter
let digit = [1, 2, 3, 4, 5];
let evenNum = digit.filter (num => num % 2 === 0);
console.log(evenNum);
console.log(digit);

//reduce
let numb = [1, 2, 3, 4];
let sum = numb.reduce((acc, num) => acc + num, 0);
console.log(sum);

//concat
let arra = fruits.concat(digits);
console.log(arra);

let words = ["Hello", "world", 0.899];
let sentence = words.join(" - ");
console.log(sentence);

let fru = ["apple", "orange", "melon", "mago", "cherry"];
let [first, second, third] = fru;
console.log(first);
console.log(second);
console.log(third)