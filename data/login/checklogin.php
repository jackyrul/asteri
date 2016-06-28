<?php
/**
 * Created by PhpStorm.
 * User: Jackyrul
 * Date: 29.03.2016
 * Time: 0:49
 */
//ob_start();
//$host="mysql.hostinger.com.ua"; // Host name
//$username="u706094838_admin"; // Mysql username
//$password="7924655q"; // Mysql password
//$db_name="u706094838_db"; // Database name
//$tbl_name="members"; // Table name

$login ="adminasteri";

$password ="asteri2016";

// Connect to server and select databse.
//mysql_connect("$host", "$username", "$password")or die("cannot connect");
//mysql_select_db("$db_name")or die("cannot select DB");
//
//// Define $myusername and $mypassword
$myusername=$_GET['text'];
$mypassword=$_GET['password'];
//
//$sql="SELECT * FROM $tbl_name WHERE username='$myusername' and password='$mypassword'";
//$result=mysql_query($sql);

// Mysql_num_row is counting table row
//$count=mysql_num_rows($result);

// If result matched $myusername and $mypassword, table row must be 1 row
//if($count==1){
//
//// Register $myusername, $mypassword and redirect to file "login_success.php"
//    session_register("myusername");
//    session_register("mypassword");
////    $_SESSION['myusername'] = 'myusername';
////    $_SESSION['mypassword'] = 'mypassword';
//    header("location:admin.php");
//}
if($login==$myusername && $password==$mypassword){

// Register $myusername, $mypassword and redirect to file "login_success.php"
    session_start();
    $_SESSION['myusername'] = $myusername;
    $_SESSION['mypassword'] = $mypassword;
//    session_register("myusername");
//    session_register("mypassword");
//    $_SESSION['myusername'] = 'myusername';
//    $_SESSION['mypassword'] = 'mypassword';
    header("location:admin.php");
    //echo "Wrong Username or Password"+ $result;
}
else {
    echo "Wrong Username or Password";//+ $result;
//    echo $myusername;
}
//ob_end_flush();
?>
