const mongoose = require('mongoose');

const IngredientsSchema = new mongoose.Schema ({
    ingredientId: {
        type: String
    },
    quantity: {
        type: Number
    },
    measurementUnit: { 
        type: String
    }
}, { _id: false });


const MenuSchema = new mongoose.Schema({
  name: {
    type: String
  },
  imageUrl: {
    type: String
  },
  description: {
    type: String
  },
  value: {
    type: Number
  },
  ingredients: {
    type: [IngredientsSchema],
  }
}, {versionKey: false});

const Menu = mongoose.model('Menu', MenuSchema, 'Menu');

module.exports = Menu;