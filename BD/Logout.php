<?php
session_name("CJ_JUDAS"); 
session_start();
unset($_SESSION["Tiempo_de_login"]);
unset($_SESSION["s_usuario"]);
unset($_SESSION["s_Nombres"]);
unset($_SESSION["s_Apellidos"]); 
session_unset();
session_destroy();
setcookie("CJ_JUDAS","",time()-3600,"/"); // delete session cookie
header("Location:../Index");
?>