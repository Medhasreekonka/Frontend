//Abstraction means:
//Showing only the essential features and hiding the internal implementation details
//The user knows what an object does, but not how it does it

//Example without Abstraction
// class coffeeMachine {
//     boilWater() {
//         console.log("Boiling water...");
//     }

//     addCoffee() {
//         console.log("Adding Coffee powder...");
//     }

//     addMilk() {
//         console.log("Adding Milk...");
//     }

//     serveCoffee() {
//         console.log("Coffee Ready!");
//     }
// }

// const machine = new coffeeMachine();
// machine.boilWater();
// machine.addCoffee();
// machine.addMilk();
// machine.serveCoffee();

//Example with Abstraction
class coffeeMachine {
    boilWater() {
        console.log("Boiling water...");
    }

    addCoffee() {
        console.log("Adding Coffee powder...");
    }

    addMilk() {
        console.log("Adding Milk...");
    }

    makeCoffee() {
        this.boilWater();
        this.addCoffee();
        this.addMilk();
        console.log("Coffee Ready!");
    }
}

const machine = new coffeeMachine();
// machine.boilWater();
// machine.addCoffee();
// machine.addMilk();
// machine.serveCoffee();
machine.makeCoffee();