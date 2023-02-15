let Tabla_Config_Nacionalidades; // VARIABLE QUE ALMACENA LA TABLA DE DATOS PARA LOS SATÉLITES
let Se_puede_o_no_insertar_actualizar_Nacionalidad = false; //PARA DETERMINAR SI SE PUEDE INSERTAR O ACTUALIZAR EN LA TABLA
let Primera_vez_carga_tabla_Nacionalidades = true; //DETERMINAR SI ES LA PRIMERA VEZ QUE CARGA LA TABLA

// CARGA LA TABLA CON LOS DATOS DE LOS SATELITES
async function Cargar_Tabla_Config_Nacionalidades (){
    if(Primera_vez_carga_tabla_Nacionalidades){
        Primera_vez_carga_tabla_Nacionalidades = false; 
        Tabla_Config_Nacionalidades = await $('#Tabla_Config_Nacionalidades').DataTable({   
            // DESTRUYE LA Tabla_Config_Nacionalidades PARA VOLVERLA A CONSTRUIR (RELOAD O RECARGAS)
            destroy: "true",	
            ajax:{            
                url: "php/Config_Plataforma/CRUD_Nacionalidades.php", 
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
                { "data": "ISO_NAC" },
                { "data": "GENTILICIO_NAC" },
                { "data": "PAIS_NAC" },
                { "defaultContent": `<div class='text-center'>
                                        <div class='btn-group'>
                                            <button class='btn btn-primary btn-rounded btn-sm Btn_Editar_Nacionalidad' title='Editar'>
                                                <i class='fas fa-pencil-alt'></i>
                                                Editar
                                            </button><button class='btn btn-danger btn-rounded btn-sm Btn_Borrar_Nacionalidad' title='Borrar'>
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
        Tabla_Config_Nacionalidades.ajax.reload(null, false);
    }
}

//FUNCIÓN DEL BOTÓN AGREGAR NUEVO SATELITE
document.getElementById('BtnNuevo_Config_Nacionalidades').addEventListener('click', function () {
    opcion_para_CRUD = 1; //INDICAR QUE ES UN INSERT NUEVO           
    document.getElementById('Form_Config_Nacionalidades').reset(); //SE USA PARA LIMPIAR LOS CAMPOS
    //ASIGNA COLOR AL HEADER O ENCABEZADO DEL MODAL
    document.getElementById('modal_header_agregar_Config_Nacionalidades').style.backgroundColor = "rgba(26, 214, 11, 0.66)";
   //TÍTULO DEL MODAL
    document.getElementById('modal_title_Config_Nacionalidades').innerText = "Agregar Nacionalidad";
    $('#Modal_config_Nacionalidades').modal('show');	//MOSTRAR EL MODAL SOLO CON JQUERY 

    //PONER EL FOCO SOBRE EL CUADRO DE TEXTO THAST QUE ESTÉ CARGADO EL MODAL (600ms DE ESPERA)
    window.setTimeout(function () { 
        document.getElementById('Txt_Config_Nac_CodigoISO').focus(); 
    }, 600);
});

// EVENTO CLICK EN EL BOTÓN SUBMIT DEL FORMULARIO ACTIVO
document.getElementById('Form_Config_Nacionalidades').addEventListener('submit', function(e){                       
    e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página 
    Insertar_Actualizar_Tabla_Nacionalidades();
    // await Recargar_Tabla_Config_Nacionalidades();
});

// EVENTO CLICK DEL BOTÓN EDITAR EN LAS FILAS DE LA TABLA 
$(document).on("click", ".Btn_Editar_Nacionalidad", function(){
    opcion_para_CRUD = 2;//INDICA QUE ES UN UPDATE
    Index_de_Fila = Tabla_Config_Nacionalidades.row($(this).closest('tr')).index(); //CAPTURAR EL NUMERO DE FILA DEL CLICK
    ///////////// Tabla_Config_Nacionalidades.cell(5,2).data()  === CON ESTO OBTENGO LOS DATOS DE UNA CELDA /////
    Informacion_Fila = $(this).closest("tr"); //OBTENGO LOS DATOS DE LA FILA ENTERA CON SUS COLUMNAS	

    document.getElementById('Form_Config_Nacionalidades').reset(); //SE USA PARA LIMPIAR LOS CAMPOS
     //let numero_prueba  = parseInt(Informacion_Fila.find('td:eq(0)').text()); //CAPTURO DATO Y LOS TRANFORMO EN ENTERO	            
     let ISO = Informacion_Fila.find('td:eq(0)').text();
     let Gentilicio = Informacion_Fila.find('td:eq(1)').text();
     let Pais = Informacion_Fila.find('td:eq(2)').text();
     
     
    document.getElementById('Txt_Config_Nac_CodigoISO').value = ISO 
    document.getElementById('Txt_Config_Nac_Gentilicio').value = Gentilicio
    document.getElementById('Txt_Config_Nac_Pais').value = Pais
    
     // VARIABLE PARA INDICAR ID DEL USUARIO A MODIFICAR
     Id_a_Editar = ISO;

     // COLOR DEL HEADER DEL MODAL
     document.getElementById('modal_header_agregar_Config_Nacionalidades').style.backgroundColor = "rgba(116, 96, 238, 0.5)";
    // TITULO DEL MODAL
    document.getElementById('modal_title_Config_Nacionalidades').innerText = "Editar Nacionalidad";	
     // MOSTRAR EL MODAL
     $('#Modal_config_Nacionalidades').modal('show');

     // PONER EL FOCO DESPUES DE MEDIO SEGUNDO EN EL CAMPO ASIGNADO
     window.setTimeout(function () { 
        document.getElementById('Txt_Config_Nac_CodigoISO').focus(); 
    }, 600);
});


// EVENTO CLICK DEL BOTÓN BORRAR EN LAS FILAS DE LA TABLA
$(document).on("click", ".Btn_Borrar_Nacionalidad", function(){
    //GUARDO EL OBJETO EN LA VARIABLE
  
    //ASIGNO A LA VARIABLE EL TEXTO QUE SE ENCUENTRA EN LA COLUMNA USUARIOS Y EN LA FILA DONDE ME ENCUENTRO
    let Codigo_ISO_Eliminar = $(this).closest('tr').find('td:eq(0)').text() ;	
    let Gentilicio_Eliminar = $(this).closest('tr').find('td:eq(1)').text()
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
        text: "Se eliminará la nacionalidad: " + Gentilicio_Eliminar,
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Eliminar',
        cancelButtonText: 'No, Cancelar',
        reverseButtons: true
    }).then((result) => {
        if (result.value) {
            
           
            let formdata = new FormData();
            formdata.append('opcion', opcion_para_CRUD);
            formdata.append('ISO_Seleccionado', Codigo_ISO_Eliminar);
            fetch('php/Config_Plataforma/CRUD_Nacionalidades.php', { 
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
                        Mensaje_Notificacion_Success_Toast("La nacionalidad se eliminó correctamente","Borrado",3000);
                        Tabla_Config_Nacionalidades.row($(this).parents('tr')).remove().draw();  
                    }
                    Se_inserto_actualizo=true;
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

// FUNCIÓN PARA DETERMINAR SI PUEDO INSERTA EN LA TABLA SEGÚN EL ID
async function Verifica_si_Nacionalidad_existe_en_la_tabla(){
    let p = new Promise((resolve,reject) =>{
        try {
            for(let i = 0; i < Tabla_Config_Nacionalidades.rows().count(); i ++){// RECORRER LAS FILAS DEL DATATABLE
                //Tabla_Config_Nacionalidades.cell(i,0).data() // EXTRAER LOS DATOS DE LA FILA i, COLUMNA 0
                if (Tabla_Config_Nacionalidades.cell(i,0).data() == (document.getElementById('Txt_Config_Nac_CodigoISO').value).trim()){
                    Se_puede_o_no_insertar_actualizar_Nacionalidad = false;
                }
            } 
            resolve('La promesa de la función *Verifica_si_Nacionalidad_existe_en_la_tabla* se ejecutó con éxito');//MENSAJE DE APROBACIÓN
        } catch (erro) {
            reject(console.log('Rechazada la promesa de la función *Verifica_si_Nacionalidad_existe_en_la_tabla*.. - ' + erro));//MENSAJE DE RECHAZO
        }
    })    
}

// FUNCIÓN PARA DETERMINAR SI PUEDO EDITAR EN LA TABLA SEGÚN EL ID
async function Verifica_si_Nacionalidad_existe_en_la_tabla_al_Editar(){
    let p = new Promise((resolve,reject) =>{
        try {
            if((document.getElementById('Txt_Config_Nac_CodigoISO').value).trim() != Id_a_Editar){   
                for(let i = 0; i < Tabla_Config_Nacionalidades.rows().count(); i ++){// RECORRER LAS FILAS DEL DATATABLE
                    //Tabla_Config_Nacionalidades.cell(i,0).data() // EXTRAER LOS DATOS DE LA FILA i, COLUMNA 0
                    if (Tabla_Config_Nacionalidades.cell(i,0).data() == (document.getElementById('Txt_Config_Nac_CodigoISO').value).trim()){
                        Se_puede_o_no_insertar_actualizar_Nacionalidad = false;
                    }
                }    
            }
            resolve('La promesa de la función *Verifica_si_Nacionalidad_existe_en_la_tabla_al_Editar* se ejecutó con éxito');//MENSAJE DE APROBACIÓN
        } catch (erro) {
            reject(console.log('Rechazada la promesa de la función *Verifica_si_Nacionalidad_existe_en_la_tabla_al_Editar*.. - ' + erro));//MENSAJE DE RECHAZO
        }
    })
}

// FUNCIÓN DE INSERTAR EN LA TABLA
async function Insertar_Nacionalidad(ISO_Codigo,Gentilicio,Pais){
    await Verifica_si_Nacionalidad_existe_en_la_tabla(); //VERIFICA SI EL CÓDIGO A MODIFICAR O INSERTAR, EXISTE 
    if (Se_puede_o_no_insertar_actualizar_Nacionalidad == true){ // VALIDA EL RESULTADO DE LA FUNCIÓN
        let formdata = new FormData();
        formdata.append('ISO_Codigo', ISO_Codigo);
        formdata.append('Gentilicio', Gentilicio);
        formdata.append('Pais', Pais);
        formdata.append('opcion', opcion_para_CRUD);
        formdata.append('ISO_Seleccionado', Id_a_Editar); 
        await fetch('php/Config_Plataforma/CRUD_Nacionalidades.php', { 
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
            $('#Modal_config_Nacionalidades').modal('hide');
            if (datos.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
            }else if(datos.substring(0,14) == "ERROR BACK-END"){
                Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                'Error de acción',5000)
                console.log(datos);
            }else{
                Mensaje_Notificacion_Success_Toast("La nacionalidad se guardó correctamente","Guardado",2500);
                ////////////////////////////////////////////////////////////////////////////////////////////
                ///// AGREGO VALORES NUEVOS A LA FILA CORRESPONDIENTE ///////////////////////////////////
                Tabla_Config_Nacionalidades.row.add({
                    "ISO_NAC": ISO_Codigo, // SE UTILIZAN LOS NOMBRES REALES CUANDO SE CREARON - SEGUN TABLA DE BASE DE DATOS
                    "GENTILICIO_NAC": Gentilicio,
                    "PAIS_NAC": Pais
                }).draw();
                //////////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////////
                Se_inserto_actualizo=true;
            }
        })
        .catch(error => {
            console.log("Error al ejecutar el fetch CRUD QUE INSERTA Nacionalidades - " + error); 
        })  
    }else{
        Mensaje_Notificacion_Warning_Toast("La nacionalidad con el código "+ (document.getElementById('Txt_Config_Nac_CodigoISO').value).trim() + " ya se encuentra en la lista","No se realiza acción",5000);
    } 
}

// FUNCIÓN DE ACTUALIZAR LA TABLA
async function Actualizar_Nacionalidad(ISO_Codigo,Gentilicio,Pais){
    await Verifica_si_Nacionalidad_existe_en_la_tabla_al_Editar(); //VERIFICA SI EL CÓDIGO A MODIFICAR O INSERTAR, EXISTE 
    if (Se_puede_o_no_insertar_actualizar_Nacionalidad == true){ // VALIDA EL RESULTADO DE LA FUNCIÓN
        let formdata = new FormData();
        formdata.append('ISO_Codigo', ISO_Codigo);
        formdata.append('Gentilicio', Gentilicio);
        formdata.append('Pais', Pais);
        formdata.append('opcion', opcion_para_CRUD);
        formdata.append('ISO_Seleccionado', Id_a_Editar); 
        await fetch('php/Config_Plataforma/CRUD_Nacionalidades.php', { 
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
            $('#Modal_config_Nacionalidades').modal('hide');
            if (datos.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
            }else if(datos.substring(0,14) == "ERROR BACK-END"){
                Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                'Error de acción',5000)
                console.log(datos);
            }else{   
                Mensaje_Notificacion_Success_Toast("La nacionalidad se editó correctamente","Editado",2500);
                /////////////////////////////////////////////////////////////////////////////////////////////
                /////////////// AGREGADO DE VALORES EDITADOS A LOS CAMPOS EN LA FILA Y CELDAS INICIALES /////
                Tabla_Config_Nacionalidades.cell(Index_de_Fila,0).data(ISO_Codigo).draw();
                Tabla_Config_Nacionalidades.cell(Index_de_Fila,1).data(Gentilicio).draw();
                Tabla_Config_Nacionalidades.cell(Index_de_Fila,2).data(Pais).draw();
                ////////////////////////////////////////////////////////////////////////////////////////////
                ////////////////////////////////////////////////////////////////////////////////////////////
                Se_inserto_actualizo=true;
            }
        })
        .catch(error => {
            console.log("Error al ejecutar el fetch CRUD Nacionalidades ACTUALIZAR - " + error); 
        })  
    }else{
        Mensaje_Notificacion_Warning_Toast("La nacionalidad con el código "+ (document.getElementById('Txt_Config_Nac_CodigoISO').value).trim() + " ya se encuentra en la lista","No se realiza acción",5000);
    } 
}

// FUNCIÓN DEL BOTÓN SUBMIT QUE CON LA VARIABLE *OPCION DEL CRUD* DETECTA SI ACTUALIZA DATOS O INSERTA DATOS
async function Insertar_Actualizar_Tabla_Nacionalidades(){
    //PASARLOS TEXTOS ESCRITOS A VARIABLES
    Se_inserto_actualizo = false;
    Se_puede_o_no_insertar_actualizar_Nacionalidad = true;
    let ISO_Codigo = (document.getElementById('Txt_Config_Nac_CodigoISO').value).trim().toUpperCase();//QUITA ESPACIOS
    let Gentilicio = (document.getElementById('Txt_Config_Nac_Gentilicio').value).trim().toUpperCase();//QUITA ESPACIO Y AGREGA MAYUSCULAS
    let Pais = (document.getElementById('Txt_Config_Nac_Pais').value).trim().toUpperCase();//QUITA ESPACIO Y AGREGA MAYUSCULAS
    if (ISO_Codigo != '' && Gentilicio != '' && Pais != ''){ //VALIDAR ESPACIOS EN BLANCO EN LOS INPUT TXT 
        if (opcion_para_CRUD == 1){
            Insertar_Nacionalidad(ISO_Codigo,Gentilicio,Pais);
        }else if(opcion_para_CRUD == 2){
            Actualizar_Nacionalidad(ISO_Codigo,Gentilicio,Pais); 
        }
    }     
};

//FILTRAR BÚSQUEDA CON UN ENTER EN EL TEXTO//
document.getElementById('Txt_Conf_Nac_Filtrar_Codigo').addEventListener('keydown', function (e) {
     //SE EXTRAE EL VALOR DEL TXT Y SE ASIGNA AL METODO DE BUSQUEDA DE LA TABLA PARA QUE FILTRE Y PINTE DE NUEVO LA TABLA
     if (e.key === 'Enter') {
        let Valor_Nac_a_Filtrar = (document.getElementById('Txt_Conf_Nac_Filtrar_Codigo').value).trim();
        Tabla_Config_Nacionalidades.columns(2,1).search(Valor_Nac_a_Filtrar).draw();
    }
});  

//FILTRAR BÚSQUEDA CON BOTÓN//
document.getElementById('BtnFiltrar_Config_Nacionalidades').addEventListener('click', function () {
    //SE EXTRAE EL VALOR DEL TXT Y SE ASIGNA AL METODO DE BUSQUEDA DE LA TABLA PARA QUE FILTRE Y PINTE DE NUEVO LA TABLA
    let Valor_Nac_a_Filtrar = (document.getElementById('Txt_Conf_Nac_Filtrar_Codigo').value).trim();
    Tabla_Config_Nacionalidades.columns(2,1).search(Valor_Nac_a_Filtrar).draw();
  });


  //RESTABLECER BÚSQUEDA//
document.getElementById('Btnlimpiar_Config_Nacionalidades').addEventListener('click', function () {
    //SE EXTRAE EL VALOR DEL TXT Y SE ASIGNA AL METODO DE BUSQUEDA DE LA TABLA PARA QUE FILTRE Y PINTE DE NUEVO LA TABLA
     Tabla_Config_Nacionalidades.columns(2,1).search('').draw();
     document.getElementById('Txt_Conf_Nac_Filtrar_Codigo').value = '';
  });

//FUNCIÓN CANCELAR MODAL
document.getElementById('Btn_Cancelar_Nacionalidad').addEventListener('click', function () {
    $('#Modal_config_Nacionalidades').modal('hide');	
});