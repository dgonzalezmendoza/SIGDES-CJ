$(document).ready(function() {    
	
	//CARGAR LA PÁGINA PRINCIPAL
	function CARGAR_SOLO_PAGINA_INICIO(){
		
		$('#DIV_HOME').show();
		$('#DIV_DATATABLE').hide();
		$('#DIV_LISTA_ESTUDIANTES').hide();
		
	}
	//LLAMAMOS AL EVENTO DE CARGAR LA PAGINA PRINCIPAL
	CARGAR_SOLO_PAGINA_INICIO();






	//VERIFICAR SI EL USUARIO TIENE DE PREFERENCIA EL TEMA OSCURO O CLARO
	$.ajax({
		url: "TEMA_OSCURO.php", 
		type: "POST",
		datatype:"json",    
		data:  {opcion:3},     //LA OPCION DE VERIFICAR EL TEMA
	   
		success: function(data) {
			var Datos = JSON.parse(data); //PASAR LA DATA DEL QUERY A FORMATO JSON
			//	var objeto2 = JSON.stringify(OBJETO_JAVASCRIPT);  //PASAR OBJETO JAVASCRIP A STRING
			
			//console.log(data); //IMPRIME LO QUE VENGA DEL QUERY SIN TRANSFORMARLO
			//console.log(objeto.status) //IMPRIME EL OBJETO JSON DESEADO SEGUN LA CLAVE
			//console.log(objeto[0].status);  // IMPRIME CON FETCHALL

			if (Datos.UsDes_Tema == '0'){ //SE CONSULTA SI LA VAIABL
				$('#Checkbox_Temas').prop('checked', false); // DESMARCA EL CHECKBOX
				//ASIGNA EL TEMA CLARO LAS VENTANAS
				$('body').attr("data-theme", 'light' ); 
				$('.topbar .top-navbar .navbar-header').attr("data-logobg", "skin6");
				$('.left-sidebar').attr("data-sidebarbg", "skin6");
			}else{
				$('#Checkbox_Temas').prop('checked', true); // MARCA EL CHECKBOX
			}

				
		 },
		 error: function(XMLHttpRequest, textStatus, errorThrown){
		   
			alert("No se pudo guardar el tema - Status: " + textStatus + " - HttpRequest: " + XMLHttpRequest); 
			alert("Error: " + errorThrown); 
		 }
	  });	


	  




	  function Recargar_Tabla(){
		$('#TABLITA').DataTable({   
		
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
						text:      '<i class="fas fa-file-excel"></i> ',
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

	  //RECARGA LA TABLA AL INICIAR LA PÁGINA COMPLETAMENTE CARGADA
	  Recargar_Tabla();



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
    $("#Btn_Cerrar_Sesion").click(function(){
        $.ajax({
            url: "../BD/Logout.php",   
            success: function() {
                window.location.href = "../Index";
                             
             }
          });
    });


	$("#btnRecargar").click(function(){
        Recargar_Tabla();
    });

	





	}); 
