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
    this.helloText = 'Welcome in admin';
    this.descriptionText = 'admin';

};


angular
    .module('admin')
    .controller('MainCtrl', MainCtrl)