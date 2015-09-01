'use strict';

angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/:user/:pollid', {
        templateUrl: 'app/view/view.html',
        controller: 'ViewCtrl',
      });
  });
