<?php
include_once '../../../BD/Conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();


$Id_Dist = (isset($_POST['Id_Dist'])) ? $_POST['Id_Dist'] : '';
$Nombre_Dist= (isset($_POST['Nombre_Dist'])) ? $_POST['Nombre_Dist'] : '';
$Canton = (isset($_POST['Canton'])) ? $_POST['Canton'] : '';

$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$Id_Dist_Seleccionado = (isset($_POST['Id_Dist_Seleccionado'])) ? $_POST['Id_Dist_Seleccionado'] : '';


switch($opcion){
    case 1:
        try {
            $consulta = "INSERT INTO distritos (Dist_Codigo,Dist_Nombre,Dist_Cant_Codigo) VALUES('$Id_Dist','$Nombre_Dist','$Canton ') ";			
            $resultado = $conexion->prepare($consulta);
            $resultado->execute(); 
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }
        break; 
    case 2: 
        try {
            $consulta = "UPDATE distritos SET Dist_Codigo = '$Id_Dist',Dist_Nombre = '$Nombre_Dist',Dist_Cant_Codigo = '$Canton' WHERE Dist_Codigo = '$Id_Dist_Seleccionado'";		
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();   
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }
        break;
    case 3:
        try {
            $consulta = "DELETE FROM distritos WHERE Dist_Codigo = '$Id_Dist_Seleccionado'";		
            $resultado = $conexion->prepare($consulta);
            $resultado->execute(); 
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }                              
        break;
    case 4:    
        try {
            $consulta = "SELECT Dist_Codigo,Dist_Nombre,Cant_Codigo,Cant_Nombre FROM distritos, cantones WHERE Dist_Cant_Codigo = Cant_Codigo";
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
