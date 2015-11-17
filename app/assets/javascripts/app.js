angular.module('bud', ['ui.router', 'templates', 'fcsa-number'])
.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: '/dashboard.html',
                controller: 'MainCtrl'
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
                templateUrl: '/deductions.html',
                controller: 'DeductionsCtrl'
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
.controller('MainCtrl', [
        '$scope',
        function($scope, paychecks){
            $scope.testVar = "Hello from MainCtrl";
            $scope.changeVal = function() {
                $scope.testVar  = "Hello from inside changeVal";
                return;
            }
        }
]);
