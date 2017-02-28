(function() {
    'use strict';

    function mainCtrl($scope, apiRequest, $timeout, cs, $window, $state, $stateParams) {
        var main = this;

        function closePopupFn() {
            angular.element(document.querySelector('body')).removeClass('noscroll');
            if (main.modal) {
                main.modal.style.display = "none";
            }
        }

        main.closePopupFn = closePopupFn;

        function init() {
            // setUserData();
        }
        init();
    }

    angular.module('App').controller('mainCtrl', mainCtrl);
    mainCtrl.$inject = ['$scope', 'apiRequest', '$timeout', 'commonService', '$window', '$state', '$stateParams'];
})();
