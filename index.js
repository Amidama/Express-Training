const express = require('express');
const app = express();
const data = require('./data.json');
const bodyParser = require('body-parser')
const controller = require('./Controller.js');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.send('Hello World');
})

// :id = id is parameter
app.get('/books/:id',(req, res) => {
  // if book.id === req.params.id 
  // return book
  res.json(data.find(book => book.id === req.params.id))
})

// must use this when you have many method (route and controller)
app.get('/controller',(req, res) => controller.sendhello(req, res));
app.get('/hi',(req, res) => controller.sendhi(req, res));

app.post('/books',(req, res) =>{
  console.log(req.body);
  //add to data
  data.push(req.body)
  console.log(data)
  // status = status code
  res.status(200).json(req.body)
})

// PUT is using for update some data
// same post PUT come with path and body
app.put('/books/:id',(req,res) => {
  const updateIndex = data.findIndex(book => book.id === req.params.id);
  Object.assign(data[updateIndex], req.body);
  console.log(data);
  res.json(data);
})

// DELETE using for delete something 
// come with path url and body with out return 
app.delete('/books/:id',(req, res) => {
  const deleteIndex = data.findIndex(book => book.id === req.params.id);
  // splice = delete data (start index , number of index that will be deleted) 
  data.splice(deleteIndex,1);
  console.log(data);
  res.status(204).send();
})

app.listen(3000, () => {
  console.log('Start server at port 3000.')
  controller.obj.funchello()
  console.log(controller.obj.number)
})
