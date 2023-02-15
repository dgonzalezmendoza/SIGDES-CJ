////VARIABLE PARA ALMACENAR EL CONTENIDO DE LA tabla2////
let tabla2; 


let primera_vez_carga_2 = true;

	


$("#btnRecargar2").click(function(){
    if(primera_vez_carga_2 == true){
        Recargar_tabla2();
    }else{
        tabla2.ajax.reload(null, false);
    }
    
});



//FUNCIÓN QUE AYUDA A RECARGAR UNA tabla2
function Recargar_tabla2(){
    if(primera_vez_carga_2){
        primera_vez_carga_2 = false;
        tabla2 = $('#Tabla_Users').DataTable({   
            destroy:true,	
            processing: true,
            serverSide: true,
            ajax: {
                url: 'php/Server_Side_Usuarios.php',
                error: function (jqXHR, exception, error) {
                    console.log('Error status: ' + jqXHR.status);
                    console.log('Exception: ' + exception);
                    console.log('Error message: ' + error);}
            },
            columnDefs: [{"defaultContent": `<div class='text-center'>
                                            <div class='btn-group'>
                                                <button class='btn btn-primary btn-rounded btn-sm btnEditar2' title='Editar'>
                                                    <i class='fas fa-pencil-alt'></i>
                                                    Editar
                                                </button><button class='btn btn-danger btn-rounded btn-sm btnBorrar2' title='Borrar'>
                                                    <i class='fas fa-trash-alt'></i>
                                                    Eliminar
                                                </button>
                                            </div>
                                        </div>`, "targets": [6]}],
            dom: 'lrtip', //DESAPARECE EL INPUT O CAJA DE BÚSQUEDA ORIGINAL DEL DATATABLE
            paging: true, //PARA NO PAGINAR LOS REGISTROS
            bFilter: true, // DESACTIVAR FILTRO DE BÚSQUEDA
            bInfo: true, //DESACTIVAR INFORMACIÓN DE LA TABLA
            language: {
                url: "../dist/js/pages/datatable/Spanish.json"
            }	
        }); 
    }else{
        tabla2.ajax.reload(null, false);
    }
}


document.getElementById('btimprimir2').addEventListener('click', function(){
    console.log(tabla2.rows().count()+1);
});


//Editar 
$(document).on("click", ".btnEditar2", function(){
    //console.log("VALOR DE OPCION ANTES DE CAMBIAR ES DE: " + opcion);
    opcion_para_CRUD = 2;//INDICA QUE ES UN UPDATE
    //CAPTURAR EL NUMERO DE FILA DEL CLICK
    Index_de_Fila = tabla2.row($(this).closest('tr')).index(); 
    ///////////// tabla2.cell(5,2).data()  === CON ESTO OBTENGO LOS DATOS DE UNA CELDA /////
    Informacion_Fila = $(this).closest("tr");	
    
    document.getElementById('formUsuarios2').reset(); //SE USA PARA LIMPIAR LOS CAMPOS
     //let numero_prueba  = parseInt(Informacion_Fila.find('td:eq(0)').text()); //CAPTURO DATO Y LOS TRANFORMO EN ENTERO	            
     let Id = parseInt(Informacion_Fila.find('td:eq(0)').text());
     let usuario = Informacion_Fila.find('td:eq(1)').text();
     let nombre = Informacion_Fila.find('td:eq(2)').text();
     let apellidos = Informacion_Fila.find('td:eq(3)').text();
     let genero = Informacion_Fila.find('td:eq(4)').text();
     let estado = Informacion_Fila.find('td:eq(5)').text();
     

     $("#Txt_username2").val(usuario);
     $("#Txt_first_name2").val(nombre);
     $("#Txt_last_name").val(apellidos);
     $("#Txt_Genero2").val(genero);
     $("#Txt_status2").val(estado);
    
     // VARIABLE PARA INDICAR ID DEL USUARIO A MODIFICAR
     Id_a_Editar = Id;

     // COLOR DEL HEADER DEL MODAL
     document.getElementById('modal-header-agregar-usuario2').style.backgroundColor = "rgba(116, 96, 238, 0.5)";
    // TITULO DEL MODAL
    document.getElementById('modal-title-agregar-usuario2').innerText = "Editar Usuario";	
     // MOSTRAR EL MODAL
     $('#Modal_CRUD_Users2').modal('show');

     // PONER EL FOCO DESPUES DE MEDIO SEGUNDO EN EL CAMPO ASIGNADO
     window.setTimeout(function () { 
        document.getElementById('Txt_username2').focus(); 
    }, 600);
});


