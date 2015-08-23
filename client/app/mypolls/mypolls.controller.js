'use strict';

angular.module('workspaceApp')
  .controller('MypollsCtrl', function ($scope, $http, User, Auth) {
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getComputedStyle = Auth.getCurrentUser;
    
    $http.get('api/polls/all/' + $scope.getCurrentUser()._id).success(function(Polls){
      $scope.polls = Polls;
    });
    
    $scope.deletePoll=function(apoll) {
      $http.delete('api/polls/' + apoll._id).success(function(){
        $http.get('api/polls/all/' + $scope.getCurrentUser()._id).success(function(Polls) {
          $scope.polls = Polls;
        });
      });
    };
    
    
    
  });
