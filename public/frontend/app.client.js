/*
 * @Author: Ngo Hung Phuc
 * @Date:   2016-10-29 21:57:50
 * @Last Modified by:   Ngo Hung Phuc
 * @Last Modified time: 2016-11-11 21:29:35
 */

(function() {
    'use strict';
    angular.module('MyApp', [
        // Angular modules
        'ngRoute'

        // Custom modules

        // 3rd Party Modules
    ]).config(config);

    config.$inject = ['$locationProvider', '$routeProvider'];

    function config($locationProvider, $routeProvider) {
        $routeProvider
            .when('/view1', {
                templateUrl: '/partials/view1'
            })
            .when('/view2', {
                templateUrl: '/partials/view2'
            })
            .otherwise({
                templateUrl: '/partials/index'
            });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }
})();