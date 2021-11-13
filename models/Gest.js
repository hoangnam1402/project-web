const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const GestSchema = new Schema({
    name: { 
        type: String,
        require: true,
    },
    gmail: { type: String },
    context: { type: String },
});

module.exports = mongoose.model('Gest', GestSchema)