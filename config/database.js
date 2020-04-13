var mysql = require('mysql');

module.exports = function () {
  return {
    init: function () {
      return mysql.createConnection({
        host: '192.168.0.8',
        port: '3306',
        user: 'leehy',
        password: 'qwe123!@#',
        database: 'household_account'
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

