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
                               
                                    <div class="card-body">

                                        <!-- <h4 class="card-title mb-3">Tabs Justified</h4> -->

                                        <ul class="nav nav-pills bg-nav-pills nav-justified mb-3">
                                            <li class="nav-item">
                                                <a href="#Tab_Provincias" data-toggle="tab" aria-expanded="true"
                                                    class="nav-link rounded-0 active">
                                                    <i class="mdi mdi-home-variant d-lg-none d-block mr-1"></i>
                                                    <span class="d-none d-lg-block">Provincias</span>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#Tab_Cantones" data-toggle="tab" aria-expanded="false"
                                                    class="nav-link rounded-0">
                                                    <i class="mdi mdi-account-circle d-lg-none d-block mr-1"></i>
                                                    <span class="d-none d-lg-block">Cantones</span>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#Tab_Distritos" data-toggle="tab" aria-expanded="false"
                                                    class="nav-link rounded-0">
                                                    <i class="mdi mdi-settings-outline d-lg-none d-block mr-1"></i>
                                                    <span class="d-none d-lg-block">Distritos</span>
                                                </a>
                                            </li>
                                        </ul>

                                        <div class="tab-content">
                                            <div class="tab-pane active" id="Tab_Provincias">
                                                <p>Organización de las provincias de nuestro país.</p>

                                                <div class="table-responsive mt-3">
                                                    <table id="Tabla_Config_Nacionalidades"
                                                        class="Nacionalidad table table-striped table-bordered display no-wrap dataTable"
                                                        style="width:100%">
                                                        <thead>
                                                            <tr>
                                                                <th>Id</th>
                                                                <th>Nombre</th>
                                                                <th>Acciones</th>
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>

                                            </div>
                                            <div class="tab-pane show" id="Tab_Cantones">
                                                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                                                    In enim
                                                    justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                                                    dictum felis
                                                    eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus
                                                    elementum
                                                    semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
                                                    porttitor
                                                    eu, consequat vitae, eleifend ac, enim.</p>
                                                <p class="mb-0">Leggings occaecat dolor sit amet, consectetuer
                                                    adipiscing elit.
                                                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                                                    penatibus
                                                    et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                                                    felis,
                                                    ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
                                                    massa
                                                    quis enim.</p>
                                            </div>
                                            <div class="tab-pane" id="Tab_Distritos">
                                                <p>Food truck quinoa dolor sit amet, consectetuer adipiscing elit.
                                                    Aenean
                                                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                                                    penatibus et
                                                    magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                                                    felis,
                                                    ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
                                                    massa
                                                    quis enim.</p>
                                                <p class="mb-0">Donec pede justo, fringilla vel, aliquet nec, vulputate
                                                    eget,
                                                    arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                                                    justo. Nullam
                                                    dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus.
                                                    Vivamus
                                                    elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                                                    ligula,
                                                    porttitor eu, consequat vitae, eleifend ac, enim.</p>
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
<div class="modal fade show" id="Modal_config_Nacionalidades" tabindex="-1" role="dialog"
    aria-labelledby="primary-header-modalLabel" aria-hidden="true">
    <!-- PARA MODAL LARGO modal-lg -->
    <!-- PARA MODAL AL ANCHO DE LA PAGINA modal-full-width -->
    <!-- PARA MODAL CON SCROLL INLCUIDO modal-dialog-scrollable -->
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header" id="modal_header_agregar_Config_Nacionalidades">
                <h4 class="modal-title text-white" id="modal_title_Config_Nacionalidades"></h4>
            </div>


            <form id="Form_Config_Nacionalidades" class="needs-validation" novalidate autocomplete="nope">
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="form-group">
                                <label for="" class="col-form-label">Código (ISO):</label>
                                <input type="text" class="form-control BordeBlanco-y-Pulsar"
                                    id="Txt_Config_Nac_CodigoISO" maxlength="3" required autocomplete="nope">
                                <div class="valid-feedback">

                                </div>
                                <div class="invalid-feedback">
                                    Digite el Código del país.
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="" class="col-form-label">Gentilicio:</label>
                                <input type="text" class="form-control BordeBlanco-y-Pulsar"
                                    id="Txt_Config_Nac_Gentilicio" maxlength="49" required autocomplete="nope">
                                <div class="valid-feedback">

                                </div>
                                <div class="invalid-feedback">
                                    Digite el gentilicio.
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="" class="col-form-label">País:</label>
                                <input type="text" style="text-align: center;" class="form-control BordeBlanco-y-Pulsar"
                                    id="Txt_Config_Nac_Pais" maxlength="49" required autocomplete="nope">
                                <div class="valid-feedback">

                                </div>
                                <div class="invalid-feedback">
                                    Digite el país.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" id="Btn_Cancelar_Nacionalidad" class="btn btn-danger BordeBlanco-y-Pulsar"
                        data-dismiss="modal">
                        <i class="fas fa-ban"></i>
                        Cancelar</button>
                    <button type="submit" id="Btn_Guardar_Nacionalidad" class="btn btn-success BordeBlanco-y-Pulsar">
                        <i class="fas fa-check"></i>
                        Guardar</button>
                </div>
            </form>


        </div>
    </div>
</div>