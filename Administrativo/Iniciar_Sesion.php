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
        <svg class="tea lds-ripple" width="37" height="48" viewbox="0 0 37 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.0819 17H3.02508C1.91076 17 1.01376 17.9059 1.0485 19.0197C1.15761 22.5177 1.49703 29.7374 2.5 34C4.07125 40.6778 7.18553 44.8868 8.44856 46.3845C8.79051 46.79 9.29799 47 9.82843 47H20.0218C20.639 47 21.2193 46.7159 21.5659 46.2052C22.6765 44.5687 25.2312 40.4282 27.5 34C28.9757 29.8188 29.084 22.4043 29.0441 18.9156C29.0319 17.8436 28.1539 17 27.0819 17Z" stroke="#2962FF" stroke-width="2"></path>
          <path d="M29 23.5C29 23.5 34.5 20.5 35.5 25.4999C36.0986 28.4926 34.2033 31.5383 32 32.8713C29.4555 34.4108 28 34 28 34" stroke="#2962FF" stroke-width="2"></path>
          <path id="teabag" fill="#2962FF" fill-rule="evenodd" clip-rule="evenodd" d="M16 25V17H14V25H12C10.3431 25 9 26.3431 9 28V34C9 35.6569 10.3431 37 12 37H18C19.6569 37 21 35.6569 21 34V28C21 26.3431 19.6569 25 18 25H16ZM11 28C11 27.4477 11.4477 27 12 27H18C18.5523 27 19 27.4477 19 28V34C19 34.5523 18.5523 35 18 35H12C11.4477 35 11 34.5523 11 34V28Z"></path>
          <path id="steamL" d="M17 1C17 1 17 4.5 14 6.5C11 8.5 11 12 11 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#2962FF"></path>
          <path id="steamR" d="M21 6C21 6 21 8.22727 19 9.5C17 10.7727 17 13 17 13" stroke="#2962FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
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
							ingresar
						</button>
					</div>

					<div class="text-center p-t-12">
						<span class="txt1">
							olvidé 
						</span>
						<a class="txt2" href="#">
							mi contraseña
						</a>
					</div>

					<div class="text-center p-t-136">
						<a class="txt2" href="#">
							
							
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