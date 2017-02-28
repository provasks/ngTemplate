(function() {
    'use strict';

    function commonService($window, $timeout) {
        var vm = this;
    }
    angular.module(ngApp).service('commonService', commonService);
    commonService.$inject = ['$window', '$timeout'];
})();
