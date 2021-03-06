<div id="DIV_DATATABLE" name="DIV_DATATABLE">
    <div class="container-fluid Contenedor_Principal">
        <div class="row">
            <div class="col-12">
                <div class="card rounded p-4">
                    <div class="card-header rounded text-center p-4">
                        <h4 class="mb-0 text-white">Lista de...</h4>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">Título de la tarjeta</h4>
                       
                        <div class="form-group">
                            <button id="btnRecargar" class="btn btn-info">
                                <i class="fa fa-plus"></i> Recargar</button>
                            <button id="btnNuevo" type="button" class="btn btn-success" data-toggle="modal"><i
                                    class="fa fa-plus"></i> Agregar</button>
                            <button id="btimprimir" type="button" class="btn btn-info" data-toggle="modal"><i
                                    class="fa fa-pencil"></i> Mostrar seleccionados</button>
                        </div>
                        
                        <!-- STRIPED ES EL EFECTO CEBRA, Y BORDE DE TABLA -->
                        <div class="table-responsive">
                            <table id="TABLITA" name="TABLITA" class="table table-striped table-bordered display" style="width:100%">

                                <thead>
                                    <tr>
                                        <!-- <th>#</th>
                                        <th>
                                            <input type="checkbox" name="select_all" value="1" id="example-select-all">
                                        </th> -->
                                        <th>Usuario</th>
                                        <th>Nombre</th>
                                        <th>Apellido 1</th>
                                        <th>Apellido 2</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>

                                <!-- <tbody id="Cuerpo_Tabla_TABLITA"> -->
                                    <!-- AQUÍ SE CARGAN LOS DATOS DE LA TABLA -->
                                <!-- </tbody> -->


                                <tfoot class="text-center">
                                    <!-- <tr>
                                        <th>#</th>
                                        <th></th>
                                        <th>Usuario</th>
                                        <th>Clave</th>
                                        <th>Nombre</th>
                                        <th>Apellido 1</th>
                                        <th>Apellido 2</th>
                                        <th>Acciones</th>
                                    </tr> -->
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>




<!-- ============================================================== -->
<!-- EL MODAL DEL CRUD -->
<!-- ============================================================== -->
<div class="modal fade show" id="modalCRUD" tabindex="-1" role="dialog" aria-labelledby="primary-header-modalLabel"
    aria-hidden="true">
    <!-- PARA MODAL LARGO modal-lg -->
    <!-- PARA MODAL AL ANCHO DE LA PAGINA modal-full-width -->
    <!-- PARA MODAL CON SCROLL INLCUIDO modal-dialog-scrollable -->
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header" id="modal-header-agregar-usuario">
                <h4 class="modal-title text-white" id="modal-title-agregar-usuario"></h4>
                <!-- <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close"><span
    aria-hidden="true">&times;</span>
</button> -->
            </div>


            <form id="formUsuarios" class="needs-validation" novalidate>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="Usuario" class="col-form-label">Usuario:</label>
                                <input type="text" class="form-control" id="Txt_username" required>
                                <div class="valid-feedback">
                                    
                                  </div>
                                  <div class="invalid-feedback">
                                    Digite el nuevo usuario.
                                  </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="" class="col-form-label">Contraseña:</label>
                                <input type="text" class="form-control" id="Txt_password" required>
                                <div class="valid-feedback">
                                    
                                </div>
                                <div class="invalid-feedback">
                                  Digite la contraseña.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="" class="col-form-label">Nombre:</label>
                                <input type="text" class="form-control" id="Txt_first_name" required>
                                <div class="valid-feedback">
                                    
                                </div>
                                <div class="invalid-feedback">
                                  Digite el nombre.
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="" class="col-form-label">Primer Apellido</label>
                                <input type="text" class="form-control" id="Txt_last_name1" required>
                                <div class="valid-feedback">
                                    
                                </div>
                                <div class="invalid-feedback">
                                  Digite el primer apellido.
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="" class="col-form-label">Segundo Apellido</label>
                                <input type="text" class="form-control" id="Txt_last_name2" required>
                                <div class="valid-feedback">
                                    
                                </div>
                                <div class="invalid-feedback">
                                  Digite el segundo apellido.
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div class="modal-footer">
                    <button type="button" id="btnCancelarModal" class="btn btn-danger"
                        data-dismiss="modal">Cancelar</button>
                    <button type="submit" id="btnGuardar" class="btn btn-success">Guardar</button>
                </div>
            </form>


        </div>
    </div>
</div>

