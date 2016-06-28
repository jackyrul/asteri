(function () {
    'use strict';
    var controllerId = 'aboutus';
    angular.module('admin').controller(controllerId, ['common', '$scope', 'dataservice', '$timeout', aboutus]);

    function aboutus(common, $scope, dataservice, $timeout) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var vm = this;
        var id = 'about';
        $scope.master = {};

        dataservice.getData(id).then(function (data) {
            $scope.main = JSON.parse(data.data);
            $scope.master = angular.copy(JSON.parse(data.data));
            $timeout(expand, 0);
        });

        $scope.save = function(){
            dataservice.saveData($scope.main,id).then(function (data) {
                //vm.prevdata = $scope.main = JSON.parse(data.data);
            });
        }

        $scope.cancel = function(){
            angular.copy($scope.master, $scope.main);
        }

        $scope.autoExpand = function(e) {
            var element = typeof e === 'object' ? e.target : document.getElementById(e);
            var scrollHeight = element.scrollHeight ; // replace 60 by the sum of padding-top and padding-bottom
            element.style.height =  scrollHeight + "px";
        };

        function expand() {
            $scope.autoExpand('TextArea');
        }

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { });//log('Activated Widgets View'); });
        }
    }
})();