(function () {
  'use strict';
  angular.module('profile')
    .controller('ProjectCtrl', function ($scope,$routeParams,$http,projectsSrv) {
    $scope.init = function() {
      projectsSrv.getProjects().then(function(data) {
        $scope.num_projects = data.length;
        if($routeParams.project_id<1 || $routeParams.project_id>$scope.num_projects) {
          $scope.project = {
            "title":"Project Not Found",
            "time":"",
            "description":[""],
            "type":"",
            "images":[],
            "github":false,
            "github_url":"",
            "accomplishments":[]
          };
        } else {
          $scope.project = data[$routeParams.project_id-1];
          $scope.project.hasImages = function() {
            return $scope.project.images.length > 0;
          }
          
          if($scope.project.sub_projects) {
            for(var i=0; i<$scope.project.sub_projects.length; i++) {
              $scope.project.sub_projects[i].hasImages = function() {
                return this.images.length > 0;
              }
            }
          }
        }
      });
    }
    $scope.init();
  });
})();