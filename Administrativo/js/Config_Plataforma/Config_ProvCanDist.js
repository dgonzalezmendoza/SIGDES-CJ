let Tabla_Config_Provincias; // VARIABLE QUE ALMACENA LA TABLA DE DATOS 
let Primera_vez_carga_tabla_Provincias = true; //DETERMINAR SI ES LA PRIMERA VEZ QUE CARGA LA TABLA

let Tabla_Config_Cantones; // VARIABLE QUE ALMACENA LA TABLA DE DATOS 
let Primera_vez_carga_tabla_Cantones = true; //DETERMINAR SI ES LA PRIMERA VEZ QUE CARGA LA TABLA

let Tabla_Config_Distritos; // VARIABLE QUE ALMACENA LA TABLA DE DATOS 
let Primera_vez_carga_tabla_Distritos = true; //DETERMINAR SI ES LA PRIMERA VEZ QUE CARGA LA TABLA

let Tabla_Config_Barrios; // VARIABLE QUE ALMACENA LA TABLA DE DATOS 
let Primera_vez_carga_tabla_Barrios = true; //DETERMINAR SI ES LA PRIMERA VEZ QUE CARGA LA TABLA


async function Cargar_Tabla_Config_Provincias (){
    if(Primera_vez_carga_tabla_Provincias){
        Primera_vez_carga_tabla_Provincias = false; 
        Tabla_Config_Provincias = await $('#Tabla_Config_Provincias').DataTable({   
            // DESTRUYE LA Tabla_Config_Provincias PARA VOLVERLA A CONSTRUIR (RELOAD O RECARGAS)
            destroy: "true",	
            ajax:{            
                url: "php/Config_Plataforma/CRUD_Provincias.php", 
                method: 'POST', //usamos el metodo POST
                dataType: 'json', // SE PASA A TEXT CUANDO HAY ERROR PARA VERIFICAR
                data:{'opcion': 4}, //enviamos opcion 4 para que haga un SELECT
                dataSrc:"",
                // "success": function(data){ // PARA DETECTAR FALLOS
                //     console.log(data);
                // },
                error: function (jqXHR, exception, error) {
                    console.log('Error status: ' + jqXHR.status);
                    console.log('Exception: ' + exception);
                    console.log('Error message: ' + error);}
            },
            columns: [
                { "data": "Prov_Codigo" },
                { "data": "Prov_Nombre" },
                { "defaultContent": `<div class='text-center'>
                                        <div class='btn-group'>
                                            <button class='btn btn-primary btn-rounded btn-sm Btn_Editar_Conf_Provincia' title='Editar'>
                                                <i class='fas fa-pencil-alt'></i>
                                                Editar
                                            </button><button class='btn btn-danger btn-rounded btn-sm Btn_Borrar_Conf_Provincia' title='Borrar'>
                                                <i class='fas fa-trash-alt'></i>
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>`}
            ],
            dom: 'lrtip', //DESAPARECE EL INPUT O CAJA DE BÚSQUEDA ORIGINAL DEL DATATABLE
            paging: true, //PARA NO PAGINAR LOS REGISTROS
            bFilter: true, // DESACTIVAR FILTRO DE BÚSQUEDA
            bInfo: true, //DESACTIVAR INFORMACIÓN DE LA TABLA
            language: {//PARA USAR EL IDIOMA ESPAÑOL EN EL DATA TABLE
                "url": "../dist/js/pages/datatable/Spanish.json"
            },
        }); 
    }else{
        Tabla_Config_Provincias.ajax.reload(null, false);
    }
}

async function Cargar_Tabla_Config_Cantones (){
    if(Primera_vez_carga_tabla_Cantones){
        Primera_vez_carga_tabla_Cantones = false; 
        Tabla_Config_Cantones = await $('#Tabla_Config_Cantones').DataTable({   
            // DESTRUYE LA Tabla_Config_Provincias PARA VOLVERLA A CONSTRUIR (RELOAD O RECARGAS)
            destroy: "true",	
            ajax:{            
                url: "php/Config_Plataforma/CRUD_Cantones.php", 
                method: 'POST', //usamos el metodo POST
                dataType: 'json', // SE PASA A TEXT CUANDO HAY ERROR PARA VERIFICAR
                data:{'opcion': 4}, //enviamos opcion 4 para que haga un SELECT
                dataSrc:"",
                // "success": function(data){ // PARA DETECTAR FALLOS
                //     console.log(data);
                // },
                error: function (jqXHR, exception, error) {
                    console.log('Error status: ' + jqXHR.status);
                    console.log('Exception: ' + exception);
                    console.log('Error message: ' + error);}
            },
            columns: [
                { "data": "Cant_Codigo" },
                { "data": "Cant_Nombre" },
                { "data": "Prov_Nombre" },
                { "data": null, 
                sortable: false, // DESACTIVA LA OPCIÓN DE "ORDENAR COLUMNA" 
                    "render": function (Mi_Lector) {
                        
                        return `<div class='text-center'>
                                    <div class='btn-group'>
                                        <button class='btn btn-primary btn-rounded btn-sm Btn_Editar_Conf_Canton' title='Editar' 
                                        data-ValorProvincia="${Mi_Lector.Prov_Codigo}">
                                            <i class='fas fa-pencil-alt'></i>
                                            Editar
                                        </button><button class='btn btn-danger btn-rounded btn-sm Btn_Borrar_Conf_Canton' title='Borrar'>
                                            <i class='fas fa-trash-alt'></i>
                                            Eliminar
                                        </button>
                                    </div>
                                </div>`
                    }
                }
            ],
            dom: 'lrtip', //DESAPARECE EL INPUT O CAJA DE BÚSQUEDA ORIGINAL DEL DATATABLE
            paging: true, //PARA NO PAGINAR LOS REGISTROS
            bFilter: true, // DESACTIVAR FILTRO DE BÚSQUEDA
            bInfo: true, //DESACTIVAR INFORMACIÓN DE LA TABLA
            language: {//PARA USAR EL IDIOMA ESPAÑOL EN EL DATA TABLE
                "url": "../dist/js/pages/datatable/Spanish.json"
            },
        }); 
    }else{
        Tabla_Config_Cantones.ajax.reload(null, false);
    }
}

async function Cargar_Tabla_Config_Distritos (){
    if(Primera_vez_carga_tabla_Distritos){
        Primera_vez_carga_tabla_Distritos = false; 
        Tabla_Config_Distritos = await $('#Tabla_Config_Distritos').DataTable({   
            // DESTRUYE LA Tabla_Config_Provincias PARA VOLVERLA A CONSTRUIR (RELOAD O RECARGAS)
            destroy: "true",	
            ajax:{            
                url: "php/Config_Plataforma/CRUD_Distritos.php", 
                method: 'POST', //usamos el metodo POST
                dataType: 'json', // SE PASA A TEXT CUANDO HAY ERROR PARA VERIFICAR
                data:{'opcion': 4}, //enviamos opcion 4 para que haga un SELECT
                dataSrc:"",
                // "success": function(data){ // PARA DETECTAR FALLOS
                //     console.log(data);
                // },
                error: function (jqXHR, exception, error) {
                    console.log('Error status: ' + jqXHR.status);
                    console.log('Exception: ' + exception);
                    console.log('Error message: ' + error);}
            },
            columns: [
                { "data": "Dist_Codigo" },
                { "data": "Dist_Nombre" },
                { "data": "Cant_Nombre" },
                { "data": "Prov_Nombre" },
                { "data": null, 
                    sortable: false, // DESACTIVA LA OPCIÓN DE "ORDENAR COLUMNA" 
                    "render": function (Mi_Lector) {
                        
                        return `<div class='text-center'>
                                    <div class='btn-group'>
                                        <button class='btn btn-primary btn-rounded btn-sm Btn_Editar_Conf_Distrito' title='Editar' 
                                        data-ValorProvincia="${Mi_Lector.Prov_Codigo}" data-ValorCanton="${Mi_Lector.Cant_Codigo}">
                                            <i class='fas fa-pencil-alt'></i>
                                            Editar
                                        </button><button class='btn btn-danger btn-rounded btn-sm Btn_Borrar_Conf_Distrito' title='Borrar'>
                                            <i class='fas fa-trash-alt'></i>
                                            Eliminar
                                        </button>
                                    </div>
                                </div>`
                    }
                }
            ],
            dom: 'lrtip', //DESAPARECE EL INPUT O CAJA DE BÚSQUEDA ORIGINAL DEL DATATABLE
            paging: true, //PARA NO PAGINAR LOS REGISTROS
            bFilter: true, // DESACTIVAR FILTRO DE BÚSQUEDA
            bInfo: true, //DESACTIVAR INFORMACIÓN DE LA TABLA
            language: {//PARA USAR EL IDIOMA ESPAÑOL EN EL DATA TABLE
                "url": "../dist/js/pages/datatable/Spanish.json"
            },
        }); 
    }else{
        Tabla_Config_Distritos.ajax.reload(null, false);
    }
}

async function Cargar_Tabla_Config_Barrios (){
    if(Primera_vez_carga_tabla_Barrios){
        Primera_vez_carga_tabla_Barrios = false; 
        Tabla_Config_Barrios = await $('#Tabla_Config_Barrios').DataTable({   
            // DESTRUYE LA Tabla_Config_Provincias PARA VOLVERLA A CONSTRUIR (RELOAD O RECARGAS)
            destroy: "true",	
            ajax:{            
                url: "php/Config_Plataforma/CRUD_Barrios.php", 
                method: 'POST', //usamos el metodo POST
                dataType: 'json', // SE PASA A TEXT CUANDO HAY ERROR PARA VERIFICAR
                data:{'opcion': 4}, //enviamos opcion 4 para que haga un SELECT
                dataSrc:"",
                // "success": function(data){ // PARA DETECTAR FALLOS
                //     console.log(data);
                // },
                error: function (jqXHR, exception, error) {
                    console.log('Error status: ' + jqXHR.status);
                    console.log('Exception: ' + exception);
                    console.log('Error message: ' + error);}
            },
            columns: [
                { "data": "Barrio_Codigo" },
                { "data": "Barrio_Nombre" },
                { "data": "Dist_Nombre" },
                { "data": "Cant_Nombre" },
                { "data": "Prov_Nombre" },
                { "data": null, 
                    sortable: false, // DESACTIVA LA OPCIÓN DE "ORDENAR COLUMNA" 
                    "render": function (Mi_Lector) {
                        
                        return `<div class='text-center'>
                                    <div class='btn-group'>
                                        <button class='btn btn-primary btn-rounded btn-sm Btn_Editar_Conf_Barrio' title='Editar' 
                                        data-ValorProvincia="${Mi_Lector.Prov_Codigo}" data-ValorCanton="${Mi_Lector.Cant_Codigo}" data-ValorDistrito="${Mi_Lector.Dist_Codigo}">
                                            <i class='fas fa-pencil-alt'></i>
                                            Editar
                                        </button><button class='btn btn-danger btn-rounded btn-sm Btn_Borrar_Conf_Barrio' title='Borrar'>
                                            <i class='fas fa-trash-alt'></i>
                                            Eliminar
                                        </button>
                                    </div>
                                </div>`
                    }
                }
            ],
            dom: 'lrtip', //DESAPARECE EL INPUT O CAJA DE BÚSQUEDA ORIGINAL DEL DATATABLE
            paging: true, //PARA NO PAGINAR LOS REGISTROS
            bFilter: true, // DESACTIVAR FILTRO DE BÚSQUEDA
            bInfo: true, //DESACTIVAR INFORMACIÓN DE LA TABLA
            language: {//PARA USAR EL IDIOMA ESPAÑOL EN EL DATA TABLE
                "url": "../dist/js/pages/datatable/Spanish.json"
            },
        }); 
    }else{
        Tabla_Config_Barrios.ajax.reload(null, false);
    }
}


