var mongoose = require('mongoose')

// create a r for users model
var usersSchema = new mongoose.Schema({
  // prop: Datatype
  name: String,
  password: Number,
  email: String,
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin'
  }
})

var Users = mongoose.model('Users', usersSchema)

module.exports = Users
