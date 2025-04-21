const mongoose = require('mongoose');

const IngredientsSchema = new mongoose.Schema({
  name: {
    type: String
  },
  quantity: {
    type: Number
  },
  measurementUnit: {
    type: String
  },
  alertLevel: {
    type: Number
  }
}, {versionKey: false});

const Ingredients = mongoose.model('Ingredients', IngredientsSchema, 'Ingredients');

module.exports = Ingredients;