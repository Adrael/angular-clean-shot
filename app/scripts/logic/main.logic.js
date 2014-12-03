/**
 * @author Raphael MARQUES
 *
 * @file The Main controller's logic file.
 * @module MainLogic
 */

/**
 * MainLogic IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('CleanShot')
        .factory('MainLogic', MainLogic);

    // Dependency injection
    MainLogic.$inject = ['$log', 'Server'];

    /**
     * The MainLogic factory aims to keep the Main controller simple.
     * @name MainLogic
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} Server The application's Server object
     * @function
     */
    function MainLogic($log, Server) {

        $log.debug('Loading Main Logic...');

        var factory =
        {
            getTitle: getTitle
        };

        return factory;

        /**
         * Retrieve title from server.
         * @name getTitle
         * @param {Object} viewModel The Main controller's instance
         * @function
         */
        function getTitle(viewModel) {

            Server.get('title', titleSuccessCallback);

            function titleSuccessCallback(title) {

                viewModel.title = title;
                $log.debug('Received title:', title);

            }

        }

    }

})();
