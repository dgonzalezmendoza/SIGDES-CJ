
document.addEventListener('DOMContentLoaded', () => { 
	//API PRUEBA = https://randomuser.me/api/  

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

	/////////////////////////VARIABLES GLOBALES PARA USO INTERNO///////////////////////////////////
	var EXPIRO = false; //VARIABLE QUE AFIRMA SI EXPIRO LA SESIÓN//
	var SE_DESCONECTO = false; //VARIABLE QUE INDICA SI SE PERDIÓ LA CONEXIÓN CON LA BD
	


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
		/////////MOSTRAR SOLO CONTENIDO DEL DIV PRINCIPAL//////////////////
	async function MOSTRAR_SOLO_DIV_INICIO(){
		//MOSTRAR SOLO EL BLOQUE CON EL DIV HOME//
		//SE OCULTAN EL RESTO DE BLOQUES//
		let p = new Promise((resolve,reject) =>{
			try {
				document.getElementById("DIV_HOME").style.display = "block", //MOSTRAR ESTE DIV
				document.getElementById("DIV_DATATABLE").style.display = "none", //NO MOSTRAR ESTE DIV
				document.getElementById("DIV_LISTA_ESTUDIANTES").style.display = "none";//NO MOSTRAR ESTE DIV
				resolve('La promesa MOSTRAR DIV INICIO se ejecutó con éxito');//MENSAJE DE APROBACIÓN
			} catch (erro) {
				reject(console.log('Se rechazada la muestra de bloques.. - ' + erro));//MENSAJE DE RECHAZO
			}
		})
	}	
	/////////AFIRMA SI ESTÁ DESCONECTADO DE LA BASE DE DATOS////////
	async function VERIFICAR_CONEXION_MYSQL(){
		
		await fetch('../BD/Verificar_Conexion.php', { 
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
			   if (datos.substring(0,21) == "NO SE CONECTÓ A LA BD") {
				   console.log(datos);
					SE_DESCONECTO = true;
			   }  
		   })
		   .catch(error => {
			   console.log("Error al ejecutar el fetch VERIFICAR_CONEXION_MYSQ - " + error); 
			   SE_DESCONECTO = true;
		   })
	}
	//////////VERIFICAR EL TIEMPO  DE LA SESIÓN ABIERTA CONTROLADA////////////
	///////////CON PHP Y CONSULTADA CON FETCH API DESDE JAVASCRIPT////////////
	//COMO ES SOLO CONSULTA SIN ENVIAR PARÁMETROS SE USA FETCH SIN 
	//PARÁMETROS Y SE EXTRAEN LOS DATOS DE LA RESPUESTA
	async function VERIFICAR_TIEMPO_SESION(){
		await fetch('../BD/Verificar_tiempo_sesion.php') 
			.then(response => response.text()) //RESULTADO DE RESPUESTA EN TEXTO
			.then(data => { //CON LA INFORMACIÓN SE VA A...
				if(data == '"EXPIRADO"'){
					EXPIRO = true;
					console.log("Tiempo de sesión expirado o se eliminó la caché");
					document.querySelector('#main-wrapper').remove();//ELIMINA EL FONDO DE LA PÁGINA AL ARROJAR EL MENSAJE DE SWEET ALERT
					Swal.fire({
						type:'warning',
						title: 'Debe iniciar sesión',
						showConfirmButton: false,
						timer: 1500
					}).then 
					//1 SEGUNDO Y MEDIO DESPUÉS
					setTimeout(function(){ window.location.href = "../Administrativo/Iniciar_Sesion"; }, 1500); //UNA VEZ CERRADA LA SESIÓN SE TRASLADA AL INDEX	
					
				}
			})
			.catch(error => {
				console.log("Error al ejecutar el fetch VERIFICAR_TIEMPO_SESION - "+ error)
				
			})
		
	}

	//VERIFICAR SI EL USUARIO TIENE ACTIVADO EL TEMA OSCURO O CLARO
	async function VERIFICAR_TEMA_CLARO_OSCURO(){
		//AL ENVIRSE PARÁMETROS SE HACE USO DEL FormaData //
		//PARA HACER CREER AL FECTH QUE SON DATOS DE FORMULARIO ENVIADOS //
		//POR MÉTODO POST//
		let formData = new FormData();  //SE CREA FORMULARIO PARA ENVIAR DATOS
		formData.append('opcion', 3); //SE AGREGAN EL NOMBRE Y VALOR DE PARÁMETRO A ENVIAR
		await fetch('TEMA_OSCURO.php', {
			 method: "POST",
			 body: formData //SE PASAN LOS PARÁMETROS AL CUERPO DEL MENSAJE DE ENVÍO
		}) 
			.then(respuesta => {
				if (respuesta.ok){
					return respuesta.text(); //RESPUESTA TIPO TEXTO
				}else{
					throw new error_Php('No se puede acceder al PHP');
				}	
			})
			.then(datos => {
				if (datos.substring(0,21) == "NO SE CONECTÓ A LA BD") {
					console.log(datos);
				}else{
					let respuesta = JSON.parse(datos);
					
					if(respuesta.UsDes_Tema == '0'){
						document.getElementById("Checkbox_Temas").checked = false; // DESMARCA EL CHECKBOX
						//ASIGNA EL TEMA CLARO LAS VENTANAS
						//AGREGA ATRIBUTO DARK (OSCURO) EN EL BODY DEL HTML// 
						document.getElementById('BODY').setAttribute('data-theme','light');
						//SE AGREGA EL ATRIBUTO SKIN3 (TEMA OSCUDO) A LAS 3 CLASES QUE HAY EN EL HEADER NAVBAR Y EL DIV DEL NAVBAR//
						document.getElementById('header_topbar').setAttribute('data-navbarbg','skin6');
						document.getElementById('nav_topbar').setAttribute('data-logobg','skin6');
						document.getElementById('div_navbar').setAttribute('data-logobg','skin6');
						//SE AGREGA EL ATRIBUTO SKIN3 (TEMA OSCURO) EN EL ASIDE DEL SIDEBAR//
						document.getElementById('Aside_Left_SideBar').setAttribute('data-sidebarbg','skin6');
						//COLOR OSCURO DE LETRA DEL LOGO COLEGIO//
						document.getElementById('Div_Texto_Logo').classList.remove('text-white')
						document.getElementById('Div_Texto_Logo').classList.add('text-black');	
						}else{
							document.getElementById("Checkbox_Temas").checked = true;// MARCA EL CHECKBOX
					}
				}		
			})
			.catch(error => {
				console.log("Error al ejecutar el fetch TEMA_CLARO_OSCURO - " + error); 
			})
	}


	

	//FUNCIÓN QUE AYUDA A RECARGAR UNA TABLA
	async function Recargar_Tabla(){
		
	
		await $('#TABLITA').DataTable({   
		
			//UTILIZAMOS EL MEDIO AJAX PARA EL MANEJO DEL DATA TABLE
			"destroy": "true",	
			"ajax":{            
				"url": "CRUD.php", 
				"method": 'POST', //usamos el metodo POST
				"data":{opcion: 4}, //enviamos opcion 4 para que haga un SELECT
				"dataSrc":""
			},
			
			//DEL AJAX CON JSON PASAMOS A LA TABLA LA INFORMACIÓN LEIDA.
			"columns":[
				{"data": "UsDes_Usuario"},
				{"data": "UsDes_Clave"},
				{"data": "UsDes_Nombre"},
				{"data": "UsDes_Apellido1"},
				{"data": "UsDes_Apellido2"},
				{"data": "UsDes_Tema"},
				{"defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btnEditar' title='Editar'><i class='fas fa-pencil-alt'></i></button><button class='btn btn-danger btnBorrar' title='Borrar'><i class='fas fa-trash-alt'></i></button></div></div>"}
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

	  //submit para el Alta y Actualización
	$('#formUsuarios').submit(function(e){                         
		e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
		username = $.trim($('#Txt_username').val());    
		first_name = $.trim($('#Txt_first_name').val());   
		last_name = $.trim($('#Txt_last_name').val());    
		gender = $.trim($('#Txt_gender').val());    
		password = $.trim($('#Txt_password').val());
		status = $.trim($('#Txt_status').val());
		
		//PASANDO A MAYUSCULAS LAS LETRAS
		first_name = first_name.toUpperCase();  
		last_name = last_name.toUpperCase();

		
			$.ajax({
			  url: "CRUD.php",
			  type: "POST",
			  datatype:"json",    
			  data:  {user_id:user_id, username:username, first_name:first_name, last_name:last_name, gender:gender, password:password ,status:status ,opcion:opcion},    
			 
			  success: function(data) {

				tablaUsuarios.ajax.reload(null, false);
				
				
			   },

			   error: function(){

			   }
			});			        
		$('#modalCRUD').modal('hide');											     			
	});
			
	 
	$("#btnCancelarModal").click(function(){
		$('#modalCRUD').modal('hide');	
	});



	//LIMPIAR CAMPOS DEL MODAL Y AGRAGAR NUEVO REGISTRO
	$("#btnNuevo").click(function(){
		opcion = 1; //INDICAR QUE ES UN INSERT NUEVO           
		user_id=null; //SE LIMPIA LA VARIABLE QUE GUARDA EL ID TEMPORALMENTE
		$("#formUsuarios").trigger("reset"); //SE USA PARA LIMPIAR LOS CAMPOS
		$(".modal-header").css( "background-color", " rgba(57, 196, 73, 0.5)"); //ASIGNA COLOR HEADER DEL MODAL
	//	$(".modal-header").css( "color", "btn btn-success" ); //EXPERIMENTOS
		$(".modal-title").text("Agregar nuevo usuario"); //TEXTO DEL HEADER DEL MODAL
		$('#modalCRUD').modal('show');	//MOSTRAR EL MODAL    
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
			  url: "CRUD.php",
			  type: "POST",
			  datatype:"json",    
			  data:  {opcion:opcion, user_id:user_id},    
			  success: function() {
				  tablaUsuarios.row(fila.parents('tr')).remove().draw();                  
			   }
			});	
		}
	 });


	
		 

	//EVENTO DEL BOTON CERRAR SESIÓN
	document.getElementById('Btn_Cerrar_Sesion').addEventListener('click', function(){
		fetch('../BD/Logout.php', { 
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
    // $("#Btn_Cerrar_Sesion").click(function(){
    //     $.ajax({
    //         url: "../BD/Logout.php",   
    //         success: function() {
    //             window.location.href = "../Index";
                             
    //          }
    //       });
    // });


	$("#btnRecargar").click(function(){
        Recargar_Tabla();
    });




	document.querySelector('#btn_toastr').addEventListener('click', () => {
		Mensaje_Notificacion_Warning_Toast('Este es un ejemplo de mensajes','Guardado',15000);
	});


	//////////CON CADA CAMBIO DEL CHECKBOX DE TEMA OSCURO Y CLARO///////////
	document.getElementById('Checkbox_Temas').addEventListener( 'change', function() {	
		if(this.checked) {
			let formData = new FormData();
			formData.append('opcion', 1);
			fetch('TEMA_OSCURO.php', {
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
			formData.append('opcion', 2);
			fetch('TEMA_OSCURO.php', {
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
	

	////////////////////////////////////////////////////////////////////////////
	//////////INICIALIZAR FUNCIONES PRINCIPALES AL CARGAR LA PÁGINA/////////////
	////////////////////////////////////////////////////////////////////////////
	async function INICIAR_FUNCIONES_UNA_A_UNA (){
	
		console.time('TIEMPO_EJECUCIÓN');
		window.location.href = "Dashboard#/Principal"; //DIRECCIÓN INICIAL EN EL NAVEGADOR AL CARGAR O RECARGAR LA PAGINA
		await MOSTRAR_SOLO_DIV_INICIO()
		await VERIFICAR_CONEXION_MYSQL()
		if ( SE_DESCONECTO == false) {
			await VERIFICAR_TIEMPO_SESION()
			if (EXPIRO == false) {
				await VERIFICAR_TEMA_CLARO_OSCURO()
				await Recargar_Tabla()
			}
		}else{
			NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
		}
		console.timeEnd('TIEMPO_EJECUCIÓN');
	}

	
	INICIAR_FUNCIONES_UNA_A_UNA()
	
	



}); 
