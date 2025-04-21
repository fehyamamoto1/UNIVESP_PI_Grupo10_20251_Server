const DiningTable = require('../database/models/diningtables-model.js');
const Ingredients = require ('../database/models/ingredients-model.js');
const Menu = require('../database/models/menu-model.js');

const { ObjectId } = require ('mongodb');

exports.create = async (req, res) => {
    var diningTable = await DiningTable.find({diningTableId: req.params.id}).sort({orderDate: -1}).limit(1);
    if (diningTable.length != 0 && diningTable[0].status == "IN_USE"){
        return res.status(400).send({error: "Mesa em uso!"});
    }

    var itemList = req.body.itemList;
    var totalValue = 0;

    var itemIds = itemList.map(item => new ObjectId(item.itemId));
    
    var menuItens = await Menu.find({_id: {$in: itemIds }});
    
    const menuMap = {};
    for (const menu of menuItens) {
        menuMap[menu._id.toString()] = menu;
    }

    for (const item of itemList){
        const menu = menuMap[item.itemId];
        
        totalValue = totalValue + (menu.value * item.quantity);
        
        for (const ingredient of menu.ingredients){
            const totalQuantity = item.quantity * ingredient.quantity;
            await Ingredients.updateOne({_id: new ObjectId(ingredient.ingredientId)}, {$inc: {quantity: -totalQuantity}})
        }
    }

    await DiningTable.create({
        diningTableId: req.params.id,
        itemList: itemList,
        orderDate: Date.now(),
        status: "IN_USE",
        totalValue: totalValue
    })

    return res.status(200).send();
};

exports.update = async (req, res) => {
    var diningTable = (await DiningTable.find({diningTableId: req.params.id}).sort({orderDate: -1}).limit(1));
    if (diningTable.length != 1 || diningTable[0].status != "IN_USE"){
        return res.status(400).send({error: "Mesa não tem pedidos em aberto."});
    }
    var itemList = req.body.itemList;

    console.log(itemList);

    var totalValue = 0;

    var itemIds = itemList.map(item => new ObjectId(item.itemId));
    
    var menuItens = await Menu.find({_id: {$in: itemIds }});
    
    const menuMap = {};
    for (const menu of menuItens) {
        menuMap[menu._id.toString()] = menu;
    }

    for (const item of itemList){
        const menu = menuMap[item.itemId];
        
        totalValue = totalValue + (menu.value * item.quantity);
        
        for (const ingredient of menu.ingredients){
            const totalQuantity = item.quantity * ingredient.quantity;
            await Ingredients.updateOne({_id: new ObjectId(ingredient.ingredientId)}, {$inc: {quantity: -totalQuantity}})
        }
    }

    diningTable[0].itemList.push(...itemList);
    diningTable[0].totalValue += totalValue;

    console.log(diningTable[0].itemList);

    await DiningTable.updateOne({_id: diningTable[0]._id}, {
        itemList: diningTable[0].itemList,
        totalValue: diningTable[0].totalValue
    });

    return res.status(200).send();
}

exports.close = async (req,res) => {
    var diningTable = (await DiningTable.find({diningTableId: req.params.id}).sort({orderDate: -1}).limit(1));
    if (diningTable.length != 1 || diningTable[0].status != "IN_USE"){
        return res.status(400).send({error: "Mesa não tem pedidos em aberto."});
    }

    await DiningTable.updateOne({_id: diningTable[0]._id}, {
        status: "CLOSED"
    });

    return res.status(200).send();
} 

exports.getAll = async (req, res) => {
    const items = await DiningTable.find({status: {$ne: "CLOSED"}});
    res.send(items);
}

exports.get = async (req, res) => { 
    const items = await DiningTable.find({ diningTableId: req.params.id, status: {$ne: "CLOSED"} });
    res.send(items);
}
