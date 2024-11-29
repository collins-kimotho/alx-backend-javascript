// api.js

const express = require('express');
const app = express();
const PORT = 7865;

// Route for the root URL '/'
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Route for the cart page with validation for the :id parameter (must be a number)
app.get('/cart/:id', (req, res) => {
  const id = req.params.id;
  const isValidId = /^[0-9]+$/.test(id); // Check if the id is a number
  
  if (isValidId) {
    res.send(`Payment methods for cart ${id}`);
  } else {
    res.status(404).send('Not Found');
  }
});

// Start the server and log a message
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});
