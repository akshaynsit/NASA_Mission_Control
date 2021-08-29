const fs =require('fs');
const path = require('path');
const parse = require('csv-parse');
  
const { Stream } = require('stream');

const habitablePlanets =[]

function isHabitablePlanet(planet){
    return planet['koi_disposition'] ==='CONFIRMED' &&
       planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6 ;
}

/* while running for the first time,our data may or may not be uploaded fully coz we are getting the data in Stream,so in that case we may 
get empty Stream...solution --> for that we will use JS promise */
function loadPlanetData(){
    return new Promise((resolve,reject)=> {
        fs.createReadStream(
            path.join(__dirname, '..', '..', 'data', 'kepler_data.csv')
          )
        .pipe(parse({
            comment:'#',
            columns:true,
        }))
        .on('data',(data)=>{
            if(isHabitablePlanet(data)){
                habitablePlanets.push(data);
            } 
        })
        .on('error',(err)=>{
            console.log(err);
            reject(err);
        })
        .on('end',() => {
            /* console.log(habitablePlanets)
            console.log('done') */
            /* console.log(habitablePlanets.map((planet)=>{
                return planet['kepler_name'];

            } )); */
            console.log(` Total ${habitablePlanets.length} habitable planet found`);
            resolve();
            });
    });}

function getAllPlanets(){
    return habitablePlanets;
}
module.exports = {
    loadPlanetData,
    getAllPlanets,
};