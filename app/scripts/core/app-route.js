/**
 * @author Raphael MARQUES
 *
 * @file The application's routes configuration file.
 * @module route-config
 */

/**
 * route-config IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('CleanShot')
        .config(config);

    // Dependency injection
    config.$inject = ['$routeProvider'];

    /**
     * Provides all the routes the application needs.
     * @name config
     * @param {Object} $routeProvider The AngularJS $routeProvider object
     * @function
     */
    function config($routeProvider) {

        $routeProvider
            .when('/', {

                redirectTo: '/main'

            })

            .when('/main', {

                templateUrl: 'scripts/views/main.html',
                controller: 'Main',
                controllerAs: 'main'

            })

            .otherwise({

                redirectTo: '/main'

            });

    }

})();
