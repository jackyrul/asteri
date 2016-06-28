(function () {
    'use strict';

    angular.module('admin').filter('pagination', function () {
        return function (input, start) {
            if (input) {
                start = +start; //parse to int
                return input.slice(start);
            }
            return [];
        }
    });

    angular
        .module('admin')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'common', 'dataProvider', '$filter'];
    /* @ngInject */


    function dataservice($http, $q, common, dataProvider, $filter) {
        var logger = common.logger.getLogFn('dataservice');
        var service = {
            getData: getData,
            saveData: saveData,
            createGuid: createGuid
        };

        return service;


        function saveData(dataobj, action) {

            //var res = $http.post('/data/db/write.php', {
            //    action: action,
            //    config: dataobj
            //});
            //res.success(function(data, status, headers, config) {
            //    $scope.message = data;
            //});
            //res.error(function(data, status, headers, config) {
            //    alert( "failure message: " + JSON.stringify({data: data}));
            //});
            var sc = {};
            return dataProvider.post(sc, '/data/db/write.php', {
                action: action,
                config: dataobj
            }, function(data, status) {
                if(status=="200")
                logger('Сохранено!');
            });
            function fail(e) {
                //var msg = 'XHR Failed for getData';
                //logger.error(msg);
                //return exception.catcher(msg)(e);
            }
        }

        function getData(action) {
            var sc = {};
            var datat={};
            return dataProvider.get(sc, '/data/db/read.php', {
                action: action
            }, function(data, status) {

            })


            function fail(e) {
            }
        }

        function createGuid() {
            // http://www.ietf.org/rfc/rfc4122.txt
            var s = [];
            var hexDigits = "0123456789abcdef";
            for (var i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
            s[8] = s[13] = s[18] = s[23] = "-";

            var uuid = s.join("");
            return uuid;
        }
    }
})();
