var express = require('express');
var router = express.Router();


var mysql_dbc = require('../config/database')();
var connection = mysql_dbc.init();

mysql_dbc.open(connection);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Household Account', body: 'home' });
});

router.get('/withdrawal', function(req, res, next) {
  // 입출금
  var sql = 'SELECT * FROM `withdrawals`';

  connection.query(sql, function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    res.render('index', { title: 'withdrawal', body: 'withdrawal', dataList: results });
//    res.send(ejs.render(data, {prodList: results}));    
  });
  
});

router.get('/bank_account', function(req, res, next) {
  // 계좌 리스트
  var sql = 'SELECT * FROM `bank_accounts`';

  connection.query(sql, function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    res.render('index', { title: 'bank_account', body: 'bank_account', dataList: results  });
  });
});

router.get('/saving', function(req, res, next) {
  // 적금
  res.render('index', { title: 'saving', body: 'saving' });
});

router.get('/standard', function(req, res, next) {
  // 기준 항목
  var sql = 'SELECT * FROM `accounts`';

  connection.query(sql, function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    res.render('index', { title: 'standard', body: 'standard', dataList: results });
  });
});

router.get('/asset', function(req, res, next) {
  // 자산현황
  res.render('index', { title: 'asset', body: 'asset' });
});


/*
router.get('/withdrawal/:userId/name', function(req, res, next) {
  // 입출금
  res.render('index', { title: 'Household Account - withdrawal', body: 'withdrawal', request: req.params });
});
*/


module.exports = router;
