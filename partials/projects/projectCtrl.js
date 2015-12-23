(function () {
  'use strict';
  angular.module('profile')
    .controller('ProjectCtrl', function ($scope,$routeParams,$http,$sce) {
    $scope.init = function() {
      $http.get('partials/projects/projects.json').success(function(data) {
        if($routeParams.project_id<1 || $routeParams.project_id>data.length) {
          $scope.project = {
            "title":"Project Not Found",
            "time":"",
            "description":[""],
            "type":"",
            "github":false,
            "github_url":"",
            "accomplishments":[]
          };
        } else {
          $scope.project = data[$routeParams.project_id-1];
          for(var i=0; i<$scope.project.description.length; i++) {
            $scope.project.description[i] =  $sce.trustAsHtml($scope.project.description[i]);
          }
        }
      });
    }
    $scope.init();
  });

})();