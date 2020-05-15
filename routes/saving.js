var express = require('express');
var router = express.Router();

var mysql_dbc = require('../config/database')();
var connection = mysql_dbc.init();



router.get('/', function (req, res, next) {
    // 적금
    res.render('index', { title: 'saving', body: 'saving' });
  });


module.exports = router;
