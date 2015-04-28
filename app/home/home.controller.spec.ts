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
            _$provide_.service('pivotalService', function () {
                this.getStories = function () {};

                this.createStory = function(){};
            });
        }));

        beforeEach(inject(function (_$controller_) {
            $controller = _$controller_;
        }));

        beforeEach(inject(function (_pivotalService_, $q, _$rootScope_) {
            pivotalServiceMock = _pivotalService_;
            var deferred = $q.defer();
            spyOn(pivotalServiceMock, "getStories").and.callFake(function () {
                return deferred.promise;
            });

            deferred.resolve([{name:'some name'}]);
            _$rootScope_.$digest();
        }));

        describe('$scope.stories', function () {
            it('should call activate', function () {
                var controller = $controller('HomeController', {
                    pivotalService: pivotalServiceMock
                });

                expect(pivotalServiceMock.getStories).toHaveBeenCalled();
            });
        });
    });
})();