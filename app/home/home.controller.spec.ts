/**
 * Created by Khagesh.Sharma on 4/27/2015.
 */
///<reference path="../../types/jasmine/jasmine.d.ts" />
///<reference path="../../types/tsd.d.ts" />
(function () {
    describe("Unit test: HomeController", function () {
       var $controller = null;

        beforeEach(module('app.home'));

        beforeEach(inject(function (_$controller_) {
            $controller = _$controller_;
        }));

        describe('$scope.name', function () {
            it('should have name value set to Home', function () {
                var controller = $controller('HomeController');

                expect(controller.name).toBe('Home');
            });
        });
    });
})();