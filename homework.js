// class Hamster
class Hamster {
    // declare attribut
     owner = " ";
     price = 15;
     // set the name from parameter in constroctor
     constructor(name) {
        this.name = name;
     }
     get getName(){
        return this.name;
     }
     wheelRun() {
        console.log("squeak squeak"); 
     }
     eatFood (){
        console.log("nibble nibble");
     }
     getPrice() {
        return this.price;
     }
}

// Create ab instance of the clas Hamster

// const hamster = new Hamster("hams");

// Testing wheelRun() method
// hamster.wheelRun();

//Testing eatFood() method
// hamster.eatFood();

//Testing getPrice() method
// console.log(`${hamster.getName} cost: ${hamster.getPrice()}`);

//-------------------- class Person

class Person {
    age = 0;
    height = 0;
    weight = 0;
    mood = 0;
    hamsters = [];
    bankAccount = 0;
    // declare the constroctor
    constructor(name) {
        this.name = name;
    }
    get getAge() {
        return this.age;
    }
    get getName() {
        return this.name;
    }
    
    get getWeight() {
        return this.weight;
    }
    greet() {
        console.log(`greet ${this.name}`)
    }
    eat() {
        this.weight++;
        this.mood++
    }
    exercise() {
        this.weight--;
    }
    getUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood++;
        this.bankAccount += 5;
    }
    byHamster(Hamster) {
        // return hamster.getName;

        //push Hamster object into hamsters array
        this.hamsters.push(hamster);

        // increment mood by 10
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();

    }
}

//1. Instantiate a new Person named Timmy
const person = new Person("Timmy");

//2. Timmy is 6 years old
person.age = 6;
console.log(`${person.getName} age is ${person.getAge}`);

//3. Timmy eat five time
for(i = 0; i < 5; i++) {
    person.eat();
}
console.log(`His weight is: ${person.weight} and his is mood: ${person.mood}`);

//4. Have Timmy exercise 5 times
for(i = 0; i < 5; i++) {
    person.exercise();
}
console.log(`${person.getName} weight after exercise is: ${person.weight}`);

// 5. let age Timmy 9 years
person.age = 9;

//6. Create a hamster maned "Gus"
const hamster = new Hamster("Gus");
// console.log(person.byHamster());

//7. Set Gus owner to the string Timmy
person.owner = hamster.owner = person.getName;
console.log(person.owner)

//8. have Timmy buy "Gus"
console.log(`${person.getName} bought ${hamster.getName} at $${hamster.getPrice()}`);

// testing the byHarmster() method
person.byHamster(hamster);
console.log(person.hamsters[0]);

//9 Age Timmy 15 years
person.age = 15;

//10. Have Timmy eat twice
for(i = 0; i < 2; i++) {
    person.eat();
}

console.log(`${person.getName} just ate twice is: ${person.weight} and is mood is ${person.mood}`);

//11. Timmy exercise twice
for(i = 0; i < 2; i++) {
    person.exercise();
}
console.log(`${person.getName} just exercised twice is: ${person.weight} and is mood is ${person.mood}`);
