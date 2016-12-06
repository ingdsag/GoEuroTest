
(function() {

    var app = angular.module('app');

    app.directive('gitHubResults', function () {

        var controller = ['$scope', '$timeout', function ($scope, $timeout) {

            function init() {


                $scope.items = angular.copy($scope.datasource);
            }
            init();
;
            }];
        
        return {
            restrict: 'EA', //Default in 1.3+
            scope: {
                gitHubData: '='
            },
            controller: controller,
            templateUrl: 'views/gitHubResults'
        };
    });

}());
