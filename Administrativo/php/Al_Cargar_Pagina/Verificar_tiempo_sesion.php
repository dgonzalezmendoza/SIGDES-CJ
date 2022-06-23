<?php
    /////////////////////////////////////////////////////
   //VERIFICAR SI LA SESIÓN EXISTE CON EL NOMBRE ASIGNADO
    ////////////////////////////////////////////////////
  
  
    function CIERRA_Y_DESTRUYE_SESION_PHP(){
        unset($_SESSION["Segundos_de_vida"]); 
        unset($_SESSION["Hora_de_login"]);
        unset($_SESSION["s_usuario"]);
        unset($_SESSION["s_Nombres"]);
        unset($_SESSION["s_Apellidos"]); 
        session_unset();
        session_destroy();
        setcookie("SIGDES_APP","",time()-3600,"/"); // ELIMINA LA COOKIE DE LA SESIÓN
    };


   session_name("SIGDES_APP"); 
   session_set_cookie_params(1);
   session_start();
    if(isset($_SESSION["s_usuario"])){ //EXISTE LA SESIÓN DEL USUARIO ?
        if((time() - $_SESSION["Hora_de_login"]) > $_SESSION["Segundos_de_vida"]){  // YA VENCIÓ EL TIEMPO DE SESION ?
            print json_encode('EXPIRADO', JSON_UNESCAPED_UNICODE); //DEVUELVE TEXTO
            CIERRA_Y_DESTRUYE_SESION_PHP(); //CIERRA Y DESTRUYE LA SESIÓN

        }else{ //SINO
            print json_encode('NO EXPIRADO', JSON_UNESCAPED_UNICODE); //DEVUEVE TEXTO
            $_SESSION["Hora_de_login"] = time(); //REINICIA EL CONTADOR DE MINUTOS PARA EL CIERRE DE SESIÓN AUTOMÁTICO
        }
    }else{ //SINO
        print json_encode('EXPIRADO', JSON_UNESCAPED_UNICODE); //DEVUEVE TEXTO   
        CIERRA_Y_DESTRUYE_SESION_PHP();//CIERRA Y DESTRUYE LA SESIÓN
    }




    
?>