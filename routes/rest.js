var express = require('express');
var router = express.Router();
var users = require('./users');

// rest
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
