define(['js/vendor/math'], function (math) {

  mathPlugin.provides = ["math"];

  function mathPlugin(options, imports, register) {
    register(null, {math: math});
  }

  return mathPlugin;

});
