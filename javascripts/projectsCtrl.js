(function () {
  'use strict';
  var app = angular.module('profile',[]);
  app.controller('ProjectsCtrl', function ($scope) {
    var projects = [{
        title: "Home",
        url: "partials/home.html"
      }, {
        title: "Projects",
        url: "partials/projects.html"
      }, {
        title: "Technical Experience",
        url: "partials/experience.html"
      }
    ];
    $scope.projects = projects;
    $scope.onClick = function(project) {
      $scope.selectedUrl = project.url;
    }
  });

})();