//creating object
let student = {
    name: "Rahul",
    age: 23,

    study() {
        console.log("Rahul studies");
    }
};
console.log(student.name);
console.log(student.age);
student.study();

//class
class Stu {
    name = "Abhi";
    age = 23

    study() {
        console.log("Studies");
    }
}
let s = new Stu();
console.log(s.name);
console.log(s.age);
s.study();

//constructor
class Stud {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    study() {
        console.log(this.name + " Studies");
    }
}
let s1 = new Stud("Joe", 22);
console.log(s1.name);
console.log(s1.age);
s1.study();
let s2 = new Stud("Ria", 21);
console.log(s2.name);
console.log(s2.age);
s2.study();