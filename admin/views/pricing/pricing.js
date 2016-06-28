(function () {
    'use strict';
    var controllerId = 'pricing';
    angular.module('admin').controller(controllerId, ['common', '$scope', 'dataservice', pricing]);

    function pricing(common, $scope, dataservice) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var vm = this;
        var id = 'pricing';
        $scope.master = {};

        dataservice.getData(id).then(function (data) {
            $scope.main = JSON.parse(data.data);
            $scope.master = angular.copy(JSON.parse(data.data));
        });

        //$scope.main = {pricing:[
        //    { price: 150 , name:'Эконом',item1 : 'vip',item2 : 'vip',item3 : 'vip',item4 : 'vip',item5: 'vip' ,item6 : 'vip'},
        //    { price: 250 , name:'Люкс',item1 : 'vip',item2 : 'vip',item3 : 'vip',item4 : 'vip',item5: 'vip' ,item6 : 'vip'},
        //    { price: 3000 , name:'Vip',item1 : 'vip',item2 : 'vip',item3 : 'vip',item4 : 'vip',item5: 'vip' ,item6 : 'vip'},
        //]};

        $scope.save = function(){
            dataservice.saveData($scope.main,id).then(function (data) {
            });
        }

        $scope.cancel = function(){
            angular.copy($scope.master, $scope.main);
        }


        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { });//log('Activated Widgets View'); });
        }
    }
})();

