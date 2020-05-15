var express = require('express');
var router = express.Router();

var mysql_dbc = require('../config/database')();
var connection = mysql_dbc.init();


/* GET home page. */
router.get('/', function (req, res, next) {

      // 입출금
  var year = req.query.year;
  var month = req.query.month;
  var date_str = year + '-' + month;

  var sql = 'SELECT `withdrawals`.*, `accounts`.`account_name`, `bank_accounts`.`bank_account_name`, `bank_accounts`.`account_type`, `users`.`username` FROM `withdrawals` JOIN `users` ON `withdrawals`.`user_id`=`users`.`id` JOIN `accounts` ON `withdrawals`.`account_id`=`accounts`.`id` JOIN `bank_accounts` ON `withdrawals`.`bank_account_id`=`bank_accounts`.`id` WHERE date_format(`created_at`, "%Y-%m") = "' + date_str + '" ORDER BY `id` DESC';

  connection.query(sql, function (error, results, fields) {
    if (error) {
      console.log(error);
    }
    res.render('index', { title: 'withdrawal', body: 'withdrawal', dataList: results });
    //    res.send(ejs.render(data, {prodList: results}));    
  });

});


router.get('/withdrawal/add', function (req, res, next) {
    // 입출금 추가
    var account_id = req.query.account_id;
    var user_id = req.query.user_id;
    var contents = req.query.contents;
    var dealer = req.query.dealer;
    var bank_account_id = req.query.bank_account_id;
    var price = req.query.price;
    var price_type = req.query.price_type;
  
    var sql = 'INSERT INTO `withdrawals`( `account_id`, `user_id`, `contents`, `dealer`, `bank_account_id`, `price`, `price_type`) VALUES (' + account_id + ', ' + user_id + ', " + contents + ", " + dealer + ", ' + bank_account_id + ', ' + price + ', ' + price_type + ')';
  
    connection.query(sql, function (error, results, fields) {
      if (error) {
        console.log(error);
      }
      res.render('index', { title: 'withdrawal', body: 'withdrawal', dataList: results });
      //    res.send(ejs.render(data, {prodList: results}));    
    });
  });
  



module.exports = router;