document.getElementById('BtnNuevo_Config_Provincia').addEventListener('click', function () {
    opcion_para_CRUD = 1; //INDICAR QUE ES UN INSERT NUEVO           
    document.getElementById('Form_Config_Provincias').reset(); //SE USA PARA LIMPIAR LOS CAMPOS
    //ASIGNA COLOR AL HEADER O ENCABEZADO DEL MODAL
    document.getElementById('Header_Modal_Agregar_Config_Provincias').style.backgroundColor = "rgba(26, 214, 11, 0.66)";
   //TÍTULO DEL MODAL
    document.getElementById('Título_Modal_Config_Provincias').innerText = "Agregar Provincia";
    $('#Modal_config_Provincias').modal('show');	//MOSTRAR EL MODAL SOLO CON JQUERY 

    //PONER EL FOCO SOBRE EL CUADRO DE TEXTO THAST QUE ESTÉ CARGADO EL MODAL (600ms DE ESPERA)
    window.setTimeout(function () { 
        document.getElementById('Txt_Config_Prov_Codigo').focus(); 
    }, 600);
});

document.getElementById('BtnNuevo_Config_Canton').addEventListener('click', function () {
    opcion_para_CRUD = 1; //INDICAR QUE ES UN INSERT NUEVO           
    document.getElementById('Form_Config_Cantones').reset(); //SE USA PARA LIMPIAR LOS CAMPOS
    //ASIGNA COLOR AL HEADER O ENCABEZADO DEL MODAL
    document.getElementById('Header_Modal_Agregar_Config_Cantones').style.backgroundColor = "rgba(26, 214, 11, 0.66)";
   //TÍTULO DEL MODAL
    document.getElementById('Título_Modal_Config_Cantones').innerText = "Agregar Cantón";
    $('#Modal_config_Cantones').modal('show');	//MOSTRAR EL MODAL SOLO CON JQUERY 

    //PONER EL FOCO SOBRE EL CUADRO DE TEXTO THAST QUE ESTÉ CARGADO EL MODAL (600ms DE ESPERA)
    window.setTimeout(function () { 
        document.getElementById('Select_Config_Cant_Provincia').focus(); 
    }, 600);


     //Limpiar TODOS LOS SELECT
     Limpiar_Select(document.getElementById('Select_Config_Cant_Provincia'));
 
     //Llenar el select de datos
     Llenar_Select_Provincias(document.getElementById('Select_Config_Cant_Provincia'));
});

document.getElementById('BtnNuevo_Config_Distrito').addEventListener('click', function () {
    opcion_para_CRUD = 1; //INDICAR QUE ES UN INSERT NUEVO           
    document.getElementById('Form_Config_Distritos').reset(); //SE USA PARA LIMPIAR LOS CAMPOS
    //ASIGNA COLOR AL HEADER O ENCABEZADO DEL MODAL
    document.getElementById('Header_Modal_Agregar_Config_Distritos').style.backgroundColor = "rgba(26, 214, 11, 0.66)";
   //TÍTULO DEL MODAL
    document.getElementById('Título_Modal_Config_Distritos').innerText = "Agregar Distrito";
    $('#Modal_config_Distritos').modal('show');	//MOSTRAR EL MODAL SOLO CON JQUERY 

    //PONER EL FOCO SOBRE EL CUADRO DE TEXTO THAST QUE ESTÉ CARGADO EL MODAL (600ms DE ESPERA)
    window.setTimeout(function () { 
        document.getElementById('Select_Config_Dist_Provincia').focus(); 
    }, 600);

     //Limpiar TODOS LOS SELECT
     Limpiar_Select(document.getElementById('Select_Config_Dist_Provincia'));
     Limpiar_Select(document.getElementById('Select_Config_Dist_Canton'));
 
     //Llenar el select de datos
     Llenar_Select_Provincias(document.getElementById('Select_Config_Dist_Provincia'));
});

document.getElementById('BtnNuevo_Config_Barrio').addEventListener('click', function () {
    opcion_para_CRUD = 1; //INDICAR QUE ES UN INSERT NUEVO           
    document.getElementById('Form_Config_Barrios').reset(); //SE USA PARA LIMPIAR LOS CAMPOS
    //ASIGNA COLOR AL HEADER O ENCABEZADO DEL MODAL
    document.getElementById('Header_Modal_Agregar_Config_Barrios').style.backgroundColor = "rgba(26, 214, 11, 0.66)";
   //TÍTULO DEL MODAL
    document.getElementById('Título_Modal_Config_Barrios').innerText = "Agregar Barrio";
    $('#Modal_config_Barrios').modal('show');	//MOSTRAR EL MODAL SOLO CON JQUERY 

    //PONER EL FOCO SOBRE EL CUADRO DE TEXTO THAST QUE ESTÉ CARGADO EL MODAL (600ms DE ESPERA)
    window.setTimeout(function () { 
        document.getElementById('Select_Config_Barr_Provincia').focus(); 
    }, 600);

    //Limpiar TODOS LOS SELECT
    Limpiar_Select(document.getElementById('Select_Config_Barr_Provincia'));
    Limpiar_Select(document.getElementById('Select_Config_Barr_Canton'));
    Limpiar_Select(document.getElementById('Select_Config_Barr_Distrito'));

    //Llenar el select de datos
    Llenar_Select_Provincias(document.getElementById('Select_Config_Barr_Provincia'));
});


$(document).on("click", ".Btn_Editar_Conf_Barrio", async function(){
    opcion_para_CRUD = 2;//INDICA QUE ES UN UPDATE
    Index_de_Fila = Tabla_Config_Barrios.row($(this).closest('tr')).index(); //CAPTURAR EL NUMERO DE FILA DEL CLICK
    ///////////// Tabla_Config_Nacionalidades.cell(5,2).data()  === CON ESTO OBTENGO LOS DATOS DE UNA CELDA /////
    Informacion_Fila = $(this).closest("tr"); //OBTENGO LOS DATOS DE LA FILA ENTERA CON SUS COLUMNAS	

    document.getElementById('Form_Config_Barrios').reset(); //SE USA PARA LIMPIAR LOS CAMPOS
     //let numero_prueba  = parseInt(Informacion_Fila.find('td:eq(0)').text()); //CAPTURO DATO Y LOS TRANFORMO EN ENTERO	            
     
     /// TRAEMOS DE LAS VARIABLS DATASET DEL BOTÓN LOS VALORES /////
    let Valor_Provincia = this.dataset.valorprovincia;
    let Valor_Canton = this.dataset.valorcanton;
    let Valor_Distrito = this.dataset.valordistrito;
   
    await Limpiar_Select_al_Editar_Barrios();
    await Llenar_Select_ProvCantDist_al_Editar_Barrios(Valor_Provincia, Valor_Canton, Valor_Distrito);
   
    let Id_Barrio = Informacion_Fila.find('td:eq(0)').text();
    let Nombre_Barrio = Informacion_Fila.find('td:eq(1)').text();
     
    document.getElementById('Txt_Config_Barr_CodIni').value = Valor_Distrito 
    document.getElementById('Txt_Config_Barr_CodFinal').value = Id_Barrio
    document.getElementById('Txt_Config_Barr_Codigo').value = Id_Barrio.substring(5, 8);
    document.getElementById('Txt_Config_Barr_Nombre').value = Nombre_Barrio

     // VARIABLE PARA INDICAR ID DEL USUARIO A MODIFICAR
     Id_a_Editar = Id_Barrio;

     // COLOR DEL HEADER DEL MODAL
     document.getElementById('Header_Modal_Agregar_Config_Barrios').style.backgroundColor = "rgba(116, 96, 238, 0.5)";
    // TITULO DEL MODAL
    document.getElementById('Título_Modal_Config_Barrios').innerText = "Editar Barrio";	
     // MOSTRAR EL MODAL
     $('#Modal_config_Barrios').modal('show');

     // PONER EL FOCO DESPUES DE MEDIO SEGUNDO EN EL CAMPO ASIGNADO
     window.setTimeout(function () { 
        document.getElementById('Txt_Config_Barr_Codigo').focus(); 
    }, 600);

    
});

