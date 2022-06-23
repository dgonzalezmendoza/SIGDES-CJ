<?php
try {
    session_name("SIGDES_APP");  //UBICA EL NOMBRE DE LA SESIÓN
    session_start(); //CREA O REANUDA LA SESIÓN 
    unset($_SESSION["Segundos_de_vida"]); 
    unset($_SESSION["Hora_de_login"]);
    unset($_SESSION["s_usuario"]); //LIMPIA LA VARIABLE DE LA SESIÓN
    unset($_SESSION["s_Nombres"]); //LIMPIA LA VARIABLE DE LA SESIÓN
    unset($_SESSION["s_Apellidos"]); //LIMPIA LA VARIABLE DE LA SESIÓN
    session_unset(); //LIMPIA LA SESIÓN EXISTENTE
    session_destroy(); //DESTRUYE LA SESIÓN
    setcookie("SIGDES_APP","",time()-3600,"/"); // ELIMINA LA COOKIE INSTANCIADA EN EL NAVEGADOR
    //header("Location:../Index"); //SE USABA PARA REDIRECCIONAR LA PAGINA DESDE PHP
    echo('SESION CERRADA');
} catch(Exception $e) { 
    die("Error: ". $e->getMessage()); //ERROR SI NO SE LLEVA A CABO
}


?>