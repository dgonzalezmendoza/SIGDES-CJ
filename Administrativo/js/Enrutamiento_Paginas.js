

//////////////////////////////////////////////
////////REDIRECCIONES DEL MENU SIDEBAR////////
/////////////////////////////////////////////


// Ventana principal//  QUERYSELECTOR SE USA PARA EL CLICK EN UN LINK O PARTE DEL DOM//
document.querySelector('#Link_Principal').addEventListener('click', function(){
    Esconder_Todos_Los_Modulos();
    document.getElementById("DIV_HOME").style.display = "block";
});

// Ventana Listas de estudiantes// QUERYSELECTOR SE USA PARA EL CLICK EN UN LINK O PARTE DEL DOM//
document.querySelector('#Link_Lista_Estudiantes').addEventListener('click', function(){
    Esconder_Todos_Los_Modulos();
    document.getElementById("DIV_LISTA_ESTUDIANTES").style.display = "block";
});

// Ventana DataTable// QUERYSELECTOR SE USA PARA EL CLICK EN UN LINK O PARTE DEL DOM//
document.querySelector('#Link_DataTable').addEventListener('click', function(){
    Esconder_Todos_Los_Modulos();
    document.getElementById("DIV_DATATABLE").style.display = "block";
});

document.querySelector('#Link_DataTable2').addEventListener('click', function(){
    Esconder_Todos_Los_Modulos();
    document.getElementById("DIV_DATATABLE2").style.display = "block";
});

// Ventana Satelites//  QUERYSELECTOR SE USA PARA EL CLICK EN UN LINK O PARTE DEL DOM//
document.querySelector('#Link_Mant_Satelites').addEventListener('click', function(){
    Esconder_Todos_Los_Modulos();
    document.getElementById("DIV_Mant_Satelites").style.display = "block";
});



