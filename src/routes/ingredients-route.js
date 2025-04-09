module.exports = app => { 
    const IngredientsController = require('../controllers/ingredients-controller.js');
    var router = require('express').Router();

    // Create new ingredient 
    router.post('/:id', IngredientsController.create);

    // Get all ingredients
    router.get('/', IngredientsController.getAll);

    // Delete one ingredient 
    router.delete('/:id', IngredientsController.deleteOne)

    app.use("/api/ingredientes", router);
};