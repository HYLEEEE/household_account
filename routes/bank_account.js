var express = require('express');
var router = express.Router();

var mysql_dbc = require('../config/database')();
var connection = mysql_dbc.init();



/* GET home page. */
router.get('/', function (req, res, next) {
  // 계좌 리스트
  var sql = 'SELECT * FROM `bank_accounts`';

  connection.query(sql, function (error, results, fields) {
    if (error) {
      console.log(error);
    }
    res.render('index', { title: 'bank_account', body: 'bank_account', dataList: results });
  });
});








router.post('/', function (req, res, next) {
  // 기준 항목
  var sql = 'SELECT * FROM `bank_accounts`';
  console.log(sql);
  connection.query(sql, function (error, results, fields) {
    console.log(results)
    res.send(results)
  });
});



module.exports = router;
