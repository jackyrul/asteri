<?php
ini_set('display_errors', 1);
session_start();
if( !isset( $_SESSION['myusername'] )){
//    ob_start();
//    header("Location: https://sitename.com/login.php");
//    exit();
    session_destroy();
    header("location:http://asteri.in.ua/#/admin");
}
else{
}
?>
<!DOCTYPE html>
<html ng-app="admin">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Page title set in pageTitle directive -->
    <title page-title></title>

    <!-- Font awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css" rel="stylesheet">

    <!-- Bootstrap and Fonts -->
    <link href="/admin/css/bootstrap.min.css" rel="stylesheet">
    <link href="/admin/js/plugins/toastr/toastr.min.css" rel="stylesheet" />
    <link href="/admin/css/plugins/dropzone/dropzone.css" rel="stylesheet">
    <link href="/admin/css/plugins/dropzone/basic.css" rel="stylesheet">

    <link href="/admin/css/plugins/iCheck/custom.css" rel="stylesheet" />
    <!-- Main avalanchain CSS files -->
    <link href="/admin/css/animate.css" rel="stylesheet">
    <link id="loadBefore" href="/admin/css/style.css" rel="stylesheet">
    <link href="/admin/css/main.css" rel="stylesheet">

</head>

<!-- ControllerAs syntax -->
<!-- Main controller with serveral data used in avalanchain theme on diferent view -->
<body ng-controller="MainCtrl as main">

<!-- Main view  -->
<div ui-view></div>

<!-- jQuery and Bootstrap -->
<script src="/admin/js/jquery/jquery-2.1.1.min.js"></script>
<script src="/admin/js/plugins/jquery-ui/jquery-ui.js"></script>
<script src="/admin/js/bootstrap/bootstrap.min.js"></script>

<!-- MetsiMenu -->
<script src="/admin/js/plugins/metisMenu/jquery.metisMenu.js"></script>

<!-- SlimScroll -->
<script src="/admin/js/plugins/slimscroll/jquery.slimscroll.min.js"></script>

<!-- Peace JS -->
<script src="/admin/js/plugins/pace/pace.min.js"></script>
<script src="/admin/js/plugins/toastr/toastr.min.js"></script>

<script src="/admin/js/plugins/iCheck/icheck.min.js" ></script>
<script src="/admin/js/plugins/dropzone/dropzone.js"></script>


<!-- Custom and plugin javascript -->
<script src="/admin/js/resortadmin.js"></script>

<!-- Main Angular scripts-->
<script src="/admin/js/angular/angular.min.js"></script>
<script src="/admin/js/plugins/oclazyload/dist/ocLazyLoad.min.js"></script>
<script src="/admin/js/ui-router/angular-ui-router.min.js"></script>
<script src="/admin/js/bootstrap/ui-bootstrap-tpls-1.1.2.min.js"></script>

<script src="/admin/js/angular/ng-file-upload-all.min.js"></script>
<script src="/admin/js/angular/dropzone-directive.js"></script>

<!-- Anglar App Script -->
<script src="/admin/js/app.js"></script>
<script src="/admin/js/config2.js"></script>
<script src="/admin/js/directives.js"></script>
<script src="/admin/js/controllers.js"></script>
<script src="/admin/js/services/common.js"></script>
<script src="/admin/js/services/logger.js"></script>
<script src="/admin/js/services/datasevice2.js"></script>
<script src="/admin/js/services/dataprovider.js"></script>

<script src="/admin/views/aboutus/aboutus.js"></script>
<script src="/admin/views/photo/photo.js"></script>
<script src="/admin/views/pricing/pricing.js"></script>
<script src="/admin/views/admin/admin.js"></script>
<script src="/admin/views/entertainment/entertainment.js"></script>
<script src="/admin/views/overall/overall.js"></script>
</body>
</html>

