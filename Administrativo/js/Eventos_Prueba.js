////VARIABLE PARA ALMACENAR EL CONTENIDO DE LA TABLA////
var tabla; 


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


	///////////////EVENTO DEL BOTON CERRAR SESIÓN/////////////////
    document.getElementById('Btn_Cerrar_Sesion').addEventListener('click', function(){
        fetch('Consultas/Al_Cargar_Pagina/Logout.php', { 
            method: "POST"
        }) 
        .then(respuesta => {
            if (respuesta.ok){
                return respuesta.text(); //RESPUESTA TIPO TEXTO
            }else{
                throw new error_Php('No se puede acceder al PHP');
            }	 
        })
        .then(datos => {
            if (datos.substring(0,14) == "SESION CERRADA") {
                window.location.href = "../Index";
            
            }else if (datos.substring(0,5) == "Error"){
                Mensaje_Notificacion_Error_Toast('Hubo un problema al cerrar sesión, revisar la consola. Llame al administrador.',
                                                'Sesión sin cerrar',6000);
                                                console.log(datos);
            }
        })
        .catch(error => {
            console.log("Error al ejecutar el fetch de CERRAR SESIÓN - " + error); 
        })
    }) 
    
    //////////CON CADA CAMBIO DEL CHECKBOX DE TEMA OSCURO Y CLARO///////////
    document.getElementById('Checkbox_Temas').addEventListener( 'change', function() {	
        if(this.checked) {
            let formData = new FormData();
            formData.append('opcion', 1); //NOMBRE Y VALOR DE PARÁMETROS (1 PARA ACTUALIZAR A TEMA OSCURO)
            fetch('Consultas/Al_Cargar_Pagina/TEMA_OSCURO.php', {
                method: "POST",
                body: formData
            }) 
            .then(respuesta => {
                if (respuesta.ok){
                    return respuesta.text();
                }else{
                    throw new error_Php('No se puede acceder al PHP');
                }
                
            })
            .then(datos => {
                if (datos.substring(1,21) == "SE EJECUTÓ CON ÉXITO") {
                    //AGREGA ATRIBUTO DARK (OSCURO) EN EL BODY DEL HTML// 
                    document.getElementById('BODY').setAttribute('data-theme','dark');
                    //SE AGREGA EL ATRIBUTO SKIN3 (TEMA OSCUDO) A LAS 3 CLASES QUE HAY EN EL HEADER NAVBAR Y EL DIV DEL NAVBAR//
                    document.getElementById('header_topbar').setAttribute('data-navbarbg','skin3');
                    document.getElementById('nav_topbar').setAttribute('data-logobg','skin3');
                    document.getElementById('div_navbar').setAttribute('data-logobg','skin3');
                    //SE AGREGA EL ATRIBUTO SKIN3 (TEMA OSCURO) EN EL ASIDE DEL SIDEBAR//
                    document.getElementById('Aside_Left_SideBar').setAttribute('data-sidebarbg','skin3');
                    //COLOR OSCURO DE LETRA DEL LOGO COLEGIO//
                    document.getElementById('Div_Texto_Logo').classList.remove('text-black')
                    document.getElementById('Div_Texto_Logo').classList.add('text-white');
                }else if (datos.substring(0,21) == "NO SE CONECTÓ A LA BD"){
                    console.log(datos);
                    NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
                }
            
                
            })
            .catch(error => {
                console.log("Error del fetch del CheckBox Temas -" + error);
            })
    
        }else{
            let formData = new FormData();
            formData.append('opcion', 2); //NOMBRE Y VALOR DE PARÁMETROS (2 PARA ACTUALIZAR A TEMA CLARO)
            fetch('Consultas/Al_Cargar_Pagina/TEMA_OSCURO.php', {
                method: "POST",
                body: formData
            }) 
            .then(respuesta => {
                
                if (respuesta.ok){
                    
                    return respuesta.text();
                }else{
                
                    throw new error_Php('No se puede acceder al PHP');
                }
                
            })
            .then(datos => {
                
                if (datos.substring(1,21) == "SE EJECUTÓ CON ÉXITO") {
                    //AGREGA ATRIBUTO LIGHT (OSCURO) EN EL BODY DEL HTML// 
                    document.getElementById('BODY').setAttribute('data-theme','light');
                    //SE AGREGA EL ATRIBUTO SKIN6 (TEMA CLARO) A LAS 3 CLASES QUE HAY EN EL HEADER NAVBAR Y EL DIV DEL NAVBAR//
                    document.getElementById('header_topbar').setAttribute('data-navbarbg','skin6');
                    document.getElementById('nav_topbar').setAttribute('data-logobg','skin6');
                    document.getElementById('div_navbar').setAttribute('data-logobg','skin6');
                    //SE AGREGA EL ATRIBUTO SKIN6 (TEMA CLARO) EN EL ASIDE DEL SIDEBAR//
                    document.getElementById('Aside_Left_SideBar').setAttribute('data-sidebarbg','skin6');
                    //COLOR CLARO DE LETRA DEL LOGO COLEGIO//
                    document.getElementById('Div_Texto_Logo').classList.remove('text-white')
                    document.getElementById('Div_Texto_Logo').classList.add('text-black');
                }else if (datos.substring(0,21) == "NO SE CONECTÓ A LA BD"){
                    console.log(datos);
                    NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
                }
                
                
            })
            .catch(error => { 
                console.log("Error del fetch del CheckBox Temas -" + error);
            })
        }
    });
    

