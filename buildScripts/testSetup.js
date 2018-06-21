// This file isn't transpiled, so must use CommonJS and ES5

//Register babel to transpile before our test run
//This is for Mocha
require('babel-register');

//Disables webpack features that Mocha doesn't understand
//Carefull with this couplingm
require.extensions['.css'] = function() {};
