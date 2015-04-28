/**
 * Created by Khagesh.Sharma on 4/28/2015.
 */
///<reference path="../../../types/tsd.d.ts" />
(function () {
    angular.module('app.core').service('pivotalService', PivotalService);
    function PivotalService($http, PIVOTAL) {
        var httpConfig = {
            headers: {
                'X-TrackerToken': PIVOTAL.TOKEN
            }
        };
        var get = function (url, config) {
            if (config === void 0) { config = httpConfig; }
            return $http.get(url, config);
        };
        var post = function (url, data, config) {
            if (data === void 0) { data = {}; }
            if (config === void 0) { config = httpConfig; }
            return $http.post(url, data, config);
        };
        var getStories = function () {
            return get(PIVOTAL.API.STORIES);
        };
        var createStory = function (data) {
            return post(PIVOTAL.API.STORIES, data);
        };
        return {
            getStories: getStories,
            createStory: createStory
        };
    }
    PivotalService.$inject = ['$http', 'PIVOTAL'];
})();
//# sourceMappingURL=pivotal.service.js.map