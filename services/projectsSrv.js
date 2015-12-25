(function () {
  'use strict';
  angular.module('profile')
  .service('projectsSrv', function($http,$q){
    var projects;
    this.getProjects = function() { //returns a promise
        if(angular.isDefined(projects)) {
            return $q.when(projects);
        }
        return $http.get('partials/projects/projects.json').then(function(data) {
            projects = data.data;
            return projects;
        });
    };
    this.getProject = function(index) {
        if(angular.isDefined(projects)) {
            return $q.when(projects[index]);
        }
        return $http.get('partials/projects/projects.json').then(function(data) {
            projects = data.data;
            return projects[index];
        });
    };
    
  });
})();