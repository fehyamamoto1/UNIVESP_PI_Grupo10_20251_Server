module.exports = app => { 
    const IngredientsController = require('../controllers/ingredients-controller.js');
    var router = require('express').Router();

    router.post('/adicionar', IngredientsController.create);

    router.post('/repor/:id', IngredientsController.updateQuantity);

    router.post('/atualizarNivelAlerta/:id', IngredientsController.updateAlertLevel);

    router.get('/listarTodos', IngredientsController.getAll);

    router.delete('/deletar/:id', IngredientsController.deleteOne)

    app.use("/api/ingredientes", router);
};