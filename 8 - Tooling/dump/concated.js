/**
 * Created by Maurice on 5/7/2015.
 */


var app = angular.module('spaApp', ['ngRoute','spaControllers']);

app.config(function($routeProvider, $locationProvider){
    $routeProvider.when('/route1', {
        controller: 'view1Controller',
        templateUrl: '/spaTemplate1.html'
    });

    $routeProvider.when('/route2', {
        controller: 'view2Controller',
        templateUrl: '/spaTemplate2.html'
    });

    $routeProvider.otherwise({
        redirectTo: '/route1'
    });

    //$locationProvider.html5Mode(true);
});




/**
 * Created by Maurice on 5/7/2015.
 */


var app = angular.module('spaControllers', []);


app.controller('view1Controller', function($scope, $location){
    $scope.msg = 'In view 1';

    $scope.gotoOtherPage = function () {
        $location.path('/route2');
    };
});

app.controller('view2Controller', function($scope, $location){
    $scope.msg = 'In view 2';

    $scope.gotoOtherPage = function () {
        $location.path('/route1');
    };
});
