<?php

require_once('conexion.php');

function insertarRegistro()
{
    global $con;
    $UserName= $_POST['UName'];
    $Apellido= $_POST['UApellido'];
    $Email= $_POST['UEmail'];
    $Password= $_POST['UPassword'];
    $FecNac= $_POST['UFecNac'];
    $UGenero= $_POST['UGenero'];
    $UTipo_Vehiculo= $_POST['UTipo_vehiculo'];
    $Repetir= $_POST['URepetir'];
  
    $query= "INSERT INTO usuarios (nombre, apellido, email, password, fecnac, genero, tipo_vehiculo, repetir) values('$UserName', '$Apellido', '$Email', '$Password', '$FecNac', '$UGenero', '$UTipo_Vehiculo, '$Repetir') "

//    echo 'Entro bien';
}

?>