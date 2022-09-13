const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://gojong:1234@boilerplate.wphjzcw.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false 
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))



app.get('/', function (req, res) {
  res.send('Hello World~~안녕하세요')
})

app.listen(5000)