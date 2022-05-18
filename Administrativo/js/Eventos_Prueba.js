////VARIABLE PARA ALMACENAR EL CONTENIDO DE LA TABLA////
let tabla; 
///VARIABLE PARA AAMACENAR LA OPCIÓN QUE HARÁ EL CRUD
let opcion_para_CRUD_Tablita;
/// VARIABLE PARA MANTENER EL USUARIO SELECCIONADO ANTES DE EDITAR
let Usuario_a_Editar;
///VARIABLE QUE INDICA LA FILA DE LA TABLA A EDITAR O BORRAR
let fila_tabla_TABLITA;
///VARIABLE PARA DETERMINAR SI ACTUALIZÓ O EDITÓ
let se_inserto_actualizo = false;


let primera_vez_carga = true;

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



$("#btnRecargar").click(function(){
    if(primera_vez_carga == true){
        Recargar_Tabla();
    }else{
        tabla.ajax.reload(null, false);
    }
    
});


//FUNCIÓN QUE AYUDA A RECARGAR UNA TABLA
async function Recargar_Tabla(){
    primera_vez_carga = false;
    //EVENTO POR FETCH API PARA SOLICITAR LOS DATOS
//     let formData = new FormData();  //SE CREA FORMULARIO PARA ENVIAR DATOS
//     formData.append('opcion', 4);//PARA SOLO php
//     await fetch('php/CRUD_Usuario_Desarrollador.php', { 
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
//                 $("#Cuerpo_Tabla_TABLITA").html(""); 
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
                    
//                     $("#Cuerpo_Tabla_TABLITA").append(Contenido_HTML);

//                 });
//            }  
//        })
//        .catch(error => {
//            console.log("Error al ejecutar el fetch VERIFICAR_CONEXION_MYSQ - " + error); 
//        })
    

     tabla = await $('#TABLITA').DataTable({   
        //DESTRUYE LA TABLA PARA VOLVERLA A CONSTRUIR (RELOAD O RECARGAS)
        "destroy": "true",	
	    "ajax":{            
        "url": "php/CRUD_Usuario_Desarrollador.php", 
        "method": 'POST', //usamos el metodo POST
        "data":{'opcion': 4}, //enviamos opcion 4 para que haga un SELECT
        "dataSrc":"",
        
	},

    "columns": [
        { "data": "UsDes_Usuario" },
        { "data": "UsDes_Nombre" },
        { "data": "UsDes_Apellido1" },
        { "data": "UsDes_Apellido2" },
        { "defaultContent": `<div class='text-center'>
                                <div class='btn-group'>
                                    <button class='btn btn-primary btn-rounded btn-sm btnEditar' title='Editar'>
                                        <i class='fas fa-pencil-alt'></i>
                                    </button><button class='btn btn-danger btn-rounded btn-sm btnBorrar' title='Borrar'>
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
                     
        // PARA USAR BOTONES DE EXPORTAR E IMPRIMIR
        dom: 'Bfrtilp',       
        buttons:[ 
            {
                extend:    'excelHtml5',
                text:      '<img class="fas fa-file-excel"></> ',
                titleAttr: 'Exportar a Excel',
                className: 'btn btn-success',
                title: 'NOMBRE DE DOCUMENTO'
            },
            {
                extend:    'pdfHtml5',
                text:      '<i class="fas fa-file-pdf"></i> ',
                titleAttr: 'Exportar a PDF',
                className: 'btn btn-danger',
                title: 'NOMBRE DE DOCUMENTO',
                orientation: 'landscape',
                pageSize: 'LEGAL',
                download: 'open',
                
                alignment: 'center',
                
                messageTop: 'Información en la parte SUPERIOR del documento',
                messageBottom: 'Información en la parte INFERIOR del documento'
            },
            {
                extend:    'print',
                text:      '<i class="fa fa-print"></i> ',
                titleAttr: 'Imprimir',
                className: 'btn btn-info',
                title: 'NOMBRE DE DOCUMENTO'
            },
        ]    
     }); 
}

 //////// APLICA EL CHECK TRUE A TODOS LOS CHECKBOX
 $('#example-select-all').on('click', function(){
    // OBTIENE LAS FILAS DE LAS BÚSQUEDA
    var rows = tabla.rows({ 'search': 'applied' }).nodes();
    // APLICA TRUE A FALSE A TODOS LOS CHECKBOX EN LA TABLA
    $('input[type="checkbox"]', rows).prop('checked', this.checked);
 });

 // EN CADA CAMBIO DE CHEKBOX EN FILAS PONER EN ESTADO INDETERMINADO AL CHECKBOX SUPERIOR
 $('#TABLITA tbody').on('change', 'input[type="checkbox"]', function(){
    // NO ESTA MARCADO EL CHEXKBOX
    if(!this.checked){
       var el = $('#example-select-all').get(0);
       // If "Select all" control is checked and has 'indeterminate' property
       if(el && el.checked && ('indeterminate' in el)){
          // Set visual state of "Select all" control
          // as 'indeterminate'
          el.indeterminate = true;
       }
    }
 });


document.getElementById('btimprimir').addEventListener('click', function(){
   //// RECORRER TABLA POR CADA ELEMENTO///    
    $('#TABLITA tbody tr').each(function () {
        // PREGUNTA SI EL CHECK EN ESA POSICIÓN ESTÁ TRUE
        let check = $(this).find('#'+ $(this).find("td").eq(2).text() +'').is(':checked');
        if (check == true){
            //SI EL CHECK ES TRUE OBTENGO LOS DATOS DE ESA FILA
            let fila = $(this).find("td").eq(0).text();
            let Usuario = $(this).find("td").eq(2).text();
            let nombre = $(this).find("td").eq(4).text();
            let apellido1 = $(this).find("td").eq(5).text();
            let apellido2 = $(this).find("td").eq(6).text();
            console.log("Check en la fila "+ fila +
                        ". Con los siguientes datos: " + `
                        ` + "Usuario: " + Usuario + `
                        ` + "Nombre: " + nombre + `
                        ` + "Primer Apellido: " + apellido1 + `
                        ` + "Segundo Apellido: " + apellido2);
        }           
    });
});


//Editar 
$(document).on("click", ".btnEditar", function(){
 //console.log("VALOR DE OPCION ANTES DE CAMBIAR ES DE: " + opcion);
 opcion_para_CRUD_Tablita = 2;//INDICA QUE ES UN UPDATE

 //	console.log("VALOR DE OPCION DESPUES DE CAMBIAR ES DE: " + opcion);
    fila_tabla_TABLITA = $(this).closest("tr");	
     //let numero_prueba  = parseInt(fila_tabla_TABLITA.find('td:eq(0)').text()); //CAPTURO DATO Y LOS TRANFORMO EN ENTERO	            
     let usuario = fila_tabla_TABLITA.find('td:eq(0)').text();
     let nombre = fila_tabla_TABLITA.find('td:eq(1)').text();
     let apellido1 = fila_tabla_TABLITA.find('td:eq(2)').text();
     let apellido2 = fila_tabla_TABLITA.find('td:eq(3)').text();

     $("#Txt_username").val(usuario);
     $("#Txt_first_name").val(nombre);
     $("#Txt_last_name1").val(apellido1);
     $("#Txt_last_name2").val(apellido2);
    
     //VARIABLE PARA INDICAR EL USUARIO A MODIFICAR
     Usuario_a_Editar = usuario;

     $(".modal-header").css( "background-color", "rgba(116, 96, 238, 0.5)");
    //  $(".modal-header").css("color", "white" );
     $(".modal-title").text("Editar Usuario");		
     $('#modalCRUD').modal('show');
});


//Borrar
$(document).on("click", ".btnBorrar", function(){
    //GUARDO EL OBJETO EN LA VARIABLE
    fila_tabla_TABLITA = $(this);    
    //ASIGNO A LA VARIABLE EL TEXTO QUE SE ENCUENTRA EN LA COLUMNA USUARIOS Y EN LA FILA DONDE ME ENCUENTRO
    let usuario_a_borrar = $(this).closest('tr').find('td:eq(0)').text() ;		
    opcion_para_CRUD_Tablita = 3; //OPCION ELIMINAR
    
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
        text: "Se eliminará el usuario: " + usuario_a_borrar,
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Eliminar',
        cancelButtonText: 'No, Cancelar',
        reverseButtons: true
    }).then((result) => {
        if (result.value) {

            let formdata = new FormData();
            formdata.append('opcion', opcion_para_CRUD_Tablita);
            formdata.append('Usuario_Seleccionado', usuario_a_borrar);
            fetch('php/CRUD_Usuario_Desarrollador.php', { 
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
                    if(opcion_para_CRUD_Tablita == 3){
                        Mensaje_Notificacion_Success_Toast("El usuario se eliminó correctamente","Borrado",3000);
                        tabla.row(fila_tabla_TABLITA.parents('tr')).remove().draw();  
                    }
                    se_inserto_actualizo=true;
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

$("#btnNuevo").click(function(){
    opcion_para_CRUD_Tablita = 1; //INDICAR QUE ES UN INSERT NUEVO           
    document.getElementById('formUsuarios').reset(); //SE USA PARA LIMPIAR LOS CAMPOS
    //ASIGNA COLOR AL HEADER O ENCABEZADO DEL MODAL
    document.getElementById('modal-header-agregar-usuario').style.backgroundColor = "rgba(26, 214, 11, 0.66)";
   //TÍTULO DEL MODAL
    document.getElementById('modal-title-agregar-usuario').innerText = "Agregar Usuario";
    $('#modalCRUD').modal('show');	//MOSTRAR EL MODAL SOLO CON JQUERY 
    //PONER EL FOCO SOBRE EL CUADRO DE TEXTO THAST QUE ESTÉ CARGADO EL MODAL (600ms DE ESPERA)
    window.setTimeout(function () { 
        document.getElementById('Txt_username').focus(); 
    }, 600);
   
});


$("#btnCancelarModal").click(function(){
		$('#modalCRUD').modal('hide');	
});
	


 //SUBMIT PARA EL
document.getElementById('formUsuarios').addEventListener('submit', function(e){                       
    e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página 
    validar();				     			
});

async function validar(){
    await Insertar_Actualizar();
    if(se_inserto_actualizo == true){
        await Recargar_Tabla();
    }	
}

async function Insertar_Actualizar(){
    //PASARLOS TEXTOS ESCRITOS A VARIABLES
    se_inserto_actualizo=false;
    let usuario = (document.getElementById('Txt_username').value).trim();//QUITA ESPACIOS
    let pass = (document.getElementById('Txt_password').value).trim();//QUITA ESPACIOS
    let nombre = (document.getElementById('Txt_first_name').value).trim().toUpperCase();//QUITA ESPACIO Y AGREGA MAYUSCULAS
    let apellido1 = (document.getElementById('Txt_last_name1').value).trim().toUpperCase();
    let apellido2 = (document.getElementById('Txt_last_name2').value).trim().toUpperCase();

    //VALIDAR ESPACIOS EN BLANCO EN LOS INPUT TXT 
    if (usuario != '' && pass != '' && nombre != '' && apellido1 != '' && apellido2 != ''){
        let formdata = new FormData();
        formdata.append('opcion', opcion_para_CRUD_Tablita);
        formdata.append('username', usuario);
        formdata.append('password', pass);
        formdata.append('first_name', nombre);
        formdata.append('last_name1', apellido1);
        formdata.append('last_name2', apellido2);
        formdata.append('tema', 0);
        formdata.append('Usuario_Seleccionado', Usuario_a_Editar); 
        await fetch('php/CRUD_Usuario_Desarrollador.php', { 
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
                if(opcion_para_CRUD_Tablita == 2){
                    Mensaje_Notificacion_Success_Toast("El usuario se editó correctamente","Editado",2500);
                }else if(opcion_para_CRUD_Tablita == 1){
                    Mensaje_Notificacion_Success_Toast("El usuario se guardó correctamente","Guardado",2500);
                };
                se_inserto_actualizo=true;
            }
        })
        .catch(error => {
            console.log("Error al ejecutar el fetch CRUD Usuarios Desarrolladores - " + error); 
        })             
        $('#modalCRUD').modal('hide');		
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
   
    

