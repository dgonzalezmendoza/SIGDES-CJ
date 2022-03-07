

//////////////////////////////////////////////
////////REDIRECCIONES DEL MENU SIDEBAR////////
/////////////////////////////////////////////
//ESCONDER TODOS
function Esconder_Todos_Los_Modulos(){
    document.getElementById("DIV_HOME").style.display = "none";
	document.getElementById("DIV_DATATABLE").style.display = "none";
	document.getElementById("DIV_LISTA_ESTUDIANTES").style.display = "none";
}

// Ventana principal
document.querySelector('#Link_Principal').addEventListener('click', () => {
    Esconder_Todos_Los_Modulos();
    document.getElementById("DIV_HOME").style.display = "block";
    // $('#Contenido_Pagina').load('Home.php');
});

// Ventana Listas de estudiantes
document.querySelector('#Link_Lista_Estudiantes').addEventListener('click', () => {
    Esconder_Todos_Los_Modulos();
    document.getElementById("DIV_LISTA_ESTUDIANTES").style.display = "block";
});

// Ventana DataTable
document.querySelector('#Link_DataTable').addEventListener('click', () => {
    Esconder_Todos_Los_Modulos();
    document.getElementById("DIV_DATATABLE").style.display = "block";
	
	
});


