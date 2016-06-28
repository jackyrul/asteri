(function () {
    'use strict';
    var controllerId = 'entertainment';
    angular.module('admin').controller(controllerId, ['common', '$scope', 'dataservice', photo]);

    function photo(common, $scope, dataservice) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var id = 'entertainment';
        $scope.master = {};
        $scope.main = {};
        //$scope.main.entertainment={};

        dataservice.getData(id).then(function (data) {
            $scope.main = JSON.parse(data.data);
            $scope.master = angular.copy(JSON.parse(data.data));
        });

        $scope.delete = function(index){
            $scope.main.entertainment.splice(index, 1);
        }

        $scope.add = function(){
            $scope.main.entertainment.push({
                src:'', link:'', name:''
            });
        }

        $scope.save = function(){
            dataservice.saveData($scope.main,id).then(function (data) {
            });
        }

        $scope.cancel = function(){
            angular.copy($scope.master, $scope.main);
        }
        //$scope.photosPage = 1;
        var vm = this;
        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { });//log('Activated Widgets View'); });
        }
    }
})();

