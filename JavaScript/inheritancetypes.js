//single inheritance
class Animal {
    eat() {
        console.log("Eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Barking");
    }
}

let d = new Dog();
d.eat()
d.bark()

//Multilevel
class Puppy extends Dog {
    cry() {
        console.log("Crying");
    }
}
let p = new Puppy();
p.eat();
p.bark();
p.cry();

//Heirarachial
class Cat extends Animal {
    meow() {
        console.log("Meowing");
    }
}
let c = new Cat();
c.eat();
c.meow();

//Hybrid
//Animal --> dog = single
//Animal --> dog --> Puppy = Multilevel
//Animal --> dog & Cat == Hierarchial