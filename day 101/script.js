// Function Declarations and Arrow Functions

function sum(a, b) {
    return a + b;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function isEven(num) {
    return num % 2 === 0;
}

const getArrayLength = (arr) => arr.length;
const calculateArea = (width, height) => width * height;

function doubleArray(arr) {
    return arr.map(num => num * 2);
}

function toUpperCase(str) {
    return str.toUpperCase();
}

const filterOddNumbers = (arr) => arr.filter(num => num % 2 === 0);

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

const countVowels = (str) => {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
};














// Template Literals
const name = 'John';
const greeting = `Hello, ${name}!`;

const multilineString = `This is a multiline string.
It spans multiple lines.
Template literals are great!`;

const a = 5;
const b = 10;
const sumExpression = `The sum of ${a} and ${b} is ${a + b}.`;

const day = 5;
const month = 'July';
const year = 2024;
const formattedDate = `Today's date is ${day} ${month}, ${year}.`;

const protocol = 'https';
const domain = 'example.com';
const path = '/about';
const url = `${protocol}://${domain}${path}`;

const isLoggedIn = true;
const message = `User is ${isLoggedIn ? 'logged in' : 'logged out'}.`;

const street = '123 Main St';
const city = 'Anytown';
const zip = '12345';
const address = `${street}, ${city}, ${zip}`;

const content = 'Welcome to my website';
const html = `<div>
               <h1>${content}</h1>
             </div>`;

const items = ['Item 1', 'Item 2', 'Item 3'];
const list = `<ul>
               ${items.map(item => `<li>${item}</li>`).join('')}
             </ul>`;

const getUserName = () => 'Alice';
const userMessage = `Hello, ${getUserName()}! Welcome back.`;
