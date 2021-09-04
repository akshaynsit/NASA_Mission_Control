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
<<<<<<< HEAD
=======
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
>>>>>>> parent of ae974e7 (Adding the Respond for Invalid Data Entry (400))

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

module.exports = {
<<<<<<< HEAD
  getAllLaunches,
  addNewLaunch,
=======
  getAllLaunches,addNewLaunch
>>>>>>> parent of ae974e7 (Adding the Respond for Invalid Data Entry (400))
};