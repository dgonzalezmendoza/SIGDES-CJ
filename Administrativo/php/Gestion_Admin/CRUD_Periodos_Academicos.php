<?php
include_once '../../../BD/Conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();


$Anho = (isset($_POST['anho'])) ? $_POST['anho'] : '';
$Periodo = (isset($_POST['periodo'])) ? $_POST['periodo'] : '';
// $Predeterminado = (isset($_POST['predeterminado'])) ? $_POST['predeterminado'] : '';

$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$Anho_Seleccionado = (isset($_POST['anho_seleccionado'])) ? $_POST['anho_seleccionado'] : '';
$Periodo_Seleccionado = (isset($_POST['periodo_seleccionado'])) ? $_POST['periodo_seleccionado'] : '';


switch($opcion){
    case 1:
        try {
            $consulta = "INSERT INTO periodos_academicos VALUES('$Anho','$Periodo','0') ";			
            $resultado = $conexion->prepare($consulta);
            $resultado->execute(); 
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }
        break; 
    case 2: 
        try {
                $consulta = "UPDATE periodos_academicos SET PerAc_Anho = '$Anho',PerAc_Periodo = '$Periodo'  WHERE PerAc_Anho = '$Anho_Seleccionado' AND PerAc_Periodo = '$Periodo_Seleccionado'";		
                $resultado = $conexion->prepare($consulta);
                $resultado->execute();   
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }
        break;
    case 3:
        try {
            $consulta = "DELETE FROM periodos_academicos WHERE PerAc_Anho = '$Anho_Seleccionado' AND PerAc_Periodo = '$Periodo_Seleccionado'";		
            $resultado = $conexion->prepare($consulta);
            $resultado->execute(); 
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }                              
        break;
    case 4:    
        try {
            $consulta = "SELECT * FROM periodos_academicos";
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
            $consulta = "UPDATE periodos_academicos SET PerAc_Predeterminado = '0'  WHERE PerAc_Anho = '$Anho_Seleccionado' AND PerAc_Periodo = '$Periodo_Seleccionado' ";	
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();   
            $consulta = "UPDATE periodos_academicos SET PerAc_Predeterminado = '1'  WHERE PerAc_Anho = '$Anho' AND PerAc_Periodo = '$Periodo'";		
            $resultado = $conexion->prepare($consulta);
            $resultado->execute(); 
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