$(document).on("click", ".Btn_Editar_Conf_Distrito", async function(){
    opcion_para_CRUD = 2;//INDICA QUE ES UN UPDATE
    Index_de_Fila = Tabla_Config_Distritos.row($(this).closest('tr')).index(); //CAPTURAR EL NUMERO DE FILA DEL CLICK
    ///////////// Tabla_Config_Nacionalidades.cell(5,2).data()  === CON ESTO OBTENGO LOS DATOS DE UNA CELDA /////
    Informacion_Fila = $(this).closest("tr"); //OBTENGO LOS DATOS DE LA FILA ENTERA CON SUS COLUMNAS	

    document.getElementById('Form_Config_Distritos').reset(); //SE USA PARA LIMPIAR LOS CAMPOS
     //let numero_prueba  = parseInt(Informacion_Fila.find('td:eq(0)').text()); //CAPTURO DATO Y LOS TRANFORMO EN ENTERO	            
     
     /// TRAEMOS DE LAS VARIABLS DATASET DEL BOTÓN LOS VALORES /////
    let Valor_Provincia = this.dataset.valorprovincia;
    let Valor_Canton = this.dataset.valorcanton;
   
    await Limpiar_Select_al_Editar_Distritos();
    await Llenar_Select_ProvCantDist_al_Editar_Distrito(Valor_Provincia, Valor_Canton);
   
    let Id_Distrito = Informacion_Fila.find('td:eq(0)').text();
    let Nombre_Distrito = Informacion_Fila.find('td:eq(1)').text();
     
    document.getElementById('Txt_Config_Dist_CodIni').value = Valor_Canton; 
    document.getElementById('Txt_Config_Dist_CodFinal').value = Id_Distrito;
    document.getElementById('Txt_Config_Dist_Codigo').value = Id_Distrito.substring(3, 6);
    document.getElementById('Txt_Config_Dist_Nombre').value = Nombre_Distrito;

     // VARIABLE PARA INDICAR ID DEL USUARIO A MODIFICAR
     Id_a_Editar = Id_Distrito;

     // COLOR DEL HEADER DEL MODAL
     document.getElementById('Header_Modal_Agregar_Config_Distritos').style.backgroundColor = "rgba(116, 96, 238, 0.5)";
    // TITULO DEL MODAL
    document.getElementById('Título_Modal_Config_Distritos').innerText = "Editar Distrito";	
     // MOSTRAR EL MODAL
     $('#Modal_config_Distritos').modal('show');

     // PONER EL FOCO DESPUES DE MEDIO SEGUNDO EN EL CAMPO ASIGNADO
     window.setTimeout(function () { 
        document.getElementById('Txt_Config_Dist_Codigo').focus(); 
    }, 600);

    
});

$(document).on("click", ".Btn_Editar_Conf_Canton", async function(){
    opcion_para_CRUD = 2;//INDICA QUE ES UN UPDATE
    Index_de_Fila = Tabla_Config_Cantones.row($(this).closest('tr')).index(); //CAPTURAR EL NUMERO DE FILA DEL CLICK
    ///////////// Tabla_Config_Nacionalidades.cell(5,2).data()  === CON ESTO OBTENGO LOS DATOS DE UNA CELDA /////
    Informacion_Fila = $(this).closest("tr"); //OBTENGO LOS DATOS DE LA FILA ENTERA CON SUS COLUMNAS	

    document.getElementById('Form_Config_Cantones').reset(); //SE USA PARA LIMPIAR LOS CAMPOS
     //let numero_prueba  = parseInt(Informacion_Fila.find('td:eq(0)').text()); //CAPTURO DATO Y LOS TRANFORMO EN ENTERO	            
     
     /// TRAEMOS DE LAS VARIABLS DATASET DEL BOTÓN LOS VALORES /////
    let Valor_Provincia = this.dataset.valorprovincia;
   
    await Limpiar_Select_al_Editar_Cantones();
    await Llenar_Select_ProvCantDist_al_Editar_Cantones(Valor_Provincia);
   
    let Id_Canton = Informacion_Fila.find('td:eq(0)').text();
    let Nombre_Canton = Informacion_Fila.find('td:eq(1)').text();
     
    document.getElementById('Txt_Config_Cant_CodIni').value = Valor_Provincia; 
    document.getElementById('Txt_Config_Cant_CodFinal').value = Id_Canton;
    document.getElementById('Txt_Config_Cant_Codigo').value = Id_Canton.substring(1, 4);
    document.getElementById('Txt_Config_Cant_Nombre').value = Nombre_Canton;

     // VARIABLE PARA INDICAR ID DEL USUARIO A MODIFICAR
     Id_a_Editar = Id_Canton;

     // COLOR DEL HEADER DEL MODAL
     document.getElementById('Header_Modal_Agregar_Config_Cantones').style.backgroundColor = "rgba(116, 96, 238, 0.5)";
    // TITULO DEL MODAL
    document.getElementById('Título_Modal_Config_Cantones').innerText = "Editar Cantón";	
     // MOSTRAR EL MODAL
     $('#Modal_config_Cantones').modal('show');

     // PONER EL FOCO DESPUES DE MEDIO SEGUNDO EN EL CAMPO ASIGNADO
     window.setTimeout(function () { 
        document.getElementById('Txt_Config_Cant_Codigo').focus(); 
    }, 600);

    
});


$(document).on("click", ".Btn_Borrar_Conf_Barrio", function(){
    //GUARDO EL OBJETO EN LA VARIABLE
  
    //ASIGNO A LA VARIABLE EL TEXTO QUE SE ENCUENTRA EN LA COLUMNA USUARIOS Y EN LA FILA DONDE ME ENCUENTRO
    let Id_Barrio_a_Borrar = $(this).closest('tr').find('td:eq(0)').text() ;	
    let Nombre_Barrio = $(this).closest('tr').find('td:eq(1)').text()
    opcion_para_CRUD = 3; //OPCION ELIMINAR
    
    //USO DEL SWEET ALERT PARA LOS DIALOGOS DE CONFIRMACIÓN
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'mr-2 btn btn-danger'
        },
        buttonsStyling: false,
    })

    swalWithBootstrapButtons.fire({
        title: 'Esta seguro?',
        text: "Se eliminará el barrio: " + Nombre_Barrio,
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Eliminar',
        cancelButtonText: 'No, Cancelar',
        reverseButtons: true
    }).then((result) => {
        if (result.value) {
            
           
            let formdata = new FormData();
            formdata.append('opcion', opcion_para_CRUD);
            formdata.append('Id_Barrio_Seleccionado', Id_Barrio_a_Borrar);
            fetch('php/Config_Plataforma/CRUD_Barrios.php', { 
                method: "POST",
                body: formdata
            }) 
            .then(respuesta => {
                if (respuesta.ok){ 
                    return respuesta.text(); //RESPUESTA TIPO TEXTO
                }else{
                    throw new error_Php('No se puede acceder al PHP');
                }	 
            })
            .then(datos => {
                if (datos.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                    NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
                }else if(datos.substring(0,14) == "ERROR BACK-END"){
                    Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                    'Error de acción',5000)
                    console.log(datos);
                }else{
                    if(opcion_para_CRUD == 3){
                        Mensaje_Notificacion_Success_Toast("El barrio se eliminó correctamente","Borrado",3000);
                        Tabla_Config_Barrios.ajax.reload(null, false);
                    }
                    
                }
            })
            .catch(error => {
                console.log("Error al ejecutar el fetch CRUD de la tabla Nacionalidades - " + error); 
            })

        } else if (
            // Read more about handling dismissals
            result.dismiss === Swal.DismissReason.cancel
        ) {
        
        }
    }) 
});

$(document).on("click", ".Btn_Borrar_Conf_Distrito", function(){
    //GUARDO EL OBJETO EN LA VARIABLE
  
    //ASIGNO A LA VARIABLE EL TEXTO QUE SE ENCUENTRA EN LA COLUMNA USUARIOS Y EN LA FILA DONDE ME ENCUENTRO
    let Id_Distrito_a_Borrar = $(this).closest('tr').find('td:eq(0)').text() ;	
    let Nombre_Distrito = $(this).closest('tr').find('td:eq(1)').text()
    opcion_para_CRUD = 3; //OPCION ELIMINAR
    
    //USO DEL SWEET ALERT PARA LOS DIALOGOS DE CONFIRMACIÓN
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'mr-2 btn btn-danger'
        },
        buttonsStyling: false,
    })

    swalWithBootstrapButtons.fire({
        title: 'Esta seguro?',
        text: "Se eliminará el distrito: " + Nombre_Distrito,
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Eliminar',
        cancelButtonText: 'No, Cancelar',
        reverseButtons: true
    }).then((result) => {
        if (result.value) {
            
           
            let formdata4 = new FormData();
            formdata4.append('Distrito', Id_Distrito_a_Borrar);
            formdata4.append('opcion', 6);
            fetch('php/Config_Plataforma/CRUD_Barrios.php', { 
                method: "POST",
                body: formdata4
            }) 
            .then(respuesta4 => {
                if (respuesta4.ok){ 

                    return respuesta4.text(); //RESPUESTA TIPO TEXTO
                }else{
                    throw new error_Php('No se puede acceder al PHP');
                }	 
            })
            .then(datos4 => {
                if (datos4.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                    NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
                }else if(datos4.substring(0,14) == "ERROR BACK-END"){
                    Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                    'Error de acción',10000)
                    console.log(datos4);
                }else{
                    let Mis_Datos4 = JSON.parse(datos4);
                    //SI NI HAY DATOS VINCULADOS ENTONCES ACTUALIZA
                    if(Mis_Datos4.length == 0){  
                        let formdata = new FormData();
                        formdata.append('opcion', opcion_para_CRUD);
                        formdata.append('Id_Dist_Seleccionado', Id_Distrito_a_Borrar);
                        fetch('php/Config_Plataforma/CRUD_Distritos.php', { 
                            method: "POST",
                            body: formdata
                        }) 
                        .then(respuesta => {
                            if (respuesta.ok){ 
                                return respuesta.text(); //RESPUESTA TIPO TEXTO
                            }else{
                                throw new error_Php('No se puede acceder al PHP');
                            }	 
                        })
                        .then(datos => {
                            if (datos.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                                NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
                            }else if(datos.substring(0,14) == "ERROR BACK-END"){
                                Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                                'Error de acción',5000)
                                console.log(datos);
                            }else{
                                if(opcion_para_CRUD == 3){
                                    Mensaje_Notificacion_Success_Toast("El distrito se eliminó correctamente","Borrado",3000);
                                    Tabla_Config_Distritos.ajax.reload(null, false);
                                }
                                
                            }
                        })
                        .catch(error => {
                            console.log("Error al ejecutar el fetch CRUD de la tabla DISTRITO - " + error); 
                        })
                                    

                                }else{
                                    Mensaje_Notificacion_Warning_Toast("No se puede eliminar el código de este Distrito porque tiene barrios vinculados","No se realiza acción",10000);
                                }
                            }
                        })
                        .catch(error => {
                            console.log("Error al ejecutar el fetch CRUD DISTRITOS ACTUALIZAR - " + error); 
                        })  



        } else if (
            // Read more about handling dismissals
            result.dismiss === Swal.DismissReason.cancel
        ) {
        
        }
    }) 
});

