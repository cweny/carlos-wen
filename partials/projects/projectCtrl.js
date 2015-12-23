(function () {
  'use strict';
  angular.module('profile')
    .controller('ProjectCtrl', function ($scope,$routeParams,$http) {
    $scope.init = function() {
      $http.get('partials/projects/projects.json').success(function(data) {
        $scope.project = data[$routeParams.project_id];
      });
    }
    $scope.init();
  });

})();