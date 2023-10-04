<?php

    if(!empty($_GET['relato'])){
        include_once('conexao.php');

        $relato = $_GET['relato'];

        $sqlSelect = "SELECT *  FROM relato WHERE relato='$relato'";

        $result = $conexao->query($sqlSelect);

        if($result->num_rows > 0){
            $sqlDelete = "DELETE FROM relato WHERE relato='$relato'";
            $resultDelete = $conexao->query($sqlDelete);
        }
    }
    header('Location: ../relatosDelete.php');
?>

