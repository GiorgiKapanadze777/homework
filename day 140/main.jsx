import React, { Component } from "react";

// 1. Create the Error Boundary class component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // 2. This method catches any error in child components
  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service here
    console.log("Error caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 3. Display fallback UI when there's an error
      return <h1>Something went wrong.</h1>;
    }

    // Render child components if there's no error
    return this.props.children;
  }
}

// Test component to simulate an error
const BuggyComponent = () => {
  const handleClick = () => {
    // Simulate an error when the button is clicked
    throw new Error("A simulated error!");
  };

  return <button onClick={handleClick}>Click to cause an error</button>;
};

const App = () => {
  return (
    <div>
      <h1>React Error Boundary Example</h1>
      {/* Wrap components in the ErrorBoundary */}
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
};

export default App;
