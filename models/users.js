var mongoose = require('mongoose')

// create a r for users model
var usersSchema = new mongoose.Schema({
  // prop: Datatype
  name: String,
  password: Number
})

var Users = mongoose.model('Users', usersSchema)

module.exports = Users
