(function () {
    'use strict';
    var controllerId = 'pricing';
    angular.module('admin').controller(controllerId, ['common', '$scope', 'dataservice', '$timeout','Upload', pricing]);

    function pricing(common, $scope, dataservice, $timeout, Upload) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var vm = this;
        var id = 'pricing';
        $scope.master = {};
        $scope.dropzoneConfig = {
            'options': { // passed into the Dropzone constructor
                'url': '/data/db/upload.php',
                maxFiles:1,
                addRemoveLinks: true,
                autoProcessQueue: false,
            },
            'eventHandlers': {
                'sending': function (file, xhr, formData) {
                },
                'success': function (file, response) {
                }
            }
        };
        dataservice.getData(id).then(function (data) {
            $scope.main = JSON.parse(data.data);
            $scope.master = angular.copy(JSON.parse(data.data));
        });

        //$scope.main = {pricing:[
        //    { price: '150' , name:'Эконом', facilities : [true,false,false,false,false], src_logo : '/images/rooms/man1.jpg',src_all : ['/images/rooms/man1.jpg','/images/rooms/man1.jpg','',''], option : 'за сутки'},
        //    { price: '250' , name:'Люкс', facilities : [true,false,false,false,false], src_logo : '/images/rooms/man1.jpg',src_all : ['/images/rooms/man1.jpg','/images/rooms/man1.jpg','',''], option : 'за сутки'},
        //    { price: '3000' , name:'Vip', facilities : [true,false,false,false,false], src_logo : '/images/rooms/man1.jpg',src_all : ['/images/rooms/man1.jpg','/images/rooms/man1.jpg','',''], option : 'за сутки'},
        //]};

        $scope.uploadImg = function(index, oldimg, islogo, index2 ){
            var dropid = index;
            if(!oldimg)
            oldimg = "/images/rooms/man1.jpg";
            if(!islogo)
                dropid = index+''+index2 ;
            var img = getimg(dropid);
            var id = dataservice.createGuid();
            var src = oldimg.substr(0, oldimg.lastIndexOf("\/"));
            var newsrc = src + "/" + id + img.name;

            if(img){
                dataservice.upload(img, src, oldimg, id).then(function (data) {
                    if(data!=0){
                        if(islogo){
                            $scope.main.pricing[index].src_logo = newsrc;
                        }
                        else{
                            $scope.main.pricing[index].src_all[index2] = newsrc;
                        }

                        $scope.save();
                    }
                });
            }

        }

        function getimg(index){
            var file =$('#dropzone'+index).get(0).dropzone.getAcceptedFiles();//.processQueue();
            //$('#dropzone'+index).processQueue();
            return file[0];
        }

        $scope.add = function(){
            $scope.main.pricing.push({
                isShow:true, price: '' , name:'', description:'', facilities : [false,false,false,false,false], src_logo : '',src_all : ['','','',''], option : ''
            });
        }

        $scope.save = function(){
            dataservice.saveData($scope.main,id).then(function (data) {
            });
        }

        $scope.cancel = function(){
            angular.copy($scope.master, $scope.main);
        }

        $scope.autoExpand = function(e) {
            var element = typeof e === 'object' ? e.target : document.getElementById(e);
            var scrollHeight = element.scrollHeight ; // replace 60 by the sum of padding-top and padding-bottom
            element.style.height =  scrollHeight + "px";
        };

        function expand() {
            $scope.autoExpand('TextArea');
        }


        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { });//log('Activated Widgets View'); });
        }
    }
})();

