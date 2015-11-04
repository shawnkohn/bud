angular.module('bud', ['ui.router'])
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
                templateUrl: '/paychecks.html',
                controller: 'PaychecksCtrl'
            });

        $urlRouterProvider.otherwise('dashboard');
    }])
.factory('paychecks', [function(){
    var o = {
        paychecks: []
    };
    return o;
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
])
.controller('PaychecksCtrl', [
        '$scope',
        '$stateParams',
        'paychecks',
        function($scope, $stateParams, paychecks){
            $scope.addPaycheck = function(){
                  if(!$scope.name || $scope.name === '') { return; }
                  $scope.paychecks.push({name: $scope.name, amount: $scope.amount});
                  $scope.name = '';
                  $scope.amount = '';
            };
            
            $scope.paychecks= paychecks.paychecks
}]);

;
