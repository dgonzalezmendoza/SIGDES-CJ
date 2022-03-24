////VARIABLE PARA ALMACENAR EL CONTENIDO DE LA tabla2////
let tabla2; 
///VARIABLE PARA AAMACENAR LA OPCIÓN QUE HARÁ EL CRUD
let opcion_para_CRUD_Tablita2;
/// VARIABLE PARA MANTENER EL USUARIO SELECCIONADO ANTES DE EDITAR
let Id_a_Editar;
///VARIABLE QUE INDICA LA FILA DE LA tabla2 A EDITAR O BORRAR
let fila_tabla2_TABLITA;
///VARIABLE PARA DETERMINAR SI ACTUALIZÓ O EDITÓ
let se_inserto_actualizo_tabla2 = false;

let MiRow;

let primera_vez_carga_2 = true;

	////////////////////////MENSAJES NOTIFICACIÓN TIPO TOAST EN PANTALLA///////////////////////////////////
	//////////////////////NOTIFICACIÓN DE COLOR VERDE (CORRECTO-SUCCESS)//////////////////////////////
	function Mensaje_Notificacion_Success_Toast (mensaje,titulo_mensaje,tiempo_en_pantalla){
		toastr.success(mensaje, titulo_mensaje, 
            { 
                "positionClass": "toastr toast-bottom-right", //POSICION EN LA PANTALLA
                "closeButton": true, //SI TIENE BOTÓN DE CERRAR
                "debug": false, //SI ES UN TEST
                "newestOnTop": false, //UN NUEVO MENSAJE VA ARRIBA
                "progressBar": true, //SI TIENE PROGRESSBAR
                "preventDuplicates": false, //PREVIENE EL MENSAJE DUPLICADO
                "onclick": null, //EVENTO CLICK SOBRE EL MENSAJE
               
                "hideDuration": "1000", //TIEMPO QUE DURARÁ AL ESCONDERSE
                "timeOut": tiempo_en_pantalla, //TIEMPO EN PANTALLA EN MILISEGUNDOS
               
                "showEasing": "swing", //TIPOS Y FORMAS DE ENTRADA EN LA PANTALLA
                "hideEasing": "linear",
                "showMethod": "slideDown",
                "hideMethod": "slideUp" });
	} 
	//////////////////////NOTIFICACIÓN DE COLOR AMARILLO (PREVENCIÓN-PELIGRO)/////////////////////
	function Mensaje_Notificacion_Warning_Toast (mensaje,titulo_mensaje,tiempo_en_pantalla){
		toastr.warning(mensaje, titulo_mensaje, 
            { 
                "positionClass": "toastr toast-bottom-right", //POSICION EN LA PANTALLA
                "closeButton": true, //SI TIENE BOTÓN DE CERRAR
                "debug": false, //SI ES UN TEST
                "newestOnTop": false, //UN NUEVO MENSAJE VA ARRIBA
                "progressBar": true, //SI TIENE PROGRESSBAR
                "preventDuplicates": false, //PREVIENE EL MENSAJE DUPLICADO
                "onclick": null, //EVENTO CLICK SOBRE EL MENSAJE
               
                "hideDuration": "1000", //TIEMPO QUE DURARÁ AL ESCONDERSE
                "timeOut": tiempo_en_pantalla, //TIEMPO EN PANTALLA EN MILISEGUNDOS
               
                "showEasing": "swing", //TIPOS Y FORMAS DE ENTRADA EN LA PANTALLA
                "hideEasing": "linear",
                "showMethod": "slideDown",
                "hideMethod": "slideUp" });
	}
	//////////////////////NOTIFICACIÓN DE COLOR ROJO (ERROR)//////////////////////////////
	function Mensaje_Notificacion_Error_Toast (mensaje,titulo_mensaje,tiempo_en_pantalla){
		toastr.error(mensaje, titulo_mensaje, 
            { 
                "positionClass": "toastr toast-bottom-right", //POSICION EN LA PANTALLA
                "closeButton": true, //SI TIENE BOTÓN DE CERRAR
                "debug": false, //SI ES UN TEST
                "newestOnTop": false, //UN NUEVO MENSAJE VA ARRIBA
                "progressBar": true, //SI TIENE PROGRESSBAR
                "preventDuplicates": false, //PREVIENE EL MENSAJE DUPLICADO
                "onclick": null, //EVENTO CLICK SOBRE EL MENSAJE
               
                "hideDuration": "1000", //TIEMPO QUE DURARÁ AL ESCONDERSE
                "timeOut": tiempo_en_pantalla, //TIEMPO EN PANTALLA EN MILISEGUNDOS
               
                "showEasing": "swing", //TIPOS Y FORMAS DE ENTRADA EN LA PANTALLA
                "hideEasing": "linear",
                "showMethod": "slideDown",
                "hideMethod": "slideUp" });
	}
	/////////////////////FUNCIONES QUE SE EJECUTAN AL INICIAR LA APP O EN ALGÚN MOMENTO//////////////////
	/////////////NOTIFICACIÓN TOAST DE PÉRDICA DE CONEXIÓN MYSQL Y BORRA CONTROLES DE PANTALLA///////
	function NOTIFICA_PERDIDA_DE_CONEXION_A_BD(){
		document.querySelector('#Aside_Left_SideBar').remove();//ELIMINA EL MENÚ LATERAL
		document.querySelector('#Contenido_Pagina').remove();//ELIMINA EL DASHBOARD PRINCIPAL
		document.querySelector('#Perfil_en_barra_superior').remove();//ELIMINA EL ACCESO AL PERFIL EN LA BARRA SUPERIOR
		Mensaje_Notificacion_Error_Toast('Se ha interrumpido la conexión con la Base de Datos. Cierre la sesión e inténtelo más tarde. Comuníquese con el administrador.',
										'Conexión interrumpida',
										15000);
	}



