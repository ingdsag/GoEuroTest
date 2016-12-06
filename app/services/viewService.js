(function() {
    'use strict';

    angular
        .module('app')
        .factory('viewService', ['$timeout', '$rootScope', '$route', '$window',  function($timeout, $rootScope, $route, $window) {
            var factory = {};
            
            factory.initView = function() {
                var fadeElement = angular.element(document.querySelector(".fade-element"));
                fadeElement.removeClass( "fade-in-frame" );
                $timeout(function() {
                    fadeElement.addClass( "fade-in-frame" );
                    $window.scrollTo(0, 0);
                }, 100);
                
                $rootScope.toggleMobileMenu = function() {
                    console.log('menuToggle');
                };
                
            };
            return factory;
        }]);
})();
