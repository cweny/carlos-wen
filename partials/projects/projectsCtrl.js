(function () {
  'use strict';
  angular.module('profile')
    .controller('ProjectsCtrl', function ($scope) {
    var projects = [ {
        title: "Message REST Web Service",
        url: "#/projects/message",
        time: "August 2015",
        description: "REST web service with JAX-RS and JDBC to manage messages in a database",
        type: "Personal Project"
      }, {
        title: "Connect 4",
        url: "#/projects/connect4",
        time: "December 2014",
        description: "Connect 4 Game with artificial intelligence",
        type: "Personal Project"
      }, {
        title: "MozStumbler",
        url: "#/projects/mozstumbler",
        time: "October 2014",
        description: "Android widget application to turn on and off the MozStumbler scanning function",
        type: "University Project"
      }, {
        title: "QR Code App",
        url: "#/projects/qr",
        time: "June 2014",
        description: "Android application capable of storing data and displaying it as a QR code",
        type: "Personal Project"
      }, {
        title: "Electromagnetic Tether Robot",
        url: "#/projects/robot",
        time: "February 2014",
        description: "Autonomous robot capable of following an electromagnetic beacon and receiving data from electromagnetic signals",
        type: "University Project"
      }, {
        title: "Others",
        url: "#/projects/others",
        time: "December 2013",
        description: "More personal projects",
        type: "Personal Project"
      }
    ];
    $scope.projects = projects;
    $scope.getClass = function(index) {
      if(index%2 === 0) {
        return "timeline-inverted";
      } else {
        return "";
      }
    };
    $scope.getPlacement = function(index) {
      console.log(index);
      if(index%2 === 1) {
        return "left";
      } else {
        return "right";
      }
    };
  });

})();