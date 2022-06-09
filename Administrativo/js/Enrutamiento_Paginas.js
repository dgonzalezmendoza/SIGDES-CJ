

//////////////////////////////////////////////
////////REDIRECCIONES DEL MENU SIDEBAR////////
/////////////////////////////////////////////

// Ventana principal//  QUERYSELECTOR SE USA PARA EL CLICK EN UN LINK O PARTE DEL DOM//
document.querySelector('#icono_del_cindea_navbar').addEventListener('click', function(){
    Esconder_Todos_Los_Modulos();
    document.getElementById("DIV_HOME").style.display = "block";
});

// Ventana principal//  QUERYSELECTOR SE USA PARA EL CLICK EN UN LINK O PARTE DEL DOM//
document.querySelector('#Link_Principal').addEventListener('click', function(){
    Esconder_Todos_Los_Modulos();
    document.getElementById("DIV_HOME").style.display = "block";
});

// Módulo Listas de estudiantes// QUERYSELECTOR SE USA PARA EL CLICK EN UN LINK O PARTE DEL DOM//
document.querySelector('#Link_Lista_Estudiantes').addEventListener('click', function(){
    Esconder_Todos_Los_Modulos();
    document.getElementById("DIV_LISTA_ESTUDIANTES").style.display = "block";
});






// Módulo Adecuaciones// QUERYSELECTOR SE USA PARA EL CLICK EN UN LINK O PARTE DEL DOM//
document.querySelector('#Link_Mant_Adecuaciones').addEventListener('click', function(){
    Esconder_Todos_Los_Modulos();
    document.getElementById("DIV_Mant_Adecuaciones").style.display = "block";
    Cargar_Tabla_Mant_Adecuaciones();
});


// Módulo Satelites//  QUERYSELECTOR SE USA PARA EL CLICK EN UN LINK O PARTE DEL DOM//
document.querySelector('#Link_Mant_Satelites').addEventListener('click', function(){
    Esconder_Todos_Los_Modulos();
    document.getElementById("DIV_Mant_Satelites").style.display = "block";
    Cargar_Tabla_Mant_Satelites();
});








// Módulo Parámetros del colegio//  QUERYSELECTOR SE USA PARA EL CLICK EN UN LINK O PARTE DEL DOM//
document.querySelector('#Link_Ges_Ad_Param_Colegio').addEventListener('click', function(){
    Esconder_Todos_Los_Modulos();
    document.getElementById("DIV_Ges_Ad_Param_Colegio").style.display = "block";
    Ver_Parametros_Colegio()
});

// Módulo Periodos Académicos//  QUERYSELECTOR SE USA PARA EL CLICK EN UN LINK O PARTE DEL DOM//
document.querySelector('#Link_Ges_Ad_PerAcademico').addEventListener('click', function(){
    Esconder_Todos_Los_Modulos();
    document.getElementById("DIV_Ges_Ad_Periodo_Academico").style.display = "block";
    Cargar_Tabla_GesAd_PerAcademicos();
});

// Módulo Periodos Académicos//  QUERYSELECTOR SE USA PARA EL CLICK EN UN LINK O PARTE DEL DOM//
document.querySelector('#Link_Ges_Ad_PerTecnico').addEventListener('click', function(){
    Esconder_Todos_Los_Modulos();
    document.getElementById("DIV_Ges_Ad_Periodo_Tecnico").style.display = "block";
    
});






//////////////////////////////// PRUEBAS //////////////////////////////////////////////////////////////
document.querySelector('#Link_DataTable2').addEventListener('click', function(){
    Esconder_Todos_Los_Modulos();
    document.getElementById("DIV_DATATABLE2").style.display = "block";
    Recargar_tabla2();
});

document.querySelector('#Link_DataTable').addEventListener('click', function(){
    Esconder_Todos_Los_Modulos();
    document.getElementById("DIV_DATATABLE").style.display = "block";
});



