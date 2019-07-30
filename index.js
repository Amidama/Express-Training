const express = require('express');
const app = express();
const data = require('./data.json');

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.get('/books/:id',(req, res) => {
  // if book.id === req.params.id 
  // return book
  res.json(data.find(book => book.id === req.params.id))
})


app.listen(3000, () => {
  console.log('Start server at port 3000.')
})
