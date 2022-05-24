<?php

    // setcookie('Usuario_SIGDES','dengo8818',time()+10,'/','localhost',false,false); 
	// setcookie('Nombre_SIGDES','Denis Mauricio',time()+10,'/','localhost',false,false); 
	// setcookie('Apellidos_SIGDES','González Mendoza',time()+10,'/','localhost',false,false); 
  
?>
<!DOCTYPE html>
<html lang="es">
  <head>
    <!-- META tags REQUERIDOS-->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Indicar al navegador que la plantilla será responsive en sus diferentes medidas -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="keywords" content="CINDEA JUDAS, cindea judas, JUDAS, CINDEA, Chomes, CHOMES">
    <meta name="description" content="Iniciar sesión para el portal de las funciones administrativas de la institución CINDEA Judas de Chomes">
    <meta name="robots" content="noindex,nofollow">
   
    <!-- Titulo de la pestaña de la página-->
    <title>Iniciar sesión</title>

    <!-- ícono de la Institución en la pestaña de la página -->
    <link rel="icon" type="image/png" sizes="16x16" href="../assets/images/LOGO_CINDEA_Transparente.png">
      
    
 
	<link href="../dist/css/style.css" rel="stylesheet">



<!--===============================================================================================-->



	<link rel="stylesheet" type="text/css" href="Logueo/css/util.css">
	<link rel="stylesheet" type="text/css" href="Logueo/css/main.css">
<!--===============================================================================================-->
</head>
<body>
<div class="main-wrapper">	

    <!-- -------------------------------------------------------------- -->
        <!-- Preloader - style you can find in spinners.css -->
        <!-- -------------------------------------------------------------- -->
	<div class="preloader">
        <div class="lds-ripple">
            <div class="lds-pos"></div>
            <div class="lds-pos"></div>
        </div>
    </div>
        <!-- -------------------------------------------------------------- -->
        <!-- Preloader - style you can find in spinners.css -->
        <!-- -------------------------------------------------------------- -->




	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src="../assets/images/LOGO CINDEA_T_LG.png">
				</div>

				<form class="login100-form validate-form" id="formLogin">
					<span class="login100-form-title">
						Inicio de Sesión 
					</span>

					<div class="wrap-input100 validate-input" data-validate = "Se requiere usuario">
						<input class="input100" type="text" name="username" id="usuario" placeholder="Usuario">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-user" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Se requiere contraseña">
						<input class="input100" type="password" name="pass" id="password" placeholder="Contraseña">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							<div id="Texto_ingresar">Ingresar</div>
							<div id="Texto_ingresando">Ingresando...&nbsp&nbsp&nbsp</div>
							<div class="spinner-border spinner-border-sm" id="Spinner_Cargando" role="status"></div>
						</button>
					</div>

					<div class="text-center p-t-12">
						
					</div>

					<div class="text-center p-t-136">
						
							
							
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
	

<script src="../assets/libs/sweetalert2/dist/sweetalert2.all.min.js"></script>
<!--===============================================================================================-->	
	<script src="Logueo/vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	
	<script src="../assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
<!--===============================================================================================-->

<!--===============================================================================================-->
	<script src="Logueo/vendor/tilt/tilt.jquery.min.js"></script>
	<script >
		$('.js-tilt').tilt({
			scale: 1.1
		})
  </script>
  
  
	<script>
    $(".preloader").fadeOut();
    // ============================================================== 
    // Login and Recover Password 
    // ============================================================== 
  </script>


<!--===============================================================================================-->
	<script src="Logueo/js/main.js"></script>

</body>

</html>
