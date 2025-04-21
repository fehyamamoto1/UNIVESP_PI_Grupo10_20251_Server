module.exports = app => { 
    const MenuController = require('../controllers/menu-controller.js');
    var router = require('express').Router();

    router.post('/criarItem', MenuController.create);

    router.post('/atualizarItem/:id', MenuController.update);

    router.get('/listarItens', MenuController.getAll);

    router.delete('/deletarItem/:id', MenuController.deleteOne)

    app.use("/api/menu", router);
};