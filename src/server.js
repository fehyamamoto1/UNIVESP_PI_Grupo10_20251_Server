const express = require("express");
const connectToDatabase = require('./database');
const Ingredients = require('./database/models/ingredients-model.js');

const app = express();
app.use(express.json());

connectToDatabase();

app.get('/ingredientes', async (req, res) => {
    const items = await Ingredients.find();
    res.send(items);
});

app.listen(3000);