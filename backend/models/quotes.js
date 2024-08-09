const mongoose = require('mongoose');


//? creating schema with the help of mongoose...

const quoteSchema = mongoose.Schema({
    quote : {type : String, default : 'some sample text'},
    author : {type: String, default : 'Unknown' },
    addedON : {type: String, default: null},
    updatedOn : {type: String, default: null}
});

module.exports = {
    Quote: mongoose.model('Quote', quoteSchema)
};