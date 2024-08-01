// const person = {
//   name: "Luka",
//   age: 17,
//   city: "Kutaisi",
//   greet: function(){
//       console.log(person.name + " How are you.")
//   },
//   about: {
//       skill: "Programming"
//   }
// }

// const you = {
//   name: "Luka",
//   age: 17,
//   city: "Kutaisi",
//   greet: function(){
//       console.log(person.name + " How are you.")
//   }
// }

// const calculator = {
//   add: function(num1,num2){
//       return num1 + num2;
//   },
//   subtract: function(num1,num2){
//       return num1 - num2;
//   },
//   multiply: function(num1,num2){
//       return num1 * num2;
//   },
//   divide: function(num1,num2){
//       return num1 / num2;
//   },
// }

// console.log(calculator.multiply
//   (5,10))

// console.log(person === you)


// console.log(person["name"])
// console.log(person.name)

// person.age = 18;
// person["age"] = 19;

// person.score = 100;
// person["country"] = "Georgia";

// console.log(person)

// person.greet();




// const form = document.getElementById("form");

// const acc = {};

// form.addEventListener("submit", function(e){
//   e.preventDefault();

//   const username = form.elements.username.value;
//   const password = form.elements.password.value;

//   if(username.length >= 5 && password.length >= 8){
//       acc.username = username;
//       acc.password = password;
//   } else{
//       alert("Username must be 5 chr long and password must be 8");
//   }

//   console.log(acc)

// })

// let seconds = 10;
// let minutes = 1;

// const timer = setInterval(function(){
//   seconds--;
//   if(seconds == 0){
//       minutes--;
//       if(minutes == 0){
//         console.log("get out")
//         clearInterval(timer);
//       }
//       seconds = 10;
//   }
//   console.log(seconds,minutes)
// },1000)




