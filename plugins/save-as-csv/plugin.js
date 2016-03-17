'use strict';

module.exports = function(options, imports, register) {
  var log = imports.debug('plugins:save-as-csv');
  log('start');

  // Service interface
  var services = {
    saveAsCsv: function(data, fields, filePath){
      var convertToCSV = require('json2csv');
      var fs = require('fs');
      convertToCSV({
        data: data,
        fields: fields
      }, function(err, csv){
        if (err) log.error(err);
        fs.writeFile(filePath, csv, function(err) {
          if (err) throw err;
          log('file saved', filePath);
        });
      });
    }
  };

  log('register');
  register(null, services);
};
