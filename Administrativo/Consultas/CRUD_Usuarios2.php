<?php
include_once '../../BD/Conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$Id = (isset($_POST['Id'])) ? $_POST['Id'] : '';
$Usuario = (isset($_POST['username'])) ? $_POST['username'] : '';
$Clave = (isset($_POST['password'])) ? $_POST['password'] : '';
$Nombre = (isset($_POST['first_name'])) ? $_POST['first_name'] : '';
$Apellidos = (isset($_POST['last_name'])) ? $_POST['last_name'] : '';
$Genero = (isset($_POST['Gender'])) ? $_POST['Gender'] : '';
$Status = (isset($_POST['Status'])) ? $_POST['Status'] : '';


$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$Usuario_Seleccionado = (isset($_POST['Usuario_Seleccionado'])) ? $_POST['Usuario_Seleccionado'] : '';


switch($opcion){
    case 1:
        try {
            $passHash = password_hash($Clave,PASSWORD_DEFAULT);
            $consulta = "INSERT INTO user_details (UsDes_Usuario, UsDes_Clave, UsDes_Nombre, UsDes_Apellido1, UsDes_Apellido2, UsDes_Tema) VALUES('$Usuario', ' $passHash', '$Nombre', '$Apellido1', '$Apellido2', '$TemaOscuroClaro') ";			
            $resultado = $conexion->prepare($consulta);
            $resultado->execute(); 
            
            $consulta = "SELECT * FROM USUARIO_DESARROLLADOR";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
            $data=$resultado->fetchAll(PDO::FETCH_ASSOC);       
            print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }
        break; 
    case 2: 
        try {
            if($Clave != ''){
                $passHash = password_hash($Clave,PASSWORD_DEFAULT);
                $consulta = "UPDATE USUARIO_DESARROLLADOR SET UsDes_Usuario='$Usuario', UsDes_Clave='$passHash', UsDes_Nombre='$Nombre', UsDes_Apellido1='$Apellido1', UsDes_Apellido2='$Apellido2', UsDes_Tema='$TemaOscuroClaro' WHERE UsDes_Usuario='$Usuario_Seleccionado' ";		
                $resultado = $conexion->prepare($consulta);
                $resultado->execute();    
            }else{
                $consulta = "UPDATE USUARIO_DESARROLLADOR SET UsDes_Usuario='$Usuario', UsDes_Nombre='$Nombre', UsDes_Apellido1='$Apellido1', UsDes_Apellido2='$Apellido2' WHERE UsDes_Usuario='$Usuario_Seleccionado' ";		
                $resultado = $conexion->prepare($consulta);
                $resultado->execute();   
            }
            $consulta = "SELECT * FROM USUARIO_DESARROLLADOR";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();        
            $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
            print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }
        break;
    case 3:
        try {
            $consulta = "DELETE FROM USUARIO_DESARROLLADOR WHERE UsDes_Usuario='$Usuario_Seleccionado' ";		
            $resultado = $conexion->prepare($consulta);
            $resultado->execute(); 
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }                              
        break;
    case 4:    
        try {
            $consulta = "SELECT * FROM USUARIO_DESARROLLADOR";
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
