let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let btn = document.getElementById("btn")


btn.addEventListener("click", function(){
  alert(Number(num1.value) + Number(num2.value))
  console.log(true && true);   
  console.log(true && false); 
  console.log(false && true); 
  console.log(false && false);
  console.log(true || true);  
  console.log(true || false);
  console.log(false || true); 
  console.log(false || false);
})


