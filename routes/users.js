var express = require('express');
var router = express.Router();

var mysql_dbc = require('../config/database')();
var connection = mysql_dbc.init();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});





router.post('/', function (req, res, next) {
  // 기준 항목
  var sql = 'SELECT * FROM `users`';
  console.log(sql);
  connection.query(sql, function (error, results, fields) {
    console.log(results)
    res.send(results)
  });
});


module.exports = router;
