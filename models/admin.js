var mongoose = require('mongoose')

var adminSchema = new mongoose.Schema({
  name: String,
  password: Number,
  email: String
})

var Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin
