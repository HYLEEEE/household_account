var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser'); 



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var assetRouter = require('./routes/asset');
var bank_accountRouter = require('./routes/bank_account');
var savingRouter = require('./routes/saving');
var standardRouter = require('./routes/standard');
var withdrawalRouter = require('./routes/withdrawal');

var mysql_dbc = require('./config/database')();
var connection = mysql_dbc.init();

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//jquery, bootstrap
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap


출처: https://jizard.tistory.com/102 [GEUMSON]

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({ 
  extended: true 
 })); 
 app.use(bodyParser.json());


app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/withdrawal', withdrawalRouter);
app.use('/asset', assetRouter);
app.use('/bank_account', bank_accountRouter);
app.use('/saving', savingRouter);
app.use('/standard', standardRouter);

mysql_dbc.open(connection);


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
