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
