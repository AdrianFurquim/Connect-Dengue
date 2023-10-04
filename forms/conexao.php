<?php
    $servidor="localhost";
    $usuario="id21349176_connectmosquito";
    $senha="Connect2023";
    $bdname="id21349176_connect_dengue";

    $conexao=mysqli_connect($servidor, $usuario, $senha, $bdname);

    if(!$conexao){
        die("houve um erro: ".mysqli_connect_error());
    }
?>