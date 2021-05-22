const Agendamento = require("../models/Agendamento");

module.exports = app => {

    app.get('/agendamento', (req, resp) => {
        Agendamento.listagem(resp);
    });

    app.get('/agendamento/:id', (req, resp) => {
        const id = parseInt(req.params.id)
        Agendamento.buscarPorId(id, resp)

    });

    app.put('/agendamento/:id', (req, resp) =>{
        const id = parseInt(req.params.id);
        const agendamento = req.body;

        Agendamento.alterar(id, agendamento)
        })
    })

    app.post('/agendamento', (req, resp) => {

        const agendamento = req.body;

        Agendamento.inserir(agendamento, resp);
        
    });
};
