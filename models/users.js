var mongoose = require('mongoose')

// create a r for users model
var childSchema = new mongoose.Schema({
  name: String,
  email: String
})
var usersSchema = new mongoose.Schema({
  // prop: Datatype
  name: String,
  password: Number,
  email: String,
  children: [ childSchema ]
})
var Children = mongoose.model('Children', childSchema)
var children = new Children({
  name: 'Prima',
  email: 'prima@gmail.com'
})
var Users = mongoose.model('Users', usersSchema)
users.children.push({name: 'Kailing', email: 'kailing@gmail.com'})
children.save(function (err) {
  if (err) console.log(err)
})
users.save(function (err) {
  if (err) console.log(err)
})
module.exports = Users
