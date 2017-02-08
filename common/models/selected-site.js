'use strict';

module.exports = function(SelectedSite) {

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

    SelectedSite.SaveSelectedSites = function(selectedSite, cb) {
        selectedSite.observationId = "Pie";
        cb(null, selectedSite);

    }

    SelectedSite.remoteMethod('SaveSelectedSites', {
          accepts: {arg: 'data', type: 'SelectedSite', http: { source: 'body' }},
          returns: {arg: 'data', type: 'SelectedSite', root: true}
    });

};


/**
 * 
 * @param {Function(Error)} callback
 */
