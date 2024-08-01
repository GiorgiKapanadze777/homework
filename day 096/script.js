const task1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task 1 complete");
    }, 2000);
});

task1.then(message => {
    console.log(message); // Output after 2 seconds: Task 1 complete
});


const task2 = new Promise((resolve, reject) => {
    reject("Task 2 failed");
});

task2.catch(error => {
    console.error(error); // Output: Task 2 failed
});


const task3 = new Promise((resolve) => {
    resolve(5);
});

task3
    .then(number => {
        return number * 2; // Double the number
    })
    .then(doubledNumber => {
        console.log(doubledNumber); // Output: 10
    });


    function task4() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("First");
            }, 2000);
        }).then(message => {
            console.log(message); // Output after 2 seconds: First
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log("Second"); // Output 1 second after "First": Second
                    resolve();
                }, 1000);
            });
        });
    }
    
    task4();


    function task5() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Task 3 failed");
            }, 2000);
        }).catch(error => {
            console.error(error); // Output after 2 seconds: Task 3 failed
        });
    }
    
    task5();

    function task6() {
        const delay = Math.floor(Math.random() * 5000) + 1000; // Random delay between 1000 and 5000 ms
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Task 1 complete");
            }, delay);
        });
    }
    
    task6().then(message => {
        console.log(message); // Output after a random delay: Task 1 complete
    });

    function task7() {
        const delay1 = Math.floor(Math.random() * 3000) + 1000; // Random delay between 1000 and 3000 ms
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("First");
            }, delay1);
        }).then(message => {
            console.log(message); // Output after the first random delay: First
            const delay2 = Math.floor(Math.random() * 3000) + 1000; // Another random delay between 1000 and 3000 ms
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log("Second"); // Output after the second random delay: Second
                    resolve();
                }, delay2);
            });
        });
    }
    
    task7();

    function task8() {
        const delay = Math.floor(Math.random() * 4000) + 1000; // Random delay between 1000 and 4000 ms
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Task 3 failed");
            }, delay);
        }).catch(error => {
            console.error(error); // Output after a random delay: Task 3 failed
        });
    }
    
    task8();

    function task9() {
        const delay = Math.floor(Math.random() * 5000) + 1000; // Random delay between 1000 and 5000 ms
        return new Promise((resolve) => {
            setTimeout(() => {
                const randomNumber = Math.random();
                if (randomNumber > 0.5) {
                    resolve("Task 1 complete");
                } else {
                    resolve("Task 1 was quick");
                }
            }, delay);
        });
    }
    
    task9().then(message => {
        console.log(message); // Output after a random delay: "Task 1 complete" or "Task 1 was quick"
    });
    
    function task10() {
        const delay = Math.floor(Math.random() * 4000) + 1000; // Random delay between 1000 and 4000 ms
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const randomNumber = Math.random();
                if (randomNumber < 0.3) {
                    reject("Task 3 failed");
                } else {
                    resolve("Task 3 complete");
                }
            }, delay);
        });
    }
    
    task10()
        .then(message => {
            console.log(message); // Output after a random delay: Task 3 complete
        })
        .catch(error => {
            console.error(error); // Output after a random delay: Task 3 failed
        });
    