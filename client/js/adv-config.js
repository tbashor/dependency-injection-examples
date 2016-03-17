require(['js/vendor/architect'], function (architect) {
  architect.resolveConfig([
    'js/plugins/advancedmath',
    'js/plugins/app',
    {
      packagePath: 'js/plugins/advancedproblem',
      number: 25
    }
  ], function (err, config) {
    if (err) throw err;
    window.app = architect.createApp(config);
  });
});
