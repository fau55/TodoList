const express = require('express')
const router = express.Router()
const Task = require('../models/task')

router.post('/add-task', (req, res, next) => {
    let TaskToAdd = new Task({
        taskToDo: req.body.taskToDo,
        description: req.body.description,
        createdOn: new Date(),
        status: req.body.status
    })
    TaskToAdd.save()
    res.status(200).json({
        Message: 'Task Added Successfully'
    })
})

router.get('/', (req, res, next) => {
    Task.find().then((document) => {
        res.status(200).json({
            Message: 'Task Fetched Successfully!!',
            Task_list: document
        })
    })


})

router.delete('/delete-task/:taskToDo', (req, res, next) => {
    const deleteTask = req.params.taskToDo;
    Task.deleteOne({ taskToDo: deleteTask }).then((result) => {
        if (result.deletedCount === 1) {
            res.status(200).json({
                Message: 'Task Deleted Successfully!'
            });
        } else {
            res.status(404).json({
                Message: 'Task not found!'
            });
        }
    }).catch(err => {
        res.status(500).json({
            error: err.message
        });
    });
});

router.post('/update-task', (req, res, next) => {
    let date = new Date();
    let formattedDate = formatDate(date);
    Task.findOneAndUpdate({ _id: req.body._id },
        {
            taskToDo: req.body.taskToDo,
            description: req.body.description,
            status: req.body.status,
            updatedOn: formattedDate
        }
    ).then((document) => {
        res.status(200).json({
            Message: 'Task Updated Successfully!!'
        })
    })
})


function formatDate(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + "  " + strTime;
}

module.exports = router