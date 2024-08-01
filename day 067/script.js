function digitalClock(){
  setInterval(() =>{
    const date = new Date();
    const second = date.getSeconds();
    console.log(second);
  },1000)
}
digitalClock()



function camelToCebab(input){

let kebab = ''
for (let i = 0; i < input.length; i++) { 
  if (input[i] === input[i].toUpperCase()){
    kebab += "-" + input[i].toLowerCase()
  }else{
    kebab += input[i]
  }
}

if(kebab[0] === "-"){
  kebab = kebab.substring(1);
}
return kebab
}

let input = prompt("Enter Word! (CamelCase) ");
let kebabCase = camelToCebab(input);
console.log(kebabCase);


function targetDate(){
  const targetDay = 15;
  setInterval(() =>{
    const currentDate = new Date();
    const currentDay = currentDate.getDay()

    if(currentDay < targetDay){
      console.log(currentDate.toLocaleDateString());
    }else if(currentDay === targetDay){
      console.log("Congrats");
      clearInterval;
    }
  },1000)
}

targetDate()


const date = new Date();
const arr = new Array(7);
arr[0]="Sunday";
arr[1]="Monday";
arr[2]="Tuesday";
arr[3]="Wednesday";
arr[4]="Thursday";
arr[5]="Friday";
arr[6]="Saturday";
let day = arr[date.getDay()];
console.log(day);


let date1 = new Date("2024-3-25");
let date2 = new Date("2024-3-20");
let differenceInMs = date1.getTime() - date2.getTime();
let differenceInDays = Math.abs(differenceInMs / (1000 * 60 * 60 * 24));
console.log(differenceInDays); 
