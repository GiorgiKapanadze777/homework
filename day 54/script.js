// // const me = {
// //     name: 'Luka',
// //     lastName: 'Tskhvaradze',
// //     age: 17,

// //     changeName: function(newName){
// //         me.name = newName;
// //     }
// // }

// // me.changeName('lukson')w

// // console.log(me)

// const car = {
//     name: 'mercedes benz',
//     color: 'black',
//     model: '19e',
//     doors: 4,

//     engine: {
//         horsePower: 109,
//         power: 80,
//         cylinder: 8,
//         km: 185,
//     };

//     getEngine: function(){
//         return car.engine
//     }
// }

// console.log(car.getEngine)

// const form = document.getElementById('form');
// const btn = document.getElementById('btn');

// const accountObj = {}

// btn.addEventListener('click', function(){
//     accountObj.name = form.elements.name.value;
//     accountObj.lastname = form.elements.lastname.value;
//     accountObj.age = form.elements.age.value;

//     console.log(accountObj)
// });

// console.log(accountObj)


// const me = {
//     name: 'luka',
//     lastNmae: 'tskhvaradze',
//     age: 17,
// }

// const you = {
//     name: 'gio',
//     lastName: 'tskhvaradze',
//     age: 15,
// }

// const administrator = {
//     changeName: function(accountObj,newName){
//         accountObj.name = newName
//     },

//     changeLastName: function(accountObj,newLastName){
//         accountObj.lastName = newLastName;
//     },

//     changeAge: function(accountObj,newAge){
//         accountObj.age = newAge;
//     }

// }

// administrator.changeName(me, 'Nia');
// administrator.changeLastName(me, 'dzneladze');

// console.log(me)


//class work:

//1st classwork:
const me = {
    name: 'Sandro',
    age: 16,
    job: 'Software engineer',
    location: 'Tbilisi, Georgia'
};

const you = {
    name: 'Mate',
    age: 15,
    occupation: 'Software engineer',
    job: 'Kutaisi, Georgia'
};


//2nd classwork:
const me = {
    name: 'Sandro',
    age: 16,
    job: 'Software engineer',
    location: 'Tbilisi, Georgia',
    getName: function () {
        return this.name;
    }
};

const you = {
    name: 'Mate',
    age: 15,
    occupation: 'Software engineer',
    job: 'Kutaisi, Georgia',
    getName: function () {
        return this.name;
    }
};

console.log(me.getName());  
console.log(you.getName());  


//5th classwork:
const me = {
    name: 'Sandro',
    age: 16,
    job: 'Software engineer',
    location: 'Tbilisi, Georgia',
    bankAccount: {
        accountNumber: '123456789',
        balance: 5000,
        currency: 'USD'
    },
    getName: function () {
        return this.name;
    }
};

const you = {
    name: 'Mate',
    age: 15,
    occupation: 'Software engineer',
    job: 'Kutaisi, Georgia',
    bankAccount: {
        accountNumber: '987654321',
        balance: 8000,
        currency: 'EUR'
    },
    getName: function () {
        return this.name;
    }
};

console.log(me.bankAccount.balance); 
console.log(you.bankAccount.currency);  

//3rd and 4th classwork: