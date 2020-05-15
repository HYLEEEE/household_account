var express = require('express');
var router = express.Router();

var mysql_dbc = require('../config/database')();
var connection = mysql_dbc.init();




router.get('/', function (req, res, next) {
    // 자산현황
    res.render('index', { title: 'asset', body: 'asset' });
  });



module.exports = router;
