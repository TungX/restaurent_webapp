const mongoose = require('mongoose');
const schema = new mongoose.Schema(
    {
        _id: { type: mongoose.Types.ObjectId, auto: true },
        name: { type: String, required: true, unique: true, index: true },
        description: String,
        items: [{ type: mongoose.Types.ObjectId, ref: 'Item' }],
        order: { type: Number, index: true, default: 0 },
    },
    {
        timestamps: true,
        _id: false,
    },
);
module.exports = mongoose.model('Category', schema);
