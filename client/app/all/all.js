'use strict';

angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/all', {
        templateUrl: 'app/all/all.html',
        controller: 'AllCtrl'
      });
  });