$("#btnRecargar2").click(function(){
    if(primera_vez_carga_2 == true){
        Recargar_tabla2();
    }else{
        tabla2.ajax.reload(null, false);
    }
    
});


//FUNCIÓN QUE AYUDA A RECARGAR UNA tabla2
async function Recargar_tabla2(){
    primera_vez_carga_2 = false;
    //EVENTO POR FETCH API PARA SOLICITAR LOS DATOS
//     let formData = new FormData();  //SE CREA FORMULARIO PARA ENVIAR DATOS
//     formData.append('opcion', 4);//PARA SOLO CONSULTAS
//     await fetch('Consultas/CRUD_Usuario_Desarrollador.php', { 
//         method: "POST",
//         body: formData //SE PASAN LOS PARÁMETROS AL CUERPO DEL MENSAJE DE ENVÍO
//    }) 
//        .then(respuesta => {
//            if (respuesta.ok){
//                return respuesta.text(); //RESPUESTA TIPO TEXTO
//            }else{
//                throw new error_Php('No se puede acceder al PHP');
//            }	 
//        })
//        .then(datos => {
//            if (datos.substring(0,21) == "NO SE CONECTÓ A LA BD") {
//                console.log(datos);
//                NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
//            }else if(datos.substring(0,14) == "ERROR BACK-END"){
//                 Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
//                                                 'Error de acción',5000)
//                 console.log(datos);
//             }else{
//                 $("#Cuerpo_tabla2_TABLITA").html(""); 
//                 console.log(JSON.parse(datos));
//                 $.each(JSON.parse(datos), function(fila, registro)
//                 {     //COLUMNAS DEL DATATABLE//
//                     console.log(fila+1);
//                     let Contenido_HTML = `
//                         <tr>
//                             <td>${(fila+1)}</td>
//                             <td><input type="checkbox" class="CheckBox_Usuarios" id="${registro.UsDes_Usuario}"></td>
//                             <td>${registro.UsDes_Usuario}</td>
//                             <td>${registro.UsDes_Clave}</td>
//                             <td>${registro.UsDes_Nombre}</td>
//                             <td>${registro.UsDes_Apellido1}</td>
//                             <td>${registro.UsDes_Apellido2}</td>
//                             <td>
//                                 <div class='text-center'>
//                                     <div class='btn-group'>
//                                         <button class='btn btn-primary btnEditar' title='Editar' id='Btn-Editar-Usuarios-Admin'>
//                                             <i class='fas fa-pencil-alt'></i>
//                                         </button>
//                                         <button class='btn btn-danger btnBorrar' title='Borrar' id='Btn-Eliminar-Usuarios-Admin'>
//                                             <i class='fas fa-trash-alt'></i>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </td>
//                         </tr>`;
                    
//                     $("#Cuerpo_tabla2_TABLITA").append(Contenido_HTML);

//                 });
//            }  
//        })
//        .catch(error => {
//            console.log("Error al ejecutar el fetch VERIFICAR_CONEXION_MYSQ - " + error); 
//        })
    

     tabla2 = await $('#Tabla_Users').DataTable({   
        //DESTRUYE LA tabla2 PARA VOLVERLA A CONSTRUIR (RELOAD O RECARGAS)
        "destroy": "true",	
	    "ajax":{            
            "url": "Consultas/CRUD_Usuarios2.php", 
            "method": 'POST', //usamos el metodo POST
            "data":{'opcion': 4}, //enviamos opcion 4 para que haga un SELECT
            "dataSrc":"",
        },

        // "select": "true",
        // "select":{
        //     "style": "single"
        // },

        "columns": [
            { "data": "user_id" },
            { "data": "username" },
            { "data": "first_name" },
            { "data": "last_name" },
            { "data": "gender" },
            { "data": "status" },
            { "defaultContent": `<div class='text-center'>
                                    <div class='btn-group'>
                                        <button class='btn btn-primary btn-rounded btn-sm btnEditar2' title='Editar'>
                                            <i class='fas fa-pencil-alt'></i>
                                        </button><button class='btn btn-danger btn-rounded btn-sm btnBorrar2' title='Borrar'>
                                            <i class='fas fa-trash-alt'></i>
                                        </button>
                                    </div>
                                </div>`}
        ],

    //"scrollY": "200px", //TAMAÑO DE ESCROLL
    //"paging": false, //PARA NO PAGINAR LOS REGISTROS

        //PARA USAR EL IDIOMA ESPAÑOL EN EL DATA TABLE
        language: {
            "url": "../dist/js/pages/datatable/Spanish.json"
        },
        // language: {
                
        //         "lengthMenu": "Mostrar _MENU_ registros",
        //         "zeroRecords": "No se encontraron resultados",
        //         "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        //         "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0",
        //         "infoFiltered": "(filtrado de un total de _MAX_ registros)",
        //         "sSearch": "Buscar:",
        //         "oPaginate": {
        //             "sFirst": "Primero",
        //             "sLast":"Último",
        //             "sNext":"Siguiente",
        //             "sPrevious": "Anterior"
        //             },
        //             "sProcessing":"Procesando...",
        //     },
                   
     }); 
}

 //////// APLICA EL CHECK TRUE A TODOS LOS CHECKBOX
