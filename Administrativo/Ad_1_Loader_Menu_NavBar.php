<?php
   include 'Ad_0_Encabezado.php';   
?>
<body id="BODY">
    <!-- ============================================================== -->
    <!-- Preloader - Los estilos los encontramos en spinners.css -->
    <!-- ============================================================== -->

    <div class="preloader">
        <div class="lds-ripple">
            <div class="lds-pos"></div>
            <div class="lds-pos"></div>
        </div>
    </div>



    <!-- ============================================================== -->
    <!-- EL COMIENZO del main wrapper - El estilo se encuentra en pages.scss -->
    <!-- ============================================================== -->
    <div id="main-wrapper">
        <!-- ============================================================== -->
        <!-- Topbar header - style you can find in pages.scss -->
        <!-- ============================================================== -->
        <header id="header_topbar" class="topbar">
            <nav id="nav_topbar" class="navbar top-navbar navbar-expand-md navbar-dark">
                <div id="div_navbar" class="navbar-header align-self-center">
                    <!-- This is for the sidebar toggle which is visible on mobile only -->
                    <a class="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i class="ti-menu ti-close"></i></a>
                    
                    
                     <!-- ============================================================== -->
                    <!-- Logo -->
                    <!-- ============================================================== -->
                    <a class="navbar-brand" href="#">
                        <!-- Logo icono -->
                        <b class="logo-icon align-self-center">
                            <!--Aquí se ingresa la foto del logo como uno quiera -->
                            <!-- Icono del tema DARK -->
                            <img src="../assets/images/LOGO_CINDEA_Transparente.png" size="10x10" alt="homepage"
                                class="dark-logo" />
                            <!-- Icono del tema LIGHT -->
                            <img src="../assets/images/LOGO_CINDEA_Transparente.png" size="10x10" alt="homepage"
                                class="light-logo" />
                        </b>
                        <!--==================================== -->
                        <!--Nombre del colegio con pulso animado infinito -->
                        <!-- =================================== -->
                        <span class="logo-text align-self-center">
                             
                            <!-- dark Logo text -->
                            <h4>
                                <div id="Div_Texto_Logo" class="text-white animated pulse infinite font-weight-bold d-md-block p-1"> CINDEA JUDAS </div>
                            </h4>
                        </span>
                    </a>
                    <!-- ============================================================== -->
                    <!-- FIN Logo texto y foto-->
                    <!-- ============================================================== -->
                    
                    
                    
                    <!-- ============================================================== -->
                    <!-- El Toggle El cuál es únicamente visible en móviles -->
                    <!-- ============================================================== -->
                    <a class="topbartoggler d-block d-md-none waves-effect waves-light" href="javascript:void(0)" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i class="ti-more"></i></a>
                </div>


                
                <!-- ============================================================== -->
                <!-- End Logo -->
                <!-- ============================================================== -->
                <div class="navbar-collapse collapse" id="navbarSupportedContent" >
                    
                
               
                
                <!-- ============================================================== -->
                    <!-- toggle and nav items -->
                    <!-- ============================================================== -->
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item d-none d-md-block">
                            <a class="nav-link sidebartoggler waves-effect waves-light" href="javascript:void(0)" data-sidebartype="mini-sidebar">
                                <i class="icon-arrow-left-circle"></i>
                            </a>
                        </li>
                        


                    </ul>




                    <!-- ============================================================== -->
                    <!-- NOMBRE DEL PERFIL -->
                    <!-- ============================================================== -->
                
                    <ul class="navbar-nav mr-auto">
                        
                    </ul>
                   


                    
                     <!-- ============================================================== -->
                    <!-- Al lado derecho del toggle y nav items -->
                    <!-- ============================================================== -->
                    <ul class="navbar-nav">
                   
                        <!-- ============================================================== -->
                        <!-- User profile and search -->
                        <!-- ============================================================== -->
                        <li class="nav-item dropdown" id="Perfil_en_barra_superior">
                            <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="../assets/images/users/user_icon.png" alt="user" class="rounded-circle" width="31"></a>
                            <div class="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                                <div class="d-flex no-block align-items-center p-3 mb-2 border-bottom">
                                    <div class=""><img src="../assets/images/users/user_icon.png" alt="user" class="rounded" width="80"></div>
                                    <div class="ml-2">
                                         <!-- IMPRESIÓN DEL NOMBRE Y APELLIDOS DEL USUARIO CONECTADO-->
                                         <div class="col-12">
                                            <h6 class="mb-0 text-center">
                                                <?php 
                                                    if(isset($_SESSION["s_Nombres"])){
                                                        echo $_SESSION["s_Nombres"]; 
                                                    }else{
                                                        echo "N/A";
                                                    }     
                                                ?>
                                            </h6>
                                            <h6 class="mb-0 text-center">
                                                <?php 
                                                    if(isset($_SESSION["s_Apellidos"])){
                                                        echo $_SESSION["s_Apellidos"]; 
                                                    }else{
                                                        echo "N/A";
                                                    }
                                                ?>
                                            </h6>
                                        </div> 
                                         <!-- DIVISOR PERSONALIZADO -->
                                        <!-- <div class="division_Personalizada_1"> </div> -->
                                         <!-- BOTÓN PARA VER EL PERFÍL DEL USUARIO -->
                                        <!-- <div class="col-12">
                                            <a href="javascript:void(0)" class="btn btn-rounded btn-success btn-sm w-100">Mi Perfil</a>
                                        </div> -->
                                         <!-- DIVISOR PERSONALIZADO -->
                                        <div class="division_Personalizada_2"> </div>
                                        <!-- CHECKBOX PARA CAMBIAR DE TEMA CLARO - OSCURO -->
                                        <div class="col-12 btn-success rounded">
                                            <div class="checkbox checkbox-success">
                                                <input type="checkbox" class="" name="Checkbox_Temas" id="Checkbox_Temas">
                                                <label for="Checkbox_Temas"> <span>Tema Oscuro</span> </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item btn-success" href="javascript:void(0)"><i class="ti-user mr-1 ml-1"></i> Ver mi perfil</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item btn-info" href="javascript:void(0)"><i class="ti-settings mr-1 ml-1"></i> Configuración de la cuenta</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item btn-danger" href="javascript:void(0)"><i class="fa fa-power-off mr-1 ml-1"></i> Cerrar sesión</a>
                            </div>
                        </li>

                          <!-- ============================================================== -->
                        <!-- Botón para salir  -->
                        <!-- ============================================================== -->
                        <li class="nav-item dropdown">
                            <button class='btn btn-danger nav-link' id="Btn_Cerrar_Sesion" title='Cerrar sesión'>
                                <i class='fa fa-power-off'></i>
                            </button>

                        </li>
                        <!-- ============================================================== -->
                        <!-- User profile and search -->
                        <!-- ============================================================== -->
                        <!-- ============================================================== -->
                       
                    </ul>
                </div>
            </nav>
        </header>
        <!-- ============================================================== -->
        <!-- FIN DEL Topbar header -->
        <!-- ============================================================== -->
