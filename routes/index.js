var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Household Account', body: 'body' });
});

/*
router.get('/withdrawal', function(req, res, next) {
  // 입출금
  res.render('withdrawal', { title: 'Household Account', body: 'withdrawal' });
});

router.get('/withdrawal/:userId/name', function(req, res, next) {
  // 입출금
  res.render('withdrawal', { title: 'Household Account', body: 'withdrawal', request: req.params });
});
*/

module.exports = router;
