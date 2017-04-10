// express set up
var express = require('express')
var app = express()
var port = process.env.PORT || 4000

// mongoose setup
var dbURI = 'mongodb://localhost/mymdb'
var mongoose = require('mongoose')
mongoose.connect(dbURI, function () {
  console.log('db is connected')
})

// setup body parser
var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('homepage')
})

// require the movies_controller
var moviesController = require('./controllers/movies_controller')
app.use(moviesController)

app.use(function (req, res) {
  res.send('error found')
})

app.listen(port, function () {
  console.log('app is running at ' + port)
})
