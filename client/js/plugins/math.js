define(function () {

  mathPlugin.provides = ['math'];

  function mathPlugin(options, imports, register) {
      var api = {
        add: function (a,b) { return a + b; },
        subtract: function (a, b) { return a - b; },
        multiply: function (a, b) { return a * b; },
        divide: function (a, b) { return a / b; }
      };
      register(null, {
        math: api
      });
  }

  return mathPlugin;

});
