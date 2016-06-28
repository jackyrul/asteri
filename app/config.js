/**
 * Created by Jackyrul on 30.05.2016.
 */
(function () {
    'use strict';

    var app = angular.module('asteri');

    // Collect the routes
    app.constant('routes', getRoutes());

    // Configure the routes and route resolvers
    app.config(['routes', '$stateProvider', '$urlRouterProvider', '$httpProvider','$urlMatcherFactoryProvider', routeConfigurator]);
    function routeConfigurator(routes, $stateProvider, $urlRouterProvider, $httpProvider, $urlMatcherFactoryProvider) {

        $urlRouterProvider.otherwise('/');
        routes.forEach(function (r) {
            $stateProvider.state(r);
        });
    }

    //Define the routes

    function getRoutes() {
        return [
            {
                name: 'main',
                url: "/",
                templateUrl: "app/main/main.html",
                //data: { pageTitle: 'О нас' }
            },
            {
                name: 'rooms',
                url: "/rooms",
                templateUrl: "app/rooms/rooms.html",
                //data: { pageTitle: 'salary' }
            },
            {
                name: 'contact',
                url: "/contact",
                templateUrl: "app/contact/contact.html",
                //data: { pageTitle: 'Фото' }
            },
            {
                name: 'admin',
                url: "/admin",
                templateUrl: "app//admin/admin.html",
                data: { pageTitle: 'admin' }
            },
            //{
            //    name: 'vat',
            //    url: "/vat",
            //    templateUrl: "app/vat/vat.html",
            //    //data: { pageTitle: 'Фото' }
            //},

        ];
    }

})();



