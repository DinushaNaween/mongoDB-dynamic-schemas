const mongoose = require('mongoose');

const nodeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    data: [{
        node: { type: mongoose.Schema.Types.ObjectId },
        data1: { type: Number, default: null },
        data2: { type: Number, default: null },
        data3: { type: Number, default: null },
        data4: { type: Number, default: null }
    }]
})

module.exports = {
    node: mongoose.model('Node', nodeSchema)
}