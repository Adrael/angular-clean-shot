/**
 * @author Raphael MARQUES
 *
 * @file The application's configuration file.
 * @module app-config
 */

/**
 * app-config IIFE declaration.
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
    config.$inject = ['$httpProvider', '$logProvider', 'constants'];

    /**
     * Provides all the configuration the application needs.
     * @name config
     * @param {Object} $httpProvider The AngularJS $httpProvider object
     * @param {Object} $logProvider The AngularJS $logProvider object
     * @param {Object} constants The application's constants object
     * @function
     */
    function config($httpProvider, $logProvider, constants) {

        $httpProvider.useApplyAsync(true);
        $logProvider.debugEnabled(constants.DEBUG);

    }

})();
