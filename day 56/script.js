// let userPrompt = prompt("Do you want to join GOA? Yes/No")
// if (userPrompt == "Yes"){
//   let userAge = prompt("How old are you?")
//     if(userAge >= 18){
//       alert("You are in group 4")
//     } else{
//       alert("You are in group 3")
//     }
// }else{
//   alert("MATRICEL SOU BEEDDDDD")
// }


// let num = 1

// while(num < 10){
//   console.log(num);
//   num++
// }


//დავალება : მომხმარებელს შეეკითხეთ თუ  სურს თუ არა გოაში შემოსვლა გოაში შემოსვლა იქამდე სანამ მისი პასუხი არიქნება კი


// let userPrompt = prompt("YOU WANT TO BECOME CHAD AND JOIN GOA? yes/no")

// while(userPrompt != "yes"){
//   userPrompt = prompt("YOU WANT TO BECOME CHAD AND JOIN GOA?")
// }

// if( userPrompt == "yes"){
//   console.log("chad welcome");
// }

// for(let i = 1 ; i <= 100000; i++){
//    console.log(i + ". I love goa");
// }


// let userInput = Number(prompt("Enter Number"))
// if(userInput >= 0){
//   console.log(userInput * -1);
// }else if (userInput < 0){
//   console.log(userInput * -1)
// }

let myArr = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < myArr.length; i++) {
    sum += myArr[i];
}
let average = sum / myArr.length;

console.log("average:", average);