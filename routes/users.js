var express = require('express')
var router = express.Router()

var Users = require('../models/users')

// All the GET requests
router.get('/', function (req, res) {
  Users.find({}, function (err, usersArr) {
    if (err) throw new Error(err)
    res.render('users/index', {
      usersArr: usersArr,
      name: 'test'
    })
  })
}).get('/new', function (req, res) {
  res.render('users/new')
}).get('/:id', function (req, res) {
  res.send('ROUTES GOES HERE INSTEAD')
}).get('/:id/edit', function (req, res) {
  var usersdata = {
    name: 'glen chooooooo',
    password: 'glen123'
  }

  res.render('users/edit', usersdata)
  // res.send('edit user\'s ' + req.params.id + ' details')
})

// the only POST request
router.post('/', function (req, res) {

  var newUsers = new Users({
    name: req.body.newusers.name,
    password: req.body.newusers.password
  })

  newAdmin.save(function (err) {
    if (err) throw new Error(err)
  })
  res.send(req.body)
})

// only PUT request
router.put('/:id', function (req, res) {
  res.send('SHOULDVE GONE HERE')
})

// DELETE ROUTES
router.delete('/:id', function (req, res) {
  res.send('delete user' + req.params.id)
})

module.exports = router
