<?php
    if($_FILES){
        $folder = "../images/";
        $image = $_FILES["photo"]["name"];
        $target = $folder.$image;
        if(move_uploaded_file($_FILES["photo"]["tmp_name"],$target)){
            echo json_encode("Foto subida con exito!");
            if(unlink($target)){
                echo json_encode("Se elimino la foto");
            }
        }else{
            echo json_encode("No se pudo subir la foto");
        }
    }
?>