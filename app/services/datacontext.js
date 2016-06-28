(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('asteri').factory(serviceId, ['common', '$http', 'dataProvider', datacontext]);

    function datacontext(common, $http, dataProvider) {
        var $q = common.$q;

        var service = {
            createGuid: createGuid,
            getSales: getSales,
            getEntertein: getEntertain,
            getData : getData,
            getLogin : getLogin,
            getPages : getPages
        };

        return service;

        function getPages(action) {
            var group = 'all';

            return {
                getGroup: function () {
                    return group;
                },
                setGroup: function(value) {
                    group = value;
                }
            }
        }

        function getData(action) {
            var sc = {};
            var datat={};
            return dataProvider.get(sc, 'data/db/read.php', {//?action=about
                action: action
            }, function(data, status) {
                var st = status;
            })


            function fail(e) {
            }
        }
        function getLogin() {
            var sc = {};
            var datat={};
            return dataProvider.get(sc, 'data/login/checklogin.php?email=adminberd&password=berd2016'
                , function(data, status) {
            var st = status;
            })


            function fail(e) {
            }
        }

        function getSales() {
            var sales=[
            {
                //name:'Аквапарк',
                img:'https://www.dropbox.com/s/rk5w47tc2n08phz/ak.jpg?dl=0',
                text:'Скидки на майские!'
            },
            {
                //name:'Зоопарк',
                img:'https://www.dropbox.com/s/rk5w47tc2n08phz/ak.jpg?dl=0',
                text:'Пол цены от VIP!'
            },
            {
                //name:'Дельфинарий',
                img:'https://www.dropbox.com/s/rk5w47tc2n08phz/ak.jpg?dl=0',
                text:'Скидки на майские!'
            }
        ]
            for(var i =0;i<sales.length;i++){
                sales[i].img = sales[i].img.replace('https://www.dropbox.com/', 'https://dl.dropboxusercontent.com/');
            }
            return sales;
        }


        function getEntertain() {
            var entertain=[
                {
                    name:'Аквапарк',
                    img:'https://www.dropbox.com/s/oy29hrtrflr8qen/avalanchain.png?dl=0',
                    text:'Лучший аквапарк!http://aquapark.in.ua/',
                    link:'http://aquapark.in.ua/'
                },
                {
                    name:'Зоопарк',
                    img:'https://www.dropbox.com/s/w6b0vnosgljecs2/2.jpg?dl=0',
                    text:'Лучший Зоопарк!',
                    link:''
                },
                {
                    name:'Дельфинарий',
                    img:'https://www.dropbox.com/s/w6b0vnosgljecs2/2.jpg?dl=0',
                    text:'Лучший Дельфинарий!',
                    link:''
                }
            ]
            for(var i =0;i<entertain.length;i++){
                entertain[i].img = entertain[i].img.replace('https://www.dropbox.com/', 'https://dl.dropboxusercontent.com/');
            }
            return entertain;
        }



        function replaceSrc(input) { return input.replace('https://www.dropbox.com/', 'https://dl.dropboxusercontent.com/'); }


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


    }
})();

