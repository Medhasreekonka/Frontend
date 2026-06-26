class Employee {
    constructor(name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }

    display() {
        console.log(`Details: ${this.name}, ${this.age}`);
    }

    designation() {
        console.log(`Role: ${this.role}`);
    }
}

class Developer extends Employee {
    work() {
        console.log("I do coding.");
    }
}

class Tester extends Employee {
    work() {
        console.log("I do debugging.");
    }
}

// Developer Object
const developer = new Developer("Nithin", 34, "Java Developer");
developer.display();
developer.designation();
developer.work();

console.log("----------------");

// Tester Object
const tester = new Tester("Nikita", 29, "QA Engineer");
tester.display();
tester.designation();
tester.work();


//Method Overriding && Super
class Parent {
    constructor(name) {
        this.name = name;
    }
    marry() {
        console.log("Marry at 28");
    }
}

class child extends Parent {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    marry() {
        super.marry();
        console.log("Marry at 32");
    }
}
let c = new child("Harry", 23);
console.log(c.name);
console.log(c.age);
c.marry()