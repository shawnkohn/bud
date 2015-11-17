
angular.module('bud')
.controller('PaychecksCtrl', [
        '$scope',
        '$stateParams',
        'paychecks',
        function($scope, $stateParams, paychecks){
            $scope.addPaycheck = function(){
                  if(!$scope.name || $scope.name === '') { return; }
                  if(!$scope.amount || $scope.amount === '') { return; }
                  
                  paychecks.create({
                      name: $scope.name, 
                      amount: $scope.amount,
                  });
                  
                  $scope.name = '';
                  $scope.amount = '';
            };
            
            $scope.paychecks= paychecks.paychecks;
}]);
