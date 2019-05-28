const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

// app.use(bodyParser.urlencoded());  // x-www-form-urlencoded in a <form> POST request
app.use(bodyParser.json()); // for application/json

app.use('/feed', feedRoutes);

app.listen(8080);