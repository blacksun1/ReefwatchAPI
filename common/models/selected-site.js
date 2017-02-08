'use strict';

module.exports = function(Selectedsite) {

    // Selectedsite.createObservation = function(SelectedSite, cb) {
    //     loopback.Model.Observation
    // };


    // SelectedSite.remoteMethod(
    //     'createObservation',
    //     {
    //         accpets: {arg: 'SelectedSite', type: 'Object', required: true},
    //         http: { path: '/createObservation', verb: 'post' },
    //         returns: { arg: 'SelectedSite', type: 'Object'}
    //     }
    // );

    Selectedsite.greet = function(siteId, siteCode, surveyDayId, selectedSite, cb) {
    
      cb(null, {"siteId": siteId, "siteCode": siteCode, "surveyDayId": surveyDayId});
    }

    Selectedsite.remoteMethod('greet', {
          accepts: {arg: 'siteId', type: 'string'},
          accepts: {arg: 'siteCode', type: 'string'},
          accepts: {arg: 'surveyDayId', type: 'string'},
          returns: {arg: 'selectedSite', type: 'Object'}
    });

};


/**
 * 
 * @param {Function(Error)} callback
 */
