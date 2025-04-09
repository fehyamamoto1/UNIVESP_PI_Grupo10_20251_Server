const mongoose = require('mongoose');

const IngredientsSchema = new mongoose.Schema ({
    itemId: {
        type: Number,
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


const MenuSchema = new mongoose.Schema({
  itemId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  ingredients: {
    type: IngredientsSchema,
    required: true
  }
});

const Menu = mongoose.model('Menu', MenuSchema, 'Menu');

module.exports = Menu;