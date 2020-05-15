var express = require('express');
var router = express.Router();

var mysql_dbc = require('../config/database')();
var connection = mysql_dbc.init();



router.get('/', function (req, res, next) {
    // 기준 항목
    var sql = 'SELECT * FROM `accounts`';
  
    connection.query(sql, function (error, results, fields) {
      if (error) {
        console.log(error);
      }
      res.render('index', { title: 'standard', body: 'standard', dataList: results });
    });
  });


module.exports = router;
