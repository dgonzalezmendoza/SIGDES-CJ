<?php
include_once '../../../BD/Conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();


$Id = (isset($_POST['Id_Adecuacion'])) ? $_POST['Id_Adecuacion'] : '';
$Nombre = (isset($_POST['Nombre_Adecuacion'])) ? $_POST['Nombre_Adecuacion'] : '';

$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$Id_Seleccionado = (isset($_POST['Id_Seleccionado'])) ? $_POST['Id_Seleccionado'] : '';


switch($opcion){
    case 1:
        try {
            $consulta = "INSERT INTO adecuaciones (Ade_Codigo,Ade_Nombre) VALUES('$Id','$Nombre') ";			
            $resultado = $conexion->prepare($consulta);
            $resultado->execute(); 
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }
        break; 
    case 2: 
        try {
                $consulta = "UPDATE adecuaciones SET Ade_Codigo = '$Id',Ade_Nombre = '$Nombre'  WHERE Ade_Codigo = '$Id_Seleccionado'";		
                $resultado = $conexion->prepare($consulta);
                $resultado->execute();   
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }
        break;
    case 3:
        try {
            $consulta = "DELETE FROM adecuaciones WHERE Ade_Codigo = '$Id_Seleccionado'";		
            $resultado = $conexion->prepare($consulta);
            $resultado->execute(); 
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }                              
        break;
    case 4:    
        try {
            $consulta = "SELECT Ade_Codigo,Ade_Nombre FROM adecuaciones";
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
