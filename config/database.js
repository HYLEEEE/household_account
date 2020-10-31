var mysql = require('mysql');
var configInfo = require('./configInfo')();
var db_account = configInfo.db_account();

module.exports = function () {
  return {
    init: function () {
      return mysql.createConnection({

        /*
        // 내부
        host: '172.30.1.16',
        port: '3306',
        user: 'leehy',
        password: 'qwe123!@#',
        database: 'household_account'

        */
        // 외부
        host: db_account.host,
        port: db_account.port,
        user: db_account.user,
        password: db_account.password,
        database: db_account.database,
        multipleStatements: true
      })
    },

    open: function (con) {
      con.connect(function (err) {
        if (err) {
          console.error('mysql connection error :' + err);
        } else {
          console.log('mysql is connected successfully.');
        }
      })
    }
  }
};

