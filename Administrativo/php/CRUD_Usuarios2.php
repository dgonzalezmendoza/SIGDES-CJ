<?php
include_once '../../BD/Conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();


$Usuario = (isset($_POST['username'])) ? $_POST['username'] : '';
$Nombre = (isset($_POST['first_name'])) ? $_POST['first_name'] : '';
$Apellidos = (isset($_POST['last_name'])) ? $_POST['last_name'] : '';
$Genero = (isset($_POST['Gender'])) ? $_POST['Gender'] : '';
$Clave = (isset($_POST['password'])) ? $_POST['password'] : '';
$Status = (isset($_POST['Status'])) ? $_POST['Status'] : '';


$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$Usuario_Seleccionado = (isset($_POST['Usuario_Seleccionado'])) ? $_POST['Usuario_Seleccionado'] : '';


switch($opcion){
    case 1:
        try {
            $passHash = password_hash($Clave,PASSWORD_DEFAULT);
            $consulta = "INSERT INTO user_details (username,first_name,last_name,gender,password,status) VALUES('$Usuario', '$Nombre','$Apellidos','$Genero','$passHash','$Status') ";			
            $resultado = $conexion->prepare($consulta);
            $resultado->execute(); 
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }
        break; 
    case 2: 
        try {
            if($Clave != ''){
                $passHash = password_hash($Clave,PASSWORD_DEFAULT);
                $consulta = "UPDATE user_details SET username = '$Usuario',first_name = '$Nombre',last_name = '$Apellidos',gender = '$Genero',status = '$Status',password = '$passHash' WHERE user_id = '$Usuario_Seleccionado'";	
                $resultado = $conexion->prepare($consulta);
                $resultado->execute();    
            }else{
                $consulta = "UPDATE user_details SET username = '$Usuario',first_name = '$Nombre',last_name = '$Apellidos',gender = '$Genero',status = '$Status' WHERE user_id = '$Usuario_Seleccionado'";		
                $resultado = $conexion->prepare($consulta);
                $resultado->execute();   
            }
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }
        break;
    case 3:
        try {
            $consulta = "DELETE FROM user_details WHERE user_id = '$Usuario_Seleccionado'";		
            $resultado = $conexion->prepare($consulta);
            $resultado->execute(); 
        } catch (Exception $e) {
            print('ERROR BACK-END: '. $e->getMessage());
        }                              
        break;
    case 4:    
        try {
            $consulta = "SELECT user_id,username,first_name,last_name,gender,status FROM user_details";
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
