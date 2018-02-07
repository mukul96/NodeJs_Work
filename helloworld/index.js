var express = require('express');
var app = express();
app.use('/static',express.static(path.join(__dirname,'public')))
app.get('/hello', function(req, res){
    res.send("Hello world!");
});
app.post('/hello', function(req, res){
    res.send("You just called the post method at '/hello'!\n");
});
app.get('/things/:name/:id', function(req, res) {
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});

var myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}

app.use(myLogger)

app.get('/', function (req, res) {
    console.log('next to the logged')
    res.send('Hello World!')
})

var mongo=require('mongodb')
const sqlite3 = require('sqlite3').verbose();

// open database in memory
const db = new sqlite3.Database(':memory:', (err) => {
    if(err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});

// close the database connection
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});
app.listen(8000);