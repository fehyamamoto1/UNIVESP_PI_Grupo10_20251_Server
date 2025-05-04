const mongoose = require('mongoose');

const TableItem = new mongoose.Schema({
    itemId: {
        type: String
    }, 
    itemName: {
        type: String
    },
    quantity: { 
        type: Number
    }
}, { _id: false });

const DiningTableSchema = new mongoose.Schema({
  diningTableId: {
    type: Number
  },
  status: {
    type: String
  },
  itemList: {
    type: [TableItem]
  },
  totalValue: {
    type: Number
  },
  orderDate: {
    type: Date
  } 
},{versionKey: false});

const DiningTable = mongoose.model('DiningTables', DiningTableSchema, 'DiningTables');

module.exports = DiningTable;