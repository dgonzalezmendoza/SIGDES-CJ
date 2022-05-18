<?php 
include_once '0_Parametros_Conexion.php';
class Conexion{	  
    public static function Conectar() {        			        
        $opciones = array(
            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
            PDO::MYSQL_ATTR_DIRECT_QUERY => false,
            PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);			
        try{
            $conexion = new PDO("mysql:host=".servidor."; dbname=".nombre_bd, usuario, password, $opciones);			
            return $conexion;
        }catch (Exception $e){
            die("NO SE CONECTÓ A LA BD, EL ERROR ES: ". $e->getMessage());
        }
    }
}
?>