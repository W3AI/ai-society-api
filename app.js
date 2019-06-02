const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const feedRoutes = require('./routes/feed');

const app = express();

// app.use(bodyParser.urlencoded());  // x-www-form-urlencoded in a <form> POST request
app.use(bodyParser.json()); // for application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);

mongoose.connect(
    'mongodb+srv://steve_ai91:o82HN0KCxu6dtS5w@cluster0-n7ze3.mongodb.net/earth-teams?retryWrites=true',
    { useNewUrlParser: true }
)
.then(result => {
    app.listen(8080);
})
.catch(err => console.log(err));
