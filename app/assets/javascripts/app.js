angular.module('bud', ['ui.router', 'templates', 'fcsa-number'])
.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                views: {
                    '': { templateUrl: 'dashboard/_dashboard.html' },
                    'income_section@dashboard': { templateUrl: 'dashboard/income_section.html'},
                    'goals_section@dashboard' : { templateUrl: 'dashboard/goals_section.html'},
                    'fixed_expenses_section@dashboard' : { templateUrl: 'dashboard/fixed_expenses_section.html'}
                },
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
    }])
.config([
    "$httpProvider", 
    function($httpProvider) {
                  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    }
]);