$(document).on("click", ".Btn_Borrar_Conf_Canton", function(){
   //GUARDO EL OBJETO EN LA VARIABLE
  
    //ASIGNO A LA VARIABLE EL TEXTO QUE SE ENCUENTRA EN LA COLUMNA USUARIOS Y EN LA FILA DONDE ME ENCUENTRO
    let Id_Canton_a_Borrar = $(this).closest('tr').find('td:eq(0)').text() ;	
    let Nombre_Canton = $(this).closest('tr').find('td:eq(1)').text()
    opcion_para_CRUD = 3; //OPCION ELIMINAR
    
    //USO DEL SWEET ALERT PARA LOS DIALOGOS DE CONFIRMACIÓN
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'mr-2 btn btn-danger'
        },
        buttonsStyling: false,
    })

    swalWithBootstrapButtons.fire({
        title: 'Esta seguro?',
        text: "Se eliminará el cantón: " + Nombre_Canton,
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Eliminar',
        cancelButtonText: 'No, Cancelar',
        reverseButtons: true
    }).then((result) => {
        if (result.value) {
            
           
            let formdata4 = new FormData();
            formdata4.append('Canton', Id_Canton_a_Borrar);
            formdata4.append('opcion', 5);
            fetch('php/Config_Plataforma/CRUD_Distritos.php', { 
                method: "POST",
                body: formdata4
            }) 
            .then(respuesta4 => {
                if (respuesta4.ok){ 

                    return respuesta4.text(); //RESPUESTA TIPO TEXTO
                }else{
                    throw new error_Php('No se puede acceder al PHP');
                }	 
            })
            .then(datos4 => {
                if (datos4.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                    NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
                }else if(datos4.substring(0,14) == "ERROR BACK-END"){
                    Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                    'Error de acción',10000)
                    console.log(datos4);
                }else{
                    let Mis_Datos4 = JSON.parse(datos4);
                    //SI NO HAY DATOS VINCULADOS ENTONCES ACTUALIZA
                    if(Mis_Datos4.length == 0){  
                        let formdata = new FormData();
                        formdata.append('opcion', opcion_para_CRUD);
                        formdata.append('Id_Cant_Seleccionado', Id_Canton_a_Borrar);
                        fetch('php/Config_Plataforma/CRUD_Cantones.php', { 
                            method: "POST",
                            body: formdata
                        }) 
                        .then(respuesta => {
                            if (respuesta.ok){ 
                                return respuesta.text(); //RESPUESTA TIPO TEXTO
                            }else{
                                throw new error_Php('No se puede acceder al PHP');
                            }	 
                        })
                        .then(datos => {
                            if (datos.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                                NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
                            }else if(datos.substring(0,14) == "ERROR BACK-END"){
                                Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                                'Error de acción',5000)
                                console.log(datos);
                            }else{
                                if(opcion_para_CRUD == 3){
                                    Mensaje_Notificacion_Success_Toast("El cantón se eliminó correctamente","Borrado",3000);
                                    Tabla_Config_Cantones.ajax.reload(null, false);
                                }
                                
                            }
                        })
                        .catch(error => {
                            console.log("Error al ejecutar el fetch CRUD de la tabla CANTONES - " + error); 
                        })
                                    

                                }else{
                                    Mensaje_Notificacion_Warning_Toast("No se puede eliminar el código de este cantón porque tiene uno o más distritos vinculados","No se realiza acción",10000);
                                }
                            }
                        })
                        .catch(error => {
                            console.log("Error al ejecutar el fetch CRUD CANTONES ELIMINAR - " + error); 
                        })  



        } else if (
            // Read more about handling dismissals
            result.dismiss === Swal.DismissReason.cancel
        ) {
        
        }
    }) 
});


        ///////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////  BARRIOS /////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////

 ////  AL CAMBIAR DE OPCIÓN EN EL SELECT  ///////
document.getElementById('Select_Config_Barr_Provincia').addEventListener('change', function(){
    
   Limpiar_Select(document.getElementById('Select_Config_Barr_Canton'));
   Limpiar_Select(document.getElementById('Select_Config_Barr_Distrito'));
    if(document.getElementById('Select_Config_Barr_Provincia').value != '0'){
        let El_select_a_Enviar = document.getElementById('Select_Config_Barr_Canton');
        let El_Valor_del_Select = document.getElementById('Select_Config_Barr_Provincia').value;
        Llenar_Select_Cantones(El_select_a_Enviar, El_Valor_del_Select)
    }
    document.getElementById('Txt_Config_Barr_CodIni').value ='';
    document.getElementById('Txt_Config_Barr_CodFinal').value = '';    
});

 ////  AL CAMBIAR DE OPCIÓN EN EL SELECT  ///////
document.getElementById('Select_Config_Barr_Canton').addEventListener('change', function(){
    
    Limpiar_Select(document.getElementById('Select_Config_Barr_Distrito'));
    if(document.getElementById('Select_Config_Barr_Canton').value != '0'){
        let El_select_a_Enviar = document.getElementById('Select_Config_Barr_Distrito');
        let El_Valor_del_Select = document.getElementById('Select_Config_Barr_Canton').value;
        Llenar_Select_Distritos(El_select_a_Enviar, El_Valor_del_Select)
     }
     document.getElementById('Txt_Config_Barr_CodIni').value ='';
     document.getElementById('Txt_Config_Barr_CodFinal').value = '';   
     
 });
 
 ////  AL CAMBIAR DE OPCIÓN EN EL SELECT  ///////
document.getElementById('Select_Config_Barr_Distrito').addEventListener('change', function(){
    //Limpiar_Select(document.getElementById('Select_Config_Barr_Distrito'));
    if(document.getElementById('Select_Config_Barr_Distrito').value != '0'){
        let El_Valor_del_Select = document.getElementById('Select_Config_Barr_Distrito').value;
        document.getElementById('Txt_Config_Barr_CodIni').value = El_Valor_del_Select;
        document.getElementById('Txt_Config_Barr_CodFinal').value = El_Valor_del_Select + document.getElementById('Txt_Config_Barr_Codigo').value;
     }else{
        document.getElementById('Txt_Config_Barr_CodIni').value ='';
        document.getElementById('Txt_Config_Barr_CodFinal').value = '';
     }
 });

//// AL TERMINAR DE PRESIONAR EN CAMPO DE TEXTO
 document.getElementById('Txt_Config_Barr_Codigo').addEventListener('keyup', function (e) {
    if (document.getElementById('Select_Config_Barr_Distrito').value != '0'){
        document.getElementById('Txt_Config_Barr_CodFinal').value = document.getElementById('Txt_Config_Barr_CodIni').value + document.getElementById('Txt_Config_Barr_Codigo').value;
    }   
 });

 document.getElementById('Form_Config_Barrios').addEventListener('submit', function(e){                       
    e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página 
    Insertar_Actualizar_Tabla_Barrios();
    // await Recargar_Tabla_Config_Nacionalidades();
});

async function Limpiar_Select_al_Editar_Barrios(){
    //Limpiar TODOS LOS SELECT
   await Limpiar_Select(document.getElementById('Select_Config_Barr_Provincia'));
   await Limpiar_Select(document.getElementById('Select_Config_Barr_Canton'));
   await Limpiar_Select(document.getElementById('Select_Config_Barr_Distrito'));

    //Llenar el select de datos
   await Llenar_Select_Provincias(document.getElementById('Select_Config_Barr_Provincia'));
}

async function Llenar_Select_ProvCantDist_al_Editar_Barrios(Prov, Cant, Dist){
   await (document.getElementById('Select_Config_Barr_Provincia').value = Prov);
   await Llenar_Select_Cantones(document.getElementById('Select_Config_Barr_Canton'),Prov);
   await (document.getElementById('Select_Config_Barr_Canton').value = Cant);
   await Llenar_Select_Distritos(document.getElementById('Select_Config_Barr_Distrito'),Cant);
   await (document.getElementById('Select_Config_Barr_Distrito').value = Dist);
}

async function Insertar_Actualizar_Tabla_Barrios(){
    if(document.getElementById('Select_Config_Barr_Provincia').value != '0' &&
    document.getElementById('Select_Config_Barr_Canton').value != '0' &&
    document.getElementById('Select_Config_Barr_Distrito').value != '0'){
        if(ContartNumberos(document.getElementById('Txt_Config_Barr_Codigo').value) == 2 ){
            let Id_Barrio = document.getElementById('Txt_Config_Barr_CodFinal').value;
            let Nombre_Barrio = document.getElementById('Txt_Config_Barr_Nombre').value;
            let Distrito = document.getElementById('Txt_Config_Barr_CodIni').value;
            if (Id_Barrio != '' && Nombre_Barrio != '' && Distrito != ''){ //VALIDAR ESPACIOS EN BLANCO EN LOS INPUT TXT 
                if (opcion_para_CRUD == 1){
                    Verifica_si_Barrio_existe_en_la_tabla_e_Inserta(Id_Barrio,Nombre_Barrio,Distrito);
                }else if(opcion_para_CRUD == 2){
                    Verifica_si_Barrio_existe_en_la_tabla_al_Editar_y_Actualiza(Id_Barrio,Nombre_Barrio,Distrito); 
                }
            } 
        }else{
            Swal.fire({
                type:'warning',
                title:'El Id del barrio debe tener 2 digitos',
            });
            return false; 
        }
            
    }else{
        Swal.fire({
            type:'warning',
            title:'Debe seleccionar todas las opciones',
        });
        return false; 
    }
     
};

async function Verifica_si_Barrio_existe_en_la_tabla_e_Inserta(Id_Barrio,Nombre_Barrio,Distrito){
    //// FETCH PARA VERIFICAR PRIMERO SI EL ID EXISTE EN LA BD /////
    let formdata = new FormData();
    formdata.append('Id_Barrio_Seleccionado',Id_Barrio);
    formdata.append('opcion', 5);
    fetch ('php/Config_Plataforma/CRUD_Barrios.php', {
        method: "POST",
        body: formdata
    })
    .then(respuesta => {
        if(respuesta.ok){
            return respuesta.text();
        }else{
            throw new error_Php('No se puede acceder al PHP');
        }
    }) 
    .then(datos => {
        if (datos.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
            NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
        }else if(datos.substring(0,14) == "ERROR BACK-END"){
            Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                            'Error de acción',5000)
            console.log(datos);
        }else{   
            let Mis_Datos = JSON.parse(datos);
            ///// ENCONTRÓ AL MENOS UN RESULTADO DE LA CONSULTA (EXISTE O NO EL ID ACTUALIZABLE?) ///////
                //// SI NO SE ENCONTRÓ ALGÚN RESULTADO PUEDE INSERTA O ACTUALIZAR ////
            if(Mis_Datos.length == 0){  
                let formdata2 = new FormData();
                formdata2.append('Id_Barrio', Id_Barrio);
                formdata2.append('Nombre_Barrio', Nombre_Barrio);
                formdata2.append('Distrito', Distrito);
                formdata2.append('opcion', opcion_para_CRUD);
                fetch('php/Config_Plataforma/CRUD_Barrios.php', { 
                    method: "POST",
                    body: formdata2
                }) 
                .then(respuesta2 => {
                    if (respuesta2.ok){ 
                        return respuesta2.text(); //RESPUESTA TIPO TEXTO
                    }else{
                        throw new error_Php('No se puede acceder al PHP');
                    }	 
                })
                .then(datos2 => {
                    $('#Modal_config_Barrios').modal('hide');
                    if (datos2.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                        NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
                    }else if(datos2.substring(0,14) == "ERROR BACK-END"){
                        Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                        'Error de acción',5000)
                        console.log(datos2);
                    }else{   
                        Mensaje_Notificacion_Success_Toast("El barrio se agregó correctamente","Guardado",2500);
                        /////////////////////////////////////////////////////////////////////////////////////////////
                        Tabla_Config_Barrios.ajax.reload(null, false);
                    }
                })
                .catch(error => {
                    console.log("Error al ejecutar el fetch CRUD BARRIOS ACTUALIZAR - " + error); 
                })  

            //// SI SE ENCONTRÓ ALGÚN RESULTADO NO PUEDE INSERTA O ACTUALIZAR ////
            }else if(Mis_Datos.length == 1){
                Mensaje_Notificacion_Warning_Toast("El barrio con el código final "+ Id_Barrio + " ya se encuentra en la lista","No se realiza acción",5000);
            }
        }
    })
    .catch(error => {
        console.log("Error al ejecutar el fetch CRUD BARRIOS VERIFICAR SI BARRIO EXISTE - " + error); 
    })
}

