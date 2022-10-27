<!doctype html>
<html lang="es">

<head>
    <!-- META tags REQUERIDOS-->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Indicar al navegador que la plantilla será responsive en sus diferentes medidas -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="keywords" content="CINDEA JUDAS, cindea judas, JUDAS, CINDEA, Chomes, CHOMES">
    <meta name="description"
        content="Portal para trabajar las funciones administrativas de la institución CINDEA Judas de Chomes">
    <meta name="robots" content="noindex,nofollow">

    <!-- Titulo de la pestaña de la página-->
    <title>CINDEA JUDAS</title>

    <!-- ícono de la Institución en la pestaña de la página -->
    <link rel="icon" type="image/png" sizes="16x16" href="assets/images/LOGO_CINDEA_Transparente.png">

  <!-- Para los Sweet-Alerts -->
  <link href="assets/libs/sweetalert2/dist/sweetalert2.min.css" rel="stylesheet">


    <!-- Custom CSS -->
    <link href="dist/css/style.css" rel="stylesheet">
    <link href="Estilo_Index.css" rel="stylesheet">



</head>

<body>


  <div class="main-wrapper">


  

    <!-- ============================================================== -->
    <!-- Preloader - Los estilos los encontramos en spinners.css -->
    <!-- ============================================================== -->

    <div class="preloader">
        <div class="lds-ripple">
            <div class="lds-pos"></div>
            <div class="lds-pos"></div>
        </div>
    </div>

    







  <div class="static-slider5 bg-success-gradiant">
  <div class="left-right-bg" style="background-image:url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/sliders/static-slider/slider5/img1.png), url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/sliders/static-slider/slider5/img2.png)">
    <div class="container">
      <!-- Row  -->
      <div class="row justify-content-center ">
        <!-- Column -->
        <div class="col-md-8 align-self-center text-center">
          <h1 class="title text-white">Bienvenidos al CINDEA de Judas de Chomes</h1>
          <p class="text-white op-8">Tanto la página principal como la App interna se encuentran en construcción, configuraciones de servidor, desarrollo de algoritmos, etc.</p>
          <p class="text-white op-8">Pronto tendremos el agrado de lanzar este proyecto para toda la comunicad del CINDEA Judas.</p>
          <p class="text-white op-8">
            <?php //phpinfo(); ?>
          </p>
          <a class="btn rounded-pill btn-light btn-md mt-3 mr-2" href="Administrativo/Iniciar_Sesion">Acceso funcionario Administrativo</a> 
					<a class="btn rounded-pill btn-outline-light btn-md mt-3" href="">Recarga página</a>
          <!-- <a class="btn rounded-pill btn-outline-light btn-md mt-3" href="Administrativo/Contador" >Contador</a> -->
          <a class="btn rounded-pill btn-light btn-md mt-3 mr-2" id="Insert_Usuarios_Desarrollador">Agregar Usuario Desarrolador</a> 
        </div>
        <!-- Column -->
        <div class="row">
          <div class="col-md-12 text-center middle-image">
            <!-- <img src="assets/images/develop/Desarrollo.webp" class="img-fluid img"> -->
            <img src="assets/images/develop/Desarrollo.png" class="img-fluid rounded" >
            <br>
            <br>
            <br>
           
            <!-- <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/sliders/static-slider/slider5/img3.png" class="img-fluid" alt="wrapkit" /> -->
            </div>
        </div>
      
        <div class="row">
          <div class="col-md-12 text-center middle-image">
            <img src="assets/images/develop/Desarrollo.jpg" class="img-fluid rounded" width="50%">
            <br>
            <br>
            <br>
            <br>
          </div>
      </div>
      </div>
    </div>
  </div>
</div>




</div>


 <!--  Sweet Alert 2  -->
 <script src="assets/libs/sweetalert2/dist/sweetalert2.all.min.js"></script>


<script src="assets/libs/jquery/dist/jquery.min.js"></script>
    <!-- Bootstrap tether Core JavaScript -->
<script src="assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
<script>
    $(".preloader").fadeOut();
     
    $(document).ready(function() {  
        window.location.href = "#";
    });

</script>

<script src="index.js"></script>
</body>

</html>