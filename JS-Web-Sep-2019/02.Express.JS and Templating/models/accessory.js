const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accessorySchema = new Schema({
    id: {type: mongoose.SchemaTypes.ObjectId},
    name: {type: mongoose.SchemaTypes.String, required: true},
    description: {type: mongoose.SchemaTypes.String, required: true},
    imageUrl: {type: mongoose.SchemaTypes.String, required: true},
    cubes: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Cube'}]
})

const Accessory = mongoose.model('Accessory', accessorySchema);
module.exports = Accessory;  