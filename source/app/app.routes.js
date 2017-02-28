(function() {
    'use strict';

    function config(stateProvider, urlRouterProvider, locationProvider, $qProvider, $uiViewScrollProvider) {
        $qProvider.errorOnUnhandledRejections(false); // for Possibly unhandled rejection: {} bug in angular js

        var componentPath = settings.path.components,
            sharedComponentPath = settings.path.sharedComponents;
        var commomObj = {
            header: {
                templateUrl: sharedComponentPath + 'header/headerView.html'
            },
            footer: {
                templateUrl: sharedComponentPath + 'footer/footerView.html'
            }
        };

        urlRouterProvider.otherwise('shoppingCart');
        stateProvider
            //Level -1
            .state('base', {
                views: {
                    header: commomObj.header,
                    content: {
                        template: '<div ui-view="main" autoscroll="true"></div>',
                    },
                    footer: commomObj.footer
                }
            })
            .state('shoppingCart', {
                parent: "base",
                views: {
                    main: {
                        templateUrl: componentPath + 'shoppingCart/shoppingCartView.html',
                        controller: 'shoppingCartCtrl',
                        controllerAs: 'scc'
                    }
                }
            })


        //locationProvider.html5Mode(true);

        $uiViewScrollProvider.useAnchorScroll();
    }

    angular
        .module(ngApp)
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$qProvider', '$uiViewScrollProvider'];

})();
