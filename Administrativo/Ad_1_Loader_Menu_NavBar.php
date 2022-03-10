<?php
   include 'Ad_0_Encabezado.php';   
?>
<body id="BODY">
    <!-- ============================================================== -->
    <!-- Preloader - Los estilos los encontramos en spinners.css -->
    <!-- ============================================================== -->

    <div id="preloader" class="preloader">
        <svg class="tea lds-ripple" width="37" height="48" viewbox="0 0 37 48" fill="none">
            <path
                d="M27.0819 17H3.02508C1.91076 17 1.01376 17.9059 1.0485 19.0197C1.15761 22.5177 1.49703 29.7374 2.5 34C4.07125 40.6778 7.18553 44.8868 8.44856 46.3845C8.79051 46.79 9.29799 47 9.82843 47H20.0218C20.639 47 21.2193 46.7159 21.5659 46.2052C22.6765 44.5687 25.2312 40.4282 27.5 34C28.9757 29.8188 29.084 22.4043 29.0441 18.9156C29.0319 17.8436 28.1539 17 27.0819 17Z"
                stroke="#009efb" stroke-width="2"></path>
            <path
                d="M29 23.5C29 23.5 34.5 20.5 35.5 25.4999C36.0986 28.4926 34.2033 31.5383 32 32.8713C29.4555 34.4108 28 34 28 34"
                stroke="#009efb" stroke-width="2"></path>
            <path id="teabag" fill="#009efb" fill-rule="evenodd" clip-rule="evenodd"
                d="M16 25V17H14V25H12C10.3431 25 9 26.3431 9 28V34C9 35.6569 10.3431 37 12 37H18C19.6569 37 21 35.6569 21 34V28C21 26.3431 19.6569 25 18 25H16ZM11 28C11 27.4477 11.4477 27 12 27H18C18.5523 27 19 27.4477 19 28V34C19 34.5523 18.5523 35 18 35H12C11.4477 35 11 34.5523 11 34V28Z">
            </path>
            <path id="steamL" d="M17 1C17 1 17 4.5 14 6.5C11 8.5 11 12 11 12" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" stroke="#009efb"></path>
            <path id="steamR" d="M21 6C21 6 21 8.22727 19 9.5C17 10.7727 17 13 17 13" stroke="#009efb" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>


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
                                <img src="../assets/images/users/341.jpg" alt="user" class="rounded-circle" width="31"></a>
                            <div class="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                                <div class="d-flex no-block align-items-center p-3 mb-2 border-bottom">
                                    <div class=""><img src="../assets/images/users/341.jpg" alt="user" class="rounded" width="80"></div>
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
