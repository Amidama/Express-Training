const express = require('express');
const app = express();
const data = require('./data.json');
const controller = require('./Controller.js');

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => controller.getMethodHello(req, res));
app.get('/books/:id', (req, res) => controller.getMethod(req, res));
app.post('/books', (req, res) => controller.postMethod(req, res));
app.put('/books/:id', (req, res) => controller.putMethod(req, res))
app.delete('/books/:id', (req, res) => controller.deleteMethod(req, res));


app.listen(3000, () => {
  console.log('Start server at port 3000.')
})
