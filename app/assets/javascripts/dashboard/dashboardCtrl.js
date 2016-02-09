angular.module('bud')
.controller('DashboardCtrl', [        
        '$scope',
        'paychecks',
        function($scope, paychecks){
            $scope.netIncome = paychecks.getTotalNetIncome();
            $scope.monthlyFinancialGoals = 250;
            $scope.monthlyFinancialGoalsTarget = $scope.netIncome *.2;
            $scope.changeVal = function() {
                $scope.testVar  = "Hello from inside changeVal";
                return;
            };
}]);
