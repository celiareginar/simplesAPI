const mysql - require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'C3608@46e',
    database: 'agenda'
});

module.exports = conexao;
