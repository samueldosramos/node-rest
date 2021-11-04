const mysql = require('mysql');

const conexao = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'agenda-petshop',
  port: 3306,
});

module.exports = conexao;
