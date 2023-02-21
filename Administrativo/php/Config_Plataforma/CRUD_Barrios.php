<?php
include_once '../../../BD/Conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();


$Id_Barrio = (isset($_POST['Id_Barrio'])) ? $_POST['Id_Barrio'] : '';
$Nombre_Barrio= (isset($_POST['Nombre_Barrio'])) ? $_POST['Nombre_Barrio'] : '';
$Distrito = (isset($_POST['Distrito'])) ? $_POST['Distrito'] : '';

$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$Id_Barrio_Seleccionado = (isset($_POST['Id_Barrio_Seleccionado'])) ? $_POST['Id_Barrio_Seleccionado'] : '';


switch($opcion){
    case 1:
        try {
            $consulta = "INSERT INTO barrios (Barrio_Codigo,Barrio_Nombre,Barrio_Dist_Codigo) VALUES('$Id_Barrio','$Nombre_Barrio','$Distrito ') ";			
            $resultado = $conexion->prepare($consulta);
            $resultado->execute(); 
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }
        break; 
    case 2: 
        try {
            $consulta = "UPDATE barrios SET Barrio_Codigo = '$Id_Barrio',Barrio_Nombre = '$Nombre_Barrio',Barrio_Dist_Codigo = '$Distrito' WHERE Barrio_Codigo = '$Id_Barrio_Seleccionado'";		
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();   
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }
        break;
    case 3:
        try {
            $consulta = "DELETE FROM barrios WHERE Barrio_Codigo = '$Id_Barrio_Seleccionado'";		
            $resultado = $conexion->prepare($consulta);
            $resultado->execute(); 
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }                              
        break;
    case 4:    
        try {
            $consulta = "SELECT Barrio_Codigo,Barrio_Nombre,Dist_Codigo,Dist_Nombre FROM barrios, distritos WHERE Barrio_Dist_Codigo = Dist_Codigo";
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
