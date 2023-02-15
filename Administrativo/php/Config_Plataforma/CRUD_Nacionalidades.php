<?php
include_once '../../../BD/Conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();


$ISO = (isset($_POST['ISO_Codigo'])) ? $_POST['ISO_Codigo'] : '';
$Gentilicio = (isset($_POST['Gentilicio'])) ? $_POST['Gentilicio'] : '';
$Pais = (isset($_POST['Pais'])) ? $_POST['Pais'] : '';

$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$ISO_Seleccionado = (isset($_POST['ISO_Seleccionado'])) ? $_POST['ISO_Seleccionado'] : '';


switch($opcion){
    case 1:
        try {
            $consulta = "INSERT INTO nacionalidad (ISO_NAC,GENTILICIO_NAC,PAIS_NAC) VALUES('$ISO','$Gentilicio','$Pais') ";			
            $resultado = $conexion->prepare($consulta);
            $resultado->execute(); 
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }
        break; 
    case 2: 
        try {
                $consulta = "UPDATE nacionalidad SET ISO_NAC = '$ISO',GENTILICIO_NAC = '$Gentilicio',PAIS_NAC = '$Pais'  WHERE ISO_NAC = '$ISO_Seleccionado'";		
                $resultado = $conexion->prepare($consulta);
                $resultado->execute();   
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }
        break;
    case 3:
        try {
            $consulta = "DELETE FROM nacionalidad WHERE ISO_NAC = '$ISO_Seleccionado'";		
            $resultado = $conexion->prepare($consulta);
            $resultado->execute(); 
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }                              
        break;
    case 4:    
        try {
            $consulta = "SELECT ISO_NAC,GENTILICIO_NAC,PAIS_NAC FROM nacionalidad";
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