async function Verifica_si_Barrio_existe_en_la_tabla_al_Editar_y_Actualiza(Id_Barrio,Nombre_Barrio,Distrito){
    //// PREGUNTA SI EL ID DEL BARRIO A EDITAR ES IGUAL AL QUE ORIGINAL /////
    if(Id_Barrio != Id_a_Editar){ 
        //// FETCH PARA VERIFICAR PRIMERO SI EL ID EXISTE EN LA BD /////
        let formdata = new FormData();
        formdata.append('Id_Barrio_Seleccionado',Id_Barrio);
        formdata.append('opcion', 5);
        fetch ('php/Config_Plataforma/CRUD_Barrios.php', {
            method: "POST",
            body: formdata
        })
        .then(respuesta => {
            if(respuesta.ok){
                return respuesta.text();
            }else{
                throw new error_Php('No se puede acceder al PHP');
            }
        }) 
        .then(datos => {
            if (datos.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
            }else if(datos.substring(0,14) == "ERROR BACK-END"){
                Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                'Error de acción',5000)
                console.log(datos);
            }else{   
                let Mis_Datos = JSON.parse(datos);
                    //// SI no SE ENCONTRÓ ALGÚN RESULTADO PUEDE INSERTA O ACTUALIZAR ////
                if(Mis_Datos.length == 0){  
                    let formdata2 = new FormData();
                    formdata2.append('Id_Barrio', Id_Barrio);
                    formdata2.append('Nombre_Barrio', Nombre_Barrio);
                    formdata2.append('Distrito', Distrito);
                    formdata2.append('opcion', opcion_para_CRUD);
                    formdata2.append('Id_Barrio_Seleccionado', Id_a_Editar); 
                    fetch('php/Config_Plataforma/CRUD_Barrios.php', { 
                        method: "POST",
                        body: formdata2
                    }) 
                    .then(respuesta2 => {
                        if (respuesta2.ok){ 
                            return respuesta2.text(); //RESPUESTA TIPO TEXTO
                        }else{
                            throw new error_Php('No se puede acceder al PHP');
                        }	 
                    })
                    .then(datos2 => {
                        $('#Modal_config_Barrios').modal('hide');
                        if (datos2.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                            NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
                        }else if(datos2.substring(0,14) == "ERROR BACK-END"){
                            Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                            'Error de acción',5000)
                            console.log(datos2);
                        }else{   
                            Mensaje_Notificacion_Success_Toast("El barrio se editó correctamente","Editado",2500);
                            /////////////////////////////////////////////////////////////////////////////////////////////
                            Tabla_Config_Barrios.ajax.reload(null, false);
                        }
                    })
                    .catch(error => {
                        console.log("Error al ejecutar el fetch CRUD BARRIOS ACTUALIZAR - " + error); 
                    })  

                //// SI SE ENCONTRÓ ALGÚN RESULTADO NO PUEDE INSERTA O ACTUALIZAR ////
                }else if(Mis_Datos.length == 1){
                    Mensaje_Notificacion_Warning_Toast("El barrio con el código final "+ Id_Barrio + " ya se encuentra en la lista","No se realiza acción",5000);
                }
            }
        })
        .catch(error => {
            console.log("Error al ejecutar el fetch CRUD BARRIOS VERIFICAR SI BARRIO EXISTE - " + error); 
        })
    }else{
        let formdata3 = new FormData();
        formdata3.append('Id_Barrio', Id_Barrio);
        formdata3.append('Nombre_Barrio', Nombre_Barrio);
        formdata3.append('Distrito', Distrito);
        formdata3.append('opcion', opcion_para_CRUD);
        formdata3.append('Id_Barrio_Seleccionado', Id_a_Editar); 
        fetch('php/Config_Plataforma/CRUD_Barrios.php', { 
            method: "POST",
            body: formdata3
        }) 
        .then(respuesta2 => {
            if (respuesta2.ok){ 
                return respuesta2.text(); //RESPUESTA TIPO TEXTO
            }else{
                throw new error_Php('No se puede acceder al PHP');
            }	 
        })
        .then(datos2 => {
            $('#Modal_config_Barrios').modal('hide');
            if (datos2.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
            }else if(datos2.substring(0,14) == "ERROR BACK-END"){
                Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                'Error de acción',5000)
                console.log(datos2);
            }else{   
                Mensaje_Notificacion_Success_Toast("El barrio se editó correctamente","Editado",2500);
                /////////////////////////////////////////////////////////////////////////////////////////////
                Tabla_Config_Barrios.ajax.reload(null, false);   
            }
        })
        .catch(error => {
            console.log("Error al ejecutar el fetch CRUD BARRIOS ACTUALIZAR - " + error); 
        })  
    }
}



 ///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  DISTRITOS  /////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
 ////  AL CAMBIAR DE OPCIÓN EN EL SELECT  ///////
 document.getElementById('Select_Config_Dist_Provincia').addEventListener('change', function(){
    Limpiar_Select(document.getElementById('Select_Config_Dist_Canton'));
     if(document.getElementById('Select_Config_Dist_Provincia').value != '0'){
         let El_select_a_Enviar = document.getElementById('Select_Config_Dist_Canton');
         let El_Valor_del_Select = document.getElementById('Select_Config_Dist_Provincia').value;
         Llenar_Select_Cantones(El_select_a_Enviar, El_Valor_del_Select)
     }
     document.getElementById('Txt_Config_Dist_CodIni').value ='';
     document.getElementById('Txt_Config_Dist_CodFinal').value = '';    
 });
 
 ////  AL CAMBIAR DE OPCIÓN EN EL SELECT  ///////
 document.getElementById('Select_Config_Dist_Canton').addEventListener('change', function(){
    //Limpiar_Select(document.getElementById('Select_Config_Barr_Distrito'));
    if(document.getElementById('Select_Config_Dist_Canton').value != '0'){
        let El_Valor_del_Select = document.getElementById('Select_Config_Dist_Canton').value;
        document.getElementById('Txt_Config_Dist_CodIni').value = El_Valor_del_Select;
        document.getElementById('Txt_Config_Dist_CodFinal').value = El_Valor_del_Select + document.getElementById('Txt_Config_Dist_Codigo').value;
     }else{
        document.getElementById('Txt_Config_Dist_CodIni').value ='';
        document.getElementById('Txt_Config_Dist_CodFinal').value = '';
     }
 });
 
 //// AL TERMINAR DE PRESIONAR EN CAMPO DE TEXTO
 document.getElementById('Txt_Config_Dist_Codigo').addEventListener('keyup', function (e) {
    if (document.getElementById('Select_Config_Dist_Canton').value != '0'){
        document.getElementById('Txt_Config_Dist_CodFinal').value = document.getElementById('Txt_Config_Dist_CodIni').value + document.getElementById('Txt_Config_Dist_Codigo').value;
    }   
 });

 document.getElementById('Form_Config_Distritos').addEventListener('submit', function(e){                       
    e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página 
    Insertar_Actualizar_Tabla_Distritos();
    // await Recargar_Tabla_Config_Nacionalidades();
});

async function Limpiar_Select_al_Editar_Distritos(){
    //Limpiar TODOS LOS SELECT
   await Limpiar_Select(document.getElementById('Select_Config_Dist_Provincia'));
   await Limpiar_Select(document.getElementById('Select_Config_Dist_Canton'));

    //Llenar el select de datos
   await Llenar_Select_Provincias(document.getElementById('Select_Config_Dist_Provincia'));
}

async function Llenar_Select_ProvCantDist_al_Editar_Distrito(Prov, Cant){
   await (document.getElementById('Select_Config_Dist_Provincia').value = Prov);
   await Llenar_Select_Cantones(document.getElementById('Select_Config_Dist_Canton'),Prov);
   await (document.getElementById('Select_Config_Dist_Canton').value = Cant);
   
}

async function Insertar_Actualizar_Tabla_Distritos(){
    if(document.getElementById('Select_Config_Dist_Provincia').value != '0' &&
    document.getElementById('Select_Config_Dist_Canton').value != '0'){
        if(ContartNumberos(document.getElementById('Txt_Config_Dist_Codigo').value) == 2 ){
            let Id_Distrito = document.getElementById('Txt_Config_Dist_CodFinal').value;
            let Nombre_Distrito = document.getElementById('Txt_Config_Dist_Nombre').value;
            let Canton = document.getElementById('Txt_Config_Dist_CodIni').value;
            if (Id_Distrito != '' && Nombre_Distrito != '' && Canton != ''){ //VALIDAR ESPACIOS EN BLANCO EN LOS INPUT TXT 
                if (opcion_para_CRUD == 1){
                    Verifica_si_Distrito_existe_en_la_tabla_e_Inserta(Id_Distrito,Nombre_Distrito,Canton);
                }else if(opcion_para_CRUD == 2){
                    Verifica_si_Distrito_existe_en_la_tabla_al_Editar_y_Actualiza(Id_Distrito,Nombre_Distrito,Canton); 
                }
            } 
        }else{
            Swal.fire({
                type:'warning',
                title:'El Id del Distrito debe tener 2 digitos',
            });
            return false; 
        }
            
    }else{
        Swal.fire({
            type:'warning',
            title:'Debe seleccionar todas las opciones',
        });
        return false; 
    }
     
};

