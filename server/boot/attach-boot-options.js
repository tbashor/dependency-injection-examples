'use strict';

module.exports = function(app) {
  var bootOptions = app.get('boot');

  // Attach socketServer if available
  if (bootOptions.socketServer) {
    app.set('io', bootOptions.socketServer);
  }

  // Attach socketServer if available
  if (bootOptions.collectStats) {
    app.set('collectStats', bootOptions.collectStats);
  }

  // Identify worker associated with app server if available
  app.set('worker', {
    id: bootOptions.id
  });

  if (bootOptions.port) {
    app.set('port', bootOptions.port);
  }

  return app;
};
