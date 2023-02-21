<div id="DIV_Config_ProvCanDis" name="DIV_Config_ProvCanDis">

    <div class="container-fluid Contenedor_Principal">
        <div class="row">
            <div class="col-12">
                <div class="card rounded p-4">
                    <div class="card-header rounded text-center p-4">
                        <h4 class="mb-0 text-white">Mapeo Provincial</h4>
                    </div>


                    
                    <!-- <h4 class="card-title">Título de la tarjeta</h4> -->
                    <!-- <h4 class="card-title">Filtrar búsqueda</h4> -->
                    <div class="row">   
                        <div class="card-body border rounded mt-3">
                            <!-- <h4 class="card-title mb-3">Tabs Justified</h4> -->
                            <ul class="nav nav-tabs mb-5">
                                <li class="nav-item">
                                    <a href="#Tab_Provincias" data-toggle="tab" aria-expanded="true"
                                        class="nav-link rounded-0 active">
                                        <!-- <i class="mdi mdi-arrow-down d-sm-none d-block mr-1"></i> -->
                                        <span class="d-none d-sm-block">Provincias</span>
                                        <span class="d-none d-sm-none d-block">Prov...</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#Tab_Cantones" data-toggle="tab" aria-expanded="false"
                                        class="nav-link rounded-0">
                                        <!-- <i class="mdi mdi-arrow-down d-sm-none d-block mr-1"></i> -->
                                        <span class="d-none d-sm-block">Cantones</span>
                                        <span class="d-none d-sm-none d-block">Cant...</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#Tab_Distritos" data-toggle="tab" aria-expanded="false"
                                        class="nav-link rounded-0">
                                        <!-- <i class="mdi mdi-arrow-down d-sm-none d-block mr-1"></i> -->
                                        <span class="d-none d-sm-block">Distritos</span>
                                        <span class="d-none d-sm-none d-block">Dist...</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#Tab_Barrios" data-toggle="tab" aria-expanded="false"
                                        class="nav-link rounded-0">
                                        <!-- <i class="mdi mdi-arrow-down d-sm-none d-block mr-1"></i> -->
                                        <span class="d-none d-sm-block">Barrios</span>
                                        <span class="d-none d-sm-none d-block">Bar...</span>
                                    </a>
                                </li>
                            </ul>

                            <div class="tab-content">
                                <div class="tab-pane active" id="Tab_Provincias">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <button id="BtnNuevo_Config_Provincia" type="button" class="btn btn-success" data-toggle="modal"><i
                                                    class="fa fa-plus"></i> Agregar provincia</button>
                                            </div>   
                                        </div>    
                                        <div class="col-md-3" >
                                            <div class="form-group text-md-right">
                                                <button id="Btnlimpiar_Config_Provincia" type="button" class="btn btn-dark-info"><i
                                                    class="mdi mdi-refresh"></i> Limpiar</button>
                                            </div>
                                        </div>
                                        <div class="col-md-5">
                                            <div class="row">
                                                <div class="col-8">
                                                    <div class="form-group">
                                                        <input 
                                                            type="text"
                                                            id="Txt_Conf_Prov_Filtrar_Codigo"
                                                            class="form-control" placeholder="Filtrar datos..."
                                                            autocomplete="nope" maxlength="50">
                                                    </div> 
                                                </div>
                                                <div class="col-4">
                                                    <div class="form-group">
                                                        <button id="BtnFiltrar_Config_Provincias" type="button" class="btn btn-dark-info"><i
                                                            class="fa fa-search-plus"></i> Filtrar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>  
                                    <div class="row">
                                        <p>Organización de las provincias de nuestro país.</p>
                                    </div>
                                    

                                    <div class="table-responsive mt-3">
                                        <table id="Tabla_Config_Provincias"
                                            class="table table-striped table-bordered display no-wrap dataTable"
                                            style="width:100%">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Nombre de Provincia</th>
                                                    <th>Acciones</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                                <div class="tab-pane show" id="Tab_Cantones">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <button id="BtnNuevo_Config_Canton" type="button" class="btn btn-success" data-toggle="modal"><i
                                                    class="fa fa-plus"></i> Agregar Cantón</button>
                                            </div>   
                                        </div>    
                                        <div class="col-md-3" >
                                            <div class="form-group text-md-right">
                                                <button id="Btnlimpiar_Config_Canton" type="button" class="btn btn-dark-info"><i
                                                    class="mdi mdi-refresh"></i> Limpiar</button>
                                            </div>
                                        </div>
                                        <div class="col-md-5">
                                            <div class="row">
                                                <div class="col-8">
                                                    <div class="form-group">
                                                        <input 
                                                            type="text"
                                                            id="Txt_Conf_Cant_Filtrar_Codigo"
                                                            class="form-control" placeholder="Filtrar datos..."
                                                            autocomplete="nope" maxlength="50">
                                                    </div> 
                                                </div>
                                                <div class="col-4">
                                                    <div class="form-group">
                                                        <button id="BtnFiltrar_Config_Canton" type="button" class="btn btn-dark-info"><i
                                                            class="fa fa-search-plus"></i> Filtrar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    <p>Organización de los cantones de nuestro país.</p>

                                    <div class="table-responsive mt-3">
                                        <table id="Tabla_Config_Cantones"
                                            class="table table-striped table-bordered display no-wrap dataTable"
                                            style="width:100%">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Nombre del Cantón</th>
                                                    <th>Provincia</th>
                                                    <th>Acciones</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>

                                </div>
                                <div class="tab-pane" id="Tab_Distritos">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <button id="BtnNuevo_Config_Distrito" type="button" class="btn btn-success" data-toggle="modal"><i
                                                    class="fa fa-plus"></i> Agregar Distrito</button>
                                            </div>   
                                        </div>    
                                        <div class="col-md-3" >
                                            <div class="form-group text-md-right">
                                                <button id="Btnlimpiar_Config_Distrito" type="button" class="btn btn-dark-info"><i
                                                    class="mdi mdi-refresh"></i> Limpiar</button>
                                            </div>
                                        </div>
                                        <div class="col-md-5">
                                            <div class="row">
                                                <div class="col-8">
                                                    <div class="form-group">
                                                        <input 
                                                            type="text"
                                                            id="Txt_Conf_Dist_Filtrar_Codigo"
                                                            class="form-control" placeholder="Filtrar datos..."
                                                            autocomplete="nope" maxlength="50">
                                                    </div> 
                                                </div>
                                                <div class="col-4">
                                                    <div class="form-group">
                                                        <button id="BtnFiltrar_Config_Distrito" type="button" class="btn btn-dark-info"><i
                                                            class="fa fa-search-plus"></i> Filtrar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    <p>Organización de los distritos de nuestro país.</p>

                                    <div class="table-responsive mt-3">
                                        <table id="Tabla_Config_Distritos"
                                            class="table table-striped table-bordered display no-wrap dataTable"
                                            style="width:100%">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Nombre del Distrito</th>
                                                    <th>Cantón</th>
                                                    <th>Provincia</th>
                                                    <th>Acciones</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>

                                </div>
                                <div class="tab-pane" id="Tab_Barrios">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <button id="BtnNuevo_Config_Barrio" type="button" class="btn btn-success" data-toggle="modal"><i
                                                    class="fa fa-plus"></i> Agregar Barrio</button>
                                            </div>   
                                        </div>    
                                        <div class="col-md-3" >
                                            <div class="form-group text-md-right">
                                                <button id="Btnlimpiar_Config_Barrio" type="button" class="btn btn-dark-info"><i
                                                    class="mdi mdi-refresh"></i> Limpiar</button>
                                            </div>
                                        </div>
                                        <div class="col-md-5">
                                            <div class="row">
                                                <div class="col-8">
                                                    <div class="form-group">
                                                        <input 
                                                            type="text"
                                                            id="Txt_Conf_Barrio_Filtrar_Codigo"
                                                            class="form-control" placeholder="Filtrar datos..."
                                                            autocomplete="nope" maxlength="50">
                                                    </div> 
                                                </div>
                                                <div class="col-4">
                                                    <div class="form-group">
                                                        <button id="BtnFiltrar_Config_Barrios" type="button" class="btn btn-dark-info"><i
                                                            class="fa fa-search-plus"></i> Filtrar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    <p>Organización de los barrios de nuestro país.</p>

                                    <div class="table-responsive mt-3">
                                        <table id="Tabla_Config_Barios"
                                            class="table table-striped table-bordered display no-wrap dataTable"
                                            style="width:100%">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Nombre del Barrio</th>
                                                    <th>Distrito</th>
                                                    <th>Cantón</th>
                                                    <th>Provincia</th>
                                                    <th>Acciones</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div> <!-- end card-body-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



