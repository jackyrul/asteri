<?php
/**
 * Created by PhpStorm.
 * User: Jackyrul
 * Date: 30.06.2016
 * Time: 14:00
 */
//ini_set('post_max_size', 3M);
$_POST = array_merge($_POST, (array) json_decode(trim(file_get_contents('php://input')), true));

$storeFolder=$_POST['src'];
$oldimgpathe=$_POST['oldimg'];
$id=$_POST['id'];

$ds          = DIRECTORY_SEPARATOR;  //1

$file = $_FILES;

if($_FILES['file']['error'] > 0){
    echo "Ошибка загрузки файла ".$_FILES['file']['error'];
}
else{
    if (!empty($_FILES)) {
        try {
            $tempFile = $_FILES['file']['tmp_name'];          //3
    //        dirname( __FILE__ ).$ds.
            $targetPath =   $_SERVER['DOCUMENT_ROOT']. $storeFolder . $ds;  //4

            $targetFile =  $targetPath. $id. $_FILES['file']['name'];  //5
            $oldFile = $_SERVER['DOCUMENT_ROOT'].$oldimgpathe;

            if(move_uploaded_file($tempFile,$targetFile)){

                if($targetFile != $oldFile)
                unlink($oldFile);

                echo "Картинка сохранена!";
//                    "Сохранено  ".$targetFile."<br>   временный путь: ".$tempFile."<br>старый путь: ".$oldFile;
            }
            else{
                echo "Ошибка-файл не сохранился";
            }

        } catch (Exception $e) {
            echo "Файл не сохранен";
        }
    }
    else{
        echo "Нет файла";
    }

}
?>