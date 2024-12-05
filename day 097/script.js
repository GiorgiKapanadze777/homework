// A Promise in JavaScript represents a value that might be available now, 
// in the future, or never. It is a way to handle asynchronous operations.

// A Promise has three states:
// 1. Pending: The operation is ongoing and hasn't finished yet.
// 2. Fulfilled: The operation completed successfully, and the promise has a result.
// 3. Rejected: The operation failed, and the promise has a reason for failure.

// Example of creating a Promise:
const myPromise = new Promise((resolve, reject) => {
    // The executor function takes two arguments: resolve and reject.
    // Call resolve() when the operation is successful.
    // Call reject() when the operation fails.
    
    let success = true; // Simulate success or failure of an operation.
    
    if (success) {
        resolve("Operation was successful!"); // Fulfilled state
    } else {
        reject("Something went wrong."); // Rejected state
    }
});

// Using the Promise:
// Use .then() to handle the resolved value of the promise.
// Use .catch() to handle the rejected value of the promise.
// Use .finally() to execute code regardless of the promise's outcome.

myPromise
    .then((result) => {
        // This block runs if the promise is resolved.
        console.log(result); // Logs: "Operation was successful!"
    })
    .catch((error) => {
        // This block runs if the promise is rejected.
        console.error(error);
    })
    .finally(() => {
        // This block always runs, no matter what.
        console.log("Promise is settled (fulfilled or rejected).");
    });
