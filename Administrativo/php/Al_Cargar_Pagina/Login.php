<?php

include_once '../../../BD/Conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();


//recepción de datos enviados mediante POST desde ajax
$usuario = (isset($_POST['usuario'])) ? $_POST['usuario'] : '';
$password = (isset($_POST['password'])) ? $_POST['password'] : '';

try {
    $consulta = "SELECT * FROM usuario_desarrollador WHERE UsDes_Usuario='$usuario'";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();

if($resultado->rowCount() >= 1){//NUMERO DE FILAS DEVUELTAS EN CONSULTA ES MAYO O IGUAL A 1

    $data = $resultado->fetch(PDO::FETCH_ASSOC); //FETCH O FETCHALL para solo la primera row o todas de la consulta
   
    if (password_verify($password, $data['UsDes_Clave'])) { //SE VERIFICA LA CONTRASEÑA QUE DIGITA EL USUARIO
        
        session_name("SIGDES_APP"); //NOMBRE DE LA SESION PHP EN EL SERVIDOR
        session_set_cookie_params(28800);  //TIEMPO FIJO DE CIERRE DE SESIÓN EN COOKIES - 8 HORAS POR DEFECTO
        session_start(); //INICIA LA SESIÓN
        
        //USO DE VARIABLES DE SESIÓN, SOLO SERÁN USABLES MIENTRAS LA SESIÓN ESTE ABIERTA
        $_SESSION["Segundos_de_vida"] = 3600; //SEGUNDOS DE VIDA DE LA SESIÓN - 60 MINUTOS (3600s) POR DEFECTO
        $_SESSION["Hora_de_login"] = time(); //TIEMPO EN QUE SE CONECTA EL USUARIO
        $_SESSION["s_usuario"] = $usuario; // SE CAPTURA EL NOMBRE DE USUARIO CONECTADO
        $_SESSION["s_Nombres"] = $data['UsDes_Nombre']; //SE CAPTURA NOMBRE DEL USUARIO CONECTADO
        $_SESSION["s_Apellidos"] = ($data['UsDes_Apellido1']." ".$data['UsDes_Apellido2']); //SE CAPTURA APELLIDOS DE USUARIO CONECTADO
       
    }else{
        $_SESSION["s_usuario"] = null;
        $data="CONTRASENHA INCORRECTA";
        print json_encode($data);
    }
}else{
    $_SESSION["s_usuario"] = null;
    $data = "NO EXISTE USUARIO";
    print json_encode($data);
}
} catch (Exception $e) {
    print json_encode('ERROR BACK-END: '. $e->getMessage());
}

$objeto = null;
$consulta = null;
$resultado->closeCursor();
$resultado = null;
$conexion = null;

//usuarios de prueba en la base de datos
//usuario:admin pass:12345
//usuario:demo pass:demo