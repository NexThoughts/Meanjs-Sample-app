'use strict';

angular.module('mean.person').controller('PersonController', ['$scope', 'Global', 'Person', '$location',
    function ($scope, Global, Person, $location) {
        $scope.global = Global;
        $scope.package = {
            name: 'person'
        };

        $scope.create = function () {
            console.log('-----1------' + this.name);
            console.log('-----2------' + this.phone);
            console.log('-----3------' + this.email);
            var person = new Person({
                name: this.name,
                phone: this.phone,
                email: this.email
            });
            person.$save(function (response) {
                $location.path('persons/' + response._id);
            });
        };
    }
]);
