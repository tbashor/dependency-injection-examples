require(['js/vendor/architect'], function (architect) {
  architect.resolveConfig([
    'js/plugins/math',
    'js/plugins/app'
  ], function (err, config) {
    if (err) throw err;
    architect.createApp(config);
  });
});
