const Menu = require('../database/models/menu-model.js');

exports.create = async (req, res) => {
    try { 
        await Menu.create({
            name: req.body.name,
            description: req.body.description,
            value: req.body.value,
            ingredients: req.body.ingredients
        });
    } catch (err) { 
        return res.status(400).send({error: err});
    }

    return res.status(200).send();
};

exports.getAll = async (req, res) => { 
    const items = await Menu.find();
    res.send(items);
}

exports.update = async (req,res) => {
    try {
        await Menu.updateOne({_id: ObjectId(req.params.id)}, {
            $set: {
                name: req.body.name,
                description: req.body.description,
                value: req.body.value,
                ingredients: req.body.ingredients
            }}
        )
    } catch (err) {
        return res.status(400).send({error: err});
    }

    return res.status(200).send();
};

exports.deleteOne = async (req, res) => {
    try { 
        await Menu.deleteOne({_id: ObjectId(req.params.id)});
    } catch (err) {
        return res.status(400).send({error: err});
    }

    return res.status(200).send();
};