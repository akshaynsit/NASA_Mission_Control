const http = require('http');
const { start } = require('repl');

const app = require('./app')
const { loadPlanetData} = require('./models/planets.model')
const PORT = process.env.PORT || 8000;//React Port run on 3000,port to run as a enviromental variable or 8000

const server = http.createServer(app);
async function startServer(){
    await loadPlanetData();
    server.listen(PORT,()=>{
        console.log(`Running on Port ${PORT}...`)
    });
}

startServer();

