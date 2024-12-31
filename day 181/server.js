const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// In-memory array to store user data
let users = [];

// Endpoint: / or /index.html - return HTML code
app.get(['/', '/index.html'], (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Server Example</title>
        </head>
        <body>
            <h1>Welcome to the Server!</h1>
        </body>
        </html>
    `);
});

// Endpoint: /users with GET method - return the users array
app.get('/users', (req, res) => {
    res.json(users);
});

// Endpoint: /users with POST method - add user to the array
app.post('/users', (req, res) => {
    const newUser = req.body;
    if (newUser && Object.keys(newUser).length > 0) {
        users.push(newUser);
        res.status(201).json({ message: 'User added successfully!', user: newUser });
    } else {
        res.status(400).json({ message: 'Invalid user data' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});