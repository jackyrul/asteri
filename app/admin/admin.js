(function () {
    'use strict';
    var controllerId = 'admin';
    angular.module('Asteri').controller(controllerId, ['common', '$scope', '$localStorage', '$http','$state', admin]);

    function admin(common, $scope, $localStorage, $http, $state) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        var current = $state.current;
        $scope.user={};
        //$http.get("http://localhost:28972/data/data.php")//
        //    .then(function (response) {
        //        $scope.names = response.data.records;
        //    });
        //$scope.$storage = $localStorage;
        //$scope.data = {
        //    people: 20,
        //    messages: 57,
        //    tweets: 62
        //}
        //
        //$scope.$storage = $localStorage.$default({
        //    data: $scope.data
        //});


        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { });//log('Activated Widgets View'); });
        }
    }
})();/**
 * Created by Jackyrul on 29.03.2016.
 */
