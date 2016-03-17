define(function () {

    appPlugin.consumes = ['math'];
    return appPlugin;

    function appPlugin(options, imports, register) {
        var p = document.createElement('p');
        p.textContent = 'sqrt('+ options.number + ') = ' +
          imports.math.sqrt(options.number);
        document.body.appendChild(p);

        register();
    }

});
