// Importing required modules
const express = require('express');
const bodyParser = require('body-parser'); // Importing body-parser for parsing request bodies
const mongoose = require('mongoose');
const { Quote } = require('./models/quotes');
const { Task } = require('./models/task')
var cors = require('cors')

//? creating an express app
const app = express();
app.use(cors());
mongoose.connect('mongodb+srv://farahhashmi13sk:sag1yluM8pUlafjC@cluster0.vlsff.mongodb.net/Practice_db?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log('connected to database ');
}).catch(() => {
    console.log('connection failed!!');
})
let allQuotes = require('../src/app/files/quotes.json');
const quotesArray = allQuotes.quotes;
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



app.post('/tasks/add-task', (req, res, next) => {
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

app.get('/tasks/all', (req, res, next) => {
    Task.find().then((document) => {
        res.status(200).json({
            Message: 'Task Fetched Successfully!!',
            Task_list: document
        })
    })


})

app.delete('/tasks/delete-task/:taskToDo', (req, res, next) => {
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

app.post('/tasks/update-task', (req, res, next) => {
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

app.post('/db/quotes/add-multiple', (req, res, next) => {
    req.body.quotes.forEach((q) => {
        let quoteToAdd = new Quote({
            quote: q.quote,
            author: q.author,
            addedON: new Date()
        })
        quoteToAdd.save()
    })
    res.status(200).json({
        Message: 'Quotes Added Successfully'
    })
})
// updating the quote
app.post('/db/quotes/update', (req, res, next) => {
    Quote.findOneAndUpdate(
        { _id: req.body._id },
        {
            quote: req.body.quote,
            author: req.body.author
        }
    ).then((document) => {
        res.status(200).json({
            Message: 'Quote Updated Successfully!!'
        })
    })
})
// adding the quotes
app.post('/db/quotes/add', (req, res, next) => {
    let quoteToAdd = new Quote({
        quote: req.body.quote,
        author: req.body.author
    });
    quoteToAdd.save().then((addedQuote) => {
        res.status(200).json({
            Message: 'Quote Added Successfully',
            Added_Quote: addedQuote
        });

    })
})
// getting All the Quotes
app.get('/db/quotes/all', (req, res, next) => {
    Quote.find().then((document) => {
        res.status(200).json({
            Message: 'Quotes Fetched Successfully!!',
            Quotes_List: document
        })
    })
})

// geting a ramdon number 
app.get('/db/quotes/ramdon', (req, res, next) => {
    Quote.find().then((doc) => {
        if (doc.length === 0) {
            return res.status(404).json({ error: 'No quotes found in the database' });
        }

        // Generate a random index
        const randomIndex = Math.floor(Math.random() * doc.length);

        // Get the random quote
        const randomQuote = doc[randomIndex];

        res.status(200).json({
            Message: 'Random Quote Fetched Successfully!!',
            Random_Quote: randomQuote
        });
    }).catch((error) => {
        console.error('Error fetching random quote:', error);
        res.status(500).json({ error: 'Failed to fetch random quote' });
    });
})

// geting quotes by author 
app.get('/db/quotes/author/:author', (req, res, next) => {
    const authorName = req.params.author;
    Quote.find({ author: authorName }).then((document) => {
        res.status(200).json({
            Message: 'Quotes Fetched Successfully!!',
            Quotes_List: document
        })
    })
})

// getting quotes by size 
app.get('/db/quotes/size/:size', (req, res, next) => {
    const Quotesize = req.params.size;
    const validSizes = ['short', 'medium', 'long'];
    if (!validSizes.includes(Quotesize)) {
        return res.status(400).json({
            Message: 'Please provide valid quotes size',
            Valid_Sizes: validSizes.join(', ')
        });
    }

    Quote.find().then((document) => {
        const quoteBySize = document.filter((quote) => {
            const quoteLength = quote.quote.length;
            if (Quotesize === 'short') {
                return quoteLength < 65;
            } else if (Quotesize === 'medium') {
                return quoteLength >= 65 && quoteLength <= 106;
            } else {
                // size === 'long'
                return quoteLength > 106;
            }

        })
        res.status(200).json({
            Message: 'Quotes Fetched Successfully!!',
            Quotes_size: quoteBySize
        })
    })


})

// updating only quotes

app.post('/db/quotes/update-quote', (req, res, next) => {
    Quote.findOneAndUpdate(
        { _id: req.body._id },
        {
            quote: req.body.quote,
            updatedOn: new Date()
        }
    ).then((document) => {
        res.status(200).json({
            Message: 'Quote Updated Successfully!!'
        })
    })

})

app.get('/db/quotes/get-by-id/:id', (req, res, next) => {

    Quote.find({ _id: req.params.id }).then((document) => {
        res.status(200).json({
            Message: "quote by id fetched successfully!",
            fetchedQuote: document
        })

    })
})
// adding author 
app.post('/db/quotes/add/author', (req, res, next) => {
    const addOnDate = new Date(); // Get the current date each time a new quote is added
    const formattedDate = formatDate(addOnDate);
    let quoteToAdd = new Quote({
        author: req.body.author,
        addedON: formattedDate
    });
    quoteToAdd.save().then((addedQuote) => {
        res.status(200).json({
            Message: 'author Added Successfully',
            Added_Quote: addedQuote
        });

    })
})



//? creating the API Endpoint to listen to
app.use('/api/quotes/all', (req, res, next) => {
    res.json(allQuotes);
})

app.use('/api/quotes/random', (req, res, next) => {
    if (!quotesArray || quotesArray.length === 0) {
        return res.status(404).json({ error: 'No quotes found' });
    }
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    // Get the random quote
    const randomQuote = quotesArray[randomIndex];

    // Send the random quote as a response
    res.json(randomQuote);
})
app.get('/api/quotes-by-author/:author', (req, res) => {
    const authorName = req.params.author;
    const quotesByAuthor = quotesArray.filter(quote => quote.author === authorName);

    if (quotesByAuthor.length === 0) {
        // No quotes found for the requested author
        return res.status(404).json({ message: 'Sorry, no quotes found for the requested author!' });
    }
    res.json(quotesByAuthor);
});

app.use('/api/quotes-by-size/:size', (req, res, next) => {
    const size = req.params.size.toLowerCase();
    const validSizes = ['short', 'medium', 'long'];
    if (!validSizes.includes(size)) {
        return res.status(400).json({
            Message: 'Please provide valid quotes size',
            Valid_Sizes: validSizes.join(', ')
        });
    }

    // Filter quotes based on the size 
    const filteredQuotes = quotesArray.filter(quote => {
        const quoteLength = quote.quote.length;
        if (size === 'short') {
            return quoteLength < 65;
        } else if (size === 'medium') {
            return quoteLength >= 65 && quoteLength <= 106;
        } else {
            // size === 'long'
            return quoteLength > 106;
        }
    });

    // If no quotes found for the provided size
    if (filteredQuotes.length === 0) {
        return res.status(404).json({ message: 'No quotes found for the provided size' });
    }

    // Send the filtered quotes as a response
    res.json(filteredQuotes);
})

app.use('/api/add-quote/:quote', (req, res, next) => {
    if (req.params.quote.length > 30) {
        let quoteToAdd = {
            quote: req.params.quote,
            author: 'Farah Hashmi'
        }
        quotesArray.push(quoteToAdd);
        res.status(200).json({
            Message: 'Quote added successfully!!',
            Added_Quote: quoteToAdd
        })
    }
    else {
        Message: 'Invalid Quote !! please provide at least 30 characters long quote'
    }

})

// Function to save quotes to the database



//? exporting the express app...
module.exports = app;