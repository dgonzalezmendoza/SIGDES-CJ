<?php
include_once '../BD/Conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();


$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';

switch($opcion){
    case 1:
        session_name("CJ_JUDAS"); 
        session_set_cookie_params(1);
        session_start();
        $usuario_conectado = $_SESSION["s_usuario"];
        $consulta = "UPDATE user_details SET status=1 WHERE username='$usuario_conectado'";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        $data=$resultado->fetch(PDO::FETCH_ASSOC);
        break;
    
    case 2: 
        session_name("CJ_JUDAS"); 
        session_set_cookie_params(1);
        session_start();
        $usuario_conectado = $_SESSION["s_usuario"];
        $consulta = "UPDATE user_details SET status=0 WHERE username='$usuario_conectado'";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        $data=$resultado->fetch(PDO::FETCH_ASSOC);
        break;
    case 3: 
        session_name("CJ_JUDAS"); 
        session_set_cookie_params(1);
        session_start();
        $usuario_conectado = $_SESSION["s_usuario"];
        $consulta = "SELECT status FROM user_details WHERE username='$usuario_conectado'";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        $data=$resultado->fetch(PDO::FETCH_ASSOC);
        break;
}




print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
$objeto = null;
$consulta = null;
//$resultado -> closeCursor;
$resultado = null;
$conexion = null;