/**
 * Created by Jackyrul on 28.03.2016.
 */
(function () {
    var app = angular.module('asteri', [
            'pascalprecht.translate',
        'common',
        'ui.router',                    // Routing
        'ngAnimate',
        //'oc.lazyLoad',                  // ocLazyLoad
        //'ui.bootstrap',                 // Ui Bootstrap
        //'common',
    ])

    app.run([ '$templateCache', '$rootScope', '$state', '$stateParams',
        function ($templateCache, $rootScope, $state, $stateParams) {

        $rootScope.date = new Date();

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

    }]);


})();