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
  
    $query= "INSERT INTO usuarios (nombre, apellido, email, pass, fecnac, genero, tipo_vehiculo, repetir) VALUES('$UserName', '$Apellido', '$Email', '$Password', str_to_date('$FecNac', '%d/%m/%Y'), '$UGenero', '$UTipo_Vehiculo', '$Repetir') ";

    $result= mysqli_query($con,$query);

    if($result)
    {
        echo 'El registro se creo exitosamente';
    }
    else
    {
        echo 'Por favor chequear la Query';
    }
}

?>