const mongoose = require('mongoose');

//? creating schema with the help of mongoose...
const taskSchema = mongoose.Schema({
    taskToDo : {type : String, require: true},
    createdOn : {type: String},
    status : {type: String},
    description : {type: String, default : 'xyz..'},
    updatedOn : {type: String, default: '---'}
});

const Task = mongoose.model('tasks', taskSchema);

module.exports = Task;