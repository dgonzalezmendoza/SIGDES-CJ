<?php
include_once 'Conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();


try {
    $passHash = password_hash('123',PASSWORD_DEFAULT);
    $consulta = "INSERT INTO USUARIO_DESARROLLADOR (UsDes_Usuario, UsDes_Clave, UsDes_Nombre, UsDes_Apellido1, UsDes_Apellido2, UsDes_Tema) 
                    VALUES('DENGO8818', '$passHash', 'DENNIS MAURICIO', 'GONZÁLEZ', 'MENDOZA', '0') ";			
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $passHash = password_hash('123',PASSWORD_DEFAULT);
    $consulta = "INSERT INTO USUARIO_DESARROLLADOR (UsDes_Usuario, UsDes_Clave, UsDes_Nombre, UsDes_Apellido1, UsDes_Apellido2, UsDes_Tema) 
                    VALUES('MAURO8818', '$passHash', 'MAURICIO', 'MENDOZA', 'GONZÁLEZ', '0') ";			
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $passHash = password_hash('123',PASSWORD_DEFAULT);
    $consulta = "INSERT INTO USUARIO_DESARROLLADOR (UsDes_Usuario, UsDes_Clave, UsDes_Nombre, UsDes_Apellido1, UsDes_Apellido2, UsDes_Tema) 
                    VALUES('ALUCARD8818', '$passHash', 'MAURICIO', 'DE LOS ÁNGELES', 'CARDOZO', '0') ";			
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    echo('SE INSERTÓ CON ÉXITO');
} catch (Exception $e) {
    die("ERROR: ". $e->getMessage());
}
 


$conexion=null;
$objeto = null;
$consulta = null;
$resultado->closeCursor();
$resultado = null;
?>