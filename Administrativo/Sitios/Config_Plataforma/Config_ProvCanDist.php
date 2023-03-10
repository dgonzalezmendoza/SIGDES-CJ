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
                                                            class="form-control" placeholder="Filtrar distritos..."
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
                                                            class="form-control" placeholder="Filtrar Barrios..."
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
                                        <table id="Tabla_Config_Barrios"
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
<!-- EL MODAL DE MANTENIMIENTO DE PROVINCIAS -->
<!-- ============================================================== -->
<div class="modal fade show" id="Modal_config_Provincias" tabindex="-1" role="dialog"
    aria-labelledby="primary-header-modalLabel" aria-hidden="true">
    <!-- PARA MODAL LARGO modal-lg -->
    <!-- PARA MODAL AL ANCHO DE LA PAGINA modal-full-width -->
    <!-- PARA MODAL CON SCROLL INLCUIDO modal-dialog-scrollable -->
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header" id="Header_Modal_Agregar_Config_Provincias">
                <h4 class="modal-title text-white" id="Título_Modal_Config_Provincias"></h4>
            </div>


            <form id="Form_Config_Provincias" class="needs-validation" novalidate autocomplete="nope">
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for="" class="col-form-label">Id Provincia:</label>
                                <input type="text" class="form-control BordeBlanco-y-Pulsar text-center 1_numero-inputmask"
                                    id="Txt_Config_Prov_Codigo" maxlength="1" required autocomplete="nope">
                                <div class="valid-feedback">

                                </div>
                                <div class="invalid-feedback">
                                    Digite el código de la provincia.
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="form-group">
                                <label for="" class="col-form-label">Nombre Provincia:</label>
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


<!-- ============================================================== -->
<!-- EL MODAL DE MANTENIMIENTO DE CANTONES -->
<!-- ============================================================== -->
<div class="modal fade show" id="Modal_config_Cantones" tabindex="-1" role="dialog"
    aria-labelledby="primary-header-modalLabel" aria-hidden="true">
    <!-- PARA MODAL LARGO modal-lg -->
    <!-- PARA MODAL AL ANCHO DE LA PAGINA modal-full-width -->
    <!-- PARA MODAL CON SCROLL INLCUIDO modal-dialog-scrollable -->
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header" id="Header_Modal_Agregar_Config_Cantones">
                <h4 class="modal-title text-white" id="Título_Modal_Config_Cantones"></h4>
            </div>


            <form id="Form_Config_Cantones" class="needs-validation" novalidate autocomplete="nope">
                <div class="modal-body">
                    <div class="row">

                        <div class="col-12">
                            <div class="form-group">
                                <label for="" class="col-form-label">Provincia:</label>
                                <select id="Select_Config_Cant_Provincia" class="form-control BordeBlanco-y-Pulsar" required autocomplete="nope">
                                    <!-- <option>1</option>
                                    <option selected>2</option>
                                    <option>3</option> -->
                                </select>
                                <div class="valid-feedback">

                                </div>
                                <div class="invalid-feedback">
                                    Seleccione la provincia.
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="form-group">
                                <label for="" class="col-form-label">Cod. inicial:</label>
                                <input type="text" class="form-control BordeBlanco-y-Pulsar text-center 1_numero-inputmask"
                                    id="Txt_Config_Cant_CodIni" maxlength="1" required autocomplete="nope" disabled>
                                <div class="valid-feedback">

                                </div>
                                <div class="invalid-feedback">
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="form-group">
                                <label for="" class="col-form-label">Cod. Final:</label>
                                <input type="text" class="form-control BordeBlanco-y-Pulsar text-center 3_numero-inputmask" 
                                    id="Txt_Config_Cant_CodFinal" maxlength="3" required autocomplete="nope" disabled>
                                <div class="valid-feedback">

                                </div>
                                <div class="invalid-feedback">
                                   
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-2 col-md-6">
                            <div class="form-group">
                                <label for="" class="col-form-label">Id Cantón:</label>
                                <input type="text" class="form-control BordeBlanco-y-Pulsar text-center 2_numero-inputmask"
                                    id="Txt_Config_Cant_Codigo" maxlength="2" required autocomplete="nope">
                                <div class="valid-feedback">

                                </div>
                                <div class="invalid-feedback">
                                    Digite el código del Cantón.
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <div class="form-group">
                                <label for="" class="col-form-label">Nombre Cantón:</label>
                                <input type="text" class="form-control BordeBlanco-y-Pulsar"
                                    id="Txt_Config_Cant_Nombre" maxlength="40" required autocomplete="nope">
                                <div class="valid-feedback">

                                </div>
                                <div class="invalid-feedback">
                                    Digite el nombre del Cantón.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" id="Btn_Conf_Cancelar_Cant" class="btn btn-danger BordeBlanco-y-Pulsar"
                        data-dismiss="modal">
                        <i class="fas fa-ban"></i>
                        Cancelar</button>
                    <button type="submit" id="Btn_Conf_Guardar_Cant" class="btn btn-success BordeBlanco-y-Pulsar">
                        <i class="fas fa-check"></i>
                        Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- ============================================================== -->
