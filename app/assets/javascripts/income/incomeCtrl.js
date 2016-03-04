
angular.module('bud')
.controller('IncomeCtrl', [
        '$scope',
        '$stateParams',
        'paychecks',
        function($scope, $stateParams, paychecks){
            $scope.paychecks = paychecks.paychecks;
            
            $scope.stateAddingNewPaycheck = false;
            $scope.paycheckIdShowingDeductions = 0;
            $scope.deductionIdInEditMode = 0;
            
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
            
            $scope.addDeduction = function(paycheck, deduction){
                paychecks.addDeduction(paycheck.id, {
                    name: deduction.name,
                    amount: deduction.amount,
                    is_deducted_pre_tax: deduction.isDeductedPreTax
                }).success(function(deduction){
                    paycheck.paycheck_deductions.push(deduction);
                });
                deduction.name = '';
                deduction.amount = '';
                deduction.isDeductedPreTax = false;
            };


}]);
