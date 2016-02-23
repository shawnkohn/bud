
angular.module('bud')
.controller('IncomeCtrl', [
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
                  $scope.stateAddingNewPaycheck = false;
            };
            
            $scope.paychecks= paychecks.paychecks;

            $scope.stateAddingNewPaycheck=false;
            $scope.setStateToAddingNewPaycheck = function(){
                $scope.stateAddingNewPaycheck = true;
            };
}]);