// Borrar
$(document).on("click", ".btnBorrar2", function(){
    //GUARDO EL OBJETO EN LA VARIABLE
  
    let clase_del_boton = $(this);   
    //ASIGNO A LA VARIABLE EL TEXTO QUE SE ENCUENTRA EN LA COLUMNA USUARIOS Y EN LA FILA DONDE ME ENCUENTRO
    let Id_Usuario_Eliminar = parseInt(clase_del_boton.closest('tr').find('td:eq(0)').text()) ;	
    let Nombre_Usuario_Eliminar = clase_del_boton.closest('tr').find('td:eq(1)').text()
    opcion_para_CRUD = 3; //OPCION ELIMINAR
    
    //USO DEL SWEET ALERT PARA LOS DIALOGOS DE CONFIRMACIÓN
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'mr-2 btn btn-danger'
        },
        buttonsStyling: false,
    })

    swalWithBootstrapButtons.fire({
        title: 'Esta seguro?',
        text: "Se eliminará el usuario: " + Nombre_Usuario_Eliminar,
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Eliminar',
        cancelButtonText: 'No, Cancelar',
        reverseButtons: true
    }).then((result) => {
        if (result.value) {

            let formdata = new FormData();
            formdata.append('opcion', opcion_para_CRUD);
            formdata.append('Usuario_Seleccionado', Id_Usuario_Eliminar);
            fetch('php/CRUD_Usuarios2.php', { 
                method: "POST",
                body: formdata
            }) 
            .then(respuesta => {
                if (respuesta.ok){ 
                    return respuesta.text(); //RESPUESTA TIPO TEXTO
                }else{
                    throw new error_Php('No se puede acceder al PHP');
                }	 
            })
            .then(datos => {
                if (datos.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                    NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
                }else if(datos.substring(0,14) == "ERROR BACK-END"){
                    Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                    'Error de acción',5000)
                    console.log(datos);
                }else{
                    if(opcion_para_CRUD == 3){
                        Mensaje_Notificacion_Success_Toast("El usuario se eliminó correctamente","Borrado",3000);
                        tabla2.row(clase_del_boton.parents('tr')).remove().draw();  
                    }
                    Se_inserto_actualizo=true;
                }
            })
            .catch(error => {
                console.log("Error al ejecutar el fetch CRUD Usuarios Desarrolladores - " + error); 
            })

        } else if (
            // Read more about handling dismissals
            result.dismiss === Swal.DismissReason.cancel
        ) {
            // swalWithBootstrapButtons.fire(
            //     'Cancelled',
            //     'Your imaginary file is safe :)',
            //     'error'
            // )
        }
    }) 
});


document.getElementById('btnNuevo2').addEventListener('click', function () {
    opcion_para_CRUD = 1; //INDICAR QUE ES UN INSERT NUEVO           
    document.getElementById('formUsuarios2').reset(); //SE USA PARA LIMPIAR LOS CAMPOS
    //ASIGNA COLOR AL HEADER O ENCABEZADO DEL MODAL
    document.getElementById('modal-header-agregar-usuario2').style.backgroundColor = "rgba(26, 214, 11, 0.66)";
   //TÍTULO DEL MODAL
    document.getElementById('modal-title-agregar-usuario2').innerText = "Agregar Usuario";
    $('#Modal_CRUD_Users2').modal('show');	//MOSTRAR EL MODAL SOLO CON JQUERY 

    //PONER EL FOCO SOBRE EL CUADRO DE TEXTO THAST QUE ESTÉ CARGADO EL MODAL (600ms DE ESPERA)
    window.setTimeout(function () { 
        document.getElementById('Txt_username2').focus(); 
    }, 600);
});

///BOTÓN PARA CANCELAR EL MODAL
document.getElementById('btnCancelarModal2').addEventListener('click', function () {
		$('#Modal_CRUD_Users2').modal('hide');	
});

 //SUBMIT PARA EL
document.getElementById('formUsuarios2').addEventListener('submit', function(e){                       
    e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página 
    Insertar_Actualizar_tabla2();
    // await Recargar_tabla2();
});




$('#botonetes').click( function () {
    tabla2.row('.selected').remove().draw( false );
} );


