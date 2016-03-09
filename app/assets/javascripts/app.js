angular.module('bud', ['ui.router', 'templates', 'fcsa-number'])
.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'dashboard/_dashboard.html',
                controller: 'DashboardCtrl'
            })
            .state('income', {
                url: '/income',
                templateUrl: 'income/_income.html',
                controller: 'IncomeCtrl',
                resolve: {
                     paycheckPromise: ['paychecks', function(paychecks){
                           return paychecks.getAll();
                     }]
                }
            });

        $urlRouterProvider.otherwise('dashboard');
    }])
.config([
    'fcsaNumberConfigProvider',
    function(fcsaNumberConfigProvider) {
        fcsaNumberConfigProvider.setDefaultOptions({
            maxDecimals: 2,
            preventInvalidInput: true
        })
}]);
