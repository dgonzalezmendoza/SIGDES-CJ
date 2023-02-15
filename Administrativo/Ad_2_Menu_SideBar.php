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
                                <div class="division_Personalizada_1" id="Hola_label">
                                       
                                </div>
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
                    <a class="sidebar-link waves-effect waves-dark sidebar-link" name="Link_Principal"
                        id="Link_Principal" href="#/Principal" aria-expanded="false">
                        <i class="mdi mdi-home"></i>
                        <span class="hide-menu"> Principal</span>
                    </a>
                </li>




                <!-- ============================================
                                      OPCIÓN ESTUDIANTES
                      ============================================ -->

                <li class="sidebar-item">
                    <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)"
                        aria-expanded="false">
                        <i class="mdi mdi-school"></i>
                        <span class="hide-menu"> Estudiantes
                            <span class="badge badge-pill bg-success">-</span></span>
                    </a>
                    <ul aria-expanded="false" class="collapse  first-level">
                        <li class="sidebar-item"><a name="Link_Lista_Estudiantes" id="Link_Lista_Estudiantes"
                                href="#/Lista_Estudiantes" class="sidebar-link"><i class="mdi mdi-adjust"></i><span
                                    class="hide-menu"> Agregar
                                </span></a></li>
                        <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i
                                    class="mdi mdi-adjust"></i><span class="hide-menu"> Lista e Información </span></a>
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
                            <span class="badge badge-pill bg-success">3</span></span>
                    </a>
                    <ul aria-expanded="false" class="collapse  first-level">
                        <li class="sidebar-item">
                            <a 
                                href="javascript:void(0)" class="sidebar-link"><i
                                    class="mdi mdi-adjust"></i><span class="hide-menu"> 
                                        Convecional
                                </span>
                            </a>
                        </li>
                        <li class="sidebar-item">
                            <a 
                                href="javascript:void(0)" class="sidebar-link"><i
                                    class="mdi mdi-adjust"></i><span class="hide-menu"> 
                                        Emergente
                                </span>
                            </a>
                        </li>
                        <li class="sidebar-item">
                            <a 
                                href="javascript:void(0)" class="sidebar-link"><i
                                    class="mdi mdi-adjust"></i><span class="hide-menu"> 
                                        Técnica
                                </span>
                            </a>
                        </li>
                    </ul>
                </li>



                <!-- ============================================
                                      OPCIÓN TRANSPORTE
                      ============================================ -->
                <li class="sidebar-item">
                    <a class="sidebar-link waves-effect waves-dark sidebar-link" href="javascript:void(0)"
                        aria-expanded="false">
                        <i class="mdi mdi-bus"></i>
                        <span class="hide-menu"> Transporte</span>
                    </a>
                </li>



                <!-- ============================================
                                      OPCIÓN MATRÍCULA
                      ============================================ -->

                <li class="sidebar-item">
                    <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)"
                        aria-expanded="false">
                        <i class="mdi mdi-file-presentation-box"></i>
                        <span class="hide-menu">
                            Matrícula
                            <span class="badge badge-pill bg-success">-</span></span>
                    </a>
                    <ul aria-expanded="false" class="collapse  first-level">
                        <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i
                                    class="mdi mdi-adjust"></i><span class="hide-menu"> 
                                        Matrícula Convencional
                        </span></a></li>
                        <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i
                            class="mdi mdi-adjust"></i><span class="hide-menu"> 
                                Matrícula Emergente
                        </span></a></li>
                        <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i
                            class="mdi mdi-adjust"></i><span class="hide-menu"> 
                                Matrícula Ed. Técnica
                        </span></a></li>
                    </ul>

                </li>
                
                
                


                <!-- ============================================
                                      OPCIÓN DATA-TABLE
                      ============================================ -->
                <li class="sidebar-item">
                    <a class="sidebar-link waves-effect waves-dark sidebar-link" name="Link_DataTable"
                        id="Link_DataTable" href="#/DataTable" aria-expanded="false">
                        <i class="mdi mdi-worker"></i>
                        <span class="hide-menu">Tabla de prueba</span>
                    </a>
                </li>

                <!-- ============================================
                                      OPCIÓN DATA-TABLE 2
                      ============================================ -->
                <li class="sidebar-item">
                    <a class="sidebar-link waves-effect waves-dark sidebar-link" name="Link_DataTable2"
                        id="Link_DataTable2" href="#/DataTable2" aria-expanded="false">
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
                            <span class="badge badge-pill bg-success">-</span>
                        </span>
                    </a>
                    <ul aria-expanded="false" class="collapse  first-level">
                        <li class="sidebar-item">
                            <a name="Link_Mant_Convencional" id="Link_Mant_Convencional"
                                href="#/Mantenimiento/Modulos_Convencional" class="sidebar-link">
                                <i class="mdi mdi-worker"></i>
                                <span class="hide-menu"> Módulos Convencional</span>
                            </a>
                        </li>
                        <li class="sidebar-item">
                            <a name="Link_Mant_Opcionales" id="Link_Mant_Opcionales"
                                href="#/Mantenimiento/Modulos_Opcionales" class="sidebar-link">
                                <i class="mdi mdi-adjust"></i>
                                <span class="hide-menu"> Módulos Opcionales</span>
                            </a>
                        </li>
                        <li class="sidebar-item">
                            <a name="Link_Mant_Emergente" id="Link_Mant_Emergente" 
                                href="#/Mantenimiento/Modulos_Emergente" class="sidebar-link">
                                <i class="mdi mdi-adjust"></i>
                                <span class="hide-menu"> Módulos Emergente</span>
                            </a>
                        </li>
                        <li class="sidebar-item">
                            <a name="Link_Mant_Especialidades" id="Link_Mant_Especialidades" 
                                href="#/Mantenimiento/Especialidades"
                                class="sidebar-link"><i class="mdi mdi-adjust"></i>
                                <span class="hide-menu"> Especialidades</span>
                            </a>
                        </li>
                        <li class="sidebar-item">
                        <a name="Link_Mant_Adecuaciones" id="Link_Mant_Adecuaciones" 
                                href="#/Mantenimiento/Adecuaciones" class="sidebar-link">
                                <i class="mdi mdi-adjust"></i>
                                <span class="hide-menu"> Adecuaciones</span>
                            </a>
                        </li>
                        <li class="sidebar-item">
                            <a name="Link_Mant_Satelites" id="Link_Mant_Satelites" 
                                href="#/Mantenimiento/Satelites" class="sidebar-link">
                                <i class="mdi mdi-adjust"></i>
                                <span class="hide-menu"> Satélites</span>
                            </a>
                        </li>
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
                            <span class="badge badge-pill bg-success">-</span></span>
                    </a>
                    <ul aria-expanded="false" class="collapse  first-level">
                        <li class="sidebar-item"> <a name="Link_Ges_Ad_Param_Colegio" id="Link_Ges_Ad_Param_Colegio" 
                            href="#/Gestion/Parametros_Colegio" class="sidebar-link">
                            <i class="mdi mdi-adjust"></i>
                                <span class="hide-menu"> Parámetros Académicos</span>
                            </a>
                        </li>
                        <li class="sidebar-item"><a name="Link_Ges_Ad_PerAcademico" id="Link_Ges_Ad_PerAcademico" 
                            href="#/Gestion/Periodo_Academico" class="sidebar-link">
                            <i class="mdi mdi-adjust"></i>
                                <span class="hide-menu"> Periodo Académico</span>
                            </a>
                        </li>
                        <li class="sidebar-item"><a name="Link_Ges_Ad_PerTecnico" id="Link_Ges_Ad_PerTecnico"
                            href="#/Gestion/Periodo_Tecnico" class="sidebar-link">
                            <i class="mdi mdi-adjust"></i>
                                <span class="hide-menu"> Periodo Técnico</span>
                            </a>
                        </li>
                        <!-- <li class="sidebar-item"><a name="Link_Ges_Ad_Secciones_Academicas" id="Link_Ges_Ad_Secciones_Academicas"
                            href="#/Gestion/Seccion_Academica" class="sidebar-link">
                            <i class="mdi mdi-adjust"></i>
                                <span class="hide-menu"> Secciones académicas</span>
                            </a>
                        </li>
                        <li class="sidebar-item"><a name="Link_Ges_Ad_Secciones_Tecnico" id="Link_Ges_Ad_Secciones_Tecnico"
                            href="#/Gestion/Seccion_Tecnica" class="sidebar-link">
                            <i class="mdi mdi-adjust"></i>
                                <span class="hide-menu"> Secciones Técnicas</span>
                            </a>
                        </li> -->
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
                    <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)"
                        aria-expanded="false">
                        <i class="mdi mdi-table-edit"></i>
                        <span class="hide-menu">
                            Config. Plataforma
                            <span class="badge badge-pill bg-success">-</span></span>
                    </a>
                    <ul aria-expanded="false" class="collapse first-level">
                        <li class="sidebar-item"> <a name="Link_Config_Nacionalidades" id="Link_Config_Nacionalidades" 
                            href="#/Config/Nacionalidades" class="sidebar-link">
                            <i class="mdi mdi-adjust"></i>
                                <span class="hide-menu"> Nacionalidades</span>
                            </a>
                        </li>
                        <li class="sidebar-item"> <a name="Link_Config_ProvCanDist" id="Link_Config_ProvCanDist" 
                            href="#/Config/Mapeo_Provincial" class="sidebar-link">
                            <i class="mdi mdi-adjust"></i>
                                <span class="hide-menu"> Mapeo Provincial</span>
                            </a>
                        </li>
                    </ul>
                </li>

               
                <li class="sidebar-item">
                    <a class="sidebar-link waves-effect waves-dark sidebar-link" href="javascript:void(0)" 
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