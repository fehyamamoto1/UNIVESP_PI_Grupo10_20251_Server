const Ingredients = require('../database/models/ingredients-model.js');

// Create new Ingredient 
exports.create = (req, res) => {
    // Validate Ingredient 

    // Associate ID

    // Create Ingredient 

    // Save ingredient in database 
};

exports.getAll = async (req, res) => { 
    const items = await Ingredients.find();
    
    // transform into view?
    itemViewModel = items;

    res.send(itemViewModel);
}

exports.deleteOne = async (req, res) => {
    // Get item ID 

    // Delete from database 
};