<?php
include_once '../BD/Conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

session_name("CJ_JUDAS"); 
session_set_cookie_params(1);
session_start();
$usuario_conectado = $_SESSION["s_usuario"];
$consulta = "SELECT UsDes_Tema FROM USUARIO_DESARROLLADOR WHERE UsDes_Usuario='$usuario_conectado'";
$resultado = $conexion->prepare($consulta);
$resultado->execute();        
$data=$resultado->fetch(PDO::FETCH_ASSOC);

print json_encode($data["UsDes_Tema"]);//envio el array final el formato json aL FETCH
$objeto = null;
$consulta = null;
//$resultado -> closeCursor;
$resultado = null;
$conexion = null;

?>