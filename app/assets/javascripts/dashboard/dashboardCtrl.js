angular.module('bud')
.controller('DashboardCtrl', [        
        '$scope',
        '$http',
        'incomeService',
        function($scope, $http, incomeService){
            incomeService.getBiweeklyNetPay().success(function(data){
                $scope.netIncome = data;
            });
            incomeService.getBiweeklyGrossPay().success(function(data){
                $scope.grossIncome = data;
            });

            $scope.monthlyFinancialGoals = 250;
            $scope.monthlyFinancialGoalsTarget = $scope.netIncome *.2;
            
            $scope.stateEditIncome = false;
            
            $scope.enterEditIncomeState = function(){
                $scope.stateEditIncome  = true;
                return;
            };
}]);
