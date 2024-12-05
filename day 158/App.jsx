import React, { useState, useEffect } from "react";

const quotesArray = [
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    text: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll",
  },
  {
    text: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer",
  },
];

function App() {
  const [quote, setQuote] = useState({ text: "", author: "" });

  // Load a random quote when the page loads
  useEffect(() => {
    generateRandomQuote();
  }, []);

  // Function to generate a random quote
  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    setQuote(quotesArray[randomIndex]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.quoteBox}>
        <p style={styles.text}>"{quote.text}"</p>
        <p style={styles.author}>- {quote.author}</p>
        <button onClick={generateRandomQuote} style={styles.button}>
          New Quote
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
    fontFamily: "Arial, sans-serif",
  },
  quoteBox: {
    maxWidth: "600px",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    textAlign: "center",
  },
  text: {
    fontSize: "1.5rem",
    fontStyle: "italic",
    marginBottom: "10px",
  },
  author: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;
