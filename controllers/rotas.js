const Agendamento = require("../models/Agendamento");

module.exports = app => {

    app.get('/agendamento', (req, resp) => {
        Agendamento.listagem(resp);
    });

    app.post('/agendamento', (req, resp) => {

        const agendamento = req.body;

        Agendamento.inserir(agendamento, resp);
        
    });
};