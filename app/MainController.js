(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', '$rootScope', '$route', 'viewService'];

    function MainController($scope, $rootScope, $route, viewService) {
        /*$rootScope.vm = {};
        var mobileMenuVisible = false;
        var mobileMenuAnimating = false;*/
        
        /*$rootScope.vm.menuPageChanged = function(newPage) {
            $rootScope.vm.toggleMobileMenu();
        };*/
        
        /*$rootScope.vm.toggleMobileMenu = function() {
            if (!mobileMenuAnimating) {
                mobileMenuAnimating = true;
                var leftValue = "0";
                var opacity = "1";
                if (mobileMenuVisible) {
                    leftValue = "100%";
                    opacity = "0";
                }

                $('.mobile-nav').animate({
                    opacity: opacity,
                    left: leftValue
                }, 300, function() {
                    mobileMenuAnimating = false;
                });
                mobileMenuVisible = !mobileMenuVisible;
            }
        };*/
    }
})();