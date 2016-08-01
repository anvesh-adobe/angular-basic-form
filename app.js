'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngMessages'])

.controller('View1Ctrl', ['$scope', function($scope) {
      $scope.registerObj = {};
      $scope.validPassword = true;
      $scope.passwordMatched = true;

      $scope.checkPassword = function() {
        if ($scope.registerObj.password.match(/^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9!@#$%^&*]{8,})$/)) {
          $scope.validPassword = true
        }
        else {
          $scope.validPassword = false
        }
      };

      $scope.confirmPasswordCheck = function() {
        if($scope.registerObj.password == $scope.registerObj.confirmPassword) {
          $scope.passwordMatched = true;
        }
        else {
          $scope.passwordMatched = false;
        }
      };
}]);