<!-- ============================================================== -->
<!-- EL MODAL DE MANTENIMIENTO DE NACIONALIDADES -->
<!-- ============================================================== -->
<div class="modal fade show" id="Modal_config_Provincias" tabindex="-1" role="dialog"
    aria-labelledby="primary-header-modalLabel" aria-hidden="true">
    <!-- PARA MODAL LARGO modal-lg -->
    <!-- PARA MODAL AL ANCHO DE LA PAGINA modal-full-width -->
    <!-- PARA MODAL CON SCROLL INLCUIDO modal-dialog-scrollable -->
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header" id="Header_Modal_Agregar_Config_Provincias">
                <h4 class="modal-title text-white" id="Título_Modal_Config_Provincias"></h4>
            </div>


            <form id="Form_Config_Provincias" class="needs-validation" novalidate autocomplete="nope">
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="form-group">
                                <label for="" class="col-form-label">Código:</label>
                                <input type="text" class="form-control BordeBlanco-y-Pulsar"
                                    id="Txt_Config_Prov_Codigo" maxlength="1" required autocomplete="nope">
                                <div class="valid-feedback">

                                </div>
                                <div class="invalid-feedback">
                                    Digite el código de la provincia.
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="" class="col-form-label">:</label>
                                <input type="text" class="form-control BordeBlanco-y-Pulsar"
                                    id="Txt_Config_Prov_Nombre" maxlength="40" required autocomplete="nope">
                                <div class="valid-feedback">

                                </div>
                                <div class="invalid-feedback">
                                    Digite el nombre de la provincia.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" id="Btn_Conf_Cancelar_Prov" class="btn btn-danger BordeBlanco-y-Pulsar"
                        data-dismiss="modal">
                        <i class="fas fa-ban"></i>
                        Cancelar</button>
                    <button type="submit" id="Btn_Conf_Guardar_Prov" class="btn btn-success BordeBlanco-y-Pulsar">
                        <i class="fas fa-check"></i>
                        Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>