//  $('#example-select-all').on('click', function(){
//     // OBTIENE LAS FILAS DE LAS BÚSQUEDA
//     var rows = tabla2.rows({ 'search': 'applied' }).nodes();
//     // APLICA TRUE A FALSE A TODOS LOS CHECKBOX EN LA tabla2
//     $('input[type="checkbox"]', rows).prop('checked', this.checked);
//  });


 // EN CADA CAMBIO DE CHEKBOX EN FILAS PONER EN ESTADO INDETERMINADO AL CHECKBOX SUPERIOR
//  $('#TABLITA tbody').on('change', 'input[type="checkbox"]', function(){
//     // NO ESTA MARCADO EL CHEXKBOX
//     if(!this.checked){
//        var el = $('#example-select-all').get(0);
//        // If "Select all" control is checked and has 'indeterminate' property
//        if(el && el.checked && ('indeterminate' in el)){
//           // Set visual state of "Select all" control
//           // as 'indeterminate'
//           el.indeterminate = true;
//        }
//     }
//  });


document.getElementById('btimprimir2').addEventListener('click', function(){
    console.log(tabla2.rows().count()+1);
    
   //// RECORRER tabla2 POR CADA ELEMENTO///    
    // $('#Tabla_Users tbody tr').each(function () {
    //     // PREGUNTA SI EL CHECK EN ESA POSICIÓN ESTÁ TRUE
    //     let check = $(this).find('#'+ $(this).find("td").eq(2).text() +'').is(':checked');
    //     if (check == true){
    //         //SI EL CHECK ES TRUE OBTENGO LOS DATOS DE ESA FILA
    //         let fila = $(this).find("td").eq(0).text();
    //         let Usuario = $(this).find("td").eq(2).text();
    //         let nombre = $(this).find("td").eq(4).text();
    //         let apellido1 = $(this).find("td").eq(5).text();
    //         let apellido2 = $(this).find("td").eq(6).text();
    //         console.log("Check en la fila "+ fila +
    //                     ". Con los siguientes datos: " + `
    //                     ` + "Usuario: " + Usuario + `
    //                     ` + "Nombre: " + nombre + `
    //                     ` + "Primer Apellido: " + apellido1 + `
    //                     ` + "Segundo Apellido: " + apellido2);
    //     }           
    // });
});