async function Insertar_Actualizar_tabla2(){
    //PASARLOS TEXTOS ESCRITOS A VARIABLES
    Se_inserto_actualizo=false;
    let usuario = (document.getElementById('Txt_username2').value).trim();//QUITA ESPACIOS
    let nombre = (document.getElementById('Txt_first_name2').value).trim().toUpperCase();//QUITA ESPACIO Y AGREGA MAYUSCULAS
    let apellidos = (document.getElementById('Txt_last_name').value).trim().toUpperCase();
    let genero = (document.getElementById('Txt_Genero2').value).trim().toUpperCase();//QUITA ESPACIOS
    let contrasena = (document.getElementById('Txt_password2').value).trim();//QUITA ESPACIOS
    let estado = (document.getElementById('Txt_status2').value).trim();

    //VALIDAR ESPACIOS EN BLANCO EN LOS INPUT TXT 
    if (usuario != '' && nombre != '' && contrasena != '' && apellidos != '' && genero != '' && estado != ''){
        let formdata = new FormData();
        formdata.append('username', usuario);
        formdata.append('first_name', nombre);
        formdata.append('last_name', apellidos);
        formdata.append('Gender', genero);
        formdata.append('password', contrasena);
        formdata.append('Status', estado);
        formdata.append('opcion', opcion_para_CRUD);
        formdata.append('Usuario_Seleccionado', Id_a_Editar); 
        await fetch('php/CRUD_Usuarios2.php', { 
            method: "POST",
            body: formdata
        }) 
        .then(respuesta => {
            if (respuesta.ok){ 
                return respuesta.text(); //RESPUESTA TIPO TEXTO
            }else{
                throw new error_Php('No se puede acceder al PHP');
            }	 
        })
        .then(datos => {
            $('#Modal_CRUD_Users2').modal('hide');
            if (datos.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
            }else if(datos.substring(0,14) == "ERROR BACK-END"){
                Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                'Error de acción',5000)
                console.log(datos);
            }else{
                if(opcion_para_CRUD == 2){
                    Mensaje_Notificacion_Success_Toast("El usuario se editó correctamente","Editado",2500);
                    /////////////////////////////////////////////////////////////////////////////////////////////
                    /////////////// AGREGADO DE VALORES EDITADOS A LOS CAMPOS EN LA FILA Y CELDAS INICIALES /////
                    // tabla2.cell(Index_de_Fila,1).data(usuario).draw();
                    // tabla2.cell(Index_de_Fila,2).data(nombre).draw();
                    // tabla2.cell(Index_de_Fila,3).data(apellidos).draw();
                    // tabla2.cell(Index_de_Fila,4).data(genero).draw();
                    // tabla2.cell(Index_de_Fila,5).data(estado).draw();
                    tabla2.ajax.reload(null, false);
                    ////////////////////////////////////////////////////////////////////////////////////////////
                    ////////////////////////////////////////////////////////////////////////////////////////////
                }else if(opcion_para_CRUD == 1){
                    Mensaje_Notificacion_Success_Toast("El usuario se guardó correctamente","Guardado",2500);
                    ////////////////////////////////////////////////////////////////////////////////////////////
                    ///// AGREGO VALORES NUEVOS A LA FILA CORRESPONDIENTE ///////////////////////////////////
                    // tabla2.row.add({
                    //     "user_id": tabla2.rows().count()+1, // +1 PARA EL SIGUIENTE ID
                    //     "username": usuario,
                    //     "first_name": nombre,
                    //     "last_name": apellidos,
                    //     "gender": genero,
                    //     "status": estado
                    // }).draw();
                    tabla2.ajax.reload(null, false);
                    //////////////////////////////////////////////////////////////////////////////////////////
                    //////////////////////////////////////////////////////////////////////////////////////////
                };
                Se_inserto_actualizo=true;
            }
        })
        .catch(error => {
            console.log("Error al ejecutar el fetch CRUD Usuarios Desarrolladores - " + error); 
        })             
        
    }   
};

document.getElementById('btnfiltrartabla').addEventListener('click', function () {
    tabla2.column(0).search('445502').draw();

  });
  document.getElementById('btnlimpiaryrecargar').addEventListener('click', function () {
    tabla2.destroy();
    primera_vez_carga_2 = true;
    Recargar_tabla2();

  });
   
  
   