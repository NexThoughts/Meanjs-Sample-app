'use strict';

angular.module('mean.person').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider
            .state('person example page', {
            url: '/person/example',
            templateUrl: 'person/views/index.html'
        })

        .state('create person', {
            url: '/person/create',
            templateUrl: 'person/views/create.html'
        });
    }
]);
