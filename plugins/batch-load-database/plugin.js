'use strict';

module.exports = function(options, imports, register) {
  var log = imports.debug('plugins:batch-load');
  log('start');

  // Service interface definition
  var services = {
    batchLoad: function (records, batchOptions, cb) {
      var Model = imports.app.models[batchOptions.modelName];
      if (batchOptions.clearTableOnStart) {
        Model.destroyAll({}, function () {
          loadData(records, Model, cb);
        });
      } else {
        loadData(records, Model, cb);
      }
    }
  };

  function loadData(records, Model, cb){
    log('start loading', records.length + ' records');
    console.time('populate db');
    console.time('insert records');
    var iteration = 0;
    var marker = 0;
    var total = records.length;
    function track(){
      iteration++;
      marker++;
      if (marker === 100){
        marker = 0;
        log(total-iteration + ' left');
      }
      if (iteration === total){
        console.timeEnd('insert records');
        log('records inserted', total);
        cb();
      }
    }
    for (var record = 0; record < records.length; record++){
      Model.create(records[record], track);
    }
  }

  log('register');
  register(null, services);
};
