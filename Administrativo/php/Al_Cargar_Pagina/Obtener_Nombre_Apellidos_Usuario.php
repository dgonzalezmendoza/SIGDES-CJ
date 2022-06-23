<?php
   
    session_name("SIGDES_APP"); //NOMBRE DE LA SESION PHP EN EL SERVIDOR
    session_set_cookie_params(1);  //TIEMPO FIJO DE CIERRE DE SESIÓN EN COOKIES - 8 HORAS POR DEFECTO
    session_start(); //INICIA LA SESIÓN
     if(isset($_SESSION["s_Nombres"]) && isset($_SESSION["s_Apellidos"])){
        $array = Array (
            "Nombre" => $_SESSION["s_Nombres"],
            "Apellidos" => $_SESSION["s_Apellidos"]
        );
        
        
        // $array = Array (
        //     "0" => Array (
        //         "id" => "01",
        //         "name" => "Olivia Mason",
        //         "designation" => "System Architect"
        //     ),
        //     "1" => Array (
        //         "id" => "02",
        //         "name" => "Jennifer Laurence",
        //         "designation" => "Senior Programmer"
        //     ),
        //     "2" => Array (
        //         "id" => "03",
        //         "name" => "Medona Oliver",
        //         "designation" => "Office Manager"
        //     )
        // );
        
        print json_encode($array);
        
    }else{
        print json_encode("N/A");
    }
    

    
    
   
?>