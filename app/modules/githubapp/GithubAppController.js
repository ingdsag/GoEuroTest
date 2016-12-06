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