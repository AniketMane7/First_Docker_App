const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Docker container');
});

// IMPORTANT: bind to 0.0.0.0, not localhost
app.listen(7000, '0.0.0.0', () => {
  console.log('Server running on port 7000');
});

