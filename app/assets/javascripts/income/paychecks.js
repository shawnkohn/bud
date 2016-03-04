
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
            
            o.get = function(id){
                return $http.get('/paychecks/' + id + '.json').then(function(res){
                    return res.data;
                });
            };

            o.addDeduction = function(id, deduction) {
alert("deduction" + JSON.stringify(deduction));
                return $http.post('/paychecks/' + id + '/paycheck_deductions.json', deduction);
            };

            return o;
}])

