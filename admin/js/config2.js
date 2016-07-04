/// <reference path="../views/clusters/clusters.html" />
/**
 * admin - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 * admin theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider,$httpProvider) {
    $urlRouterProvider.otherwise("/index/aboutus");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $stateProvider

        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "/admin/views/common/content2.html",
        })
        .state('index.admin', {
            url: "/admin",
            templateUrl: "/admin/views/admin/admin.html",
            data: { pageTitle: 'admin' }
        })
        .state('index.aboutus', {
            url: "/aboutus",
            templateUrl: "/admin/views/aboutus/aboutus.html",
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'summernote',
                            files: ['/admin/css/plugins/summernote/summernote.css',
                                '/admin/css/plugins/summernote/summernote-bs3.css',
                                '/admin/js/plugins/summernote/summernote.min.js',
                                '/admin/js/plugins/summernote/angular-summernote.min.js']
                        }
                    ]);
                }
            },
            data: { pageTitle: 'aboutus' }
        })
        .state('index.photo', {
            url: "/photo",
            templateUrl: "/admin/views/photo/photo.html",
            data: { pageTitle: 'photo' }
        })
        .state('index.pricing', {
            url: "/pricing",
            templateUrl: "/admin/views/pricing/pricing.html",
            data: { pageTitle: 'pricing' }
        })
        .state('index.overall', {
            url: "/overall",
            templateUrl: "/admin/views/overall/overall.html",
            data: { pageTitle: 'overall' }
        })
        .state('index.entertainment', {
            url: "/entertainment",
            templateUrl: "/admin/views/entertainment/entertainment.html",
            data: { pageTitle: 'entertainment' }
        })

    //.state('index.main', {
    //    url: "/main",
    //    templateUrl: "/Asteri/admin/views/main.html",
    //    data: { pageTitle: 'Example view' }
    //})
    //.state('index.minor', {
    //    url: "/minor",
    //    templateUrl: "/Asteri/admin/views/minor.html",
    //    data: { pageTitle: 'Example view' }
    //})
}
angular
    .module('admin')
    .config(config)
    .run(function ($rootScope, $state) {
        $rootScope.$state = $state;
    });
