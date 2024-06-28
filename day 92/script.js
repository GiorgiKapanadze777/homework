class Person {
    #privateProperty;

    constructor(name, age, gender, privateProperty) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.#privateProperty = privateProperty;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }

    get getName() {
        return this.name;
    }

    get ageGroup() {
        return this.age < 18 ? 'Minor' : 'Adult';
    }

    set setName(newName) {
        this.name = newName;
    }

    getPrivateProperty() {
        return this.#privateProperty;
    }

    setPrivateProperty(newValue) {
        this.#privateProperty = newValue;
    }
}

const person1 = new Person('Giorgi', 14, 'male', 'GIORGI777');

console.log(person1.name);  
console.log(person1.age);  
console.log(person1.gender); 

const person2 = new Person('Ana', 12, 'female', 'ano12');
person2.name = 'Anna Maria';
person2.age = 26;

console.log(person2.name);
console.log(person2.age);

const person3 = new Person('Luka', 12, 'male', 'lukito');
const person4 = new Person('Elene', 20, 'female', 'elo3');

person1.greet();
person2.greet();

console.log(person3.getName);

console.log(person1.ageGroup);
console.log(person3.ageGroup);

person4.setName = 'nini';
console.log(person4.getName);

console.log(person1.getPrivateProperty());
person1.setPrivateProperty('newSecret');
console.log(person1.getPrivateProperty());
