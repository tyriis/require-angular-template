require.config({
    paths: {
        'angular': 'lib/angular/angular',
        'jquery': 'lib/jquery/jquery',
        'bootstrap' :  'lib/bootstrap/js/bootstrap.amd',
        'lodash' : 'lib/lodash/lodash'
    },
    map: {
        '*': {
            'jquery': 'lib/jquery/jquery.amd.private'
        },
        'lib/jquery/jquery.amd.private': {
            'jquery': 'jquery'
        }
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'jquery': {
            exports: 'jQuery'
        }
    },
    deps: ['./app']
});
