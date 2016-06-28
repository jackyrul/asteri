/**
 * Created by Jackyrul on 31.05.2016.
 */
(function () {
    'use strict';

    var serviceId = 'dataservice';
    angular.module('asteri').factory(serviceId, [ dataservice]);

    function dataservice() {

        var service = {
            createGuid: createGuid,
            getCalculator : getCalculator,
            calculate: calculate
        };

        return service;
        var type = 'manual';
        function getCalculator() {


            return {
                getGroup: function () {
                    return type;
                },
                setGroup: function(value) {
                    type = value;
                }
            }
        }

        function createGuid() {
            // http://www.ietf.org/rfc/rfc4122.txt
            var s = [];
            var hexDigits = "0123456789abcdef";
            for (var i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
            s[8] = s[13] = s[18] = s[23] = "-";

            var uuid = s.join("");
            return uuid;
        }

        function calculate($scope, type){

            $scope.master = type== 'salary' ? $scope.manual : $scope.auto;
            $scope.master.totalIncome = parseInt($scope.master.salary) + parseInt($scope.master.dividends);

            var persAllowenceTaxCode =  parseInt($scope.master.taxCode.slice(0, -1) + 0);

            var persAllowence = $scope.master.totalIncome <= 100000 ? persAllowenceTaxCode :($scope.master.totalIncome - 100000)/2;

            $scope.master.persAllowance = persAllowence>= 0 && persAllowence <= persAllowenceTaxCode ? persAllowence : 0;

            //Basic Rate Tax

            $scope.master.taxableSalary = $scope.master.salary > $scope.master.persAllowance ? $scope.master.salary - $scope.master.persAllowance : 0;


            $scope.basicRateSalary = $scope.master.taxableSalary >= 32000 ? 32000 : $scope.master.taxableSalary;

            $scope.basicRateTax = $scope.basicRateSalary * 0.2;

            //Higher Rate Tax

            $scope.higherRate = $scope.master.taxableSalary <= 150000 ? $scope.master.taxableSalary - $scope.basicRateSalary : 150000 - $scope.basicRateSalary;
            $scope.higherRateTax = $scope.higherRate * 0.4;

            //Additional Rate Tax

            $scope.additionalRate = $scope.master.salary > 150000 ? $scope.master.taxableSalary - 150000 : $scope.master.taxableSalary - $scope.basicRateSalary - $scope.higherRate;
            $scope.additionalRateTax = $scope.additionalRate * 0.45;

            //Income Rate Tax

            $scope.incomeTax = $scope.basicRateTax + $scope.higherRateTax + $scope.additionalRateTax

            //Employee's NIC 12%

            $scope.LPL = $scope.master.salary >= 8060 ? 8060 : $scope.master.salary;

            $scope.uelLeft = $scope.master.salary - $scope.LPL;
            $scope.UEL = $scope.uelLeft <= 34940 ? $scope.uelLeft : 34940;

            $scope.Nic12 = $scope.UEL * 0.12;

            //Employee's NIC 2%

            $scope.above43000 = $scope.master.salary - $scope.LPL - $scope.UEL;

            $scope.Nic2 = $scope.above43000 * 0.02;

            //Employee's NIC

            $scope.employeeNic = $scope.Nic12 + $scope.Nic2;

            //rate 7.5%

            $scope.unusedAllowence = $scope.master.salary < $scope.master.persAllowance ? $scope.master.persAllowance - $scope.master.salary : 0;

            $scope.taxableDivs = $scope.master.dividends - $scope.unusedAllowence;

            $scope.salaryAboveAllowence = $scope.master.salary > $scope.master.persAllowance ? $scope.master.salary - $scope.master.persAllowance :0;

            $scope.salaryInBasicRateBand = $scope.salaryAboveAllowence >= 32000 ? 32000 : $scope.salaryAboveAllowence;

            $scope.availBasicRate = 32000 - $scope.salaryInBasicRateBand;

            $scope.divForBasic = $scope.taxableDivs <= $scope.availBasicRate ? $scope.taxableDivs : $scope.availBasicRate;

            $scope.basicDivTax = $scope.divForBasic > 5000 ? $scope.divForBasic - 5000 : 0;

            $scope.rate7dot5 = $scope.basicDivTax * 0.075;

            //rate 38.1%

            $scope.salaryInHigherRateBand = $scope.salaryAboveAllowence <= 150000 ? $scope.salaryAboveAllowence - $scope.salaryInBasicRateBand : 150000 - 32000;

            $scope.availHigherRate = (150000 - 32000) - $scope.salaryInHigherRateBand;

            $scope.divForHigher = ($scope.taxableDivs - $scope.availBasicRate) > $scope.availHigherRate ? $scope.availHigherRate : $scope.taxableDivs - $scope.divForBasic;

            $scope.divsUpper = $scope.taxableDivs - $scope.divForBasic - $scope.divForHigher;

            $scope.allowenceLeft = $scope.divForBasic < 5000 ? 5000 - $scope.basicDivTax :0;

            $scope.higherDivTax = $scope.divForHigher > $scope.allowenceLeft ? $scope.divForHigher - $scope.allowenceLeft : 0;

            $scope.allowenceLeftUppper = $scope.allowenceLeft > 0 ? 5000 - ($scope.divForHigher - $scope.higherDivTax) : 0;

            $scope.upperDivTax = $scope.divsUpper > $scope.allowenceLeftUppper ? $scope.divsUpper - $scope.allowenceLeftUppper : 0;

            $scope.rate38dot1 = $scope.upperDivTax * 0.381;

            //rate 32.5%

            $scope.rate32dot5 = $scope.higherDivTax * 0.325;

            //Devident Tax

            $scope.devidentTax = $scope.rate7dot5 + $scope.rate32dot5 + $scope.rate38dot1;

            //Total Individual Tax

            $scope.totalIndividualTax = $scope.incomeTax + $scope.employeeNic + $scope.devidentTax;

            //Nic Employer's

            $scope.above8112 = $scope.master.salary > 8112 ? $scope.master.salary - 8112 : 0;

            $scope.nicEmployer = $scope.above8112 * 0.138;

            $scope.nicEmployerMinus3000 = $scope.nicEmployer > 3000 ? $scope.nicEmployer - 3000: 0;

            $scope.nicEmployerTotal = $scope.master.is3000Pounds ? $scope.nicEmployerMinus3000 : $scope.nicEmployer;

            //Corporation Tax

            $scope.corporationTax = ($scope.master.dividends/80)*20;

            $scope.corporationTaxTotal = $scope.master.isCorporationTax ? $scope.corporationTax : 0;

            //Total Company Taxes

            $scope.totalCompanyTaxes = $scope.corporationTaxTotal + $scope.nicEmployerTotal;

            //Total Company Taxes

            $scope.totalTaxes = $scope.totalCompanyTaxes + $scope.totalIndividualTax;

            return $scope.master;
        }


    }
})();

