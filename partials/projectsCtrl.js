(function () {
  'use strict';
  angular.module('profile')
    .controller('ProjectsCtrl', function ($scope,$http) {
    $scope.init = function() {
      $http.get('partials/projects/projects.json').success(function(data) {
        $scope.projects = data;
        for(var i=0; i<$scope.projects.length; i++) {
          $scope.projects[i].url = "#/projects/" + (i+1);
        }
      });
    }
    $scope.getClass = function(index) {
      if(index%2 === 0) {
        return "timeline-inverted";
      } else {
        return "";
      }
    };
    $scope.init();
  });

})();