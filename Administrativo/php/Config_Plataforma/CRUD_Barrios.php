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
    // INSERTAR BARRIOS //
    case 1:
        try {
            $consulta = "INSERT INTO barrios (Barrio_Codigo,Barrio_Nombre,Barrio_Dist_Codigo) VALUES('$Id_Barrio','$Nombre_Barrio','$Distrito ') ";			
            $resultado = $conexion->prepare($consulta);
            $resultado->execute(); 
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }
        break; 

    // ACTUALIZAR //
    case 2: 
        try {
            $consulta = "UPDATE barrios SET Barrio_Codigo = '$Id_Barrio',Barrio_Nombre = '$Nombre_Barrio',Barrio_Dist_Codigo = '$Distrito' WHERE Barrio_Codigo = '$Id_Barrio_Seleccionado'";		
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();   
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }
        break;

    // ELIMINAR //
    case 3:
        try {
            $consulta = "DELETE FROM barrios WHERE Barrio_Codigo = '$Id_Barrio_Seleccionado'";		
            $resultado = $conexion->prepare($consulta);
            $resultado->execute(); 
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }                              
        break;

    // SELECIONA TODOS LOS BARRIOS EXISTENTES PARA EL DATATABLE //
    case 4:    
        try {
            $consulta = "SELECT Barrio_Codigo,Barrio_Nombre,Dist_Codigo,Dist_Nombre,Cant_Codigo,Cant_Nombre, Prov_Codigo, Prov_Nombre FROM barrios, distritos, cantones, provincias WHERE Barrio_Dist_Codigo = Dist_Codigo and Dist_Cant_Codigo = Cant_Codigo and Cant_Provincia = Prov_Codigo";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();        
            $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
            print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }  
        break;

    // SELECCIONA Y VERIFICA SI UN BARRIO EXISTE //
    case 5:    
        try {
            $consulta = "SELECT Barrio_Codigo FROM barrios WHERE Barrio_Codigo = '$Id_Barrio_Seleccionado'";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();        
            $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
            print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }  
        break;

    // SABER SI HAY BARRIOS VINCULADOS EN UN DISTRITO //
    case 6:    
        try {
            $consulta = "SELECT Barrio_Codigo FROM barrios, distritos WHERE Barrio_Dist_Codigo = Dist_Codigo AND Dist_Codigo = '$Distrito'";
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
