
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
