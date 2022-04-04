const express = require('express');
const mongoose = require('mongoose');

const promoRouter = require('./routers/promoRouter');
const leaderRouter = require('./routers/leaderRouter');

const app = express();
const PORT = 3000;


// Connecting  URL
const url = 'mongodb://127.0.0.1:27017/assignment2';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });



app.get('/', (req, res) => {
    res.send(`<h2>Home Page</h2><br>Name : Md. Zahid hasan <br>Roll: 1910676144 <br/>
    Department of Computer Science and Engineering, <br/> University of Rajshahi `);
});

app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);


app.listen(PORT, () => {
    console.log("Server is running.....");
});