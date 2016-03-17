'use strict';

var log;
var random;
var saveAsCsv;
var batchLoad;

module.exports = function(options, imports, register) {
  log = imports.debug('plugins:name-generator');
  log('start');

  // Get injected dependencies
  random = imports.random;
  saveAsCsv = imports.saveAsCsv;
  batchLoad = imports.batchLoad;
  var app = imports.app;

  // Service interface definition
  var services = {
    nameGenerator: {
      options: options,
      generateName: generateName,
      generateNames: generateNames
    }
  };

  // Do something when the app starts
  app.on('started', function(){
    var records = {};
    if (options.generateOnStart) {
      log('generate ' + options.generateOnStart + ' names');
      records = generateNames(options.generateOnStart);
    }
    if (options.saveToFile){
      saveAsCsv(records, ['name'], options.csvFilePath);
    }
    if (options.saveToDatabase){
      options.modelName = options.modelName || 'Person';
      batchLoad(records, options, function(){
        log('saved to database');
      });
    }
  });

  log('register');
  register(null, services);
};

function generateNames(number){
  console.time('create records');
  var records = [];
  for (var n = 0; n < number; n++){
    records.push({
      name: generateName()
    });
  }
  console.timeEnd('create records');
  return records;
}

function generateName(){
  return random.last() + ', ' + random.first();
}

