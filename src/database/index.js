const mongoose = require('mongoose');
const config = require ('../config');

const uri = config.databaseConnectionString;

const connectToDatabase = async () => {
  mongoose.connect(uri)
  .then(() => {
    console.log('connected to mongodb successfully');
  })
  .catch(err => {
    console.error(err);
  })
};

module.exports = connectToDatabase;