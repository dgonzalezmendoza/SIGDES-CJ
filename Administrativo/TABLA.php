
<?php
   include 'Ad_2_Menu_SideBar.php';   
?>

<div class="page-wrapper" name="Contenido_Pagina" id="Contenido_Pagina">

<div class="container-fluid">

<div class="row">
    <div class="col-12">
        <div class="card">
            <div class="border-bottom title-part-padding">
                <h4 class="card-title mb-0">Tabla de datos</h4>
            </div>

            <div class="card-body">
                <div class="table-responsive">

                    <!-- STRIPED ES EL EFECTO CEBRA, Y BORDE DE TABLA -->
                    <table id="TABLITA" class="table table-striped table-bordered display">

                        <div class="col-lg-12">
                            <button id="btnNuevo" type="button" class="btn btn-success"
                                data-toggle="modal"><i class="fa fa-plus"></i> Agregar</button>
                        </div>
                        <br>

                        <thead class="text-center">
                            <tr>
                                <th>ID</th>
                                <th>Usuario</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Genero</th>
                                <th>Password</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                       

                            <!-- AQUÍ SE CARGAN LOS DATOS DE LA TABLA -->

                       


                        <tfoot class="text-center">
                            <tr>
                                <th>ID</th>
                                <th>Usuario</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Genero</th>
                                <th>Password</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>


</div>




<!-- ============================================================== -->
<!-- EL MODAL DEL CRUD -->
<!-- ============================================================== -->
<div class="modal fade show" id="modalCRUD" tabindex="-1" role="dialog"
aria-labelledby="primary-header-modalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title" id="exampleModalLabel"></h4>
            <!-- <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close"><span
                    aria-hidden="true">&times;</span>
            </button> -->
        </div>
        <form id="formUsuarios">
            <div class="modal-body">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="" class="col-form-label">Usuario:</label>
                            <input type="text" class="form-control" id="Txt_username">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="" class="col-form-label">Nombre</label>
                            <input type="text" class="form-control" id="Txt_first_name">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="" class="col-form-label">Apellidos</label>
                            <input type="text" class="form-control" id="Txt_last_name">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="" class="col-form-label">Genero</label>
                            <input type="text" class="form-control" id="Txt_gender">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-9">
                        <div class="form-group">
                            <label for="" class="col-form-label">Contraseña</label>
                            <input type="text" class="form-control" id="Txt_password">
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="form-group">
                            <label for="" class="col-form-label">Estatus</label>
                            <input type="number" class="form-control" id="Txt_status">
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





            <?php
                include 'Ad_3_Footer.php';   
            ?>




</div>
<!-- ============================================================== -->
<!-- FIN DEL Page wrapper  -->
<!-- ============================================================== -->






<?php
   include 'Ad_4_Javascript.php';   
?>
