(function () {
  'use strict';
  angular.module('profile')
    .controller('ProjectCtrl', function ($scope,$routeParams,$http,$sce) {
    $scope.init = function() {
      $http.get('partials/projects/projects.json').success(function(data) {
        $scope.project = data[$routeParams.project_id];
        for(var i=0; i<$scope.project.description.length; i++) {
          $scope.project.description[i] =  $sce.trustAsHtml($scope.project.description[i]);
        }
      });
    }
    $scope.init();
  });

})();