var express = require('express');
var router = express.Router();

var mysql_dbc = require('../config/database')();
var connection = mysql_dbc.init();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Household Account', body: 'home' });
});




/*
router.get('/withdrawal/:userId/name', function(req, res, next) {
  // 입출금
  res.render('index', { title: 'Household Account - withdrawal', body: 'withdrawal', request: req.params });
});
*/


module.exports = router;
