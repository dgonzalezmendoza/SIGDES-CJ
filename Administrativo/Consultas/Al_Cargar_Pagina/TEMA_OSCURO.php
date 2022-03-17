<?php
include_once '../../../BD/Conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();


$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';

    switch($opcion){
        case 1:
            session_name("CJ_JUDAS"); 
            session_set_cookie_params(1);
            session_start();
            $usuario_conectado = $_SESSION["s_usuario"];
            $consulta = "UPDATE USUARIO_DESARROLLADOR SET UsDes_Tema=1 WHERE UsDes_Usuario='$usuario_conectado'";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();        
            $data= 'SE EJECUTÓ CON ÉXITO';
            break;
        
        case 2: 
            session_name("CJ_JUDAS"); 
            session_set_cookie_params(1);
            session_start();
            $usuario_conectado = $_SESSION["s_usuario"];
            $consulta = "UPDATE USUARIO_DESARROLLADOR SET UsDes_Tema=0 WHERE UsDes_Usuario='$usuario_conectado'";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();        
            $data= 'SE EJECUTÓ CON ÉXITO';
            break;
        case 3: 
            session_name("CJ_JUDAS"); 
            session_set_cookie_params(1);
            session_start();
            $usuario_conectado = $_SESSION["s_usuario"];
            $consulta = "SELECT UsDes_Tema FROM USUARIO_DESARROLLADOR WHERE UsDes_Usuario='$usuario_conectado'";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();        
            $data=$resultado->fetch(PDO::FETCH_ASSOC);
            break;
    }

    print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json aL FETCH
    $objeto = null;
    $consulta = null;
    $conexion = null;
    $resultado = null;
    $conexion = null;

?>