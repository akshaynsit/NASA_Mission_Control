const http = require('http');

const app = require('./app')
const PORT = process.env.PORT || 8000;//React Port run on 3000,port to run as a enviromental variable or 8000

const server = http.createServer(app);
server.listen(PORT,()=>{
    console.log(`Running on Port ${PORT}...`)
});
