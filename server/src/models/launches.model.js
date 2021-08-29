const launches = new Map();

const launch = {
  flightNumber: '10X',
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  destination: 'Kepler-442 b',
  customer: ['NASA','Akshay'],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches(){
  return Array.from(launches.values());
}

module.exports = {
  getAllLaunches,
};