/**
 * Created by Jackyrul on 15.06.2016.
 */
/**
 * Created by Jackyrul on 31.05.2016.
 */
(function () {
    'use strict';
    var controllerId = 'vat';
    angular.module('mybb').controller(controllerId, ['$scope','$filter','dataservice','$state', vat]);

    function vat ($scope, $filter, dataservice, $state) {

        $scope.master = {
            price:8000,
            is20: 'true',
            //is5: false,
            netAmount: 0,
            vat:0,
            grossAmount:0,
            addedVat: false
        };

        $scope.isShowVat = false;

        $scope.date2 = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
        Array.min = function( array ){
            return Math.min.apply( Math, array );
        };

        $scope.addVat = function(){
            $scope.master.addedVat = true;
            countVat();
            $scope.isShowVat = true;
        }

        $scope.removeVat = function(){
            $scope.master.addedVat = false;
            countVat();
            $scope.isShowVat = true;
        }

        $scope.$watch('master', function() {
            if($scope.isShowVat)
            countVat();
        }, true);

        function countVat(){
            if($scope.master.addedVat){
                $scope.master.netAmount = $scope.master.price;
                $scope.master.vat = JSON.parse($scope.master.is20) ? $scope.master.price * 0.2 : $scope.master.price * 0.05;
                $scope.master.grossAmount = parseInt($scope.master.netAmount) + parseInt($scope.master.vat);
            }
            else{
                $scope.master.grossAmount = $scope.master.price;
                $scope.master.vat = JSON.parse($scope.master.is20) ? ($scope.master.price /120) * 20 : ($scope.master.price/105) * 5;
                $scope.master.netAmount = parseInt($scope.master.grossAmount) - $scope.master.vat;
            }
        }


    };
})();