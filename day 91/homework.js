const signUpForm = document.getElementById("signup");
const signInForm = document.getElementById("signin");

const dataBase = [];

class Account {
    #password;

    constructor(email, password) {
        this.email = email;
        this.#password = password;
    }

    get password() {
        return this.#password;
    }
}

signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    dataBase.push(new Account(signUpForm.email.value, signUpForm.password.value));

    alert("Account Successfully created");
});

signInForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const acc = dataBase.find((obj) => obj.email === signInForm.email.value);

    if (acc && acc.password === signInForm.password.value) {
        alert("Successfully signed in");
    } else {
        alert("Sign-in failed. Check your email and password.");
    }
});

// Person Class and Example

class Person {
    #password;

    constructor(name, age, gender, password) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.#password = password;
    }

    greet() {
        console.log(`Hello, ${this.name}`);
    }

    get returnAge() {
        return this.age;
    }

    get ageIn10Years() {
        return this.age + 10;
    }

    set newName(changedName) {
        this.name = changedName;
    }

    get userPass() {
        return this.#password;
    }
}

// Creating an instance for Giorgi Kapanadze
const giorgi = new Person('Giorgi Kapanadze', 14, 'male', 'kapa123');

// Logging details to the console
console.log(giorgi.name);   // Output: Giorgi Kapanadze
console.log(giorgi.age);    // Output: 14
console.log(giorgi.gender); // Output: male

// Changing the name using the setter
giorgi.newName = 'Kapa';

// Logging the new name to the console
console.log(giorgi.name); // Output: Kapa

// Using other methods and properties
giorgi.greet();  // Output: Hello, Kapa
console.log(giorgi.returnAge); // Output: 14
console.log(giorgi.ageIn10Years); // Output: 24
console.log(giorgi.userPass); // Output: kapa123

// Creating additional instances
const person2 = new Person('kapa', 14, 'male', 'kapa123');
const person3 = new Person('gela', 14, 'male', 'gela123');

// Logging details of additional instances to the console
console.log(person2.name);   // Output: Jorj
console.log(person2.age);    // Output: 16
console.log(person2.gender); // Output: male

console.log(person3.name);   // Output: Zuka
console.log(person3.age);    // Output: 16
console.log(person3.gender); // Output: male
