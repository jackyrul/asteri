(function () {
    'use strict';
    var controllerId = 'aboutus';
    angular.module('admin').controller(controllerId, ['common', '$scope', 'dataservice', '$timeout','Upload', aboutus]);

    function aboutus(common, $scope, dataservice, $timeout, Upload) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var vm = this;
        var id = 'about';
        $scope.master = {};
        $scope.dropzoneConfig = {
            'options': { // passed into the Dropzone constructor
                'url': '/data/db/upload.php',
                maxFiles:1,
                addRemoveLinks: true,
                autoProcessQueue: false,
                autoDiscover: false
            },
            'eventHandlers': {
                'sending': function (file, xhr, formData) {
                },
                'success': function (file, response) {
                }
            }
        };
        //var src = '/images/main'
        dataservice.getData(id).then(function (data) {
            $scope.main = JSON.parse(data.data);
            //$scope.main.about.photos = [{src:'/Asteri/images/main/1.png'},{src:'/Asteri/images/main/2.png'},{src:'/Asteri/images/main/3.png'},{src:'/Asteri/images/main/4.png'},
            //    {src:'/Asteri/images/main/5.png'},{src:'/Asteri/images/main/6.png'},{src:'/Asteri/images/main/7.png'},{src:'/Asteri/images/main/8.png'},]
            $scope.master = angular.copy(JSON.parse(data.data));
            $timeout(expand, 0);
        });

        $scope.save = function(){
            dataservice.saveData($scope.main,id).then(function (data) {
                //vm.prevdata = $scope.main = JSON.parse(data.data);
            });
        }

        $scope.uploadImg = function(index, oldimg, img ){
            var img = getimg(index);
            var id = dataservice.createGuid();
            var src = oldimg.substr(0, oldimg.lastIndexOf("\/"));
            var newsrc = src + "/" + id + img.name;

            if(img){
                dataservice.upload(img, src, oldimg, id).then(function (data) {
                    if(data!=0){
                        $scope.main.about.photos[index].src = newsrc;
                        $scope.save();
                    }
                });
            }

        }

        $scope.cancel = function(){
            //angular.copy($scope.master, $scope.main);
            //logger("Ytdjpvj;yj jnvtybnm");
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



    function getimg(index){
        var file =$('#dropzone'+index).get(0).dropzone.getAcceptedFiles();//.processQueue();
        //$('#dropzone'+index).processQueue();
        return file[0];
    }
})();