'use strict';

angular.module('workspaceApp')
  .controller('NewPollCtrl', function ($scope, $http, User, Auth) {
    
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getCurrentUser = Auth.getCurrentUser;
    
    $scope.placeHolders = ["Red", "Blue"];
    $scope.counter = 0;
    $scope.choices = ["", ""];
    
    $scope.addChoice = function() {
      $scope.counter++;
      $scope.placeHolders.push("New Choice " + $scope.counter);
      $scope.choices.push("");
    }
    
    $scope.removeChoice = function(index) {
      $scope.placeHolders[index]=null;
      $scope.placeHolders=$scope.placeHolders.filter(function(item){return item !==null});
    }
    
    $scope.addPoll = function() {
      $scope.createdTime = new Date();
      if ($scope.pollTitle !== "") {
        if ($scope.choices.length >= 2) {
          
          var poll = {
            title: $scope.pollTitle,
            choices: $scope.choices.map(function(item) {return {name: item, votes: 0}}),
            ownerid: $scope.getCurrentUser().name,
            voted: [],
            created: $scope.createdTime.getTime()
          }
          
          $http.post('api/polls', poll).success(function() {
            $scope.placeHolders = ["Red", "Blue"];
            $scope.pollTitle = "";
            $scope.choices = [];
            $scope.counter = 0;
          })
        }
      }
    }
    /*
    $scope.postQuestion = function() {
      $http.post('api/polls', {pollQuestion: $scope.newQuestion, pollSelection1: $scope.newSelection1, pollSelection2: $scope.newSelection2, countSel1: $scope.newCountSel1, countSel2: $scope.newCountSel2});
      $scope.newQuestion = '';
      $scope.newSelection1 = '';
      $scope.newSelection2 = '';
      $scope.newCountSel1 = 0;
      $scope.newcountSel2 = 0;
      
      $scope.plusOne = function (index) {
        $scope.newSelection1[index].newCountSel1 += 1;
      };
    }; */
});