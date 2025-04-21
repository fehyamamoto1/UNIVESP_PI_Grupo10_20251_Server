const Ingredients = require('../database/models/ingredients-model.js');

exports.create = async (req, res) => {
    var itemQuantity = req.body.quantity;
    var itemAlertLevel = req.body.alertLevel;
    var itemMeasurementUnit = req.body.measurementUnit;
    
    if (itemMeasurementUnit == "kg") {
        itemAlertLevel = itemAlertLevel * 1000;
        itemQuantity = itemQuantity * 1000;
        itemMeasurementUnit = "g";
    }
    
    try {
        await Ingredients.create({ name: req.body.name, quantity: itemQuantity, measurementUnit: itemMeasurementUnit, alertLevel: itemAlertLevel });
    } 
    catch (err) {
        return res.status(400).send({ error: err});
    }

    return res.status(200).send();
};

exports.updateQuantity = async (req, res) => {
    try {
        await Ingredients.updateOne({_id: ObjectId(req.params.id)}, {$set: {quantity: req.body.quantity}});
    }
    catch (err) { 
        return res.status(400).send({error: err});
    }
    
    return res.status(200).send();
};

exports.updateAlertLevel = async (req, res) => {
    try {
        await Ingredients.updateOne({_id: ObjectId(req.params.id)}, {$set: {alertLevel: req.body.alertLevel}});
    }
    catch (err) { 
        return res.status(400).send({error: err});
    }
    
    return res.status(200).send();
}

exports.getAll = async (req, res) => { 
    const items = await Ingredients.find();
    res.send(items);
};

exports.deleteOne = async (req, res) => {
    var ingredientId = req.params.id;
    try {
        await Ingredients.deleteOne({_id: ObjectId(ingredientId)})
    } catch (err){
        return res.status(400).send({error: err});
    }

    return res.status(200).send();
};