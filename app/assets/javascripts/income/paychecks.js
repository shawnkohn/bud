
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

            o.update = function(paycheck) {
                return $http.patch('/paychecks/' + paycheck.id + '.json', paycheck);
            };

            o.destroy = function(paycheck_id) {
                return $http.delete('/paychecks/' + paycheck_id + '.json');
            };

            o.addDeduction = function(id, deduction) {
                return $http.post('/paychecks/' + id + '/paycheck_deductions.json', deduction);
            };

            o.updateDeduction = function(id, deduction) {
                return $http.patch('/paychecks/' + id + '/paycheck_deductions/' + deduction.id + '.json', deduction);
            };

            o.destroyDeduction = function(paycheck_id, deduction_id) {
                return $http.delete('/paychecks/' + paycheck_id + '/paycheck_deductions/' + deduction_id + '.json');
            };
            return o;
}])

