const EventEmitter = require('events');
const emitter = new EventEmitter();

// Define and listen for the "start" event
emitter.on('start', () => {
    console.log('The start event has occurred.');
});

// Emit the "start" event
emitter.emit('start');


// Define and listen for the "userJoined" event
emitter.on('userJoined', (name) => {
    console.log(`Welcome, ${name}!`);
});

// Define listeners for the "newOrder" event
emitter.on('newOrder', (order) => {
    console.log(`Order received: ${order}`);
});

emitter.on('newOrder', (order) => {
    console.log(`Sending confirmation email for order: ${order}`);
});

emitter.on('newOrder', (order) => {
    console.log(`Updating inventory for order: ${order}`);
});

// Emit the "newOrder" event
emitter.emit('newOrder', 'Order123');
// Define a "shutdown" event listener that listens only once
emitter.once('shutdown', () => {
    console.log('System is shutting down...');
});

// Emit the "shutdown" event multiple times
emitter.emit('shutdown');
emitter.emit('shutdown');