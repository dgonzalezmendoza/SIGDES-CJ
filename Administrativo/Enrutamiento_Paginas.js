

//////////////////////////////////////////////
////////REDIRECCIONES DEL MENU SIDEBAR////////
/////////////////////////////////////////////
// Ventana principal
document.querySelector('#Link_Principal').addEventListener('click', () => {
   
    $('#DIV_HOME').show();
    $('#DIV_DATATABLE').hide();
	$('#DIV_LISTA_ESTUDIANTES').hide();
	// $('#Contenido_Pagina').load('Home.php');
});

// Ventana Listas de estudiantes
document.querySelector('#Link_Lista_Estudiantes').addEventListener('click', () => {
    $('#DIV_HOME').hide();
    $('#DIV_DATATABLE').hide();
	$('#DIV_LISTA_ESTUDIANTES').show();
});

// Ventana DataTable
document.querySelector('#Link_DataTable').addEventListener('click', () => {
    $('#DIV_HOME').hide();
    $('#DIV_DATATABLE').show();
	$('#DIV_LISTA_ESTUDIANTES').hide();
	;
	
});


