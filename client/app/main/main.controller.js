'use strict';

angular.module('workspaceApp')
  .controller('MainCtrl', function ($scope, $http, User, Auth) {
    
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getCurrentUser = Auth.getCurrentUser;
    
  });
