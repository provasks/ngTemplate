(function() {
    'use strict';

    function shoppingCartCtrl($scope, apiRequest, cs) {
        var scc = this;
    }

    angular.module('App').controller('shoppingCartCtrl', shoppingCartCtrl);
    shoppingCartCtrl.$inject = ['$scope', 'apiRequest', 'commonService'];
})();
