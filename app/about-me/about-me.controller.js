/**
 * Created by Khagesh.Sharma on 4/26/2015.
 */
///<reference path="../../types/tsd.d.ts" />
(function () {
    'use strict';
    angular.module('app.aboutMe').controller('AboutMeController', AboutMeController);
    function AboutMeController() {
        var vm = this;
        vm.name = "About me";
        return vm;
    }
    AboutMeController.$inject = [];
})();
//# sourceMappingURL=about-me.controller.js.map