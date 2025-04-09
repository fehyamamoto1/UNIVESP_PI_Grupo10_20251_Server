module.exports = app => { 
    const IngredientsController = require('../controllers/ingredients-controller.js');
    var router = require('express').Router();

    // Create new ingredient 
    router.post('/ingredientes/:id', IngredientsController.create);

    // Get all ingredients
    router.get('/ingredientes', IngredientsController.getAll);

    // Delete one ingredient 
    router.delete('/ingredientes/:id', IngredientsController.deleteOne)

    app.use("/", router);
};