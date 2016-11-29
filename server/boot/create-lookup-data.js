var async = require('async');
module.exports = function(app) {
  //data sources
  var mongoDs = app.dataSources.mongoRWDS;
  //create all models
  async.parallel({
    locations: async.apply(createLocations),
    rainfall: async.apply(createRainfall),
    beaufordScale: async.apply(createBeaufortScale),
    cloudCover: async.apply(createCloudCover)
  }, function(err, results) {
    if (err) throw err;
    createSites(results.locations, function(err) {
      console.log('> models created sucessfully');
    });
  });
  //create reviewers
  function createLocations(cb) {
    mongoDs.automigrate('Location', function(err) {
      if (err) return cb(err);
      var Location = app.models.Location;
      Location.create([{
        locationName: 'Aldinga South'
      }, 
      {
        locationName: 'Aldinga North'
      }, 
      {
        locationName: 'Hallet Cove'
      }, 
      {
        locationName: 'Beachport'
      }, 
      {
        locationName: 'Robe'
      }, 
      {
        locationName: 'Lady Bay North'
      }, 
      {
        locationName: 'Lady Bay South'
      }, 
      {
        locationName: 'Yilki Beach (Victor Harbour)'
      },
      {
        locationName: 'Port Macdonnell'
      }
      ], cb);
    });
  }

  //create rainfall
  function createRainfall(cb) {
    mongoDs.automigrate('Rainfall', function(err) {
      if (err) return cb(err);
      var Rainfall = app.models.Rainfall;
      Rainfall.create([{
        type: 'Light'
      }, 
      {
        type: 'Moderate'
      }, 
      {
        type: 'Heavy'
      }
      ], cb);
    });
  }

  //create Beauford
  function createBeaufortScale(cb) {
    mongoDs.automigrate('BeaufortScale', function(err) {
      if (err) return cb(err);
      var BeaufortScale = app.models.BeaufortScale;
      BeaufortScale.create([{
        scale: 1,
        scaleDescription: 'Wind: Light air | Sea State: Calm | Mirror-like to small ripples'
      }, 
      {
        scale: 2,
        scaleDescription: 'Wind: Gentle breeze | Sea State: Smooth | Large wavelets, crests begn to break'
      }, 
      {
        scale: 3,
        scaleDescription: 'Wind: Moderate breeze | Sea State: Slight | Small waves becoming longer'
      }, 
      {
        scale: 4,
        scaleDescription: 'Wind: Fresh breeze | Sea State: Moderate | Many white caps forming'
      }, 
      {
        scale: 5,
        scaleDescription: 'Wind: Strong breeze | Sea State: Rough | Large waves, extensive white caps'
      }
      ], cb);
    });
  }

  //create Beauford
  function createCloudCover(cb) {
    mongoDs.automigrate('CloudCover', function(err) {
      if (err) return cb(err);
      var CloudCover = app.models.CloudCover;
      CloudCover.create([{
        category: 0,
        type: 'Cloudless'
      }, 
      {
        category: 1,
        type: 'One eighth or less'
      }, 
      {
        category: 2,
        type: 'Two eighths'
      }, 
      {
        category: 3,
        type: 'Three eighths'
      }, 
      {
        category: 4,
        type: 'Four eighths'
      }, 
      {
        category: 5,
        type: 'Five eighths'
      }, 
      {
        category: 6,
        type: 'Six eighths'
      }, 
      {
        category: 7,
        type: 'Seven eighths'
      }, 
      {
        category: 8,
        type: 'Eight eighths'
      }
      ], cb);
    });
  }


  //create reviews
  function createSites(locations, cb) {
    mongoDs.automigrate('Site', function(err) {
      if (err) return cb(err);
      var Site = app.models.Site;
      Site.create([{
        siteCode: 'ASL',
        locationId: locations[0].id,
      }, 
      {
        siteCode: 'ASM',
        locationId: locations[0].id,
      }, 
      {
        siteCode: 'ASU',
        locationId: locations[0].id,
      },
      {
        siteCode: 'ANL',
        locationId: locations[1].id,
      },
      {
        siteCode: 'ANM',
        locationId: locations[1].id,
      },
      {
        siteCode: 'ANU',
        locationId: locations[1].id,
      },
      {
        siteCode: 'HCL',
        locationId: locations[2].id,
      },
      {
        siteCode: 'HCM',
        locationId: locations[2].id,
      },
      {
        siteCode: 'HCU',
        locationId: locations[2].id,
      },
      {
        siteCode: 'BL',
        locationId: locations[3].id,
      },
      {
        siteCode: 'BM',
        locationId: locations[3].id,
      },
      {
        siteCode: 'BU',
        locationId: locations[3].id,
      },
      {
        siteCode: 'RL',
        locationId: locations[4].id,
      },
      {
        siteCode: 'RM',
        locationId: locations[4].id,
      },
      {
        siteCode: 'RU',
        locationId: locations[4].id,
      },
      {
        siteCode: 'LBNL',
        locationId: locations[5].id,
      },
      {
        siteCode: 'LBNM',
        locationId: locations[5].id,
      },
      {
        siteCode: 'LBNU',
        locationId: locations[5].id,
      },
      {
        siteCode: 'LBSL',
        locationId: locations[6].id,
      },
      {
        siteCode: 'LBSM',
        locationId: locations[6].id,
      },
      {
        siteCode: 'LBSU',
        locationId: locations[6].id,
      },
      {
        siteCode: 'YBL',
        locationId: locations[7].id,
      },
      {
        siteCode: 'YBM',
        locationId: locations[7].id,
      },
      {
        siteCode: 'YBU',
        locationId: locations[7].id,
      },
      {
        siteCode: 'PML',
        locationId: locations[8].id,
      },
      {
        siteCode: 'PMM',
        locationId: locations[8].id,
      },
      {
        siteCode: 'PMU',
        locationId: locations[8].id,
      }
    ], cb);
    });
  }
};