'use strict';

angular
  .module('timerApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'timer'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/pro', {
        templateUrl: 'views/pro.html',
        controller: 'ProCtrl'
      })
      .when('/sport', {
        templateUrl: 'views/sport.html',
        controller: 'SportCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .directive('resize', function ($window) {
  return function ($scope, element) {
    console.log(element)
    $scope.getelementDimensions = function () {
      return { 'h': element.context.offsetHeight, 'w': element.context.offsetWidth };
    };
    $scope.$watch($scope.getelementDimensions, function (newValue, oldValue) {
      $scope.windowHeight = newValue.h;
            $scope.windowWidth = newValue.w;
            
    }, true);
  
    angular.element($window).bind('resize', function () {
      $scope.$apply();
    });
  }
});
