

//////////////////////////////////////////////
////////REDIRECCIONES DEL MENU SIDEBAR////////
/////////////////////////////////////////////
//ESCONDER TODOS
function Esconder_Todos_Los_Modulos(){
    document.getElementById("DIV_HOME").style.display = "none";
	document.getElementById("DIV_DATATABLE").style.display = "none";
	document.getElementById("DIV_LISTA_ESTUDIANTES").style.display = "none";
}

// Ventana principal//  QUERYSELECTOR SE USA PARA EL CLICK EN UN LINK O PARTE DEL DOM//
document.querySelector('#Link_Principal').addEventListener('click', function(){
  
    Esconder_Todos_Los_Modulos();
    document.getElementById("DIV_HOME").style.display = "block";
   //  $('#Contenido_Pagina').load('Sitios/Home.php');//
});

// Ventana Listas de estudiantes// QUERYSELECTOR SE USA PARA EL CLICK EN UN LINK O PARTE DEL DOM//
document.querySelector('#Link_Lista_Estudiantes').addEventListener('click', function(){
   Esconder_Todos_Los_Modulos();
    document.getElementById("DIV_LISTA_ESTUDIANTES").style.display = "block";
    //$('#Contenido_Pagina').load('Sitios/Lista_Estudiantes.php')
});

// Ventana DataTable// QUERYSELECTOR SE USA PARA EL CLICK EN UN LINK O PARTE DEL DOM//
document.querySelector('#Link_DataTable').addEventListener('click', function(){
    Esconder_Todos_Los_Modulos();
    document.getElementById("DIV_DATATABLE").style.display = "block";
   // $('#Contenido_Pagina').load('Sitios/DataTable.php')
});


