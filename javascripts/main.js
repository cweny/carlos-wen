(function () {
  'use strict';
  var app = angular.module('profile',[]);
  app.controller('AppCtrl', function ($scope) {
    $scope.test = "resume.html";
    var tabs = [{
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
    $scope.tabs = tabs;
    $scope.selectedUrl = "partials/home.html";
    $scope.onClick = function(tab) {
      $scope.selectedUrl = tab.url;
    }
  });

})();