const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    name: { 
        type: String,
    },
    gmail: {
        type: String,
        require: true,
    },
    content: { type: String },
    stat: { 
        type: String,
        enum: ['Wait','Read','Reply']
    },
});

module.exports = mongoose.model('Post', PostSchema)