/**
 * Created by Jackyrul on 31.05.2016.
 */
(function () {
    'use strict';
    var controllerId = 'main';
    var app = angular.module('asteri').controller(controllerId, ['$scope','datacontext', '$translate','common', '$state','$stateParams','$rootScope',  main]);

    function main ($scope, datacontext, $translate, common, $state, $stateParams, $rootScope) {

        $rootScope.pageTitle = 'турбаза для отдыха';
        $scope.master = {};
        var m = $scope.master;
        var id = 'about';
        m.title = 'О НАС';
        m.mainText = 'О НАС';
        m.footQuote = 'Добро пожаловать!'
        m.why = 'Почему стоит выбрать нас?'
        m.photos=[1,2,3,4,5,6,7,8]
        m.slider =[1,2,3]

        datacontext.getData(id).then(function (data) {
            m.data = JSON.parse(data.data);
            //$scope.main.about.mainimg  = $scope.main.about.mainimg.replace('https://www.dropbox.com/', 'https://dl.dropboxusercontent.com/');
            //$scope.main.about.textimg  = $scope.main.about.textimg.replace('https://www.dropbox.com/', 'https://dl.dropboxusercontent.com/');
            m.data.about.maintext = m.data.about.maintext.split(/\n/);
            //$scope.$storage = $scope.$storage.$default({
            //    main: $scope.main
            //});
            //$scope.$storage.main = $scope.main;

        });

        //$scope.typeCalculator = function(type){
        //    //dataservice.getCalculator().setGroup(type);
        //    $state.go(type);
        //}

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () {});
        }

    };
})();