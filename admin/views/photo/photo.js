(function () {
    'use strict';
    var controllerId = 'photo';
    angular.module('admin').controller(controllerId, ['common', '$scope', 'dataservice', photo]);

    function photo(common, $scope, dataservice) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var id = 'photo';
        $scope.master = {};
        //$scope.groups = [['all','все'],['economy','Економ'],['luxe','Люкс'],['vip','vip']];
        $scope.groups = [{prop:'all','rus':'все'},{prop:'economy','rus':'Економ'},
            {prop:'luxe','rus':'Люкс'},{prop:'vip','rus':'vip'},
            {prop:'courtyard',rus:'двор'}, {prop:'beaches',rus:'пляжи'}, {prop:'berdiansk',rus:'Бердянск'}];

        dataservice.getData(id).then(function (data) {
            $scope.main = JSON.parse(data.data);
            for(var i = 0; i < $scope.main.photos.length; i++){
                $scope.main.photos[i].srcview = $scope.main.photos[i].src.replace('https://www.dropbox.com/', 'https://dl.dropboxusercontent.com/');
            }
            $scope.master = angular.copy(JSON.parse(data.data));
        });
        $scope.UpdateSrc = function(){
            for(var i = 0; i < $scope.main.photos.length; i++){
                $scope.main.photos[i].srcview = $scope.main.photos[i].src.replace('https://www.dropbox.com/', 'https://dl.dropboxusercontent.com/');
            }
        };

        $scope.delete = function(index){
            $scope.main.photos.splice(index, 1);
        }

        $scope.add = function(){
            $scope.main.photos.push({
                src:'', group:'all', name:''
            });
        }

        $scope.save = function(){
            dataservice.saveData($scope.main,id).then(function (data) {
            });
        }

        $scope.cancel = function(){
            angular.copy($scope.master, $scope.main);
        }

        $scope.up = function(index){

            if(index <= 0)
                return;

            //$scope.main.photos.splice(index,1);
            //this.splice(newPos,0,value);
            $scope.main.photos.splice(index-1,2, $scope.main.photos[index], $scope.main.photos[index-1]);
        }

        $scope.down = function(index){
            if(index == -1){
                return;
            }
            if($scope.main.photos[index+1]){
                // Swap elements
                $scope.main.photos.splice(index,2, $scope.main.photos[index+1], $scope.main.photos[index]);
            }

        }
        //$scope.photosPage = 1;
        var vm = this;
        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { });//log('Activated Widgets View'); });
        }
    }
})();

