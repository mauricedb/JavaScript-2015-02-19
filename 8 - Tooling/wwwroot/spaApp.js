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



