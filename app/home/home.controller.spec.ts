/**
 * Created by Khagesh.Sharma on 4/27/2015.
 */
///<reference path="../../types/jasmine/jasmine.d.ts" />
///<reference path="../../types/tsd.d.ts" />
(function () {
    describe("Unit test: HomeController", function () {
       var $controller = null, pivotalServiceMock = null;

        beforeEach(module('app.home'));
        beforeEach(module('app.core', function(_$provide_){
            _$provide_.service('pivotalService', function ($q) {
                this.getStories = function () {
                    // fake implementation
                    var defer = $q.defer();

                    defer.resolve([]);

                    return defer.promise();
                };

                //this.createStory = jasmine.createSpy('createStory').andCallFake(function(){
                //    return true;
                //});
            });
        }));

        beforeEach(inject(function (_$controller_) {
            $controller = _$controller_;
        }));

        beforeEach(inject(function (_pivotalService_) {
            pivotalServiceMock = _pivotalService_;
        }));

        describe('$scope.stories', function () {
            it('should have stories value set to null', function () {
                var controller = $controller('HomeController', {
                    pivotalService: pivotalServiceMock
                });

                expect(controller.stories).toBe([]);
            });
        });
    });
})();