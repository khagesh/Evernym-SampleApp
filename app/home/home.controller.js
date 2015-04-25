/**
 * Created by Khagesh.Sharma on 4/26/2015.
 */
///<reference path="../../types/tsd.d.ts" />
(function () {
    angular.module('app').controller('HomeController', HomeController);
    function HomeController() {
        this.name = 'World!!';
        return this;
    }
    HomeController.$inject = [];
})();
//# sourceMappingURL=home.controller.js.map