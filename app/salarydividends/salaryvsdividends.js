/**
 * Created by Jackyrul on 31.05.2016.
 */
(function () {
    'use strict';
    var controllerId = 'salaryvsdividends';
    angular.module('mybb').controller(controllerId, ['$scope','$filter','dataservice','$state', salaryvsdividends]);

    function salaryvsdividends ($scope, $filter, dataservice, $state) {

        $scope.date2 = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
        Array.min = function( array ){
            return Math.min.apply( Math, array );
        };

        $scope.showResult = function(){
            $scope.isShowResultSalaryvsDevid= true;

        }

        $scope.$watch('auto', function() {
                countAuto();
        }, true);

        $scope.auto = {
            salary:0,
            dividends:0,
            totalIncome: 155000,
            taxCode:'1100L',
            persAllowance:0,
            taxableSalary:0,
            is3000Pounds: true,
            isCorporationTax: true
        };

        function countAuto(){
            var t0 = performance.now();
            var totalarray = [];
            var salaryarray = [];
            var dividendsarray = [];

            var totalIncome = $scope.auto.totalIncome;
            $scope.auto.totalIncome = (totalIncome+'').replace(',','').replace(',','');
            $scope.auto.totalIncome = $scope.auto.totalIncome> 10000000? 10000000 : $scope.auto.totalIncome;
            var salary =0;
            var dividends = $scope.auto.totalIncome;
            var step = dividends/50;
            for(var i = 0; i < step;i++){
                $scope.auto.dividends = dividends;
                $scope.auto.salary = salary;

                $scope.auto = dataservice.calculate($scope, 'salaryvsdividends');
                totalarray.push($scope.totalTaxes);
                salaryarray.push(salary);
                dividendsarray.push(dividends);
                salary += 50;
                dividends -= 50;
            }

            //var tt = total;
            var minimum = Array.min(totalarray);
            //console.log(minimum)

            var t1 = performance.now();
            //console.log("Call took " + (t1 - t0) + " milliseconds.")
            var index = totalarray.indexOf(minimum);

            $scope.auto.dividends = dividendsarray[index];
            $scope.auto.salary = salaryarray[index];
            $scope.auto = dataservice.calculate($scope, 'salaryvsdividends');

            var t2 = performance.now();
            //console.log("Call to doSomething took " + (t2 - t0) + " milliseconds.")
        }





    };
})();/**
 * Created by Jackyrul on 08.06.2016.
 */
