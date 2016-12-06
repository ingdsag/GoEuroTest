
(function() {
    'use strict';
    var app = angular.module('app', ['ngRoute', 'ngTouch']);

    app.config(function ($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: 'pages/index.html',
            activeTab: 'index',
            controller: 'IndexController'
        }).when('/app/', {
            templateUrl: 'pages/app.html',
            activeTab: 'app',
            controller: 'GithubAppController'
        })
    });
})();
