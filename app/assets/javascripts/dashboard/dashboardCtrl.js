angular.module('bud')
.controller('DashboardCtrl', [        
        '$scope',
        '$http',
        function($scope, $http){
            $scope.netIncome = 0;
            $http.get('budgets/net_income.json').success(function(data){
                $scope.netIncome = data;
            });
            
            $scope.grossIncome = 0;
            $http.get('budgets/gross_income.json').success(function(data){
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
