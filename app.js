const express = require('express');
const path = require('path');
const app = express();

// Static files are in the public folder
app.use(express.static('public'));

// Single-page app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
