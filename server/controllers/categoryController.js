const Category = require('../models/category');
const Item = require('../models/item');
async function create(req, res) {
    const categoryData = req.body;
    try {
        const items = categoryData.items;
        const itemIds = [];
        for (const itemRaw of items) {
            try {
                const cdetail = itemRaw.detail;
                let index = cdetail.indexOf('Allergener');
                if (index > -1) {
                    itemRaw.detail = cdetail.substring(0, index).trim();
                    itemRaw.allergens = cdetail.substring(index + 11).trim();
                }
                const cname = itemRaw.name;
                index = cname.indexOf('.');
                if (index > -1) {
                    itemRaw.code = cname.substring(0, index).trim();
                    itemRaw.name = cname.substring(index + 1).trim();
                }
                if(itemRaw.price){
                    const match = itemRaw.price.match(/\d+/i);
                    if(match){
                        itemRaw.price = match[0];
                    }
                }
                const item = await Item.create(itemRaw);
                itemIds.push(item._id);
            } catch (error) {
                console.log(itemRaw);
                throw error;
            }
        }
        categoryData.items = itemIds;
        const category = Category.create(categoryData);
        return res.send({
            status: 1,
            data: category,
        })
    } catch (error) {
        return res.send({
            status: 0,
        })
    }
}
async function getAll(req, res) {
    const categories = await Category.find({}, null, { sort: { 'order': 1 } }).populate('items');
    return res.send({
        status: 1,
        data: categories,
    })
}
module.exports = {
    create,
    getAll,
}