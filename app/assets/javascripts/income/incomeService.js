angular.module('bud')
.service('incomeService', [
        '$http',
        function($http){

            this.getBiweeklyGrossPay = function(){
                return $http.get('budgets/gross_income.json');
            };
            this.getBiweeklyNetPay = function(){
                return $http.get('budgets/net_income.json')            
            };
}])
