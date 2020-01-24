const express = require('express');
const port = process.env.PORT || 5000;
const app = express();

// app.use(express.static('_dist'));

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/data', (req, res) => {
  res.send({
    name: 'Kalidas',
    company: 'Company12345',      
  });
});

app.listen(port);

console.log(`SERVER: Listening on port ${port}`);