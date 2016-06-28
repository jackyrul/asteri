/**
 * avalanchain - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl() {

    this.userName = 'User';
    this.helloText = 'Welcome in resortadmin';
    this.descriptionText = 'resortadmin';

};


angular
    .module('admin')
    .controller('MainCtrl', MainCtrl)