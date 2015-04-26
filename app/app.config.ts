/**
 * Created by Khagesh.Sharma on 4/25/2015.
 */
///<reference path="../types/tsd.d.ts" />
(function () {
    'use strict';

    angular
        .module('app')
        .config(AppConfiguration);

    function AppConfiguration($stateProvider,
                              $urlRouterProvider,
                              $ocLazyLoadProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'app/home/home.html',
            controller: 'HomeController',
            controllerAs: 'home',
            resolve: {
                loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad
                        .load('app.home')
                        .then(function () {
                           return $ocLazyLoad.load({
                                name:'app.home',
                                files: [
                                    'app/home/home.controller.js'
                                ]
                            });
                        });
                }]
            }
        });

        $stateProvider.state('about-me', {
            url: '/about-me',
            templateUrl: 'app/about-me/about-me.html',
            controller: 'AboutMeController',
            controllerAs: 'aboutMe',
            resolve: {
                loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad
                        .load('app.aboutMe')
                        .then(function () {
                            return $ocLazyLoad.load({
                                name:'app.aboutMe',
                                files: [
                                    'app/about-me/about-me.controller.js'
                                ]
                            });
                        });
                }]
            }
        });

        $ocLazyLoadProvider.config({
            events: true,
            debug: false,
            loadedModules: ['app'],
            modules: [
                {
                    name: 'app.home',
                    files: [
                        'app/home/home.module.js'
                    ]
                },
                {
                    name: 'app.aboutMe',
                    files: [
                        'app/about-me/about-me.module.js'
                    ]
                }
            ]
        });
    }
    AppConfiguration.$inject = ['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider'];
})();