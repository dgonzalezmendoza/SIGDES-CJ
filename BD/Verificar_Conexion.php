<?php
include_once 'Conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$objeto = null;
$consulta = null;
$resultado = null;
$conexion = null;
?>