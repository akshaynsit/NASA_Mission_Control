const launches = new Map();

let latestFlightNumber = 100;
const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  destination: 'Kepler-442 b',
  customer: ['NASA','Akshay'],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);
//WAF to set a launches in a launches Map
function addNewLaunch(launch){
  latestFlightNumber+=1;
  launches.set(
    launch.flightNumber,
    Object.assign(launch,{
      flightNumber:latestFlightNumber,
      upcoming:true,
      success:true,
      customers:['Akshay','NASA'],
  }));
}

function getAllLaunches(){
  return Array.from(launches.values());
}

module.exports = {
  getAllLaunches,addNewLaunch
};