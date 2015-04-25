/**
 * Created by Khagesh.Sharma on 4/25/2015.
 */
///<reference path="../types/tsd.d.ts" />
(function () {
    'use strict';

    angular
        .module('app')
        .config(AppConfiguration);

    function AppConfiguration($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'app/home/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
        });
    }
    AppConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];
})();