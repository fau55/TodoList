// Importing required modules
const express = require('express');
const bodyParser = require('body-parser'); // Importing body-parser for parsing request bodies
var cors = require('cors')
const connectToMongo = require('./database/db')
//? creating an express app
const app = express();
connectToMongo() 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
// contecting routes
app.use('/api/todobuddy/task', require('./routes/task'))

//? exporting the express app...
module.exports = app;