const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'C4608@69e',
    database: 'agenda'
});

module.exports = conexao;
