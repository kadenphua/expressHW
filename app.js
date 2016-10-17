var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var admin_routes = require('./routes/admin')

mongoose.connect('mongodb://localhost/expresshw')
mongoose.Promise = global.Promise

var app = express()
var port = 4000

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/admin', admin_routes)

app.listen(port)
console.log('Server running at http://localhost:' + port + '/')
