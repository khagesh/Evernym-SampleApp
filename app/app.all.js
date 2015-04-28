/**
 * Created by Khagesh.Sharma on 4/25/2015.
 */
///<reference path="../types/tsd.d.ts" />
(function () {
    'use strict';
    angular.module('app', ['ui.router', 'oc.lazyLoad', 'app.core']);
})();
//# sourceMappingURL=app.module.js.map
/**
 * Created by Khagesh.Sharma on 4/25/2015.
 */
///<reference path="../types/tsd.d.ts" />
(function () {
    'use strict';
    angular.module('app').config(AppConfiguration);
    function AppConfiguration($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'app/home/home.html',
            controller: 'HomeController',
            controllerAs: 'home',
            resolve: {
                loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app.home').then(function () {
                        return $ocLazyLoad.load({
                            name: 'app.home',
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
                    return $ocLazyLoad.load('app.aboutMe').then(function () {
                        return $ocLazyLoad.load({
                            name: 'app.aboutMe',
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
        // Enable CORS as well
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested_With'];
    }
    AppConfiguration.$inject = ['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$httpProvider'];
})();
//# sourceMappingURL=app.config.js.map
/**
 * Created by Khagesh.Sharma on 4/27/2015.
 */
///<reference path="../../types/tsd.d.ts" />
(function () {
    'use strict';
    angular.module('app.core', []);
})();
//# sourceMappingURL=core.module.js.map
/**
 * Created by Khagesh.Sharma on 4/28/2015.
 */
///<reference path="../../../../types/tsd.d.ts" />
(function () {
    'use strict';
    angular.module('app.core').directive('ptVoice', Speech);
    //TODO: separate it out in a service and instantiate that service value
    var hasSpeechApi = function () {
        return 'webkitSpeechRecognition' in window;
    }, noOp = function () {
    }, speechErrorMap = {
        'no-speech': 'No speech was detected.',
        'audio-capture': 'No microphone was found. Ensure that a microphone is installed.',
        'not-allowed': 'Permission to use microphone was denied. To change, go to chrome://settings/contentExceptions#media-stream'
    };
    function getDefaultSpeechRecognition() {
        // assign a default instance instead of checking null everywhere
        var recognition = {
            start: noOp,
            stop: noOp,
            onstart: null,
            onend: null,
            onresult: null,
            onerror: null,
            continuous: false,
            interimResults: false,
            lang: ''
        };
        if (hasSpeechApi()) {
            recognition = new webkitSpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
        }
        return recognition;
    }
    function Speech() {
        var directiveDefinitionObject = {
            restrict: 'EA',
            templateUrl: 'app/core/directives/speech/speech.directive.html',
            scope: {
                speech: "=speech"
            },
            controller: SpeechDirectiveController,
            controllerAs: 'speech',
            bindToController: true
        };
        function SpeechDirectiveController($scope, $attrs) {
            var _this = this;
            this.isSpeechAvailable = hasSpeechApi();
            this.speechRecognition = getDefaultSpeechRecognition();
            this.errorMessage = '';
            this.isError = false;
            this.finalSpeech = '';
            this.interimSpeech = '';
            this.onSpeechStart = function () {
                _this.finalSpeech = '';
                _this.interimSpeech = '';
                _this.speechRecognition.start();
            };
            this.onSpeechStop = function () {
                _this.speech = _this.finalSpeech;
                _this.speechRecognition.stop();
            };
            this.speechRecognition.onerror = function (event) {
                _this.isError = true;
                _this.errorMessage = speechErrorMap[event.error];
            };
            this.speechRecognition.onresult = function (event) {
                //TODO: I hate browsers for implementing lists with different interfaces,
                //TODO: Try to figure out to apply filter on lists interface which do not implement array
                // use Ramda to compose functions for this calculation, as of now using native JavaScript
                //var transcripts = Array.prototype.filter.apply(event.results, function (result, index) {
                //    return index >= event.resultIndex;
                //});
                //
                //this.interimSpeech = transcripts
                //    .filter((transcript) => !transcript.isFinal )
                //    .reduce((interimTranscript, transcript) => interimTranscript += transcript[0].transcript, '');
                //
                //this.finalSpeech = transcripts
                //    .filter((transcript) => transcript.isFinal)
                //    .reduce((finalTranscript, transcript) => finalTranscript += transcript[0].transcript, this.finalSpeech);
                _this.interimSpeech = '';
                for (var i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        _this.finalSpeech += event.results[i][0].transcript;
                    }
                    else {
                        _this.interimSpeech += event.results[i][0].transcript;
                    }
                }
                $scope.$apply();
            };
        }
        SpeechDirectiveController.$inject = ['$scope', '$attrs'];
        return directiveDefinitionObject;
    }
    Speech.$inject = [];
})();
//# sourceMappingURL=speech.directive.js.map
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