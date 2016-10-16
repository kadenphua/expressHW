// all packages installed
var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var users_routes = require('./routes/users')

// start of the implementation
var app = express()
var port = 4000
// connects to our mongo database
mongoose.connect('mongodb://localhost/expresshw')
mongoose.Promise = global.Promise

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/users', users_routes)

app.listen(port)
console.log('Server running at http://localhost:' + port + '/')
