
angular.module('bud')
.controller('DeductionsCtrl', [
        '$scope',
        '$stateParams',
        'paychecks',
        function($scope, $stateParams, paychecks){
            $scope.paycheck = paychecks.paychecks[$stateParams.id];
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
