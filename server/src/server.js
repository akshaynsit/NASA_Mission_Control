const http = require('http');
const app = require('./app')
const { loadPlanetsData} = require('./models/planets.model')
const PORT = process.env.PORT || 8000;//React Port run on 3000,port to run as a enviromental variable or 8000

const server = http.createServer(app);
async function startServer(){
    await loadPlanetsData();
    server.listen(PORT,()=>{
        console.log(`Running on Port ${PORT}...`)
    });
}

startServer();

