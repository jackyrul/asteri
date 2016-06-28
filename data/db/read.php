<?php
/**
 * Created by PhpStorm.
 * User: Jackyrul
 * Date: 29.03.2016
 * Time: 0:49
 */
header('Content-Type: application/json;charset=utf-8');
header("Access-Control-Allow-Origin: *");
switch ($_REQUEST['action']) {
    case 'about':
        $data = file_get_contents('data/about.json');
        echo json_encode($data);
        break;
    case 'pricing':
        $data = file_get_contents('data/pricing.json');
        echo json_encode($data);
        break;
    case 'photo':
        $data = file_get_contents('data/photo.json');
        echo json_encode($data);
        break;
    case 'entertainment':
        $data = file_get_contents('data/entertainment.json');
        echo json_encode($data);
        break;
    case 'contacts':
        $data = file_get_contents('data/contacts.json');
        echo json_encode($data);
        break;
    case 'common':
        $data = file_get_contents('data/common.json');
        echo json_encode($data);
        break;
}

?>
