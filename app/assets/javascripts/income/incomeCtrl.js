
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
            $scope.paycheckIdInEditMode = 0;
            
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
            
            $scope.destroyPaycheck = function(paycheck_id){
                if (!confirm("Do you wish to delete"))
                    return;
                paychecks.destroy(paycheck_id).success(function(){

                    paychecks = paychecks.getAll();
                    $scope.paychecks = paychecks;
                });
            };

            $scope.updatePaycheck = function(paycheck){
                paychecks.update(paycheck).success(function(){
                    $scope.paycheckIdInEditMode = 0;
                });
            };

            $scope.addDeduction = function(paycheck, deduction){
                if (!paycheck) { return; }             
                if (!deduction) { return; }             
                if(!deduction.name || deduction.name === '') { 
                    return; 
                }
                if(!deduction.amount || deduction.amount === '') { 
                    return; 
                }
                paychecks.addDeduction(paycheck.id, {
                    name: deduction.name,
                    amount: deduction.amount
                }).success(function(deduction){
                    paycheck.paycheck_deductions.push(deduction);
                });
                deduction.name = '';
                deduction.amount = '';
            };

            $scope.destroyDeduction = function(paycheck, deduction){
                if (!confirm("Do you wish to delete: " + deduction.name))
                    return;
                paychecks.destroyDeduction(paycheck.id, deduction.id).success(function(){

                    remove(paycheck.paycheck_deductions, deduction);

                });
            };

            $scope.updatePaycheckDeduction = function(paycheck_id, deduction){
                paychecks.updateDeduction(paycheck_id, deduction).success(function(){
                    $scope.deductionIdInEditMode = 0;
                });
            };

            $scope.setPaycheckIdShowingDeductions = function(paycheck_id){
                $scope.paycheckIdShowingDeductions = paycheck_id;
            };

            $scope.setPaycheckIdInEditMode = function(paycheck_id){
                $scope.paycheckIdInEditMode = paycheck_id;
            };

            $scope.setDeductionIdInEditMode = function(deduction_id){
                $scope.deductionIdInEditMode = deduction_id;
            };
            
            function remove(arr, item) {
                for(var i = arr.length; i--;) {
                    if(arr[i] === item) {
                        arr.splice(i, 1);
                    }
                }
            };
}]);
