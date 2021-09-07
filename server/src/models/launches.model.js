const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  target: 'Kepler-442 b',
  customers: ['NASA'],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchId){
  return launches.has(launchId)
}
//WAF to set a launches in a launches Map
/* function addNewLaunch(launch){
  latestFlightNumber +=1;
  launches.set(
    launch.flightNumber,
    Object.assign(launch,{
      flightNumber:latestFlightNumber,
      upcoming:true,
      success:true,
      customers:['Akshay','NASA'],
  }));
} */

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customers: ['NASA'],
      flightNumber: latestFlightNumber,
    })
  );
}

function abortLaunchById(launchId){
  //Instead of deleting we get the data,so that we can get the info from aborted mission ERA of Big Data :)
  //With Get will be In our historical list but mark unsuccessful
  /* launch.delete(launchId); */
  const aborted =launches.get(launchId);
  aborted.upcoming =false;
  aborted.success=false;
  return aborted ;
}

module.exports = {
  existsLaunchWithId,
  getAllLaunches,
  addNewLaunch,  
  abortLaunchById,
};