async function Verifica_si_Distrito_existe_en_la_tabla_e_Inserta(Id_Distrito,Nombre_Distrito,Canton){
    //// FETCH PARA VERIFICAR PRIMERO SI EL ID EXISTE EN LA BD /////
    let formdata = new FormData();
    formdata.append('Id_Dist_Seleccionado',Id_Distrito);
    formdata.append('opcion', 6);
    fetch ('php/Config_Plataforma/CRUD_Distritos.php', {
        method: "POST",
        body: formdata
    })
    .then(respuesta => {
        if(respuesta.ok){
            return respuesta.text();
        }else{
            throw new error_Php('No se puede acceder al PHP');
        }
    }) 
    .then(datos => {
        if (datos.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
            NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
        }else if(datos.substring(0,14) == "ERROR BACK-END"){
            Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                            'Error de acción',5000)
            console.log(datos);
        }else{   
            let Mis_Datos = JSON.parse(datos);
            ///// ENCONTRÓ AL MENOS UN RESULTADO DE LA CONSULTA (EXISTE O NO EL ID ACTUALIZABLE?) ///////
                //// SI NO SE ENCONTRÓ ALGÚN RESULTADO PUEDE INSERTA O ACTUALIZAR ////
            if(Mis_Datos.length == 0){  
                let formdata2 = new FormData();
                formdata2.append('Id_Dist', Id_Distrito);
                formdata2.append('Nombre_Dist', Nombre_Distrito);
                formdata2.append('Canton', Canton);
                formdata2.append('opcion', opcion_para_CRUD);
                fetch('php/Config_Plataforma/CRUD_Distritos.php', { 
                    method: "POST",
                    body: formdata2
                }) 
                .then(respuesta2 => {
                    if (respuesta2.ok){ 
                        return respuesta2.text(); //RESPUESTA TIPO TEXTO
                    }else{
                        throw new error_Php('No se puede acceder al PHP');
                    }	 
                })
                .then(datos2 => {
                    $('#Modal_config_Distritos').modal('hide');
                    if (datos2.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                        NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
                    }else if(datos2.substring(0,14) == "ERROR BACK-END"){
                        Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                        'Error de acción',5000)
                        console.log(datos2);
                    }else{   
                        Mensaje_Notificacion_Success_Toast("El distrito se agregó correctamente","Guardado",2500);
                        /////////////////////////////////////////////////////////////////////////////////////////////
                        Tabla_Config_Distritos.ajax.reload(null, false);
                    }
                })
                .catch(error => {
                    console.log("Error al ejecutar el fetch CRUD DISTRITOS ACTUALIZAR - " + error); 
                })  

            //// SI SE ENCONTRÓ ALGÚN RESULTADO NO PUEDE INSERTA O ACTUALIZAR ////
            }else if(Mis_Datos.length == 1){
                Mensaje_Notificacion_Warning_Toast("El distito con el código final "+ Id_Distrito + " ya se encuentra en la lista","No se realiza acción",5000);
            }
        }
    })
    .catch(error => {
        console.log("Error al ejecutar el fetch CRUD BARRIOS VERIFICAR SI DISTRITO EXISTE - " + error); 
    })
}

async function Verifica_si_Distrito_existe_en_la_tabla_al_Editar_y_Actualiza(Id_Distrito,Nombre_Distrito,Canton){
    //// PREGUNTA SI EL ID DEL BARRIO A EDITAR ES IGUAL AL QUE ORIGINAL /////
    if(Id_Distrito != Id_a_Editar){ 
        //// FETCH PARA VERIFICAR PRIMERO SI EL ID EXISTE EN LA BD /////
        let formdata = new FormData();
        formdata.append('Id_Dist_Seleccionado',Id_Distrito);
        formdata.append('opcion', 6);
        fetch ('php/Config_Plataforma/CRUD_Distritos.php', {
            method: "POST",
            body: formdata
        })
        .then(respuesta => {
            if(respuesta.ok){
                return respuesta.text();
            }else{
                throw new error_Php('No se puede acceder al PHP');
            }
        }) 
        .then(datos => {
            if (datos.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
            }else if(datos.substring(0,14) == "ERROR BACK-END"){
                Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                'Error de acción',5000)
                console.log(datos);
            }else{   
                let Mis_Datos = JSON.parse(datos);
                    //// SI no SE ENCONTRÓ ALGÚN RESULTADO PUEDE INSERTA O ACTUALIZAR ////
                if(Mis_Datos.length == 0){  
                    let formdata4 = new FormData();
                    formdata4.append('Distrito', Id_a_Editar);
                    formdata4.append('opcion', 6);
                    fetch('php/Config_Plataforma/CRUD_Barrios.php', { 
                        method: "POST",
                        body: formdata4
                    }) 
                    .then(respuesta4 => {
                        if (respuesta4.ok){ 

                            return respuesta4.text(); //RESPUESTA TIPO TEXTO
                        }else{
                            throw new error_Php('No se puede acceder al PHP');
                        }	 
                    })
                    .then(datos4 => {
                        if (datos4.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                            NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
                        }else if(datos4.substring(0,14) == "ERROR BACK-END"){
                            Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                            'Error de acción',10000)
                            console.log(datos4);
                        }else{
                            let Mis_Datos4 = JSON.parse(datos4);
                            //SI NI HAY DISTRITOS VINCULADOS ENTONCES ACTUALIZA
                            if(Mis_Datos4.length == 0){  
                                let formdata2 = new FormData();
                                formdata2.append('Id_Dist', Id_Distrito);
                                formdata2.append('Nombre_Dist', Nombre_Distrito);
                                formdata2.append('Canton', Canton);
                                formdata2.append('opcion', opcion_para_CRUD);
                                formdata2.append('Id_Dist_Seleccionado', Id_a_Editar); 
                                fetch('php/Config_Plataforma/CRUD_Distritos.php', { 
                                    method: "POST",
                                    body: formdata2
                                }) 
                                .then(respuesta2 => {
                                    if (respuesta2.ok){ 
            
                                        return respuesta2.text(); //RESPUESTA TIPO TEXTO
                                    }else{
                                        throw new error_Php('No se puede acceder al PHP');
                                    }	 
                                })
                                .then(datos2 => {
                                    $('#Modal_config_Distritos').modal('hide');
                                    if (datos2.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                                        NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
                                    }else if(datos2.substring(0,14) == "ERROR BACK-END"){
                                        Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                                        'Error de acción',10000)
                                        console.log(datos2);
                                    }else{   
                                        Mensaje_Notificacion_Success_Toast("El distrito se editó correctamente","Editado",2500);
                                        /////////////////////////////////////////////////////////////////////////////////////////////
                                        Tabla_Config_Distritos.ajax.reload(null, false);
                                    }
                                })
                                .catch(error => {
                                    console.log("Error al ejecutar el fetch CRUD DISTRITOS ACTUALIZAR - " + error); 
                                })  
                            }else{
                                Mensaje_Notificacion_Warning_Toast("No se puede modificar el código de este Distrito porque el Id original ya tiene barrios vinculados","No se realiza acción",10000);
                            }
                        }
                    })
                    .catch(error => {
                        console.log("Error al ejecutar el fetch CRUD DISTRITOS ACTUALIZAR - " + error); 
                    })  



                   

                //// SI SE ENCONTRÓ ALGÚN RESULTADO NO PUEDE INSERTA O ACTUALIZAR ////
                }else if(Mis_Datos.length == 1){
                    Mensaje_Notificacion_Warning_Toast("El distrito con el código final "+ Id_Distrito + " ya se encuentra en la lista","No se realiza acción",5000);
                }
            }
        })
        .catch(error => {
            console.log("Error al ejecutar el fetch CRUD DISTRITO VERIFICAR SI BARRIO EXISTE - " + error); 
        })
    }else{
        let formdata3 = new FormData();
        formdata3.append('Id_Dist', Id_Distrito);
        formdata3.append('Nombre_Dist', Nombre_Distrito);
        formdata3.append('Canton', Canton);
        formdata3.append('opcion', opcion_para_CRUD);
        formdata3.append('Id_Dist_Seleccionado', Id_a_Editar); 
        fetch('php/Config_Plataforma/CRUD_Distritos.php', { 
            method: "POST",
            body: formdata3
        }) 
        .then(respuesta3 => {
            if (respuesta3.ok){ 
                return respuesta3.text(); //RESPUESTA TIPO TEXTO
            }else{
                throw new error_Php('No se puede acceder al PHP');
            }	 
        })
        .then(datos3 => {
            $('#Modal_config_Distritos').modal('hide');
            if (datos3.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
            }else if(datos3.substring(0,14) == "ERROR BACK-END"){
                Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                'Error de acción',5000)
                console.log(datos3);
            }else{   
                Mensaje_Notificacion_Success_Toast("El distrito se editó correctamente","Editado",2500);
                /////////////////////////////////////////////////////////////////////////////////////////////
                Tabla_Config_Distritos.ajax.reload(null, false);   
            }
        })
        .catch(error => {
            console.log("Error al ejecutar el fetch CRUD DISTRITO ACTUALIZAR - " + error); 
        })  
    }
}




 ///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  CANTONES  /////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
 ////  AL CAMBIAR DE OPCIÓN EN EL SELECT  ///////
 document.getElementById('Select_Config_Cant_Provincia').addEventListener('change', function(){
    //Limpiar_Select(document.getElementById('Select_Config_Barr_Distrito'));
    if(document.getElementById('Select_Config_Cant_Provincia').value != '0'){
        let El_Valor_del_Select = document.getElementById('Select_Config_Cant_Provincia').value;
        document.getElementById('Txt_Config_Cant_CodIni').value = El_Valor_del_Select;
        document.getElementById('Txt_Config_Cant_CodFinal').value = El_Valor_del_Select + document.getElementById('Txt_Config_Dist_Codigo').value;
     }else{
        document.getElementById('Txt_Config_Cant_CodIni').value ='';
        document.getElementById('Txt_Config_Cant_CodFinal').value = '';
     }  
 });
 
 //// AL TERMINAR DE PRESIONAR EN CAMPO DE TEXTO
 document.getElementById('Txt_Config_Cant_Codigo').addEventListener('keyup', function (e) {
    if (document.getElementById('Select_Config_Cant_Provincia').value != '0'){
        document.getElementById('Txt_Config_Cant_CodFinal').value = document.getElementById('Txt_Config_Cant_CodIni').value + document.getElementById('Txt_Config_Cant_Codigo').value;
    }   
 });

 document.getElementById('Form_Config_Cantones').addEventListener('submit', function(e){                       
    e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página 
    Insertar_Actualizar_Tabla_Cantones();
    // await Recargar_Tabla_Config_Nacionalidades();
});

