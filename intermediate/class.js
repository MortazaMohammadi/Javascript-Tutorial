console.log('class in js');
class human{
     name = "Default Name"; // default value
     age = 0;               // default value
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // instance method
    greet(){
        console.log(`Hello, my name is ${this.name}`);
    }
    get theage(){
        return this.age;
    }
    set theage(value){
        this.age = value;
    }
    static specie = 'human species'; // static property
    // static method
    static species(){
        return this.specie
        // return this.age; // This line is incorrect, it should return a string or a value related to the class


    }
}
console.log(human.species()); // Calls the static method
console.log('static method and property: is related to the class on instance of the class you can access without creating its instance');

const h = new human("Alice", 25);
h.greet(); // Calls the instance method
console.log(h.theage); // "25"
h.age = 30; // Sets the age using the setter
console.log(h.theage); // "30"
console.log(h.name); // "Alice"
h.age = 20
console.log(h.theage); // "20"

console.log('instance method and property: is related to the instance of the class');
console.log(h.specie); // undefined, because specie is a static property    
console.log(h.species()); // "human species", because species is a static method