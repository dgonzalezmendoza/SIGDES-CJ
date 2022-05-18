'use strict';
////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// FUNCIONES Y VARIABLES GLOBALES ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
var EXPIRO = false; //VARIABLE QUE AFIRMA SI EXPIRO LA SESIÓN//
var SE_DESCONECTO = false; //VARIABLE QUE INDICA SI SE PERDIÓ LA CONEXIÓN CON LA BD

var opcion_para_CRUD; ///VARIABLE PARA AlMACENAR LA OPCIÓN QUE HARÁ EL CRUD EN CUALQUIER TABLA
var Id_a_Editar;/// VARIABLE PARA MANTENER EL USUARIO SELECCIONADO ANTES DE EDITAR
var Informacion_Fila;///VARIABLE QUE CONTIENE LA INFORMACIÓN DE TODA LA FILA SELECCIONADA
var Se_inserto_actualizo = false;///VARIABLE PARA DETERMINAR SI ACTUALIZÓ O EDITÓ

var Index_de_Fila; //VARIABLE QUE CONTIENE EL INDEX DE LA FILA SELECCIONADA

////// ESCONDER TODOS LOS DIV DE CONTENIDOS ///////
function Esconder_Todos_Los_Modulos(){
	document.getElementById("DIV_HOME").style.display = "none";
	document.getElementById("DIV_DATATABLE").style.display = "none";
	document.getElementById("DIV_LISTA_ESTUDIANTES").style.display = "none";
	document.getElementById("DIV_DATATABLE2").style.display = "none";
	document.getElementById("DIV_Mant_Adecuaciones").style.display = "none";
	document.getElementById("DIV_Mant_Satelites").style.display = "none";
}


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

//////////////////// NOTIFICA CON MENSAJE DE ERROR CONEXION A LA BD - DESACTIVA EL PANEL PRINCIPAL /////
function NOTIFICA_PERDIDA_DE_CONEXION_A_BD(){
	document.querySelector('#Aside_Left_SideBar').remove();//ELIMINA EL MENÚ LATERAL
	document.querySelector('#Contenido_Pagina').remove();//ELIMINA EL DASHBOARD PRINCIPAL
	document.querySelector('#Perfil_en_barra_superior').remove();//ELIMINA EL ACCESO AL PERFIL EN LA BARRA SUPERIOR
	Mensaje_Notificacion_Error_Toast('Se ha interrumpido la conexión con la Base de Datos. Cierre la sesión e inténtelo más tarde. Comuníquese con el administrador.',
									'Conexión interrumpida',
									15000);
}


 ////// APLICA A TODOS LOS FORMULAROS QUE USEN Bootstrap validation styles
 var forms = document.getElementsByClassName('needs-validation'); // SE APLICA LA VALIDACIÓN A ESTA CLASE
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





 




