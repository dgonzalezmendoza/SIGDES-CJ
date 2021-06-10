//////////////////////////////////////////////
////////REDIRECCIONES DEL MENU SIDEBAR////////
/////////////////////////////////////////////
// Ventana principal
$("#Link_Principal").click(function(e){
    $('#DIV_HOME').show();
    $('#DIV_DATATABLE').hide();
	$('#DIV_LISTA_ESTUDIANTES').hide();
	// $('#Contenido_Pagina').load('Home.php');
    
  
});

// Ventana Listas de estudiantes
$("#Link_Lista_Estudiantes").click(function(e){
    $('#DIV_HOME').hide();
    $('#DIV_DATATABLE').hide();
	$('#DIV_LISTA_ESTUDIANTES').show();
});

// Ventana DataTable
$("#Link_DataTable").click(function(e){
    $('#DIV_HOME').hide();
    $('#DIV_DATATABLE').show();
	$('#DIV_LISTA_ESTUDIANTES').hide();
	;
	
});

