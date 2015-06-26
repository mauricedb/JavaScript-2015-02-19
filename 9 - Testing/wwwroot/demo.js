/**
 * Created by Maurice on 6/23/2015.
 */

(function (angular) {

    var app = angular.module('demoApp', ['demoServices']);

    app.controller('MessageController', function ($scope, messageService) {
        $scope.message = messageService.getGreeting();
    });

    app.controller('TDDController', function ($scope, messageService) {
        $scope.message = messageService.getGreeting();
    });

    app.controller('MoviesController', function ($scope, $http) {
        $scope.movies = [];

        $http.get('/api/movies').then(function (e) {
            $scope.movies = e.data;
        });
    });

    var services = angular.module('demoServices', []);

    services.service('messageService', function (xx) {
        this.getGreeting = function () {

            return 'Hello there ' + xx.bla();
        }
    });

    services.service('xx', function () {

        this.bla = function () {
            return ':-)'
        }
    });

}(window.angular));