async function Limpiar_Select_al_Editar_Cantones(){
    //Limpiar TODOS LOS SELECT
   await Limpiar_Select(document.getElementById('Select_Config_Cant_Provincia'));

    //Llenar el select de datos
   await Llenar_Select_Provincias(document.getElementById('Select_Config_Cant_Provincia'));
};

async function Llenar_Select_ProvCantDist_al_Editar_Cantones(Prov){
   await (document.getElementById('Select_Config_Cant_Provincia').value = Prov);
};

async function Insertar_Actualizar_Tabla_Cantones(){
    if(document.getElementById('Select_Config_Cant_Provincia').value != '0'){
        if(ContartNumberos(document.getElementById('Txt_Config_Cant_Codigo').value) == 2 ){
            let Id_Cantones = document.getElementById('Txt_Config_Cant_CodFinal').value;
            let Nombre_Cantones = document.getElementById('Txt_Config_Cant_Nombre').value;
            let Provincia = document.getElementById('Txt_Config_Cant_CodIni').value;
            if (Id_Cantones != '' && Nombre_Cantones != '' && Provincia != ''){ //VALIDAR ESPACIOS EN BLANCO EN LOS INPUT TXT 
                if (opcion_para_CRUD == 1){
                    Verifica_si_Canton_existe_en_la_tabla_e_Inserta(Id_Cantones,Nombre_Cantones,Provincia);
                }else if(opcion_para_CRUD == 2){
                    Verifica_si_Canton_existe_en_la_tabla_al_Editar_y_Actualiza(Id_Cantones,Nombre_Cantones,Provincia); 
                }
            } 
        }else{
            Swal.fire({
                type:'warning',
                title:'El Id del Cantón debe tener 2 digitos',
            });
            return false; 
        }
            
    }else{
        Swal.fire({
            type:'warning',
            title:'Debe seleccionar una provincia',
        });
        return false; 
    }
     
};

async function Verifica_si_Canton_existe_en_la_tabla_e_Inserta(Id_Canton,Nombre_Canton,Provincia){
    //// FETCH PARA VERIFICAR PRIMERO SI EL ID EXISTE EN LA BD /////
    let formdata = new FormData();
    formdata.append('Id_Cant_Seleccionado',Id_Canton);
    formdata.append('opcion', 6);
    fetch ('php/Config_Plataforma/CRUD_Cantones.php', {
        method: "POST",
        body: formdata
    })
    .then(respuesta => {
        if(respuesta.ok){
            return respuesta.text();
        }else{
            throw new error_Php('No se puede acceder al PHP');
        }
    }) 
    .then(datos => {
        if (datos.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
            NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
        }else if(datos.substring(0,14) == "ERROR BACK-END"){
            Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                            'Error de acción',5000)
            console.log(datos);
        }else{   
            let Mis_Datos = JSON.parse(datos);
            ///// ENCONTRÓ AL MENOS UN RESULTADO DE LA CONSULTA (EXISTE O NO EL ID ACTUALIZABLE?) ///////
                //// SI NO SE ENCONTRÓ ALGÚN RESULTADO PUEDE INSERTA O ACTUALIZAR ////
                if(Mis_Datos.length == 0){
                
                let formdata2 = new FormData();
                formdata2.append('Id_Cant', Id_Canton);
                formdata2.append('Nombre_Cant', Nombre_Canton);
                formdata2.append('Provincia', Provincia);
                formdata2.append('opcion', opcion_para_CRUD);
                fetch('php/Config_Plataforma/CRUD_Cantones.php', { 
                    method: "POST",
                    body: formdata2
                }) 
                .then(respuesta2 => {
                    if (respuesta2.ok){ 
                        return respuesta2.text(); //RESPUESTA TIPO TEXTO
                    }else{
                        throw new error_Php('No se puede acceder al PHP');
                    }	 
                })
                .then(datos2 => {
                    $('#Modal_config_Cantones').modal('hide');
                    if (datos2.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                        NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
                    }else if(datos2.substring(0,14) == "ERROR BACK-END"){
                        Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                        'Error de acción',5000)
                        console.log(datos2);
                    }else{   
                        Mensaje_Notificacion_Success_Toast("El cantón se agregó correctamente","Guardado",2500);
                        /////////////////////////////////////////////////////////////////////////////////////////////
                        Tabla_Config_Cantones.ajax.reload(null, false);
                    }
                })
                .catch(error => {
                    console.log("Error al ejecutar el fetch CRUD CANTONES ACTUALIZAR - " + error); 
                })  

            //// SI SE ENCONTRÓ ALGÚN RESULTADO NO PUEDE INSERTA O ACTUALIZAR ////
            }else if(Mis_Datos.length == 1){
                Mensaje_Notificacion_Warning_Toast("El cantón con el código final "+ Id_Canton + " ya se encuentra en la lista","No se realiza acción",5000);
            }
        }
    })
    .catch(error => {
        console.log("Error al ejecutar el fetch CRUD CANTONES VERIFICAR SI DISTRITO EXISTE - " + error); 
    })
};

async function Verifica_si_Canton_existe_en_la_tabla_al_Editar_y_Actualiza(Id_Canton,Nombre_Canton,Provincia){
    //// PREGUNTA SI EL ID DEL BARRIO A EDITAR ES IGUAL AL QUE ORIGINAL /////
    if(Id_Canton != Id_a_Editar){ 
        //// FETCH PARA VERIFICAR PRIMERO SI EL ID EXISTE EN LA BD /////
        let formdata = new FormData();
        formdata.append('Id_Cant_Seleccionado',Id_Canton);
        formdata.append('opcion', 6);
        fetch ('php/Config_Plataforma/CRUD_Cantones.php', {
            method: "POST",
            body: formdata
        })
        .then(respuesta => {
            if(respuesta.ok){
                return respuesta.text();
            }else{
                throw new error_Php('No se puede acceder al PHP');
            }
        }) 
        .then(datos => {
            if (datos.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
            }else if(datos.substring(0,14) == "ERROR BACK-END"){
                Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                'Error de acción',5000)
                console.log(datos);
            }else{   
                let Mis_Datos = JSON.parse(datos);
                    //// SI no SE ENCONTRÓ ALGÚN RESULTADO PUEDE INSERTA O ACTUALIZAR ////
                if(Mis_Datos.length == 0){  
                    let formdata4 = new FormData();
                    formdata4.append('Canton', Id_a_Editar);
                    formdata4.append('opcion', 5);
                    fetch('php/Config_Plataforma/CRUD_Distritos.php', { 
                        method: "POST",
                        body: formdata4
                    }) 
                    .then(respuesta4 => {
                        if (respuesta4.ok){ 

                            return respuesta4.text(); //RESPUESTA TIPO TEXTO
                        }else{
                            throw new error_Php('No se puede acceder al PHP');
                        }	 
                    })
                    .then(datos4 => {
                        if (datos4.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                            NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
                        }else if(datos4.substring(0,14) == "ERROR BACK-END"){
                            Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                            'Error de acción',10000)
                            console.log(datos4);
                        }else{
                            let Mis_Datos4 = JSON.parse(datos4);
                            //SI NI HAY DISTRITOS VINCULADOS ENTONCES ACTUALIZA
                            if(Mis_Datos4.length == 0){  
                                let formdata2 = new FormData();
                                formdata2.append('Id_Cant', Id_Canton);
                                formdata2.append('Nombre_Cant', Nombre_Canton);
                                formdata2.append('Provincia', Provincia);
                                formdata2.append('opcion', opcion_para_CRUD);
                                formdata2.append('Id_Cant_Seleccionado', Id_a_Editar); 
                                fetch('php/Config_Plataforma/CRUD_Cantones.php', { 
                                    method: "POST",
                                    body: formdata2
                                }) 
                                .then(respuesta2 => {
                                    if (respuesta2.ok){ 
            
                                        return respuesta2.text(); //RESPUESTA TIPO TEXTO
                                    }else{
                                        throw new error_Php('No se puede acceder al PHP');
                                    }	 
                                })
                                .then(datos2 => {
                                    $('#Modal_config_Cantones').modal('hide');
                                    if (datos2.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                                        NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
                                    }else if(datos2.substring(0,14) == "ERROR BACK-END"){
                                        Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                                        'Error de acción',10000)
                                        console.log(datos2);
                                    }else{   
                                        Mensaje_Notificacion_Success_Toast("El cantón se editó correctamente","Editado",2500);
                                        /////////////////////////////////////////////////////////////////////////////////////////////
                                        Tabla_Config_Cantones.ajax.reload(null, false);
                                    }
                                })
                                .catch(error => {
                                    console.log("Error al ejecutar el fetch CRUD CANTONES ACTUALIZAR - " + error); 
                                })  
                            }else{
                                Mensaje_Notificacion_Warning_Toast("No se puede modificar el código de este Cantón porque el Id original ya tiene barrios vinculados","No se realiza acción",10000);
                            }
                        }
                    })
                    .catch(error => {
                        console.log("Error al ejecutar el fetch CRUD CANTONES ACTUALIZAR - " + error); 
                    })  



                   

                //// SI SE ENCONTRÓ ALGÚN RESULTADO NO PUEDE INSERTA O ACTUALIZAR ////
                }else if(Mis_Datos.length == 1){
                    Mensaje_Notificacion_Warning_Toast("El Cantoón con el código final "+ Id_Canton + " ya se encuentra en la lista","No se realiza acción",5000);
                }
            }
        })
        .catch(error => {
            console.log("Error al ejecutar el fetch CRUD CANTÓN VERIFICAR SI DISTRITO EXISTE - " + error); 
        })
    }else{
        let formdata3 = new FormData();
        formdata3.append('Id_Cant', Id_Canton);
        formdata3.append('Nombre_Cant', Nombre_Canton);
        formdata3.append('Provincia', Provincia);
        formdata3.append('opcion', opcion_para_CRUD);
        formdata3.append('Id_Cant_Seleccionado', Id_a_Editar); 
        fetch('php/Config_Plataforma/CRUD_Cantones.php', { 
            method: "POST",
            body: formdata3
        }) 
        .then(respuesta3 => {
            if (respuesta3.ok){ 
                return respuesta3.text(); //RESPUESTA TIPO TEXTO
            }else{
                throw new error_Php('No se puede acceder al PHP');
            }	 
        })
        .then(datos3 => {
            $('#Modal_config_Cantones').modal('hide');
            if (datos3.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
            }else if(datos3.substring(0,14) == "ERROR BACK-END"){
                Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                'Error de acción',5000)
                console.log(datos3);
            }else{   
                Mensaje_Notificacion_Success_Toast("El cantón se editó correctamente","Editado",2500);
                /////////////////////////////////////////////////////////////////////////////////////////////
                Tabla_Config_Cantones.ajax.reload(null, false);   
            }
        })
        .catch(error => {
            console.log("Error al ejecutar el fetch CRUD CANTON ACTUALIZAR - " + error); 
        })  
    }
};
  