//Editar 
$(document).on("click", ".btnEditar2", function(){
    //console.log("VALOR DE OPCION ANTES DE CAMBIAR ES DE: " + opcion);
    opcion_para_CRUD_Tablita2 = 2;//INDICA QUE ES UN UPDATE
    //CAPTURAR EL NUMERO DE FILA DEL CLICK
    MiRow = tabla2.row($(this).closest('tr')).index(); 
    ///////////// tabla2.cell(5,2).data()  === CON ESTO OBTENGO LOS DATOS DE UNA CELDA /////
    fila_tabla2_TABLITA = $(this).closest("tr");	
    
    document.getElementById('formUsuarios2').reset(); //SE USA PARA LIMPIAR LOS CAMPOS
     //let numero_prueba  = parseInt(fila_tabla2_TABLITA.find('td:eq(0)').text()); //CAPTURO DATO Y LOS TRANFORMO EN ENTERO	            
     let Id = parseInt(fila_tabla2_TABLITA.find('td:eq(0)').text());
     let usuario = fila_tabla2_TABLITA.find('td:eq(1)').text();
     let nombre = fila_tabla2_TABLITA.find('td:eq(2)').text();
     let apellidos = fila_tabla2_TABLITA.find('td:eq(3)').text();
     let genero = fila_tabla2_TABLITA.find('td:eq(4)').text();
     let estado = fila_tabla2_TABLITA.find('td:eq(5)').text();
     

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
    opcion_para_CRUD_Tablita2 = 3; //OPCION ELIMINAR
    
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
            formdata.append('opcion', opcion_para_CRUD_Tablita2);
            formdata.append('Usuario_Seleccionado', Id_Usuario_Eliminar);
            fetch('Consultas/CRUD_Usuarios2.php', { 
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
                    if(opcion_para_CRUD_Tablita2 == 3){
                        Mensaje_Notificacion_Success_Toast("El usuario se eliminó correctamente","Borrado",3000);
                        tabla2.row(clase_del_boton.parents('tr')).remove().draw();  
                    }
                    se_inserto_actualizo_tabla2=true;
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
    opcion_para_CRUD_Tablita2 = 1; //INDICAR QUE ES UN INSERT NUEVO           
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
    se_inserto_actualizo_tabla2=false;
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
        formdata.append('opcion', opcion_para_CRUD_Tablita2);
        formdata.append('Usuario_Seleccionado', Id_a_Editar); 
        await fetch('Consultas/CRUD_Usuarios2.php', { 
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
                if(opcion_para_CRUD_Tablita2 == 2){
                    Mensaje_Notificacion_Success_Toast("El usuario se editó correctamente","Editado",2500);
                    /////////////////////////////////////////////////////////////////////////////////////////////
                    /////////////// AGREGADO DE VALORES EDITADOS A LOS CAMPOS EN LA FILA Y CELDAS INICIALES /////
                    tabla2.cell(MiRow,1).data(usuario).draw();
                    tabla2.cell(MiRow,2).data(nombre).draw();
                    tabla2.cell(MiRow,3).data(apellidos).draw();
                    tabla2.cell(MiRow,4).data(genero).draw();
                    tabla2.cell(MiRow,5).data(estado).draw();
                    ////////////////////////////////////////////////////////////////////////////////////////////
                    ////////////////////////////////////////////////////////////////////////////////////////////
                }else if(opcion_para_CRUD_Tablita2 == 1){
                    Mensaje_Notificacion_Success_Toast("El usuario se guardó correctamente","Guardado",2500);
                    ////////////////////////////////////////////////////////////////////////////////////////////
                    ///// AGREGO VALORES NUEVOS A LA FILA CORRESPONDIENTE ///////////////////////////////////
                    tabla2.row.add({
                        "user_id": tabla2.rows().count()+1, // +1 PARA EL SIGUIENTE ID
                        "username": usuario,
                        "first_name": nombre,
                        "last_name": apellidos,
                        "gender": genero,
                        "status": estado
                    }).draw();
                    //////////////////////////////////////////////////////////////////////////////////////////
                    //////////////////////////////////////////////////////////////////////////////////////////
                };
                se_inserto_actualizo_tabla2=true;
            }
        })
        .catch(error => {
            console.log("Error al ejecutar el fetch CRUD Usuarios Desarrolladores - " + error); 
        })             
        
    }   
};


   //EL FUNCIONAMIENTO DE VALIDACIONES PREPARADO AL CARGAR EL DOCUMENTO
window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
}, false);
   