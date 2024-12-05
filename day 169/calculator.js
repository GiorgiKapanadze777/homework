#!/usr/bin/env node

// Get command-line arguments
const args = process.argv.slice(2);

if (args.length !== 3) {
  console.error("Usage: node calculator.js <number1> <operator> <number2>");
  process.exit(1);
}

const [num1, operator, num2] = args;

// Parse numbers
const number1 = parseFloat(num1);
const number2 = parseFloat(num2);

if (isNaN(number1) || isNaN(number2)) {
  console.error("Error: Both arguments must be valid numbers.");
  process.exit(1);
}

// Perform calculation
let result;
switch (operator) {
  case "+":
    result = number1 + number2;
    break;
  case "-":
    result = number1 - number2;
    break;
  case "*":
    result = number1 * number2;
    break;
  case "/":
    if (number2 === 0) {
      console.error("Error: Division by zero is not allowed.");
      process.exit(1);
    }
    result = number1 / number2;
    break;
  case "%":
    result = number1 % number2;
    break;
  default:
    console.error("Error: Unsupported operator. Use +, -, *, /, or %.");
    process.exit(1);
}

// Print result
console.log(`Result: ${result}`);
