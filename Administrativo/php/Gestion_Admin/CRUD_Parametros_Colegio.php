<?php
include_once '../../../BD/Conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();


$Nombre_Colegio = (isset($_POST['Nombre_Colegio'])) ? $_POST['Nombre_Colegio'] : '';
$Codigo_Presupuestario = (isset($_POST['Codigo_Colegio'])) ? $_POST['Codigo_Colegio'] : '';
$Director = (isset($_POST['Director'])) ? $_POST['Director'] : '';
$Id_a_Editar = (isset($_POST['Codigo_Editar'])) ? $_POST['Codigo_Editar'] : '';
$Opcion = (isset($_POST['Opcion'])) ? $_POST['Opcion'] : '';

if($Opcion == 1){
    try {
        $consulta = "SELECT ParCol_Nombre_Colegio, ParCol_Codigo_Colegio, ParCol_Director  FROM parametros_colegio";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        $data=$resultado->fetch(PDO::FETCH_ASSOC);
        print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
    } catch (Exception $e) {
        print('ERROR BACK-END: '. $e->getMessage());
    }  
  
}else if($Opcion == 2){
    try {
        $consulta = "UPDATE parametros_colegio SET ParCol_Nombre_Colegio = '$Nombre_Colegio',ParCol_Codigo_Colegio = '$Codigo_Presupuestario',ParCol_Director = '$Director' WHERE ParCol_Codigo_Colegio = '$Id_a_Editar'" ;		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();   
    }catch (Exception $e) {
        print('ERROR BACK-END: '. $e->getMessage());
    }
}



$conexion=null;
$objeto = null;
$consulta = null;
//$resultado -> closeCursor;
$resultado = null;
