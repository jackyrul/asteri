(function () {
    'use strict';
    var controllerId = 'admin';
    angular.module('asteri').controller(controllerId, [ '$scope', '$rootScope', admin]);

    function admin($scope, $rootScope) {
        $rootScope.pageTitle = 'Админ';
        var vm = this;;
        $scope.user={};

    }
})();/**
 * Created by Jackyrul on 29.03.2016.
 */
