<div id="DIV_Ges_Ad_Periodo_Tecnico" name="DIV_Ges_Ad_Periodo_Tecnico">

    <div class="container-fluid Contenedor_Principal">
        <div class="row">
            <div class="col-12">
                <div class="card rounded p-4">
                    <div class="card-header rounded text-center p-4">
                        <h4 class="mb-0 text-white">Periodos lectivos Técnicos</h4>
                    </div>
                    <div class="card-body">
                        
                        <div class="Centrar-Contenido">
                            <div class="form-group">
                                <button id="BtnNuevo_Gest_Ad_Periodo_Aca" type="button" class="btn btn-success" data-toggle="modal"><i
                                    class="fa fa-plus"></i> Agregar nuevo periodo</button>
                            </div>
                        </div>
                        
                        <div class="table-responsive mt-3">
                            <table id="Tabla_Gest_Ad_PerAcademico" class="table table-striped table-bordered display no-wrap dataTable" style="width:100%">
                                <thead>
                                    <tr>
                                        <th>Año</th>
                                        <th>Periodo</th>
                                        <th>Predeterminado</th>
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
<!-- EL MODAL DE MANTENIMIENTO-->
<!-- ============================================================== -->
<div class="modal fade show" id="Modal_GestAd_PerAcademicos" tabindex="-1" role="dialog" aria-labelledby="primary-header-modalLabel"
    aria-hidden="true">
    <!-- PARA MODAL LARGO modal-lg -->
    <!-- PARA MODAL AL ANCHO DE LA PAGINA modal-full-width -->
    <!-- PARA MODAL CON SCROLL INLCUIDO modal-dialog-scrollable -->
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header" id="modal-header-agregar-periodoAcademico">
                <h4 class="modal-title text-white" id="modal-title-mant_periodoAcademico"></h4>
            </div>
           
            
            <form id="Form_GesAd_Periodo_Academico" class="needs-validation" novalidate autocomplete="nope">
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-7">
                            <div class="form-group">
                                <label for="" class="col-form-label">Año:</label>
                                <input type="text" style="text-align: center" class="form-control phone-inputmask BordeBlanco-y-Pulsar" 
                                        id="Txt_Anho_GAd_PeriodoAca" maxlength="4"  required autocomplete="nope">
                                <div class="valid-feedback">
                                    
                                  </div>
                                  <div class="invalid-feedback">
                                    Digite el año lectivo.
                                  </div>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="form-group">
                                <label for="" class="col-form-label">Periodo:</label>
                                <input type="text" style="text-align: center" class="form-control BordeBlanco-y-Pulsar" 
                                        id="Txt_Nombre_GeAd_PeriodoAcademico" maxlength="1" required autocomplete="nope">
                                        <!-- maxlength="1" -->
                                <div class="valid-feedback">
                                    
                                </div>
                                <div class="invalid-feedback">
                                  Digite el periodo del año lectivo.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" id="Btn_Cancelar_Periodo_Lectivo" class="btn btn-danger BordeBlanco-y-Pulsar"
                        data-dismiss="modal">
                        <i class="fas fa-ban"></i>
                        Cancelar</button>
                    <button type="submit" id="Btn_Guardar_Periodo_Lectivo" class="btn btn-success BordeBlanco-y-Pulsar">
                        <i class="fas fa-check"></i>
                        Guardar</button>
                </div>
            </form>


        </div>
    </div>
</div>