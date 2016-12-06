
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

(function() {

    var app = angular.module('app');

    app.directive('gitHubResults', function () {
        
        return {
            restrict: 'EA',
            scope: {
                gitHubData: '='
            },
            templateUrl: 'views/gitHubResults'
        };
    });

}());


(function() {

    var app = angular.module('app');

    app.directive('ngEnter', function () {

        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if(event.which === 13) {
                    scope.$apply(function(){
                        scope.$eval(attrs.ngEnter, {'event': event});
                    });

                    event.preventDefault();
                }
            });
        };
    });

}());

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

(function() {
    'use strict';

    angular
        .module('app')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$scope', '$rootScope', '$route', 'viewService'];

    function IndexController($scope, $rootScope, $route, viewService) {
        var vm = this;
        viewService.initView();
    }
})();
(function() {
    'use strict';

    angular
        .module('app')
        .controller('GithubAppController', GithubAppController);

    GithubAppController.$inject = ['$scope', 'viewService', '$timeout', '$http'];

    function GithubAppController($scope, viewService, $timeout, $http) {
        $scope.searchValue = 'goeuro';
        $scope.alertMessage = '';
        $scope.userName = '';
        $scope.searchData = '';



        viewService.initView();
        $scope.searchClicked = function() {


            if ($scope.searchValue === '') {
                $scope.showError('Please input a valid github user in the search field.');
            } else {
                var urlLink = 'https://api.github.com/users/' + $scope.searchValue + '/repos';
                $http({
                    method: 'GET',
                    url: urlLink
                }).then(function successCallback(response) {
                    if (response.status === 200) {
                        $scope.userName = $scope.searchValue;
                        console.log(response.data);
                        response.data = $scope.parseDates(response.data);
                        $scope.searchData = response.data;
                    }
                }, function errorCallback(response) {
                    if (response.status === 404) {
                        $scope.showError('User not found, please verify that the user exists.');
                    } else if(response.status === -1) {
                        $scope.showError('Could not reach the URL, maybe you don\'t have connectivity?');
                    }
                });

            }

        };
        $scope.parseDates = function(response) {
            for (var i = 0; i < response.length; i++) {
                var newCreated = new Date(response[i].created_at);
                newCreated = newCreated.getDate() + '/' + newCreated.getMonth() + '/' + newCreated.getFullYear();
                var newUpdated = new Date(response[i].updated_at);
                newUpdated = newUpdated.getDate() + '/' + newUpdated.getMonth() + '/' + newUpdated.getFullYear();
                response[i].created_at = newCreated;
                response[i].updated_at = newUpdated;
               // console.log(response.data[0].updated_at);
            }
            return response;
        };
        $scope.showError = function(errorMsg) {
            var alertElement = angular.element(document.querySelector(".alert.alert-danger"));
            alertElement.addClass( "fade-in-frame-alert" );
            $scope.alertMessage = errorMsg;
            $timeout(function() {
                alertElement.removeClass( "fade-in-frame-alert" );
                $scope.alertMessage = '';
            }, 3000);
        };
    }
})();