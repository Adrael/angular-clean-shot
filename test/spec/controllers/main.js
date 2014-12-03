describe('Controller: Main', function () {

    'use strict';

    var Main;

    beforeEach(
        angular.module('CleanShot')
    );

    beforeEach(
        inject(
            function ($controller, _$log_) {

                Main = $controller('Main', {$log: _$log_});

            }
        )
    );

    it('should have a title', function () {

        expect(Main.title).toBe('Hello world!');

    });

});

