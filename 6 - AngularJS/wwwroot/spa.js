/**
 * Created by Maurice on 5/7/2015.
 */


var app = angular.module('spaApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
    $routeProvider.when('/route1', {
        controller: 'view1Controller',
        templateUrl: '/spaTemplate.html'
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


app.controller('view1Controller', function($scope, $location){
    $scope.msg = 'In view 1';

    $scope.gotoOtherPage = function () {
        $location.path('/route2')
    }
});

app.controller('view2Controller', function($scope, $location){
    $scope.msg = 'In view 2';

    $scope.gotoOtherPage = function () {
        $location.path('/route1')
    }
});


app.directive('myClick', function(){

    return {
        link: function(scope, el){
            el.bind('click', function(){
                alert('I was clicked')
            })
        }
    }

});


app.directive('myTemplate', function() {
    return {
        scope: true,
        template: 'Dit is een template! {{msg}}',
        link: function(scope, el, attr){
            scope.msg = attr.myTemplate
        }
    };
});