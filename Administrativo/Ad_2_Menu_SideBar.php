 
<?php
   include 'Ad_1_Loader_Menu_NavBar.php';   
?>

        <!-- ============================================
                           MENU LATERAL
           ============================================ -->



        <!-- ============================================================== -->
        <!-- Left Sidebar - style you can find in sidebar.scss  -->
        <!-- ============================================================== -->
        <aside id="Aside_Left_SideBar" class="left-sidebar">
            <!-- Sidebar scroll-->
            <div class="scroll-sidebar">
                <!-- Sidebar navigation-->
                <nav class="sidebar-nav">
                    <ul id="sidebarnav">
                        <!-- User Profile-->
                        
                        <li>
                         
                            
                            <!-- User profile -->
                            <div class="user-profile text-center position-relative pt-4 mt-1">
                            
                                <!-- User profile image -->
                                <div class="profile-img m-auto"> <img src="../assets/images/users/user_icon.png" alt="user"
                                        class="w-100 rounded-circle" /> </div>
                                <!-- User profile text-->
                                <div class="profile-text py-1">
                                    
                                    <a href="javascript:void(0)" class="font-weight-bold link u-dropdown" role="button"
                                        aria-haspopup="true" aria-expanded="true">
                                        <div class="division_Personalizada_1"> </div>
                                        
                                        HOLA
                                        <br>
                                        <?php 
                                                if(isset($_SESSION["s_Nombres"])){
                                                    echo $_SESSION["s_Nombres"]; 
                                                }else{
                                                    echo "N/A";
                                                }
                                             //  echo $_COOKIE['PRUEBA'];
                                                
                                           ?>
                                        <span class="caret"></span>
                                        <br>
                                    </a>

                                </div>
                            </div>
                            <!-- End User profile text-->
                        </li>






                        <!--DIVISOR DE MENU -->
                        <li class="nav-devider"></li>
                        <!-- ============================================
                                      OPCIÓN PANTALL PRINCIPAL
                      ============================================ -->
                        <!-- User Profile-->
                        <!-- <li class="nav-small-cap"><i class="mdi mdi-dots-horizontal"></i> <span class="hide-menu">Inicio</span></li>-->
                        <li class="sidebar-item">
                            <a class="sidebar-link waves-effect waves-dark sidebar-link" 
                                name="Link_Principal" id="Link_Principal" href="#/Principal"
                                aria-expanded="false">
                                <i class="mdi mdi-home"></i>
                                <span class="hide-menu">Principal</span>
                            </a>
                        </li>




                        <!-- ============================================
                                      OPCIÓN ESTUDIANTES
                      ============================================ -->

                        <li class="sidebar-item">
                            <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)"
                                aria-expanded="false">
                                <i class="mdi mdi-school"></i>
                                <span class="hide-menu">
                                    Estudiantes
                                    <span class="badge badge-pill bg-success">4</span></span>
                            </a>
                            <ul aria-expanded="false" class="collapse  first-level">
                                <li class="sidebar-item"><a name="Link_Lista_Estudiantes" id="Link_Lista_Estudiantes" 
                                            href="#/Lista_Estudiantes" class="sidebar-link"><i
                                            class="mdi mdi-adjust"></i><span class="hide-menu"> Listas e Información
                                        </span></a></li>
                                <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i
                                            class="mdi mdi-adjust"></i><span class="hide-menu"> Reportes </span></a>
                                </li>
                                <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i
                                            class="mdi mdi-adjust"></i><span class="hide-menu"> Constancias </span></a>
                                </li>
                                <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i
                                            class="mdi mdi-adjust"></i><span class="hide-menu"> Matrículas </span></a>
                                </li>
                            </ul>
                        </li>










                        <!-- ============================================
                                      OPCIÓN DOCENTES
                      ============================================ -->
                        <li class="sidebar-item">
                            <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)"
                                aria-expanded="false">
                                <i data-feather="briefcase" class="feather-icon"></i>
                                <span class="hide-menu">
                                    Docentes
                                    <span class="badge badge-pill bg-success">3</span></span>
                            </a>
                            <ul aria-expanded="false" class="collapse  first-level">
                                <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i
                                            class="mdi mdi-adjust"></i><span class="hide-menu"> Listas e Información
                                        </span></a></li>
                                <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i
                                            class="mdi mdi-adjust"></i><span class="hide-menu"> Reportes </span></a>
                                </li>
                                <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i
                                            class="mdi mdi-adjust"></i><span class="hide-menu"> Asig. materias
                                        </span></a></li>
                            </ul>
                        </li>



                        <!-- ============================================
                                      OPCIÓN SECCIONES
                      ============================================ -->
                        <li class="sidebar-item">
                            <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)"
                                aria-expanded="false">
                                <i data-feather="grid" class="feather-icon"></i>
                                <span class="hide-menu">
                                    Secciones
                                    <span class="badge badge-pill bg-success">2</span></span>
                            </a>
                            <ul aria-expanded="false" class="collapse  first-level">
                                <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i
                                            class="mdi mdi-adjust"></i><span class="hide-menu"> Listas e Información
                                        </span></a></li>
                            </ul>
                        </li>



                        <!-- ============================================
                                      OPCIÓN TRANSPORTE
                      ============================================ -->
                        <li class="sidebar-item">
                            <a class="sidebar-link waves-effect waves-dark sidebar-link" href="javascript:void(0)"
                                aria-expanded="false">
                                <i class="mdi mdi-bus"></i>
                                <span class="hide-menu">Transporte</span>
                            </a>
                        </li>





                        <!-- ============================================
                                      OPCIÓN DATA-TABLE
                      ============================================ -->
                        <li class="sidebar-item">
                            <a class="sidebar-link waves-effect waves-dark sidebar-link" name="Link_DataTable" id="Link_DataTable" 
                                href="#/DataTable"
                                aria-expanded="false">
                                <i class="mdi mdi-worker"></i>
                                <span class="hide-menu">Tabla de prueba</span>
                            </a>
                        </li>

                      <!-- ============================================
                                      OPCIÓN DATA-TABLE 2
                      ============================================ -->
                        <li class="sidebar-item">
                            <a class="sidebar-link waves-effect waves-dark sidebar-link" name="Link_DataTable2" id="Link_DataTable2" 
                                href="#/DataTable2"
                                aria-expanded="false">
                                <i class="mdi mdi-worker"></i>
                                <span class="hide-menu">Tabla de usuarios</span>
                            </a>
                        </li>





                        <!--DIVISOR DE MENU -->
                        <li class="nav-devider"></li>

                     <!-- ============================================
                                      OPCIÓN DE MANTENIMIENTOS
                      ============================================ -->
                    <li class="sidebar-item">
                    <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)"
                        aria-expanded="false">
                        <i data-feather="briefcase" class="feather-icon"></i>
                        <span class="hide-menu"> Mantenimientos  
                        <span class="badge badge-pill bg-success">3</span>
                        </span>
                    </a>
                      <ul aria-expanded="false" class="collapse  first-level">
                          <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i
                                      class="mdi mdi-adjust"></i><span class="hide-menu"> Especialidades
                                  </span></a>
                            <ul aria-expanded="false" class="collapse  second-level">
                                <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i
                                    class="mdi mdi-adjust"></i><span class="hide-menu"> Nivel
                                </span></a>
                            </ul>
                            </li>
                          <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i
                                      class="mdi mdi-adjust"></i><span class="hide-menu"> Reportes </span></a>
                          </li>
                          <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i
                                      class="mdi mdi-adjust"></i><span class="hide-menu"> Asig. materias
                                  </span></a></li>
                      </ul>
                      
                  </li>
             

                    <!--DIVISOR DE MENU -->
                    <li class="nav-devider"></li>                 



                    <!-- ============================================
                                    REPORTES GENERALES
                    ============================================ -->
                    <li class="sidebar-item">
                        <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)"
                            aria-expanded="false">
                            <i class="mdi mdi-file-document"></i>
                            <span class="hide-menu">
                                Reportes Gen
                                <span class="badge badge-pill bg-success">3</span></span>
                        </a>
                        <ul aria-expanded="false" class="collapse  first-level">
                            <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i
                                        class="mdi mdi-adjust"></i><span class="hide-menu"> Reporte 1 </span></a>
                            </li>
                            <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i
                                        class="mdi mdi-adjust"></i><span class="hide-menu"> Reporte 2 </span></a>
                            </li>
                            <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i
                                        class="mdi mdi-adjust"></i><span class="hide-menu"> Reporte 3 </span></a>
                            </li>
                        </ul>
                    </li>









                        <!-- ============================================
                                      OPCIÓN GESTION ADMINISTRATIVA
                      ============================================ -->
                        <li class="sidebar-item">
                            <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)"
                                aria-expanded="false">
                                <i class="mdi mdi-settings"></i>
                                <span class="hide-menu">
                                    Gestión Admin
                                    <span class="badge badge-pill bg-success">3</span></span>
                            </a>
                            <ul aria-expanded="false" class="collapse  first-level">
                                <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i
                                            class="mdi mdi-adjust"></i><span class="hide-menu"> Materias </span></a>
                                </li>
                                <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i
                                            class="mdi mdi-adjust"></i><span class="hide-menu"> Parámetros Académicos
                                        </span></a></li>

                            </ul>
                        </li>







                        <!-- ====================================================================================
                                      GESTIÓN DE SUPER USUSARIO ADMINISTRADOR BD Y GENERAL
                      ==================================================================================== -->

                        <li class="nav-small-cap">
                            <i class="mdi mdi-dots-horizontal"></i>
                            <span class="hide-menu">Configuración de sistema</span>
                        </li>
                        <li class="sidebar-item">
                            <a class="sidebar-link waves-effect waves-dark sidebar-link" href="DDD.html"
                                aria-expanded="false">
                                <i data-feather="edit-3" class="feather-icon"></i>
                                <span class="hide-menu">Config. Plataforma</span>
                            </a>
                        </li>
                        <li class="sidebar-item">
                            <a class="sidebar-link waves-effect waves-dark sidebar-link" href="n1.html"
                                aria-expanded="false">
                                <i data-feather="database" class="feather-icon"></i>
                                <span class="hide-menu">Config. Base Datos</span>
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>


            <!-- ============================================================== -->
            <!-- FIN DE LA NAVEGACIÓN DEL SIDEBAR -->
            <!-- ============================================================== -->
        </aside>




        <!-- ============================================================== -->
        <!-- FIN DEL SIDE BAR IZQUIERDO - style you can find in sidebar.scss  -->
        <!-- ============================================================== -->

