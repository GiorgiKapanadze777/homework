const promise1 = new Promise((resolve, reject) => {
    resolve("Hello, World!");
});

promise1.then(result => {
    console.log(result); // Output: Hello, World!
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved after 2 seconds");
    }, 2000);
});

promise2.then(result => {
    console.log(result); // Output: Resolved after 2 seconds
});

const promise3 = new Promise((resolve, reject) => {
    resolve("First");
});

promise3.then(result => {
    return result + " -> Second";
}).then(finalResult => {
    console.log(finalResult); // Output: First -> Second
});

const promise4 = new Promise((resolve, reject) => {
    resolve("Stage 1");
});

promise4.then(result => {
    console.log(result); // Output: Stage 1
    return "Stage 2";
}).then(result => {
    console.log(result); // Output: Stage 2
    return "Stage 3";
}).then(result => {
    console.log(result); // Output: Stage 3
});

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Rejected after 1 second");
    }, 1000);
});

promise5.catch(error => {
    console.log(error); // Output: Rejected after 1 second
});

function printMessages() {
    setTimeout(() => {
        console.log("One");
        setTimeout(() => {
            console.log("Two");
            setTimeout(() => {
                console.log("Three");
            }, 1000);
        }, 1000);
    }, 1000);
}

printMessages();
// Output: 
// One (after 1 second)
// Two (after 2 seconds)
// Three (after 3 seconds)
function printMessages() {
    setTimeout(() => {
        console.log("One");
        setTimeout(() => {
            console.log("Two");
            setTimeout(() => {
                console.log("Three");
            }, 1000);
        }, 1000);
    }, 1000);
}

printMessages();
// Output: 
// One (after 1 second)
// Two (after 2 seconds)
// Three (after 3 seconds)

const promise7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Message 1");
    }, 1000);
});

promise7.then(result => {
    console.log(result); // Output: Message 1
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Message 2");
        }, 1000);
    });
}).then(result => {
    console.log(result); // Output: Message 2
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Message 3");
        }, 1000);
    });
}).then(result => {
    console.log(result); // Output: Message 3
});

const promise8 = new Promise((resolve, reject) => {
    const success = true; // Change to false to test rejection
    if (success) {
        resolve("Successfully resolved");
    } else {
        reject("Rejected with an error");
    }
});

promise8.then(result => {
    console.log(result); // Output if resolved: Successfully resolved
}).catch(error => {
    console.log(error); // Output if rejected: Rejected with an error
});

const promise9 = new Promise((resolve, reject) => {
    resolve("Resolved with a message");
});

promise9.then(result => {
    console.log(result); // Output: Resolved with a message
});

const promise10 = new Promise((resolve, reject) => {
    resolve(1);
});

promise10.then(result => {
    console.log(result); // Output: 1
    return result + 1;
}).then(result => {
    console.log(result); // Output: 2
    return result + 1;
}).then(result => {
    console.log(result); // Output: 3
});
