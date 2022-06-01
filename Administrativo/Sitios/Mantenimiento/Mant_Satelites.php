<div id="DIV_Mant_Satelites" name="DIV_Mant_Satelites">

    <div class="container-fluid Contenedor_Principal">
        <div class="row">
            <div class="col-12">
                <div class="card rounded p-4">
                    <div class="card-header rounded text-center p-4">
                        <h4 class="mb-0 text-white">Satélites del CINDEA</h4>
                    </div>
                    <div class="card-body">
                        <!-- <h4 class="card-title">Título de la tarjeta</h4> -->
                        <div>
                            <div class="form-group">
                                <button id="BtnNuevo_Mant_Satelite" type="button" class="btn btn-success" data-toggle="modal"><i
                                    class="fa fa-plus"></i> Agregar</button>
                            </div>
                        </div>
                        
                        <div class="table-responsive mt-3">
                            <table id="Tabla_Mant_Satelites" class="table table-striped table-bordered display no-wrap dataTable" style="width:100%">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Satélite</th>
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
<!-- EL MODAL DE MANTENIMIENTO DE SATÉLITES -->
<!-- ============================================================== -->
<div class="modal fade show" id="Modal_Mant_Satelites" tabindex="-1" role="dialog" aria-labelledby="primary-header-modalLabel"
    aria-hidden="true">
    <!-- PARA MODAL LARGO modal-lg -->
    <!-- PARA MODAL AL ANCHO DE LA PAGINA modal-full-width -->
    <!-- PARA MODAL CON SCROLL INLCUIDO modal-dialog-scrollable -->
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header" id="modal-header-agregar-Satelites">
                <h4 class="modal-title text-white" id="modal-title-mant_satelites"></h4>
            </div>
           
            
            <form id="Form_Mant_Satelites" class="needs-validation" novalidate autocomplete="nope">
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="Label_Mant_Id_Satelites" class="col-form-label">ID:</label>
                                <input type="text" style="text-align: center;" class="form-control BordeBlanco-y-Pulsar" id="Txt_Id_Mant_Satelite" maxlength="2" required autocomplete="nope">
                                <div class="valid-feedback">
                                    
                                  </div>
                                  <div class="invalid-feedback">
                                    Digite el ID.
                                  </div>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="form-group">
                                <label for="" class="col-form-label">Nombre del Satélite:</label>
                                <input type="text" class="form-control BordeBlanco-y-Pulsar" id="Txt_Nombre_Mant_Satelite" maxlength="45" required autocomplete="nope">
                                <div class="valid-feedback">
                                    
                                </div>
                                <div class="invalid-feedback">
                                  Digite el nombre.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" id="Btn_Cancelar_Satelite" class="btn btn-danger BordeBlanco-y-Pulsar"
                        data-dismiss="modal">
                        <i class="fas fa-ban"></i>
                        Cancelar</button>
                    <button type="submit" id="Btn_Guardar_Satelite" class="btn btn-success BordeBlanco-y-Pulsar">
                        <i class="fas fa-check"></i>
                        Guardar</button>
                </div>
            </form>


        </div>
    </div>
</div>