
angular.module('bud')
.factory('paychecks', [
        '$http',
        function($http){
            var o = {
                paychecks: []
    
            };

            o.getAll = function(){
                return $http.get('paychecks.json').success(function(data){
                    angular.copy(data, o.paychecks);
                });
            };
    
            o.create = function(paycheck){
                return $http.post('paychecks.json', paycheck).success(function(data){
                    o.paychecks.push(data);
                });
            };
            return o;
}])
