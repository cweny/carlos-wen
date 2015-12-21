(function () {
  'use strict';
  angular.module('profile')
    .controller('ProjectsCtrl', function ($scope) {
    var projects = [ {
        title: "Message REST Web Service",
        url: "#/projects/message",
        time: "August 2015"
      }, {
        title: "Connect 4",
        url: "#/projects/connect4",
        time: "December 2014"
      }, {
        title: "MozStumbler",
        url: "#/projects/mozstumbler",
        time: "October 2014"
      }, {
        title: "QR Code App",
        url: "#/projects/qr",
        time: "June 2014"
      }, {
        title: "Electromagnetic Tether Robot",
        url: "#/projects/robot",
        time: "February 2014"
      }, {
        title: "Others",
        url: "#/projects/others",
        time: "December 2013"
      }
    ];
    $scope.projects = projects;
  });

})();