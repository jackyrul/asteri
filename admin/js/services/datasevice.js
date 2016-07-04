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

    dataservice.$inject = ['$http', '$q', 'common', 'dataProvider', '$filter', 'Upload', '$timeout'];
    /* @ngInject */


    function dataservice($http, $q, common, dataProvider, $filter, Upload, $timeout) {
        var logger = common.logger.getLogFn('dataservice');
        var service = {
            getData: getData,
            saveData: saveData,
            upload: upload,
            createGuid: createGuid
        };

        return service;


        function saveData(dataobj, action) {
            //var res = $http.post('/Resort/data/db/write.php', {
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
            return dataProvider.post(sc, '/Asteri/data/db/write.php', {
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
            return dataProvider.get(sc, '/Asteri/data/db/read.php', {
                action: action
            }, function(data, status) {

            })


            function fail(e) {
            }
        }

        function upload(img, src, oldimg) {

            //$scope.f = img;
            //$scope.errFile = errFiles && errFiles[0];
            //if (img) {
            //    Upload.upload({
            //        url: '/Asteri/data/db/upload.php',
            //        data: {
            //            src: src,
            //            oldimg:oldimg,
            //            file: img
            //        }
            //    }).then(function (response) {
            //        $timeout(function () {
            //            img.result = response.data;
            //        });
            //    }, function (response) {
            //        if (response.status > 0)
            //            logger(response.status + ': ' + response.data);
            //            //$scope.errorMsg = response.status + ': ' + response.data;
            //    }, function (evt) {
            //        //logger('Сохранено!');
            //        //img.progress = Math.min(100, parseInt(100.0 *
            //        //    evt.loaded / evt.total));
            //    });
            //}

            if (img) {
                Upload.upload({
                    url: '/Asteri/data/db/upload.php',
                    data: {
                        src: src,
                        oldimg:oldimg,
                        file: img
                    }
                }).success(function(data, status, headers, config) {
                    logger(data);
                }).error(function(data, status) {
                    logger(data);
                });
            }
            //var sc = {};
            //return dataProvider.post(sc, '/Asteri/data/db/upload.php', {
            //    src: src,
            //    img: img,
            //    oldimg: oldimg
            //}, function(data, status) {
            //    if(status=="200")
            //        logger('Сохранено!');
            //});
            //function fail(e) {
            //    logger('Ошибка');
            //}
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
