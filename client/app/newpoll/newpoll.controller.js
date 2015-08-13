'use strict';

angular.module('workspaceApp')
  .controller('NewpollCtrl', function ($scope, $http) {
    $scope.message = 'Hello';
    
    $http.get('/api/polls').success(function(pollData) {
      $scope.pollData = pollData;
      var poll1 = new Poll({
      name: 'Chris',
      pollCount: 5,
      
      chris.save(function(err) {
      if (err) throw err;

      console.log(name + ' User saved successfully!');
      console.log(pollData);
    });
    
    
  });
