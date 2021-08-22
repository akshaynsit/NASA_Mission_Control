const express = require('express');
const app = express();

app.use(express.json());//Parse any incoming JSON from body of incoming request
module.exports = app;