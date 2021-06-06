$(document).ready(function() {    
	
	//VERIFICAR SI EL USUARIO TIENE DE PREFERENCIA EL TEMA OSCURO O CLARO
	$.ajax({
		url: "TEMA_OSCURO.php",
		type: "POST",
		datatype:"json",    
		data:  {opcion:3},    
	   
		success: function(data) {
			var objeto = JSON.parse(data); //PASAR LA DATA DEL QUERY A FORMATO JSON
			//	var objeto2 = JSON.stringify(OBJETO_JAVASCRIPT);  //PASAR OBJETO JAVASCRIP A STRING
			
			//console.log(data); //IMPRIME LO QUE VENGA DEL QUERY SIN TRANSFORMARLO
			//console.log(objeto.status) //IMPRIME EL OBJETO JSON DESEADO SEGUN LA CLAVE
			//console.log(objeto[0].status);  // IMPRIME CON FETCHALL

			if (objeto.status == '0'){ //SE CONSULTA SI LA VAIABL
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

	
	}); 
