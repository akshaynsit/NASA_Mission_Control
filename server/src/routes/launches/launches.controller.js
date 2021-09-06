const { getAllLaunches,
  addNewLaunch,existsLaunchWithId,abortLaunchById,} = require('../../models/launches.model');
  function httpGetAllLaunches(req,res){
      return res.status(200).json(getAllLaunches());    
  }
  function httpAddNewLaunch(req,res){
      const launch =req.body;
  
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

      launch.launchDate = new Date(launch.launchDate);
  
      addNewLaunch(launch);
      return res.status(201).json(launch)
  }

  function httpAbortLaunch(req,res){
    const launchId = Number(req.params.id);
    //if launch doesn't exist
    if (!existsLaunchWithId(launchId)){
      return res.status(404).json({
        error :'Launch Not Found',
      });
    }
    
    //If Launch exist
    const aborted = abortLaunchById(launchId)
    return res.status(200).json(aborted);
  }

  module.exports = {
      httpGetAllLaunches,
      httpAddNewLaunch,
      httpAbortLaunch,
      };