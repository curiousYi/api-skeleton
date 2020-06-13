var express = require('express');
var router = express.Router();
var { Animal } = require('../db');


router.get('/animals', function(req, res, next) {
  Animal.findAll().then(animals => res.json(animals))
  .catch(next)
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
