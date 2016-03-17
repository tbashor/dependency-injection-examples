require(['js/architect'], function (architect) {
    architect.resolveConfig([
        'js/plugins/advancedmath',
        'js/plugins/app'
    ], function (err, config) {
        if (err) throw err;
        window.app = architect.createApp(config);
    });
});
