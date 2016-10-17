var mongoose = require('mongoose')

var usersSchema = new mongoose.Schema({
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
