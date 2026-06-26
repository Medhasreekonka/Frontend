//same method name, call behave in many forms
//poly = many, morphism = forms
//one interface/method exhibiting many forms

//Types of polymorphism in JS
//Method Overriding (Runtime polymorphism)
//Method Overloading (not directly supported by JS)
class Animal {
    makeSound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Dog barks");
    }
}


class Cat extends Animal {
    makeSound() {
        console.log("Cat meows");
    }
}

const dog = new Dog();
const cat = new Cat();

dog.makeSound();
cat.makeSound();