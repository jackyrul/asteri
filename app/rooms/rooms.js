/**
 * Created by Jackyrul on 31.05.2016.
 */
(function () {
    'use strict';
    var controllerId = 'rooms';
    angular.module('asteri').controller(controllerId, ['$scope','$filter','datacontext', '$state', '$rootScope', rooms]);

    function rooms ($scope, $filter, datacontext, $state, $rootScope) {

        $rootScope.pageTitle = 'Номера';
        $scope.master = {};
        var m = $scope.master;

        m.title = 'Номера';
        m.isRoom = false;

        m.rooms = [1,2,3,4];

        $scope.details = function (room) {
            $scope.current={
                title:'СУПЕРЛЮКС-СТАНДАРТ',
                id:room
            };
            m.isRoom = ! m.isRoom;
            carousel();
        };

        var carousel = function(){
            $(function(){
                $('#carousel-slider2').carousel({
                    interval: 2000,


                });
            });

            $('[id^=carousel-selector-]').click( function(){
                var id_selector = $(this).attr("id");
                var id = id_selector.substr(id_selector.length -1);
                id = parseInt(id);
                $('#carousel-slider2').carousel(id);
                $('[id^=carousel-selector-]').removeClass('selected');
                $(this).addClass('selected');
            });

            // when the carousel slides, auto update
            $('#carousel-slider2').on('slid', function (e) {
                var id = $('.item.active').data('slide-number');
                id = parseInt(id);
                $('[id^=carousel-selector-]').removeClass('selected');
                $('[id=carousel-selector-'+id+']').addClass('selected');
            });


        };




    };
})();