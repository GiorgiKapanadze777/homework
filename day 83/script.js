//foreach loop
// const myArray = [1,2,3,4,5,6];
// result = 0;
// myArray.forEach(function(value){
//   result += value
// })
// console.log(result);

//foreach manul

// function manualForEach(arr, func){
//   for(let i = 0; i < arr.length; i++){
//     func(arr[i]);
//   }
// }
// const numbers = [1,2,3,4,5,6]
// let sum = 0

// manualForEach(numbers, function(value){
//   sum += value
// })

// console.log(sum);

//manualReduce გადაეცემა სამი პარამეტრი arr,func(sum, nextElement), startingValue

function manualReduce(arr,func,startingValue){
    let result = startingValue
    for(let i = 0; i < arr.length; i++){
      result = func(result, arr[i])
    }
    return result
  }
  
  // const numbers = [1,2,3]
  // const result = manualReduce(numbers, function(result, nextElement){
  //   return result + nextElement
  // }, 3)
  // console.log(result);
  
  const strr = "mate".split("")
  const result = manualReduce(strr, function(result,nextElement){
    return result + nextElement
  }, "lileko")
  console.log(result);