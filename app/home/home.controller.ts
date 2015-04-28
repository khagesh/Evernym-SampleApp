/**
 * Created by Khagesh.Sharma on 4/26/2015.
 */
///<reference path="../../types/tsd.d.ts" />
///<reference path="home.interfaces.ts" />
(function () {
    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    function HomeController (pivotalService) {

        this.speech = '';
        this.stories = null;
        this.createStory = () => {
            createNewStory()
                .then(() => {
                    //once new user story is created, get all stories
                    getStories();
                })
                .then(null, () => {
                    // handle error over here
                })
        };

        var activate = () => {
            return getStories();
        };

        var getStories = () => {
            // get all stories assigned
            return pivotalService
                .getStories()
                .then((stories) => {
                    this.stories = stories.data
                        .map((story) => {
                            return {
                                name: story.name,
                                estimate: story.estimate,
                                status: story.current_status
                            }
                        });
                })
                .then(null, (error) => {
                    //TODO: Handle error over here
                });
        };

        var createNewStory = () => {
            return pivotalService
                .createStory({name: this.speech});
        };

        activate();

        return this;
    }
    HomeController.$inject = ['pivotalService'];
})();