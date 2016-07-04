/**
 * Created by Jackyrul on 31.05.2016.
 */
(function () {
    'use strict';
    var controllerId = 'contact';
    angular.module('asteri').controller(controllerId, ['$scope','$filter','datacontext','$state','$rootScope', contact]);

        function contact ($scope, $filter, datacontext, $state, $rootScope) {

            $rootScope.pageTitle = 'Контакты';
            $scope.master = {};
            var m = $scope.master;
            var id = "common";

            m.title = 'Наши контакты';
            m.text = 'Свяжитесь с нами!';
            m.tel1 = '670-898-2847 '
            m.tel2 = '670-898-2847 '
            m.addr = 'улица Чубаря 7,'
            m.contacttext = 'Ждем Вас у нас, Ждем Вас у нас, Ждем Вас у нас!!!'
            datacontext.getData(id).then(function (data) {
                m.data = JSON.parse(data.data);


            });



            //$scope.$watch('auto', function() {
            //    //$scope.master.salary = $filter('number')($scope.master.salary);
            //    if($scope.calcType == 'auto'){
            //        countAuto();
            //    }
            //}, true);




        };
})();