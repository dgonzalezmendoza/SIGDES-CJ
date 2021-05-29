<?php
   //VERIFICAR SI LA SESIÓN EXISTE CON EL NOMBRE ASIGNADO
   session_name("CJ_JUDAS"); 
   session_set_cookie_params(1);
   session_start();
    if(isset($_SESSION["s_usuario"])){ //EXISTE LA SESIÓN DEL USUARIO ?
        if((time() - $_SESSION["Hora_de_login"]) > $_SESSION["Segundos_de_vida"]){  // YA VENCIÓ EL TIEMPO DE SESION ?

           include 'Logout.php'; //CIERRA LA SESIÓN
        }else{ //SINO
            $_SESSION["Hora_de_login"] = time(); //REINICIA EL CONTADOR DE MINUTOS PARA EL CIERRE DE SESIÓN AUTOMÁTICO
        }

    }else{ //SINO
        include 'Logout.php'; //CIERRA Y DESTRUYE LO QUE QUEDA DE LA SESIÓN
    }
?>