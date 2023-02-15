<div id="DIV_LISTA_ESTUDIANTES" name="DIV_LISTA_ESTUDIANTES">
    <!-- ============================================================== -->
    <!-- Container fluid  -->
    <!-- ============================================================== -->
    <div class="container-fluid Contenedor_Principal">

        <!-- Row -->
        <div class="row">
            <div class="col-12">
                <div class="card rounded p-4">
                    <div class="card-header rounded text-center p-4">
                        <h4 class="mb-0 text-white">Información de estudiantes</h4>
                    </div>
                    <div class="card-body">
                        <!-- <h4 class="card-title">Título de la tarjeta</h4> -->
                        <form id="Frm_Parametros_Colegio" class="needs-validation" novalidate autocomplete="nope">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="card-body">
                                             <div class="row">
                                                <div class="col-lg-3">
                                                    <div class="form-group">
                                                        <h6>
                                                            <label for="Est_Cedula" class="col-form-label">Cédula: 
                                                                <input id="checkbox_Est_Extranjero" type="checkbox">
                                                                <label for="checkbox_Est_Extranjero"> (Extranjero)  </label>
                                                            </label>
                                                        </h6>
                                                       
                                                        <input type="text" class="form-control BordeBlanco-y-Pulsar text-center cedula-inputmask"
                                                            id="Txt_Est_Cédula_Nacional" autocomplete="nope"  im-insert="true" placeholder="_ ____ ____">
                                                        <input type="text" class="form-control BordeBlanco-y-Pulsar text-center text-uppercase"
                                                            id="Txt_Est_Cédula_Extranjero" autocomplete="nope" style="display:none;" 
                                                            maxlength="30">
                                                        <div class="valid-feedback">
                                                        </div>
                                                        <div class="invalid-feedback">
                                                            Digite la cédula.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <h6><label for="" class="col-form-label">Nombre:</label></h6>
                                                        <input type="text" class="form-control BordeBlanco-y-Pulsar 
                                                            text-center text-uppercase"
                                                            id="Txt_Est_Nombre" required autocomplete="nope"
                                                            maxlength="100">
                                                        <div class="valid-feedback">
                                                        </div>
                                                        <div class="invalid-feedback">
                                                            Digite el nombre.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <h6><label for="" class="col-form-label">Primer Apellido:</label></h6>
                                                        <input type="text" class="form-control BordeBlanco-y-Pulsar 
                                                            text-center text-uppercase"
                                                            id="Txt_Est_Primer_Apellido" required autocomplete="nope"
                                                            maxlength="100">
                                                        <div class="valid-feedback">
                                                        </div>
                                                        <div class="invalid-feedback">
                                                            Digite el primer apellido.
                                                        </div>
                                                    </div>
                                                </div>    
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <h6><label for="" class="col-form-label">Segundo Apellido:</label></h6>
                                                        <input type="text" class="form-control BordeBlanco-y-Pulsar 
                                                            text-center text-uppercase"
                                                            id="Txt_Est_Segundo_Apellido" required autocomplete="nope"
                                                            maxlength="100">
                                                        <div class="valid-feedback">
                                                        </div>
                                                        <div class="invalid-feedback">
                                                            Digite el segundo apellido.
                                                        </div>
                                                    </div>
                                                </div> 
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <h6><label for="" class="col-form-label tex">Nacionalidad:</label></h6>
                                                        <select id="Select_Est_Nacionalidad" class="form-control BordeBlanco-y-Pulsar">
                                                            <option>1</option>
                                                            <option selected>2</option>
                                                            <option>3</option>
                                                          </select>
                                                       <!--  <input type="text" class="form-control BordeBlanco-y-Pulsar text-center"
                                                            id="Txt_Est_Nacionalidad" required autocomplete="nope"> -->
                                                        <div class="valid-feedback">
                                                        </div>
                                                        <div class="invalid-feedback">
                                                            Seleccione la nacionalidad.
                                                        </div> 
                                                    </div>
                                                </div>  
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <h6><label for="" class="col-form-label">Nacimiento:</label></h6>
                                                        <input type="text" class="form-control date-inputmask BordeBlanco-y-Pulsar text-center"
                                                            id="Txt_Est_FechaNac" im-insert="true" required autocomplete="nope" placeholder="__/__/____"
                                                            maxlength="100">
                                                        <div class="valid-feedback">
                                                        </div>
                                                        <div class="invalid-feedback">
                                                            Introduzca fecha de nacimiento.
                                                        </div> 
                                                    </div>
                                                </div>  
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <h6><label for="" class="col-form-label">Género:</label></h6>
                                                        <select id="Select_Est_Genero" class="form-control BordeBlanco-y-Pulsar" >
                                                            <option>Femenino</option>
                                                            <option>Masculino</option>
                                                          </select>
                                                       <!--  <input type="text" class="form-control BordeBlanco-y-Pulsar text-center"
                                                            id="Txt_Est_Nacionalidad" required autocomplete="nope"> -->
                                                        <div class="valid-feedback">
                                                        </div>
                                                        <div class="invalid-feedback">
                                                            Seleccione el género.
                                                        </div> 
                                                    </div>
                                                </div>  
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <h6><label for="" class="col-form-label">Ocupación:</label></h6>
                                                        <input type="text" class="form-control BordeBlanco-y-Pulsar text-center"
                                                            id="Txt_Est_Ocupacion" autocomplete="nope"
                                                            maxlength="100">
                                                       <!--  <div class="valid-feedback">
                                                        </div>
                                                        <div class="invalid-feedback">
                                                            Digite la ocupción.
                                                        </div> -->
                                                    </div>
                                                </div>
                                                <div class="col-lg-8">
                                                    <div class="form-group">
                                                        <h6><label for="" class="col-form-label">Información adicional y médica:</label></h6>
                                                        <textarea class="form-control BordeBlanco-y-Pulsar" 
                                                            id="Txt_Est_Informacion_Medica" rows="3" maxlength="300"
                                                            autocomplete="nope"></textarea>
                                                        <!-- <input type="text" class="form-control BordeBlanco-y-Pulsar text-center"
                                                            id="Txt_Est_Informacion_Medica" autocomplete="nope"
                                                            maxlength="150"> -->
                                                      <!--   <div class="valid-feedback">
                                                        </div>
                                                        <div class="invalid-feedback">
                                                            Información médica.
                                                        </div> -->
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <h6><label for="Txt_Est_Correo" class="col-form-label">Correo:</label></h6>
                                                        <input type="email" class="form-control BordeBlanco-y-Pulsar text-center" 
                                                            id="Txt_Est_Correo" aria-describedby="emailHelp" 
                                                            placeholder="___________@_____.com" autocomplete="nope"
                                                            maxlength="100">
                                                       <!--  <input type="text" class="form-control BordeBlanco-y-Pulsar text-center"
                                                            id="Txt_Est_Correo" autocomplete="nope"
                                                            maxlength="100"> -->
                                                        <div class="valid-feedback">
                                                        </div>
                                                        <div class="invalid-feedback">
                                                            Termine de digitar el correo.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <h6><label for="Txt_Est_Telefono1" class="col-form-label">Teléfono 1:</label></h6>
                                                        <input type="text" class="form-control BordeBlanco-y-Pulsar phone-inputmask text-center" 
                                                            id="Txt_Est_Telefono1" 
                                                            placeholder="____ ____" required autocomplete="nope"
                                                            maxlength="15">
                                                        <div class="valid-feedback">
                                                        </div>
                                                        <div class="invalid-feedback">
                                                            Digite al menos un número de teléfono.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <h6><label for="Txt_Est_Telefono1" class="col-form-label">Teléfono 2:</label></h6>
                                                        <input type="text" class="form-control BordeBlanco-y-Pulsar phone-inputmask text-center" 
                                                            id="Txt_Est_Telefono2" 
                                                            placeholder="____ ____" autocomplete="nope"
                                                            maxlength="15">
                                                       <!--  <div class="valid-feedback">
                                                        </div>
                                                        <div class="invalid-feedback">
                                                            Digite al menos el número de teléfono.
                                                        </div> -->
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <h6><label for="" class="col-form-label">Transporte:</label></h6>
                                                        <select id="Select_Est_Transporte" class="form-control BordeBlanco-y-Pulsar">
                                                            <option>Ruta ejemplo 1</option>
                                                            <option>Ruta ejemplo 2</option>
                                                          </select>
                                                       <!--  <input type="text" class="form-control BordeBlanco-y-Pulsar text-center"
                                                            id="Txt_Est_Nacionalidad" required autocomplete="nope"> -->
                                                        <div class="valid-feedback">
                                                        </div>
                                                        <div class="invalid-feedback">
                                                            Seleccione el tipo de transporte.
                                                        </div> 
                                                    </div>
                                                </div>  
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <h6><label for="" class="col-form-label">Adecuación:</label></h6>
                                                        <select id="Select_Est_Adecuacion" class="form-control BordeBlanco-y-Pulsar"
                                                            required>
                                                            <option>Adec ejemplo 1</option>
                                                            <option>Adec ejemplo 2</option>
                                                          </select>
                                                       <!--  <input type="text" class="form-control BordeBlanco-y-Pulsar text-center"
                                                            id="Txt_Est_Nacionalidad" required autocomplete="nope"> -->
                                                        <div class="valid-feedback">
                                                        </div>
                                                        <div class="invalid-feedback">
                                                            Seleccione el tipo de adecuación.
                                                        </div> 
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <h6><label for="" class="col-form-label">Provincia:</label></h6>
                                                        <select id="Select_Est_Provincia" class="form-control BordeBlanco-y-Pulsar"
                                                            required>
                                                            <option>Prov 1</option>
                                                            <option>Prov 2</option>
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
                                                        <h6><label for="" class="col-form-label">Cantón:</label></h6>
                                                        <select id="Select_Est_Canton" class="form-control BordeBlanco-y-Pulsar"
                                                            required>
                                                            <option>Cantón 1</option>
                                                            <option>Cantón 2</option>
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
                                                        <h6><label for="" class="col-form-label">Distrito:</label></h6>
                                                        <select id="Select_Est_Distrito" class="form-control BordeBlanco-y-Pulsar"
                                                            required>
                                                            <option>Distri 1</option>
                                                            <option>Distri 2</option>
                                                          </select>
                                                        <div class="valid-feedback">
                                                        </div>
                                                        <div class="invalid-feedback">
                                                            Seleccione el distrito.
                                                        </div> 
                                                    </div>
                                                </div>    
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <h6><label for="" class="col-form-label">Dirección exacta:</label></h6>
                                                        <textarea class="form-control BordeBlanco-y-Pulsar" 
                                                            id="Txt_Est_Descripcion_Direccion" required autocomplete="nope" 
                                                            rows="3" maxlength="150" minlength="10"></textarea>
                                                        <div class="valid-feedback">
                                                        </div>
                                                        <div class="invalid-feedback">
                                                            Ingresa la dirección exacta de residencia.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body border-top">
                                <div class="Centrar-Contenido">
                                    <button type="submit" id="Btn_ingresar_estudiante"
                                        class="btn btn-success BordeBlanco-y-Pulsar">Guardar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
        <!-- Row -->
    </div>


</div>