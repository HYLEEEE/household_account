var express = require('express');
var router = express.Router();


var mysql_dbc = require('../config/database')();
var connection = mysql_dbc.init();

mysql_dbc.open(connection);

router.get('/dbtest', function(req, res){
  var sql = 'SELECT * FROM `withdrawals`';

  connection.query(sql, function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results);    
  });
  

});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Household Account', body: 'home' });
});

router.get('/withdrawal', function(req, res, next) {
  // 입출금
  res.render('index', { title: 'withdrawal', body: 'withdrawal' });
});

router.get('/account', function(req, res, next) {
  // 계좌 리스트
  res.render('index', { title: 'account', body: 'account' });
});

router.get('/saving', function(req, res, next) {
  // 적금
  res.render('index', { title: 'saving', body: 'saving' });
});

router.get('/standard', function(req, res, next) {
  // 기준 항목
  res.render('index', { title: 'standard', body: 'standard' });
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
