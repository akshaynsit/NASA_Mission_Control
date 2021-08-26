const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const planetsRouter = require('./routes/planets/planets.router')
app.use(cors({
    origin:'http://localhost:3000',
}));
// In Case of Multiple CORS 
/* var whitelist = ['http://example1.com', 'http://localhost:3000']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
} */
app.use(express.json());//Parse any incoming JSON from body of incoming request
app.use(express.static(path.join(__dirname,'..','public')))
app.use(planetsRouter);
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '..','public','index.html'))
})
module.exports = app;