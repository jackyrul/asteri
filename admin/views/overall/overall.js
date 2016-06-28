(function () {
    'use strict';
    var controllerId = 'overall';
    angular.module('admin').controller(controllerId, ['common', '$scope', 'dataservice', '$timeout', overall]);

    function overall(common, $scope, dataservice, $timeout) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var vm = this;
        var id = 'common';
        $scope.master = {};

        $scope.showSale = false;

        dataservice.getData(id).then(function (data) {
            $scope.main = JSON.parse(data.data);
            $scope.master = angular.copy(JSON.parse(data.data));
        });

        //$scope.main = {
        //    overall:{
        //        showSale:true,
        //        email:'email@test.ru',
        //        phone1:'+1 (123) 456 7890 ',
        //        phone2:'email@test.ru',
        //        address:'ул. Чубаря 77, Бердянск '
        //    }
        //
        //
        //    }

        $scope.save = function(){
            dataservice.saveData($scope.main,id).then(function (data) {
                //vm.prevdata = $scope.main = JSON.parse(data.data);
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