$("#btnRecargar").click(function(){
    Recargar_Tabla();
});



//FUNCIÓN QUE AYUDA A RECARGAR UNA TABLA
async function Recargar_Tabla(){
    
    tabla = await $('#TABLITA').DataTable({   

     //DEL AJAX CON JSON PASAMOS A LA TABLA LA INFORMACIÓN LEIDA.
        "destroy": "true",	
        "ajax":{           
            "url": "Consultas/CRUD_Usuario_Desarrollador.php", 
            "method": 'POST', //usamos el metodo POST
            "data":{
                opcion: 4
            }, //enviamos opcion 4 para que haga un SELECT
            "dataSrc":""
        },
        
       //COLUMNAS DEL DATATABLE//

        "columns":[
            {"data": "null",
                "defaultContent": `<input type="checkbox" class="CheckBox_Usuarios" id="${"UsDes_Usuario"}">`},
            {"data": "UsDes_Usuario"},
            {"data": "UsDes_Clave"},
            {"data": "UsDes_Nombre"},
            {"data": "UsDes_Apellido1"},
            {"data": "UsDes_Apellido2"},
            {"defaultContent": "<div class='text-center'>"+
                    "<div class='btn-group'>"+
                        "<button class='btn btn-primary btnEditar' title='Editar'>"+
                            "<i class='fas fa-pencil-alt'></i>"+
                        "</button>"+
                        "<button class='btn btn-danger btnBorrar' title='Borrar'>"+
                            "<i class='fas fa-trash-alt'></i>"+
                        "</button>"+
                    "</div>"+
                "</div>"}
        ],
        
        //PARA USAR EL IDIOMA ESPAÑOL EN EL DATA TABLE
        language: {
                
                "lengthMenu": "Mostrar _MENU_ registros",
                "zeroRecords": "No se encontraron resultados",
                "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
                "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0",
                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sSearch": "Buscar:",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast":"Último",
                    "sNext":"Siguiente",
                    "sPrevious": "Anterior"
                    },
                    "sProcessing":"Procesando...",
            },
                     
        //PARA USAR BOTONES DE EXPORTAR E IMPRIMIR
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
   //// RECORRER TABLA ///
//    let ids_array = [];
//    $("input:checkbox[class=CheckBox_Usuarios]:checked").each(function () {
//         ids_array.push($(this).val());
//         console.log(ids_array);
//   }); 
    $('#TABLITA tbody tr').each(function () {
    
        $('input[type=checkbox]').each(function(){
        
        })
        
        let CheckBox = $(this).find("td").eq(0).html();
        let Usuario = $(this).find("td").eq(1).html();
        var UsDes_Clave = $(this).find("td").eq(3).html();
        console.log(CheckBox);
    
        });

});




//Editar        
$(document).on("click", ".btnEditar", function(){		        
    //console.log("VALOR DE OPCION ANTES DE CAMBIAR ES DE: " + opcion);
    opcion = 2;//INDICA QUE ES UN UPDATE
//	console.log("VALOR DE OPCION DESPUES DE CAMBIAR ES DE: " + opcion);
    fila = $(this).closest("tr");	
         
    user_id = parseInt(fila.find('td:eq(0)').text()); //capturo el ID		            
    username = fila.find('td:eq(1)').text();
    first_name = fila.find('td:eq(2)').text();
    last_name = fila.find('td:eq(3)').text();
    gender = fila.find('td:eq(4)').text();
    password = fila.find('td:eq(5)').text();
    status = fila.find('td:eq(6)').text();
    $("#Txt_username").val(username);
    $("#Txt_first_name").val(first_name);
    $("#Txt_last_name").val(last_name);
    $("#Txt_gender").val(gender);
    $("#Txt_password").val(password);
    $("#Txt_status").val(status);

    $(".modal-header").css( "background-color", "rgba(116, 96, 238, 0.5)");
    //$(".modal-header").css("color", "white" );
    $(".modal-title").text("Editar Usuario");		
    $('#modalCRUD').modal('show');		   
});

