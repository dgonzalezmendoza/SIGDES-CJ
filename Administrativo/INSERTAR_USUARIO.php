<?php

include_once '../BD/Conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

try {
    $passHash = password_hash('Dengo01081988',PASSWORD_DEFAULT);
    $consulta = "INSERT INTO USUARIO_DESARROLADOR (UsDes_Usuario, UsDes_Clave, UsDes_Nombre, UsDes_Apellido1, UsDes_Apellido2, UsDes_Tema) VALUES('dengo8818', '$passHash', 'DENNIS MAURICIO', 'GONZÁLEZ', 'MENDOZA', '1') ";			
    $resultado = $conexion->prepare($consulta);
    $resultado->execute(); 
    echo("EXITO!!");
     

} catch (Exception $e) {
    die("ERROR: ". $e->getMessage());
}

        

$conexion=null;
$objeto = null;
$consulta = null;
//$resultado -> closeCursor;
$resultado = null;


?>