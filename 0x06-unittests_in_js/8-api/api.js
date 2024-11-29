// api.js

const express = require('express');
const app = express();
const PORT = 7865;

// Route for the root URL '/'
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Start the server and log a message
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});
