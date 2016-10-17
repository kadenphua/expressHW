var mongoose = require('mongoose')

// create a r for admin model
var adminSchema = new mongoose.Schema({
  // prop: Datatype
  name: String,
  password: Number,
  email: String
})

var Users = mongoose.model('Users', adminSchema)

module.exports = Users
