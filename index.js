// express set up
var express = require('express')
var app = express()
var port = process.env.PORT || 4000

// mongoose setup
var dbURI = 'mongodb://admin:admin@ds041613.mlab.com:41613/mymdb-wdi'
var mongoose = require('mongoose')
mongoose.connect(dbURI)

// check if our connection is okay
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  // we're connected!
  console.log('really really connected')
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
