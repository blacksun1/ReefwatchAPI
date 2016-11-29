var async = require('async');
module.exports = function(app) {
  //data sources
  var mongoDs = app.dataSources.mongoRWDS;
  //create all models
  async.parallel({
    locations: async.apply(createLocations),
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