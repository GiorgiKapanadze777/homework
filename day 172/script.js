// Create a custom event
const customEvent = new Event('myCustomEvent');

// Add an event listener for the custom event
document.addEventListener('myCustomEvent', () => {
  console.log('Custom event triggered!');
});

// Trigger the event
document.dispatchEvent(customEvent);
// Output: "Custom event triggered!"

// Create a custom event with data
const dataEvent = new CustomEvent('dataEvent', {
    detail: { message: 'Hello, world!', id: 123 },
  });
  
  // Add an event listener for the custom event
  document.addEventListener('dataEvent', (e) => {
    console.log('Event Data:', e.detail);
  });
  
  // Trigger the event
  document.dispatchEvent(dataEvent);
  // Output: "Event Data: { message: 'Hello, world!', id: 123 }"

  // Add multiple listeners for the same event
document.addEventListener('multiEvent', () => {
    console.log('Listener 1 executed.');
  });
  document.addEventListener('multiEvent', () => {
    console.log('Listener 2 executed.');
  });
  
  // Trigger the event
  const multiEvent = new Event('multiEvent');
  document.dispatchEvent(multiEvent);
  // Output:
  // "Listener 1 executed."
  // "Listener 2 executed."

  // Define a listener function
const removableListener = () => {
    console.log('This listener will be removed.');
  };
  
  // Add the listener to the event
  document.addEventListener('removeEvent', removableListener);
  
  // Trigger the event
  document.dispatchEvent(new Event('removeEvent')); // Output: "This listener will be removed."
  
  // Remove the listener
  document.removeEventListener('removeEvent', removableListener);
  
  // Trigger the event again
  document.dispatchEvent(new Event('removeEvent')); // No output

  // Add a one-time listener
document.addEventListener(
    'onceEvent',
    () => {
      console.log('This listener will only run once.');
    },
    { once: true }
  );
  
  // Trigger the event twice
  document.dispatchEvent(new Event('onceEvent')); // Output: "This listener will only run once."
  document.dispatchEvent(new Event('onceEvent')); // No output
  