'use strict';

angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/view', {
        templateUrl: 'app/view/view.html',
        controller: 'ViewCtrl'
      });
  });
