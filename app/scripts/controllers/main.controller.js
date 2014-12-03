/**
 * @author Raphael MARQUES
 *
 * @file The Main controller's file.
 * @module Main
 */

/**
 * Main IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('CleanShot')
        .controller('Main', Main);

    // Dependency injection
    Main.$inject = ['$log', 'MainLogic'];

    /**
     * The Main controller aims to manage the Application.
     * @name Main
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} MainLogic The controller's logic
     * @function
     */
    function Main($log, MainLogic) {

        $log.debug('Loading Main Contoller...');

        var vm = this;

        MainLogic.getTitle(vm);

        return vm;

    }

})();
