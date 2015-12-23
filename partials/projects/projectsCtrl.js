(function () {
  'use strict';
  angular.module('profile')
    .controller('ProjectsCtrl', function ($scope,$http) {
    
    $http.get('partials/projects/projects.json').success(function(data) {
        $scope.projects = data;
    });
    
    $scope.getClass = function(index) {
      if(index%2 === 0) {
        return "timeline-inverted";
      } else {
        return "";
      }
    };
  });

})();