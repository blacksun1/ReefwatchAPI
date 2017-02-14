var async = require('async');
module.exports = function(app) {
  //data sources
  var mongoDs = app.dataSources.mongoRWDS;
  //create all models
  deleteData();
  
  async.parallel({
    //locations: async.apply(createLocations),
    //rainfall: async.apply(createRainfall),
    //beaufordScale: async.apply(createBeaufortScale),
    //cloudCover: async.apply(createCloudCover)
  }, function(err, results) {
    if (err) throw err;
    /*createSites(results.locations, function(err) {
      console.log('> models created sucessfully');
    });*/
  });

  function deleteData() {
      var surveyDay = app.models.SurveyDay;
      surveyDay.destroyAll();
      console.log('destroyed all Survey Days');

      var observations = app.models.Observation;
      observations.destroyAll();
      console.log('destroyed all Observations');

      var selectedSites = app.models.SelectedSite;
      selectedSites.destroyAll();
      console.log('destroyed all Selected Sites');

  }
};