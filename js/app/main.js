define('app/main', ['angular', 'app/contact.controller'], function(ng, ContactController) {
    'use strict';
    var app = ng.module('app', []);
    app.controller('ContactController', ContactController);
});