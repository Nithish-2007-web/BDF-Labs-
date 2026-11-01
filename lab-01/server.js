const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Welcome to my Node.js and Express server!');
});

app.get('/about', (req, res) => {
  res.status(200).json({
    name: 'T.Nithish Kumar',
    section: 'S-16'
  });
});

app.get('/time', (req, res) => {
  res.status(200).json({
    currentTime: new Date()
  });
});

app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
