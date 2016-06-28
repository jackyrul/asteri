<?php
/**
 * Created by PhpStorm.
 * User: Jackyrul
 * Date: 12.04.2016
 * Time: 17:21
 */
header('Content-Type: application/json;charset=utf-8');
header("Access-Control-Allow-Origin: *");
//$a = $_POST['action'];
//$_POST = json_decode(file_get_contents('php://input'), true);
//$postdata = file_get_contents("php://input");
//$request = json_decode($postdata);
//$action = $request->action;
//$config= $request->config;
$_POST = array_merge($_POST, (array) json_decode(trim(file_get_contents('php://input')), true));
switch ($_POST['action']) {//$_POST['action']
    case 'about':
        file_put_contents('data/about.json', json_encode($_POST['config']));
        break;
    case 'pricing':
        file_put_contents('data/pricing.json', json_encode($_POST['config']));
        break;
    case 'photo':
        file_put_contents('data/photo.json', json_encode($_POST['config']));;
        break;
    case 'entertainment':
        file_put_contents('data/entertainment.json', json_encode($_POST['config']));
        break;
    case 'contacts':
        file_put_contents('data/contacts.json', json_encode($_POST['config']));
        break;
    case 'common':
        file_put_contents('data/common.json', json_encode($_POST['config']));
        break;
}

//echo "$a ${$a}";
?>