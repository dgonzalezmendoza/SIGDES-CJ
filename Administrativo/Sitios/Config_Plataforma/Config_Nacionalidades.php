<div id="DIV_Config_Plat_Nacionalidades" name="DIV_Config_Plat_Nacionalidades">

    <div class="container-fluid Contenedor_Principal">
        <div class="row">
            <div class="col-12">
                <div class="card rounded p-4">
                    <div class="card-header rounded text-center p-4">
                        <h4 class="mb-0 text-white">Administración de Nacionalidades</h4>
                    </div>
                    <div class="card-body">

                        <div class="card border rounded">
                            <div class="card-body">
                                 <!-- <h4 class="card-title">Título de la tarjeta</h4> -->
                                <!-- <h4 class="card-title">Filtrar búsqueda</h4> -->
                                <div class="row">
                                    <div class="col-md-4 mt-3">
                                        <div class="form-group">
                                            <button id="BtnNuevo_Config_Nacionalidades" type="button" class="btn btn-success" data-toggle="modal"><i
                                                class="fa fa-plus"></i> Agregar nueva nacionalidad</button>
                                        </div>   
                                    </div>    
                                    <div class="col-md-3 mt-3" >
                                        <div class="form-group text-md-right">
                                            <button id="Btnlimpiar_Config_Nacionalidades" type="button" class="btn btn-dark-info"><i
                                                class="mdi mdi-refresh"></i> Limpiar</button>
                                        </div>
                                    </div>
                                    <div class="col-md-5  mt-3">
                                        <div class="row">
                                            <div class="col-8">
                                                <div class="form-group">
                                                    <input 
                                                        type="text"
                                                        id="Txt_Conf_Nac_Filtrar_Codigo"
                                                        class="form-control" placeholder="Filtrar datos..."
                                                        autocomplete="nope" maxlength="50">
                                                </div> 
                                            </div>
                                            <div class="col-4">
                                                <div class="form-group">
                                                    <button id="BtnFiltrar_Config_Nacionalidades" type="button" class="btn btn-dark-info"><i
                                                        class="fa fa-search-plus"></i> Filtrar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>  
                            </div>
                        </div>
                       
                         
                      
                               
                        
                        
                        <div class="table-responsive mt-3">
                            <table id="Tabla_Config_Nacionalidades" class="Nacionalidad table table-striped table-bordered display no-wrap dataTable" style="width:100%">
                                <thead>
                                    <tr>
                                        <th>Código ISO</th>
                                        <th>Gentilicio</th>
                                        <th>País</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>      
                    </div>
                </div>
            </div>         
        </div>
    </div>
</div>



<!-- ============================================================== -->
<!-- EL MODAL DE MANTENIMIENTO DE NACIONALIDADES -->
<!-- ============================================================== -->
<div class="modal fade show" id="Modal_config_Nacionalidades" tabindex="-1" role="dialog" aria-labelledby="primary-header-modalLabel"
    aria-hidden="true">
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
                                <input type="text" class="form-control BordeBlanco-y-Pulsar" id="Txt_Config_Nac_CodigoISO" maxlength="3" required autocomplete="nope">
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
                                <input type="text" class="form-control BordeBlanco-y-Pulsar" id="Txt_Config_Nac_Gentilicio" maxlength="49" required autocomplete="nope">
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
                                <input type="text" style="text-align: center;" class="form-control BordeBlanco-y-Pulsar" id="Txt_Config_Nac_Pais" maxlength="49" required autocomplete="nope">
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