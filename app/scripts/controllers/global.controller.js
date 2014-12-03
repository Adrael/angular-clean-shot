/**
 * @author Raphael MARQUES
 *
 * @file The Global controller's file.
 * @module Global
 */

/**
 * Global IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('CleanShot')
        .controller('Global', Global);

    // Dependency injection
    Global.$inject = ['$log'];

    /**
     * The Global controller aims to manage the Application.
     * @name Global
     * @param {Object} $log The AngularJS's $log object
     * @function
     */
    function Global($log) {

        $log.debug('Loading Global Contoller...');

        var vm = this;


        return vm;

    }

})();
