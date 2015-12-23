(function () {
  'use strict';
  var app = angular.module('profile',['ngRoute']);
  app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl : 'partials/home.html',
        controller : 'AppCtrl'
      })
      .when('/projects', {
        templateUrl : 'partials/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/projects/:project_id', {
        templateUrl : 'partials/projects/project.html',
        controller : 'ProjectCtrl'
      })
      .when('/experience', {
        templateUrl : 'partials/experience.html',
        controller : 'AppCtrl'
      })
  });
  app.controller('AppCtrl', function ($scope) {
    var tabs = [{
        title: "Home",
        url: "#/"
      }, {
        title: "Projects",
        url: "#/projects"
      }, {
        title: "Technical Experience",
        url: "#/experience"
      }
    ];
    $scope.tabs = tabs;
    $scope.selectedUrl = "partials/home.html";
    $scope.onClick = function(tab) {
      $scope.selectedUrl = tab.url;
    }
  });
  app.directive('bsTooltip', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).hover(function(){
                // on mouseenter
                $(element).tooltip('show');
            }, function(){
                // on mouseleave
                $(element).tooltip('hide');
            });
        }
    };
  });
})();