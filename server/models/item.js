const mongoose = require('mongoose');
const schema = new mongoose.Schema(
    {
        _id: { type: mongoose.Types.ObjectId, auto: true },
        code: { type: String },
        name: { type: String, required: true, unique: true, index: true },
        detail: { type: String },
        allergens: { type: String },
        image: { type: String },
    },
    {
        timestamps: true,
        _id: false,
    },
);
module.exports = mongoose.model('Item', schema);
