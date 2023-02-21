<?php
include_once '../../../BD/Conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();


$Id_Prov = (isset($_POST['Id_Prov'])) ? $_POST['Id_Prov'] : '';
$Nombre_Prov= (isset($_POST['Nombre_Prov'])) ? $_POST['Nombre_Prov'] : '';

$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$Id_Prov_Seleccionado = (isset($_POST['Id_Prov_Seleccionado'])) ? $_POST['Id_Prov_Seleccionado'] : '';


switch($opcion){
    case 1:
        try {
            $consulta = "INSERT INTO provincias (Prov_Codigo,Prov_Nombre) VALUES('$Id_Prov','$Nombre_Prov') ";			
            $resultado = $conexion->prepare($consulta);
            $resultado->execute(); 
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }
        break; 
    case 2: 
        try {
            $consulta = "UPDATE provincias SET Prov_Codigo = '$Id_Prov',Prov_Nombre = '$Nombre_Prov' WHERE Prov_Codigo = '$Id_Prov_Seleccionado'";		
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();   
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }
        break;
    case 3:
        try {
            $consulta = "DELETE FROM provincias WHERE Prov_Codigo = '$Id_Prov_Seleccionado'";		
            $resultado = $conexion->prepare($consulta);
            $resultado->execute(); 
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }                              
        break;
    case 4:    
        try {
            $consulta = "SELECT Prov_Codigo,Prov_Nombre FROM provincias";
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
