/**
 * Created by Khagesh.Sharma on 4/26/2015.
 */
///<reference path="../../types/tsd.d.ts" />
(function () {
    'use strict';
    angular.module('app.home').controller('HomeController', HomeController);
    function HomeController() {
        var vm = this;
        vm.name = 'Home';

        return vm;
    }
    HomeController.$inject = [];
})();
//# sourceMappingURL=home.controller.js.map