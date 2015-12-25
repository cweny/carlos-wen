(function () {
  'use strict';
  angular.module('profile')
    .controller('ProjectsCtrl', function ($scope,$http,projectsSrv) {
    $scope.init = function() {
      projectsSrv.getProjects().then(function(data) {
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