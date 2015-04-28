/**
 * Created by Khagesh.Sharma on 4/26/2015.
 */
///<reference path="../../types/tsd.d.ts" />
(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    function HomeController($http) {
        var vm = this;

        this.speech = '';
        this.onSpeechDone = (finalSpeech)=> {
            this.speech = finalSpeech;
        };

        // get all stories assigned
        $http
            .get('https://www.pivotaltracker.com/services/v5/projects/1333036/stories',
                {headers: {'X-TrackerToken': 'e94943960ab1854a06c23e8355ea5ff7'}})
            .success(function (data) {
               console.log(data);
            })
            .error(function (data) {
                console.log(data);
            });
        //
        //$http.post('https://www.pivotaltracker.com/services/v5/projects/1333036/stories',
        //    {'name':'story created from voice controlled pivotal tracker'},
        //    {headers: {'X-TrackerToken': 'e94943960ab1854a06c23e8355ea5ff7'}})
        //    .success(function (data) {
        //        console.log(data);
        //    }).error(function (data) {
        //       console.log(data);
        //    });

        return vm;
    }
    HomeController.$inject = ['$http'];
})();