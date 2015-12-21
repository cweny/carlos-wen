(function () {
  'use strict';
  angular.module('profile')
    .controller('ProjectsCtrl', function ($scope) {
    var projects = [ {
        title: "Message REST Web Service",
        url: "#/projects/message"
      }, {
        title: "Connect 4",
        url: "#/projects/connect4"
      }, {
        title: "MozStumbler",
        url: "#/projects/mozstumbler"
      }, {
        title: "QR Code App",
        url: "#/projects/qr"
      }, {
        title: "Electromagnetic Tether Robot",
        url: "#/projects/robot"
      }
    ];
    $scope.projects = projects;
  });

})();