

//////////////////////////////////////////////
////////REDIRECCIONES DEL MENU SIDEBAR////////
/////////////////////////////////////////////
//ESCONDER TODOS
function Esconder_Todos_Los_Modulos(){
    $('#DIV_HOME').hide();
    $('#DIV_DATATABLE').hide();
	$('#DIV_LISTA_ESTUDIANTES').hide();
}
// Ventana principal
document.querySelector('#Link_Principal').addEventListener('click', () => {
    Esconder_Todos_Los_Modulos();
    $('#DIV_HOME').show();
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


