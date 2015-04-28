/**
 * Created by Khagesh.Sharma on 4/26/2015.
 */
///<reference path="../../types/tsd.d.ts" />
///<reference path="home.interfaces.ts" />
(function () {
    angular.module('app.home').controller('HomeController', HomeController);
    function HomeController(pivotalService) {
        var _this = this;
        this.speech = '';
        this.stories = null;
        this.createStory = function () {
            createNewStory().then(function () {
                //once new user story is created, get all stories
                getStories();
            }).then(null, function () {
                // handle error over here
            });
        };
        var activate = function () {
            return getStories();
        };
        var getStories = function () {
            // get all stories assigned
            return pivotalService.getStories().then(function (stories) {
                _this.stories = stories.data.map(function (story) {
                    return {
                        name: story.name,
                        estimate: story.estimate,
                        status: story.current_status
                    };
                });
            }).then(null, function (error) {
                //TODO: Handle error over here
            });
        };
        var createNewStory = function () {
            return pivotalService.createStory({ name: _this.speech });
        };
        activate();
        return this;
    }
    HomeController.$inject = ['pivotalService'];
})();
//# sourceMappingURL=home.controller.js.map