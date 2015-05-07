/**
 * Created by Maurice on 5/7/2015.
 */


var module = angular.module('theApp', []);

module.factory('personValidation', function () {
return  {
    validate: function(){}

};
});

module.controller('demoController', ['$scope', '$http','personValidation', function ($scope, $http, p) {

    $http.get('http://localhost:8080/api/movies').then(function(e){
      $scope.movies =   e.data;
    });

    $scope.person = {
        firstName: 'Maurice',
        lastName: 'de Beijer'
    };

    $scope.$watch('person.firstName', function (newValue) {
        console.log(newValue, $scope.person.lastName);
    })

    $scope.clickMe = function () {
        p.validate($scope.person);
        alert('hi ' + $scope.person.firstName);
    }
}]);