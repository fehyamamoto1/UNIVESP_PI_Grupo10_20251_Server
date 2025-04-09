const mongoose = require('mongoose');

const IngredientsSchema = new mongoose.Schema({
  itemId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  measurementUnit: {
    type: String,
    required: true
  }
});

const Ingredients = mongoose.model('Ingredients', IngredientsSchema, 'Ingredients');

module.exports = Ingredients;