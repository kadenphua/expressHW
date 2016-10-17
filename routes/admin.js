var express = require('express')
var router = express.Router()

var Admin = require('../models/admin')

router.get('/', function (req, res) {
  Admin.find({}, function (err, adminArr) {
    if (err) throw new Error(err)
    res.render('admin/index', {
      adminArr: adminArr,
      name: 'test'
    })
  })
}).get('/new', function (req, res) {
  res.render('admin/new')
}).get('/:id', function (req, res) {
  Admin.findById(req.params.id, function (err, admin) {
    res.send(admin)
  })
}).get('/:id/edit', function (req, res) {
  var admindata = {
    name: 'glen chooooooo',
    password: 'glen123',
    email: 'glen@gmail.com'
  }

  res.render('admin/edit', admindata)
  // res.send('edit user\'s ' + req.params.id + ' details')
})

// the only POST request
router.post('/', function (req, res) {

  var newAdmin = new Admin({
    name: req.body.newadmin.name,
    password: req.body.newadmin.password,
    email: req.body.newadmin.email
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
