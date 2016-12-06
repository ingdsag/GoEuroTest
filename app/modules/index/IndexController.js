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