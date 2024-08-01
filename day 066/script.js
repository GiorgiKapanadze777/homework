let userInput = prompt("Enter Number")
while(1 < Number(userInput)){
  userInput--
  console.log(userInput);
}if(userInput <= 1){
  console.log("Time's Up!");
}


function Person(name, age, country) {
  this.name = name;
  this.age = age;
  this.country = country;
}

let user = new Person("gio", 13, "Georgia");
console.log(user);


let factorial = 1
let userNumber = prompt("Enter number for factorial of it")
while(userNumber > 1){
  factorial *= userNumber
  userNumber--
  console.log(factorial);
}