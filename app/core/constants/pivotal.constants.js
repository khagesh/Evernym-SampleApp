/**
 * Created by Khagesh.Sharma on 4/28/2015.
 */
///<reference path="../../../types/tsd.d.ts" />
(function () {
    angular.module('app.core').constant('PIVOTAL', pivotalConstants());
    function pivotalConstants() {
        return {
            API: {
                STORIES: 'https://www.pivotaltracker.com/services/v5/projects/1333036/stories'
            },
            TOKEN: 'e94943960ab1854a06c23e8355ea5ff7'
        };
    }
})();
//# sourceMappingURL=pivotal.constants.js.map