var express = require('express');
var router = express.Router();

var mysql_dbc = require('../config/database')();
var connection = mysql_dbc.init();


/* GET home page. */
router.get('/', function (req, res, next) {

  // 입출금
  if(req.query.year == undefined){
    var today = new Date();
    year = today.getFullYear();
    month = today.getMonth()+1;
    month = month<10 ? '0'+month : month;  
  } else {    
    year = req.query.year;
    month = req.query.month;
  }
  date_obj = {'year':year, 'month':month}
  date_str = year + '-' + month;

  var sql = 'SELECT `withdrawals`.*, \
   `standards`.`name`, `bank_accounts`.`bank_name`, \
   `bank_accounts`.`account_type`, `users`.`username` \
   FROM `withdrawals` \
   JOIN `users` ON `withdrawals`.`user_id`=`users`.`id` \
   JOIN `standards` ON `withdrawals`.`standard_id`=`standards`.`id` \
   JOIN `bank_accounts` ON `withdrawals`.`bank_account_id`=`bank_accounts`.`id` \
   WHERE date_format(`created_at`, "%Y-%m") = "' + date_str + '" \
   ORDER BY `id` DESC';

  connection.query(sql, function (error, results, fields) {
    if (error) {
      console.log(error);
    }
    obj = {'results': results, 'date':date_obj}
    res.render('index', { title: 'withdrawal', body: 'withdrawal', dataList: obj});
    //    res.send(ejs.render(data, {prodList: results}));    
  });

});




router.post('/add', function (req, res, next) {
    // 입출금 추가
    var standard_id = req.body.standard_id;
    var user_id = req.body.user_id;
    var contents = req.body.contents;
    var dealer_select_type = req.body.dealer_select_type;
    var dealer = req.body.dealer;
    var bank_account_id = req.body.bank_account_id;
    var price = req.body.price;
    var price_type = req.body.price_type;
  
    var sql;
    if(dealer_select_type == 1){
      sql = `INSERT INTO withdrawals\
      ( standard_id, user_id, contents, dealer, bank_account_id, price, price_type) \
      VALUES \
      ('${standard_id}', '${user_id}', '${contents}', (SELECT name FROM bank_accounts WHERE id='${dealer}'), '${bank_account_id}', '${price}', '${price_type}')`;  
    } else {
      sql = `INSERT INTO withdrawals\
      ( standard_id, user_id, contents, dealer, bank_account_id, price, price_type) \
      VALUES \
      ('${standard_id}', '${user_id}', '${contents}', '${dealer}', '${bank_account_id}', '${price}', '${price_type}')`;  
    }

    console.log(sql);
  
    connection.query(sql, function (error, results, fields) {
      console.log(results)
      res.send(results) 
    });
  });
  


router.post('/update/:id', function (req, res, next) {
    id = req.params.id;

    // 입출금 추가
    var standard_id = req.body.standard_id;
    var user_id = req.body.user_id;
    var contents = req.body.contents;
    var dealer = req.body.dealer;
    var bank_account_id = req.body.bank_account_id;
    var price =  req.body.price ? req.body.price : 0;
    var price_type = req.body.price_type;

    const params = [standard_id, user_id, contents, dealer, bank_account_id, price, price_type, id];

    var sql = `UPDATE withdrawals SET \
    standard_id="?", \
    user_id="?", \
    contents="?", \
    dealer= "?", \
    bank_account_id="?", \
    price="?", \
    price_type="?" \
    WHERE id=?`;

    console.log(sql);
  
    connection.query(sql, params, function (error, results, fields) {
      console.log(results)
      res.send(results) 
    });

});


router.post('/delete/:id', function (req, res, next) {
  id = req.params.id;

  var sql = 'DELETE FROM `withdrawals` \
  WHERE `id`='+id;

  console.log(sql);

  connection.query(sql, function (error, results, fields) {
    console.log(results)
    res.send(results) 
  });

});




/* GET home page. */
router.post('/:id', function (req, res, next) {
  id = req.params.id;
  console.log("id:", id)
  // 입출금
  if(req.query.year == undefined){
    var today = new Date();
    year = today.getFullYear();
    month = today.getMonth()+1;
    month = month<10 ? '0'+month : month;  
  } else {    
    year = req.query.year;
    month = req.query.month;
  }
  date_obj = {'year':year, 'month':month}
  date_str = year + '-' + month;

  var sql = 'SELECT `withdrawals`.*, \
   `standards`.`name`, `bank_accounts`.`bank_name`, \
   `bank_accounts`.`account_type`, `users`.`username` \
   FROM `withdrawals` \
   JOIN `users` ON `withdrawals`.`user_id`=`users`.`id` \
   JOIN `standards` ON `withdrawals`.`standard_id`=`standards`.`id` \
   JOIN `bank_accounts` ON `withdrawals`.`bank_account_id`=`bank_accounts`.`id` \
   WHERE date_format(`created_at`, "%Y-%m") = "' + date_str + '" \
   AND `withdrawals`.`id` = ' + id +' \
   ORDER BY `id` DESC';

  console.log(sql);
  connection.query(sql, function (error, results, fields) {
    if (error) {
      console.log(error);
    }
    obj = {'results': results, 'date':date_obj}
    res.send(obj);
  });

});



module.exports = router;
