<?php
include_once '../../../BD/Conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();


$Id_Cant = (isset($_POST['Id_Cant'])) ? $_POST['Id_Cant'] : '';
$Nombre_Cant= (isset($_POST['Nombre_Cant'])) ? $_POST['Nombre_Cant'] : '';
$Provincia = (isset($_POST['Provincia'])) ? $_POST['Provincia'] : '';

$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$Id_Cant_Seleccionado = (isset($_POST['Id_Cant_Seleccionado'])) ? $_POST['Id_Cant_Seleccionado'] : '';


switch($opcion){
    case 1:
        try {
            $consulta = "INSERT INTO cantones (Cant_Codigo,Cant_Nombre,Cant_Provincia) VALUES('$Id_Cant','$Nombre_Cant','$Provincia ') ";			
            $resultado = $conexion->prepare($consulta);
            $resultado->execute(); 
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }
        break; 
    case 2: 
        try {
            $consulta = "UPDATE cantones SET Cant_Codigo = '$Id_Cant',Cant_Nombre = '$Nombre_Cant',Cant_Provincia = '$Provincia' WHERE Cant_Codigo = '$Id_Cant_Seleccionado'";		
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();   
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }
        break;
    case 3:
        try {
            $consulta = "DELETE FROM cantones WHERE Cant_Codigo = '$Id_Cant_Seleccionado'";		
            $resultado = $conexion->prepare($consulta);
            $resultado->execute(); 
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }                              
        break;
    case 4:    
        try {
            $consulta = "SELECT Cant_Codigo,Cant_Nombre,Prov_Codigo,Prov_Nombre FROM cantones, provincias WHERE Cant_Provincia = Prov_Codigo";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();        
            $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
            print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }  
        break;
    case 5:    
        try {
            $consulta = "SELECT Cant_Codigo,Cant_Nombre,Prov_Codigo,Prov_Nombre FROM cantones, provincias WHERE Cant_Provincia = Prov_Codigo AND Prov_Codigo = '$Provincia'";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();        
            $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
            print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }  
        break;
    case 6:    
        try {
            $consulta = "SELECT Cant_Codigo FROM cantones WHERE Cant_Codigo = '$Id_Cant_Seleccionado'";
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
