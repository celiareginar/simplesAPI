const moment = require('moment');
const conexao = require('../infra/conexao');

class Agendamento{

    listagem(resp){
        const sql = 'SELECT * FROM agendamento';

        conecao.query(sql, (error, results) => {
            if(error){
                resp.status(400).json(error);
            }
            resp.status(201).json(results);
        });
    };

    buscaPorId(id, resp) {
        const sql = 'SELECT * FROM agendamento HERE id = ?';
        conexao.query(sql, id, (error, result)=> { 
            if(error){
                resp.status(400).json(error);
            }
            resp.status(201).json(result);
        });
    };

    alterar(id, valores, resp){
        const sql = 'UPDATE agendamento SET ? WHERE id =?'

        if(valores.data_servico){
            valores.data_servico = moment(valores.data_servico).format('YYYY-MM-DD');
        }
        conexao.query(sql, [valores, id], (error, result) =>{
            if(error){
                resp.status(400).json(error)
            }
            resp.status(200).json(result)
        });
    };

    inserir(agendamento, resp) {

        const sql = `INSERT INTO AGENDAMENTO SET ?`;
        const data_servico = moment(agendamento.data_servico).format('YYYY-MM-DD');
        const data_agendamento = moment().format('YYYY-MM-DD');
        const agendamentoComData = {...agendamento, data_agendamento, data_servico};

        const ehDataValida = moment(agendamento.data_servico).isSameOrAfter(agendamento.data_agendamento)
        const ehNomeCliente = agendamento.nome_cliente.length > 2

        const validacoes = [
            {
                nome: "data_servico",
                valido: ehDataValida,
                mensagem: "Data do agendamento deve ser igual ou superior a data de hoje"
            },
            {
                nome: "nome_cliente",
                valido: ehNomeCliente,
                mensagem: "O nome do cliente deve ter mais de 3 digitos"
            }
        ];

        const errors = validacoes.filter(campo => !campo.valido);
            if(errors.length > 0){
                return resp.status(400).json(erros);
            }

        conexao.query(sql, agendamentoComData, (error, results) => {
            
            if(error){
                resp.status(400).json(error)
            }

            resp.status(201).json({...agendamentoComData, 
            id: results.insertId})
            
        });
    }
}

module.exports = new Agendamento;
