define('app', ['angular', 'jquery', 'lodash', 'bootstrap'], function (ng, $, _, bs) {
    'use strict';
    var app = ng.module('app', []);
    console.log('Require version ' + requirejs.version);
    console.log('Angular version: ' + ng.version.full);
    console.log('jQuery version: ' + $.fn.jquery);
    console.log('Bootstrap version: ' +  bs.version);
    console.log('Lodash version: ' + _.VERSION);
});