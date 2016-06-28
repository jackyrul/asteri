(function () {
    'use strict';
    var controllerId = 'admin';
    angular.module('admin').controller(controllerId, ['common', '$scope', admin]);

    function admin(common, $scope) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var vm = this;
        vm.info = 'accounts';
        vm.helloText = 'Welcome in Avalanchain';
        vm.descriptionText = 'CASCADING REACTIVE BLOCKCHAINS';
        $scope.data = 'hello';
        //dataservice.getData();

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Admin View') });//log('Activated Admin View');
        }





    };


})();
