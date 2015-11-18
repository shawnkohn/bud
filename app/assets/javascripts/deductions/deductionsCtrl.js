
angular.module('bud')
.controller('DeductionsCtrl', [
        '$scope',
        'paychecks',
        'paycheck',
        function($scope, $stateParams, paychecks, paycheck){
            $scope.paycheck = paycheck
            $scope.addDeduction = function(){
                $scope.paycheck.deductions.push({
                    name: $scope.name,
                    amount: $scope.amount,
                    isDeductedPreTax: $scope.isDeductedPreTax
                });
                $scope.name = '';
                $scope.amount = '';
                $scope.isDeductedPreTax = false;
            };
        
}]);
