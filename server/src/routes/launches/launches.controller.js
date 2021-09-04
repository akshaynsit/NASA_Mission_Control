const { getAllLaunches,
addNewLaunch} = require('../../models/launches.model');
function httpGetAllLaunches(req,res){
    return res.status(200).json(getAllLaunches());    
}
function httpAddNewLaunch(req,res){
    const launch =req.body;
<<<<<<< HEAD

    if (
        !launch.mission ||
        !launch.rocket ||
        !launch.launchDate ||
        !launch.target
      ) {
        return res.status(400).json({
          error: 'Missing Data or Invalid Data',
        });
      }
=======
>>>>>>> parent of ae974e7 (Adding the Respond for Invalid Data Entry (400))
    launch.launchDate = new Date(launch.launchDate);

    addNewLaunch(launch);
    return res.status(201).json(launch)
}
module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
};