///////////////////////////////////////////////////////////////////////////////
///////////////////// AL CARGAR EL CONDENIDO DEL DOM ///////////////////
///////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => { 
	
	//API PRUEBA = https://randomuser.me/api/  

	
	/////////////////////FUNCIONES QUE SE EJECUTAN AL INICIAR LA APP O EN ALGÚN MOMENTO//////////////////

	///////////////EVENTO DEL BOTON CERRAR SESIÓN/////////////////
    document.getElementById('Btn_Cerrar_Sesion').addEventListener('click', function(){
        fetch('php/Al_Cargar_Pagina/Logout.php', { 
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
            fetch('php/Al_Cargar_Pagina/TEMA_OSCURO.php', {
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
                }else if(datos.substring(0,14) == "ERROR BACK-END"){
					Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
													'Error de acción',5000)
					console.log(datos);
				}
            })
            .catch(error => {
                console.log("Error del fetch del CheckBox Temas -" + error);
            })
    
        }else{
            let formData = new FormData();
            formData.append('opcion', 2); //NOMBRE Y VALOR DE PARÁMETROS (2 PARA ACTUALIZAR A TEMA CLARO)
            fetch('php/Al_Cargar_Pagina/TEMA_OSCURO.php', {
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
                }else if(datos.substring(0,14) == "ERROR BACK-END"){
					Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
													'Error de acción',5000)
					console.log(datos);
				}     
            })
            .catch(error => { 
                console.log("Error del fetch del CheckBox Temas -" + error);
            })
        }
    });
    

	

		///////MOSTRAR SOLO CONTENIDO DEL DIV PRINCIPAL//////////////////
	async function MOSTRAR_SOLO_DIV_INICIO(){
		//MOSTRAR SOLO EL BLOQUE CON EL DIV HOME//
		//SE OCULTAN EL RESTO DE BLOQUES//
		let p = new Promise((resolve,reject) =>{
			try {
				Esconder_Todos_Los_Modulos();//ESCONDER TODOS LOS BLOQUES DIV DE FORMA PREDETERMINADA
				document.getElementById("DIV_HOME").style.display = "block"; //VISUALIZAR SOLO EL HOME
				resolve('La promesa MOSTRAR DIV INICIO se ejecutó con éxito');//MENSAJE DE APROBACIÓN
			} catch (erro) {
				reject(console.log('Se rechazada la muestra de bloques.. - ' + erro));//MENSAJE DE RECHAZO
			}
		})
	}	

	//////////VERIFICAR EL TIEMPO  DE LA SESIÓN ABIERTA CONTROLADA////////////
	///////////CON PHP Y CONSULTADA CON FETCH API DESDE JAVASCRIPT////////////
	/////// COMO ES SOLO CONSULTA SIN ENVIAR PARÁMETROS SE USA FETCH SIN /////
	//PARÁMETROS Y SE EXTRAEN LOS DATOS DE LA RESPUESTA
	async function VERIFICAR_TIEMPO_SESION(){
		await fetch('php/Al_Cargar_Pagina/Verificar_tiempo_sesion.php') 
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
				}else if(datos.substring(0,14) == "ERROR BACK-END"){
					Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
													'Error de acción',5000)
					console.log(datos);
				}
			})
			.catch(error => {
				console.log("Error al ejecutar el fetch VERIFICAR_CONEXION_MYSQ - " + error); 
				SE_DESCONECTO = true;
			})
	}


	//VERIFICAR SI EL USUARIO TIENE ACTIVADO EL TEMA OSCURO O CLARO
	async function VERIFICAR_TEMA_CLARO_OSCURO(){
		//AL ENVIRSE PARÁMETROS SE HACE USO DEL FormaData //
		//PARA HACER CREER AL FECTH QUE SON DATOS DE FORMULARIO ENVIADOS //
		//POR MÉTODO POST//
		let formData = new FormData();  //SE CREA FORMULARIO PARA ENVIAR DATOS
		formData.append('opcion', 3); //SE AGREGAN EL NOMBRE Y VALOR DE PARÁMETRO A ENVIAR (3 PARA HACER SELECT)
		await fetch('php/Al_Cargar_Pagina/TEMA_OSCURO.php', {
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
				}else if(datos.substring(0,14) == "ERROR BACK-END"){
					Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
													'Error de acción',5000)
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


	
		





	
	

	////////////////////////////////////////////////////////////////////////////
	//////////INICIALIZAR FUNCIONES PRINCIPALES AL CARGAR LA PÁGINA/////////////
	////////////////////////////////////////////////////////////////////////////
	async function INICIAR_FUNCIONES_UNA_A_UNA (){
	
		console.time('TIEMPO_EJECUCIÓN_INICIAL');
		window.location.href = "#/Principal"; //DIRECCIÓN INICIAL EN EL NAVEGADOR AL CARGAR O RECARGAR LA PAGINA
		await MOSTRAR_SOLO_DIV_INICIO()
		await VERIFICAR_CONEXION_MYSQL()
		if ( SE_DESCONECTO == false) {
			await VERIFICAR_TIEMPO_SESION()
			if (EXPIRO == false) {
				await VERIFICAR_TEMA_CLARO_OSCURO()
			}
		}else{
			NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
		}
		console.timeEnd('TIEMPO_EJECUCIÓN_INICIAL');
	}

	
	INICIAR_FUNCIONES_UNA_A_UNA()
	
	



}); 
