const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'hakmoon.co2gndkwlfxp.ap-northeast-2.rds.amazonaws.com',
  user     : 'admin',
  password : 'dlwnsqja1!',
  database : 'biking'
});


connection.connect(function(err){
    if(!!err){
        console.log(err)
    }
    else{
        console.log('Connected')
    }
})

module.exports = connection;
