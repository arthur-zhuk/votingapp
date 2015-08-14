'use strict';

angular.module('workspaceApp')
  .controller('NewPollCtrl', function ($scope, $http) {
    $scope.pollData = [];
    
    $http.get('api/polls').success(function(pollData) {
      $scope.pollData = pollData;
    });
    
    $scope.postQuestion = function() {
      $http.post('api/polls', {pollQuestion: $scope.newQuestion, pollSelection1: $scope.newSelection1, pollSelection2: $scope.newSelection2});
      $scope.newQuestion = '';
      $scope.newSelection1 = '';
      $scope.newSelection2 = '';
    };
  });
