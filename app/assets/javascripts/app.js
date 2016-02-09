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
            .state('paychecks', {
                url: '/paychecks',
                templateUrl: 'paychecks/_paychecks.html',
                controller: 'PaychecksCtrl',
                resolve: {
                     paycheckPromise: ['paychecks', function(paychecks){
                           return paychecks.getAll();
                     }]
                }
            })
            .state('deductions', {
                url: '/deductions/{id}',
                templateUrl: 'deductions/_deductions.html',
                controller: 'DeductionsCtrl',
                resolve: {
                     paycheck: ['$stateParams', 'paychecks', function($stateParams, paychecks){
                           return paychecks.get($stateParams.id);

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