//Borrar
$(document).on("click", ".btnBorrar", function(){
    fila = $(this);           
    user_id = parseInt($(this).closest('tr').find('td:eq(0)').text()) ;		
    opcion = 3; //eliminar        
    var respuesta = confirm("¿Está seguro de borrar el registro "+user_id+"?");                
    if (respuesta) {            
        $.ajax({
          url: "Consultas/CRUD_Usuario_Desarrollador.php",
          type: "POST",
          datatype:"json",    
          data:  {opcion:opcion, user_id:user_id},    
          success: function() {
              tablaUsuarios.row(fila.parents('tr')).remove().draw();                  
           }
        });	
    }
 });

$("#btnNuevo").click(function(){
    opcion = 1; //INDICAR QUE ES UN INSERT NUEVO           
    user_id=null; //SE LIMPIA LA VARIABLE QUE GUARDA EL ID TEMPORALMENTE
    $("#formUsuarios").trigger("reset"); //SE USA PARA LIMPIAR LOS CAMPOS
    $(".modal-header").css( "background-color", " rgba(26, 214, 11, 0.66)"); //ASIGNA COLOR HEADER DEL MODAL
	//$(".modal-header").css( "color", "btn btn-success" ); //EXPERIMENTOS
    $(".modal-title").text("Agregar nuevo usuario"); //TEXTO DEL HEADER DEL MODAL
    $('#modalCRUD').modal('show');	//MOSTRAR EL MODAL    
});


$("#btnCancelarModal").click(function(){
		$('#modalCRUD').modal('hide');	
});
	


 //submit para el Alta y Actualización
document.getElementById('formUsuarios').addEventListener('submit', function(e){                       
    e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
    let usuario = (document.getElementById('Txt_username').value).trim();//QUITA ESPACIOS
    let pass = (document.getElementById('Txt_password').value).trim();//QUITA ESPACIOS
    let nombre = (document.getElementById('Txt_first_name').value).trim().toUpperCase();//QUITA ESPACIO Y AGREGA MAYUSCULAS
    let apellido1 = (document.getElementById('Txt_last_name1').value).trim().toUpperCase();
    let apellido2 = (document.getElementById('Txt_last_name2').value).trim().toUpperCase();

    let formdata = new FormData();
    formdata.append('opcion', 1);
    formdata.append('username', usuario);
    formdata.append('password', pass);
    formdata.append('first_name', nombre);
    formdata.append('last_name1', apellido1);
    formdata.append('last_name2', apellido1);
    formdata.append('tema', 0);
    fetch('Consultas/CRUD_Usuario_Desarrollador.php', { 
        method: "POST",
        body: formdata
    }) 
    .then(respuesta => {
        if (respuesta.ok){
            console.log(respuesta.text);
            return respuesta.text(); //RESPUESTA TIPO TEXTO
        }else{
            throw new error_Php('No se puede acceder al PHP');
        }	 
    })
    .then(datos => {
        console.log(datos);
        if (datos.substring(0,21) == "NO SE CONECTÓ A LA BD"){
            console.log(datos);
            NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
        }else{
            let MiJason_Datos = JSON.parse(datos);
            let filas_tabla = '';
           for (let i in MiJason_Datos){
                filas_tabla += `<tr>
                    <td> ${MiJason_Datos[i].UsDes_Usuario} </td> 
                    <td> ${MiJason_Datos[i].UsDes_Clave} </td>
                    <td> ${MiJason_Datos[i].UsDes_Nombre} </td>
                    <td> ${MiJason_Datos[i].UsDes_Apellido1} </td>
                    <td> ${MiJason_Datos[i].UsDes_Apellido2} </td>
                    <td>
                        <div class='text-center'>
                            <div class='btn-group'>
                                <button class='btn btn-primary btnEditar' title='Editar'>
                                    <i class='fas fa-pencil-alt'></i>
                                </button>
                                <button class='btn btn-danger btnBorrar' title='Borrar'>
                                <i class='fas fa-trash-alt'></i>
                                </button>
                            </div>
                        </div>
                    </td>
                </tr>`;
           }
           $('#TABLITA').append(filas_tabla);
          // document.querySelector('.TABLITA').innerHTML = filas_tabla;
        }
    })
    .catch(error => {
        console.log("Error al ejecutar el fetch CRUD Usuarios Desarrolladores - " + error); 
    })
        // $.ajax({
        //     url: "CRUD.php",
        //     type: "POST",
        //     datatype:"json",    
        //     data:  {user_id:user_id, username:username, first_name:first_name, last_name:last_name, gender:gender, password:password ,status:status ,opcion:opcion},    
            
        //     success: function(data) {

        //     tablaUsuarios.ajax.reload(null, false);
            
            
        //     },

        //     error: function(){

        //     }
        // });			        
    $('#modalCRUD').modal('hide');											     			
});




