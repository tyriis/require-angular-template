define('app', ['angular', 'jquery', 'lodash', 'bootstrap', 'app/main'], function (ng, $, _, bs) {
    'use strict';
    console.log('Require version ' + requirejs.version);
    console.log('Angular version: ' + ng.version.full);
    console.log('jQuery version: ' + $.fn.jquery);
    console.log('Bootstrap version: ' +  bs.version);
    console.log('Lodash version: ' + _.VERSION);
    ng.bootstrap(document, ['app']);
});