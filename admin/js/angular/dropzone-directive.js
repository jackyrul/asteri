/**
 * Created by Jackyrul on 30.06.2016.
 */
/**
 * An AngularJS directive for Dropzone.js, http://www.dropzonejs.com/
 *
 */

angular.module('dropzone', []).directive('dropzone', function () {
    return function (scope, element, attrs) {
        var config, dropzone;

        config = scope[attrs.dropzone];

        // create a Dropzone for the element with the given options
        dropzone = new Dropzone(element[0], config.options);

        // bind the given event handlers
        angular.forEach(config.eventHandlers, function (handler, event) {
            dropzone.on(event, handler);
        });
        scope.dropzone = dropzone;
    };
});
