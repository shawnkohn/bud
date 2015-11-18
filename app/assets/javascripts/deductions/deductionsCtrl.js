
angular.module('bud')
.controller('DeductionsCtrl', [
        '$scope',
        'paychecks',
        'paycheck',
        function($scope, paychecks, paycheck){
            $scope.paycheck = paycheck;

            $scope.addDeduction = function(){
                paychecks.addDeduction(paycheck.id, {
                    name: $scope.name,
                    amount: $scope.amount,
                    isDeductedPreTax: $scope.isDeductedPreTax
                }).success(function(deduction){
                    $scope.paycheck.paycheck_deductions.push(deduction);
                });
                $scope.name = '';
                $scope.amount = '';
                $scope.isDeductedPreTax = false;
            };
        
}]);