<!-- EL MODAL DE MANTENIMIENTO DE DISTRITO -->
<!-- ============================================================== -->
<div class="modal fade show" id="Modal_config_Distritos" tabindex="-1" role="dialog"
    aria-labelledby="primary-header-modalLabel" aria-hidden="true">
    <!-- PARA MODAL LARGO modal-lg -->
    <!-- PARA MODAL AL ANCHO DE LA PAGINA modal-full-width -->
    <!-- PARA MODAL CON SCROLL INLCUIDO modal-dialog-scrollable -->
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header" id="Header_Modal_Agregar_Config_Distritos">
                <h4 class="modal-title text-white" id="Título_Modal_Config_Distritos"></h4>
            </div>


            <form id="Form_Config_Distritos" class="needs-validation" novalidate autocomplete="nope">
                <div class="modal-body">

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="" class="col-form-label">Provincia:</label>
                                <select id="Select_Config_Dist_Provincia" class="form-control BordeBlanco-y-Pulsar" required autocomplete="nope">
                                    <!-- <option>1</option>
                                    <option selected>2</option>
                                    <option>3</option> -->
                                </select>
                                <div class="valid-feedback">
                                    
                                </div>
                                <div class="invalid-feedback">
                                    Seleccione la provincia.
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="" class="col-form-label">Cantón:</label>
                                <select id="Select_Config_Dist_Canton" class="form-control BordeBlanco-y-Pulsar" required autocomplete="nope">
                                    <!-- <option>1</option>
                                    <option selected>2</option>
                                    <option>3</option> -->
                                </select>
                                <div class="valid-feedback">
                                    
                                </div>
                                <div class="invalid-feedback">
                                    Seleccione el cantón.
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="form-group">
                                <label for="" class="col-form-label">Cod. inicial:</label>
                                <input type="text" class="form-control BordeBlanco-y-Pulsar text-center 3_numero-inputmask"
                                    id="Txt_Config_Dist_CodIni" maxlength="3" required autocomplete="nope" disabled>
                                <div class="valid-feedback">

                                </div>
                                <div class="invalid-feedback">
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="form-group">
                                <label for="" class="col-form-label">Cod. Final:</label>
                                <input type="text" class="form-control BordeBlanco-y-Pulsar text-center Distrito-inputmask" 
                                    id="Txt_Config_Dist_CodFinal" maxlength="5" required autocomplete="nope" disabled>
                                <div class="valid-feedback">

                                </div>
                                <div class="invalid-feedback">
                                   
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-2 col-md-6">
                            <div class="form-group">
                                <label for="" class="col-form-label">Id Distrito:</label>
                                <input type="text" class="form-control BordeBlanco-y-Pulsar text-center 2_numero-inputmask"
                                    id="Txt_Config_Dist_Codigo" maxlength="2" required autocomplete="nope">
                                <div class="valid-feedback">

                                </div>
                                <div class="invalid-feedback">
                                    Digite el código del distrito.
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <div class="form-group">
                                <label for="" class="col-form-label">Nombre Distrito:</label>
                                <input type="text" class="form-control BordeBlanco-y-Pulsar"
                                    id="Txt_Config_Dist_Nombre" maxlength="79" required autocomplete="nope">
                                <div class="valid-feedback">

                                </div>
                                <div class="invalid-feedback">
                                    Digite el nombre del distito.
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" id="Btn_Conf_Cancelar_Dist" class="btn btn-danger BordeBlanco-y-Pulsar"
                        data-dismiss="modal">
                        <i class="fas fa-ban"></i>
                        Cancelar</button>
                    <button type="submit" id="Btn_Conf_Guardar_Dist" class="btn btn-success BordeBlanco-y-Pulsar">
                        <i class="fas fa-check"></i>
                        Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- ============================================================== -->
