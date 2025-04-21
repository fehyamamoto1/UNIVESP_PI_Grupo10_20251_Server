module.exports = app => { 
    const DiningTableController = require('../controllers/diningtables-controller.js');
    var router = require('express').Router();

    router.get('/listarMesas', DiningTableController.getAll);

    router.get('/:id/buscarMesa', DiningTableController.get);

    router.post('/:id/realizarPedido', DiningTableController.create);
    
    router.post('/:id/inserirItems', DiningTableController.update);
    
    router.post('/:id/fechar', DiningTableController.close);

    app.use("/api/mesa", router);
};