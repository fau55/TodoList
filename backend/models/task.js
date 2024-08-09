const mongoose = require('mongoose');

//? creating schema with the help of mongoose...

const task = mongoose.Schema({
    taskToDo : {type : String, require: true},
    createdOn : {type: String},
    status : {type: String},
    description : {type: String, default : 'xyz..'},
    updatedOn : {type: String, default: '---'}
});

module.exports = {
    Task : mongoose.model('Task', task)
};