<!-- EL MODAL DE MANTENIMIENTO DE BARRIOS -->
<!-- ============================================================== -->
<div class="modal fade show" id="Modal_config_Barrios" tabindex="-1" role="dialog"
    aria-labelledby="primary-header-modalLabel" aria-hidden="true">
    <!-- PARA MODAL LARGO modal-lg -->
    <!-- PARA MODAL AL ANCHO DE LA PAGINA modal-full-width -->
    <!-- PARA MODAL CON SCROLL INLCUIDO modal-dialog-scrollable -->
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header" id="Header_Modal_Agregar_Config_Barrios">
                <h4 class="modal-title text-white" id="Título_Modal_Config_Barrios"></h4>
            </div>


            <form id="Form_Config_Barrios" class="needs-validation" novalidate autocomplete="nope">
                <div class="modal-body">

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="" class="col-form-label">Provincia:</label>
                                <select id="Select_Config_Barr_Provincia" class="form-control BordeBlanco-y-Pulsar" required autocomplete="nope">
                                    <option value="0" selected>Seleccione ...</option>
                                    
                                </select>
                                <div class="valid-feedback">
                                    
                                </div>
                                <div class="invalid-feedback">
                                    Seleccione la provincia.
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="" class="col-form-label">Cantón:</label>
                                <select id="Select_Config_Barr_Canton" class="form-control BordeBlanco-y-Pulsar" required autocomplete="nope">
                                    <option value="0" selected>Seleccione ...</option>
                                    <!-- <option>1</option>
                                    <option selected>2</option>
                                    <option>3</option> -->
                                </select>
                                <div class="valid-feedback">
                                    
                                </div>
                                <div class="invalid-feedback">
                                    Seleccione el cantón.
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="" class="col-form-label">Distrito:</label>
                                <select id="Select_Config_Barr_Distrito" class="form-control BordeBlanco-y-Pulsar" required autocomplete="nope">
                                    <option value="0" selected>Seleccione ...</option>
                                    <!-- <option>1</option>
                                    <option selected>2</option>
                                    <option>3</option> -->
                                </select>
                                <div class="valid-feedback">
                                    
                                </div>
                                <div class="invalid-feedback">
                                    Seleccione el Distrito.
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="" class="col-form-label">Cod. inicial:</label>
                                <input type="text" class="form-control BordeBlanco-y-Pulsar text-center Distrito-inputmask"
                                    id="Txt_Config_Barr_CodIni" maxlength="5" required autocomplete="nope" disabled>
                                <div class="valid-feedback">

                                </div>
                                <div class="invalid-feedback">
                                    Digite el código del Barrio.
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="" class="col-form-label">Cod. Final:</label>
                                <input type="text" class="form-control BordeBlanco-y-Pulsar text-center Barrio-inputmask" 
                                    id="Txt_Config_Barr_CodFinal" maxlength="7" required autocomplete="nope" disabled>
                                <div class="valid-feedback">

                                </div>
                                <div class="invalid-feedback">
                                    Digite el código del Barrio.
                                </div>
                            </div>
                        </div>

                        <div class="col-md-2">
                            <div class="form-group">
                                <label for="" class="col-form-label">Id Barrio:</label>
                                <input type="text" class="form-control BordeBlanco-y-Pulsar text-center 2_numero-inputmask"
                                    id="Txt_Config_Barr_Codigo" maxlength="2" required autocomplete="nope">
                                <div class="valid-feedback">

                                </div>
                                <div class="invalid-feedback">
                                    Digite el código del Barrio.
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="" class="col-form-label">Nombre Barrio:</label>
                                <input type="text" class="form-control BordeBlanco-y-Pulsar"
                                    id="Txt_Config_Barr_Nombre" maxlength="79" required autocomplete="nope">
                                <div class="valid-feedback">

                                </div>
                                <div class="invalid-feedback">
                                    Digite el nombre del Barrio.
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" id="Btn_Conf_Cancelar_Dist" class="btn btn-danger BordeBlanco-y-Pulsar"
                        data-dismiss="modal">
                        <i class="fas fa-ban"></i>
                        Cancelar</button>
                    <button type="submit" id="Btn_Conf_Guardar_Dist" class="btn btn-success BordeBlanco-y-Pulsar">
                        <i class="fas fa-check"></i>
                        Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>