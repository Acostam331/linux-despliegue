const express = require('express');
const app = express();

const PORT = 3000;

// Define the Hello World endpoint
app.get('/', (req, res) => {
  res.send('Hola amigos desde mi API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