///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  PROVINCIAS  /////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
 ////  AL CAMBIAR DE OPCIÓN EN EL SELECT  ///////

 
 
 document.getElementById('Form_Config_Provincias').addEventListener('submit', function(e){                       
    e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página 
    Insertar_Actualizar_Tabla_Provincias();
    // await Recargar_Tabla_Config_Nacionalidades();
});


async function Insertar_Actualizar_Tabla_Provincias(){
            let Id_Provincia = document.getElementById('Txt_Config_Cant_CodFinal').value;
            let Nombre_Provincia = document.getElementById('Txt_Config_Cant_Nombre').value;  
            if (Id_Provincia != '' && Nombre_Provincia != ''){ //VALIDAR ESPACIOS EN BLANCO EN LOS INPUT TXT 
                if (opcion_para_CRUD == 1){
                    Verifica_si_Provincia_existe_en_la_tabla_e_Inserta(Id_Provincia,Nombre_Provincia);
                }else if(opcion_para_CRUD == 2){
                    Verifica_si_Provincias_existe_en_la_tabla_al_Editar_y_Actualiza(Id_Provincia,Nombre_Provincia); 
                }
            } 
        
            
  
     
};

async function Verifica_si_Provincia_existe_en_la_tabla_e_Inserta(Id_Provincia,Nombre_Provincia){
    //// FETCH PARA VERIFICAR PRIMERO SI EL ID EXISTE EN LA BD /////
    let formdata = new FormData();
    formdata.append('Id_Cant_Seleccionado',Id_Canton);
    formdata.append('opcion', 6);
    fetch ('php/Config_Plataforma/CRUD_Cantones.php', {
        method: "POST",
        body: formdata
    })
    .then(respuesta => {
        if(respuesta.ok){
            return respuesta.text();
        }else{
            throw new error_Php('No se puede acceder al PHP');
        }
    }) 
    .then(datos => {
        if (datos.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
            NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
        }else if(datos.substring(0,14) == "ERROR BACK-END"){
            Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                            'Error de acción',5000)
            console.log(datos);
        }else{   
            let Mis_Datos = JSON.parse(datos);
            ///// ENCONTRÓ AL MENOS UN RESULTADO DE LA CONSULTA (EXISTE O NO EL ID ACTUALIZABLE?) ///////
                //// SI NO SE ENCONTRÓ ALGÚN RESULTADO PUEDE INSERTA O ACTUALIZAR ////
                if(Mis_Datos.length == 0){
                
                let formdata2 = new FormData();
                formdata2.append('Id_Cant', Id_Canton);
                formdata2.append('Nombre_Cant', Nombre_Canton);
                formdata2.append('Provincia', Provincia);
                formdata2.append('opcion', opcion_para_CRUD);
                fetch('php/Config_Plataforma/CRUD_Cantones.php', { 
                    method: "POST",
                    body: formdata2
                }) 
                .then(respuesta2 => {
                    if (respuesta2.ok){ 
                        return respuesta2.text(); //RESPUESTA TIPO TEXTO
                    }else{
                        throw new error_Php('No se puede acceder al PHP');
                    }	 
                })
                .then(datos2 => {
                    $('#Modal_config_Cantones').modal('hide');
                    if (datos2.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                        NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
                    }else if(datos2.substring(0,14) == "ERROR BACK-END"){
                        Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                        'Error de acción',5000)
                        console.log(datos2);
                    }else{   
                        Mensaje_Notificacion_Success_Toast("El cantón se agregó correctamente","Guardado",2500);
                        /////////////////////////////////////////////////////////////////////////////////////////////
                        Tabla_Config_Cantones.ajax.reload(null, false);
                    }
                })
                .catch(error => {
                    console.log("Error al ejecutar el fetch CRUD CANTONES ACTUALIZAR - " + error); 
                })  

            //// SI SE ENCONTRÓ ALGÚN RESULTADO NO PUEDE INSERTA O ACTUALIZAR ////
            }else if(Mis_Datos.length == 1){
                Mensaje_Notificacion_Warning_Toast("El cantón con el código final "+ Id_Canton + " ya se encuentra en la lista","No se realiza acción",5000);
            }
        }
    })
    .catch(error => {
        console.log("Error al ejecutar el fetch CRUD CANTONES VERIFICAR SI DISTRITO EXISTE - " + error); 
    })
};

async function Verifica_si_Provincias_existe_en_la_tabla_al_Editar_y_Actualiza(Id_Provincia,Nombre_Provincia){
    //// PREGUNTA SI EL ID DEL BARRIO A EDITAR ES IGUAL AL QUE ORIGINAL /////
    if(Id_Canton != Id_a_Editar){ 
        //// FETCH PARA VERIFICAR PRIMERO SI EL ID EXISTE EN LA BD /////
        let formdata = new FormData();
        formdata.append('Id_Cant_Seleccionado',Id_Canton);
        formdata.append('opcion', 6);
        fetch ('php/Config_Plataforma/CRUD_Cantones.php', {
            method: "POST",
            body: formdata
        })
        .then(respuesta => {
            if(respuesta.ok){
                return respuesta.text();
            }else{
                throw new error_Php('No se puede acceder al PHP');
            }
        }) 
        .then(datos => {
            if (datos.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
            }else if(datos.substring(0,14) == "ERROR BACK-END"){
                Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                'Error de acción',5000)
                console.log(datos);
            }else{   
                let Mis_Datos = JSON.parse(datos);
                    //// SI no SE ENCONTRÓ ALGÚN RESULTADO PUEDE INSERTA O ACTUALIZAR ////
                if(Mis_Datos.length == 0){  
                    let formdata4 = new FormData();
                    formdata4.append('Canton', Id_a_Editar);
                    formdata4.append('opcion', 5);
                    fetch('php/Config_Plataforma/CRUD_Distritos.php', { 
                        method: "POST",
                        body: formdata4
                    }) 
                    .then(respuesta4 => {
                        if (respuesta4.ok){ 

                            return respuesta4.text(); //RESPUESTA TIPO TEXTO
                        }else{
                            throw new error_Php('No se puede acceder al PHP');
                        }	 
                    })
                    .then(datos4 => {
                        if (datos4.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                            NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
                        }else if(datos4.substring(0,14) == "ERROR BACK-END"){
                            Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                            'Error de acción',10000)
                            console.log(datos4);
                        }else{
                            let Mis_Datos4 = JSON.parse(datos4);
                            //SI NI HAY DISTRITOS VINCULADOS ENTONCES ACTUALIZA
                            if(Mis_Datos4.length == 0){  
                                let formdata2 = new FormData();
                                formdata2.append('Id_Cant', Id_Canton);
                                formdata2.append('Nombre_Cant', Nombre_Canton);
                                formdata2.append('Provincia', Provincia);
                                formdata2.append('opcion', opcion_para_CRUD);
                                formdata2.append('Id_Cant_Seleccionado', Id_a_Editar); 
                                fetch('php/Config_Plataforma/CRUD_Cantones.php', { 
                                    method: "POST",
                                    body: formdata2
                                }) 
                                .then(respuesta2 => {
                                    if (respuesta2.ok){ 
            
                                        return respuesta2.text(); //RESPUESTA TIPO TEXTO
                                    }else{
                                        throw new error_Php('No se puede acceder al PHP');
                                    }	 
                                })
                                .then(datos2 => {
                                    $('#Modal_config_Cantones').modal('hide');
                                    if (datos2.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                                        NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
                                    }else if(datos2.substring(0,14) == "ERROR BACK-END"){
                                        Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                                        'Error de acción',10000)
                                        console.log(datos2);
                                    }else{   
                                        Mensaje_Notificacion_Success_Toast("El cantón se editó correctamente","Editado",2500);
                                        /////////////////////////////////////////////////////////////////////////////////////////////
                                        Tabla_Config_Cantones.ajax.reload(null, false);
                                    }
                                })
                                .catch(error => {
                                    console.log("Error al ejecutar el fetch CRUD CANTONES ACTUALIZAR - " + error); 
                                })  
                            }else{
                                Mensaje_Notificacion_Warning_Toast("No se puede modificar el código de este Cantón porque el Id original ya tiene barrios vinculados","No se realiza acción",10000);
                            }
                        }
                    })
                    .catch(error => {
                        console.log("Error al ejecutar el fetch CRUD CANTONES ACTUALIZAR - " + error); 
                    })  



                   

                //// SI SE ENCONTRÓ ALGÚN RESULTADO NO PUEDE INSERTA O ACTUALIZAR ////
                }else if(Mis_Datos.length == 1){
                    Mensaje_Notificacion_Warning_Toast("El Cantoón con el código final "+ Id_Canton + " ya se encuentra en la lista","No se realiza acción",5000);
                }
            }
        })
        .catch(error => {
            console.log("Error al ejecutar el fetch CRUD CANTÓN VERIFICAR SI DISTRITO EXISTE - " + error); 
        })
    }else{
        let formdata3 = new FormData();
        formdata3.append('Id_Cant', Id_Canton);
        formdata3.append('Nombre_Cant', Nombre_Canton);
        formdata3.append('Provincia', Provincia);
        formdata3.append('opcion', opcion_para_CRUD);
        formdata3.append('Id_Cant_Seleccionado', Id_a_Editar); 
        fetch('php/Config_Plataforma/CRUD_Cantones.php', { 
            method: "POST",
            body: formdata3
        }) 
        .then(respuesta3 => {
            if (respuesta3.ok){ 
                return respuesta3.text(); //RESPUESTA TIPO TEXTO
            }else{
                throw new error_Php('No se puede acceder al PHP');
            }	 
        })
        .then(datos3 => {
            $('#Modal_config_Cantones').modal('hide');
            if (datos3.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
            }else if(datos3.substring(0,14) == "ERROR BACK-END"){
                Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                'Error de acción',5000)
                console.log(datos3);
            }else{   
                Mensaje_Notificacion_Success_Toast("El cantón se editó correctamente","Editado",2500);
                /////////////////////////////////////////////////////////////////////////////////////////////
                Tabla_Config_Cantones.ajax.reload(null, false);   
            }
        })
        .catch(error => {
            console.log("Error al ejecutar el fetch CRUD CANTON ACTUALIZAR - " + error); 
        })  
    }
};
  