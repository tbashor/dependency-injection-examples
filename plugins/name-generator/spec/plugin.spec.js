'use strict';

// Get the code you want to test
var plugin = require('../plugin');
var chance = require('architect-chance');

// Test suite
console.log('test plugins/util-name-generator/plugin.js');
describe('name generator', function(){

  var options;
  var mock;
  var service;

  beforeEach(function(){

    var imports = {};
    options = {};
    mock = {};

    mock.log = jasmine.createSpy('log');
    mock.debug = function(){ return mock.log; };
    mock.app = jasmine.createSpyObj('app', ['on']);

    imports.debug = mock.debug;
    imports.app = mock.app;

    chance(options, imports, function(err, services){
      imports.random = services.Random(1);
    });

    plugin(options, imports, function(err, services){
      service = services.nameGenerator;
    });
  });

  it('provides a random name with the proper format', function(){
    var name = service.generateName();
    var name2 = service.generateName();
    var name3 = service.generateName();
    var name4 = service.generateName();
    expect(name).toEqual('Chapman, Eunice');
    expect(name2).toEqual('Huff, Nicholas');
    expect(name3).toEqual('Mills, Ethel');
    expect(name4).toEqual('Marshall, Phillip');
  });
});


