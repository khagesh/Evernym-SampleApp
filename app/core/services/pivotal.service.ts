/**
 * Created by Khagesh.Sharma on 4/28/2015.
 */
///<reference path="../../../types/tsd.d.ts" />
(function () {
    angular
        .module('app.core')
        .service('pivotalService', PivotalService);

    function PivotalService($http, PIVOTAL){
        var httpConfig = {
            headers: {
                'X-TrackerToken': PIVOTAL.TOKEN
            }
        };

        var get = (url: string, config: any = httpConfig) => {
            return $http.get(url, config);
        };

        var post = (url: string, data: any = {}, config: any = httpConfig) => {
            return $http.post(url, data, config);
        };

        var getStories = () => {
            return get(PIVOTAL.API.STORIES);
        };

        var createStory = () => {
            return post(PIVOTAL.API.STORIES);
        };

        return {
            getStories: getStories,
            createStory: createStory
        }
    }
    PivotalService.$inject = ['$http', 'PIVOTAL'];
})();