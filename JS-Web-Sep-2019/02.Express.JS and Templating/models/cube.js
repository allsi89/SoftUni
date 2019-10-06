const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const path = require('path');

const cubeSchema = new Schema({
    id: {type: mongoose.SchemaTypes.ObjectId},
    name: {type: mongoose.SchemaTypes.String, required: true},
    description: {type: mongoose.SchemaTypes.String, required: true},
    imageUrl: {type: mongoose.SchemaTypes.String, required: true},
    difficultyLevel: {type: mongoose.SchemaTypes.Number, required: true},
    //accessories: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Accessory'}]
});

cubeSchema.path('name')
    .validate(function () {
        return this.name.length >= 3 && this.name.length <= 15;
    }, 'Name must be between 3 and 15 symbols!');

cubeSchema.path('description')   
    .validate(function() {
        return this.description.length >= 20 && this.description.length <= 300;
    }, 'Description must be between 20 and 300 symbols');

cubeSchema.path('imageUrl')   
    .validate(function() {
        return (this.imageUrl.startsWith('http') || this.imageUrl.startsWith('https'))
    }, 'Image Url must start with http and end with .jpg or .png');

cubeSchema.path('difficultyLevel')   
    .validate(function() {
        return this.difficultyLevel >= 1 && this.difficultyLevel <= 6;
    }, 'Difficulty should be between 1 and 6');


const Cube = mongoose.model('Cube', cubeSchema);
module.exports = Cube;    