<?php
include_once '../../../BD/Conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();


$Id = (isset($_POST['Id_Satelite'])) ? $_POST['Id_Satelite'] : '';
$Nombre = (isset($_POST['Nombre_Satelite'])) ? $_POST['Nombre_Satelite'] : '';

$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$Id_Seleccionado = (isset($_POST['Id_Seleccionado'])) ? $_POST['Id_Seleccionado'] : '';


switch($opcion){
    case 1:
        try {
            $consulta = "INSERT INTO satelites (Sat_Codigo,Sat_Nombre) VALUES('$Id','$Nombre') ";			
            $resultado = $conexion->prepare($consulta);
            $resultado->execute(); 
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }
        break; 
    case 2: 
        try {
                $consulta = "UPDATE satelites SET Sat_Codigo = '$Id',Sat_Nombre = '$Nombre'  WHERE Sat_Codigo = '$Id_Seleccionado'";		
                $resultado = $conexion->prepare($consulta);
                $resultado->execute();   
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }
        break;
    case 3:
        try {
            $consulta = "DELETE FROM satelites WHERE Sat_Codigo = '$Id_Seleccionado'";		
            $resultado = $conexion->prepare($consulta);
            $resultado->execute(); 
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }                              
        break;
    case 4:    
        try {
            $consulta = "SELECT Sat_Codigo,Sat_Nombre FROM satelites";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();        
            $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
            print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }  
        break;
}


$conexion=null;
$objeto = null;
$consulta = null;
//$resultado -> closeCursor;
$resultado = null;
