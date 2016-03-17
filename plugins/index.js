'use strict';

module.exports = {
  plugins: [
    {
      packagePath: 'architect-debug'
    },
    {
      packagePath: 'architect-chance'
    },
    {
      packagePath: './plugins/batch-load-database'
    },
    {
      packagePath: './plugins/save-as-csv'
    },
    {
      packagePath: './plugins/name-generator',
      csvFilePath: './data/names.csv',
      saveToFile: false,
      saveToDatabase: false,
      clearTableOnStart: true,
      generateOnStart: 500,
      modelName: 'Person'
    }
  ]
};
