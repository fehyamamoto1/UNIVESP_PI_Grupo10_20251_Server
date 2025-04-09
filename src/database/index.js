const mongoose = require('mongoose');
const uri = "";

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