let Tabla_Mant_Adecuaciones; // VARIABLE QUE ALMACENA LA TABLA DE DATOS PARA LOS SATÉLITES
let Se_puede_o_no_insertar_actualizar_Adecuaciones = false; //PARA DETERMINAR SI SE PUEDE INSERTAR O ACTUALIZAR EN LA TABLA
let Primera_vez_carga_tabla_adecuaciones = true; //DETERMINAR SI ES LA PRIMERA VEZ QUE CARGA LA TABLA

// CARGA LA TABLA CON LOS DATOS DE LOS SATELITES
async function Cargar_Tabla_Mant_Adecuaciones (){
    if(Primera_vez_carga_tabla_adecuaciones){
        Primera_vez_carga_tabla_adecuaciones = false; 
        Tabla_Mant_Adecuaciones = await $('#Tabla_Mant_Adecuaciones').DataTable({   
            // DESTRUYE LA Tabla_Mant_Adecuaciones PARA VOLVERLA A CONSTRUIR (RELOAD O RECARGAS)
            "destroy": "true",	
            "ajax":{            
                "url": "php/Mantenimiento/CRUD_Adecuaciones.php", 
                "method": 'POST', //usamos el metodo POST
                "dataType": 'json', // SE PASA A TEXT CUANDO HAY ERROR PARA VERIFICAR
                "data":{'opcion': 4}, //enviamos opcion 4 para que haga un SELECT
                "dataSrc":"",
                // "success": function(data){ // PARA DETECTAR FALLOS
                //     console.log(data);
                // },
                "error": function (jqXHR, exception, error) {
                    console.log('Error status: ' + jqXHR.status);
                    console.log('Exception: ' + exception);
                    console.log('Error message: ' + error);}
            },
            "columns": [
                { "data": "Ade_Codigo" },
                { "data": "Ade_Nombre" },
                { "defaultContent": `<div class='text-center'>
                                        <div class='btn-group'>
                                            <button class='btn btn-primary btn-rounded btn-sm Btn_Editar_Adecuacion' title='Editar'>
                                                <i class='fas fa-pencil-alt'></i>
                                                Editar
                                            </button><button class='btn btn-danger btn-rounded btn-sm Btn_Borrar_Adecuacion' title='Borrar'>
                                                <i class='fas fa-trash-alt'></i>
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>`}
            ],
            "paging": false, //PARA NO PAGINAR LOS REGISTROS
            "bFilter": false, // DESACTIVAR FILTRO DE BÚSQUEDA
            "bInfo": false, //DESACTIVAR INFORMACIÓN DE LA TABLA
            language: {//PARA USAR EL IDIOMA ESPAÑOL EN EL DATA TABLE
                "url": "../dist/js/pages/datatable/Spanish.json"
            },
        }); 
    }else{
        Tabla_Mant_Adecuaciones.ajax.reload(null, false);
    }
}

//FUNCIÓN DEL BOTÓN AGREGAR NUEVO SATELITE
document.getElementById('BtnNuevo_Mant_Adecuaciones').addEventListener('click', function () {
    opcion_para_CRUD = 1; //INDICAR QUE ES UN INSERT NUEVO           
    document.getElementById('Form_Mant_Adecuaciones').reset(); //SE USA PARA LIMPIAR LOS CAMPOS
    //ASIGNA COLOR AL HEADER O ENCABEZADO DEL MODAL
    document.getElementById('modal-header-agregar-Adecuaciones').style.backgroundColor = "rgba(26, 214, 11, 0.66)";
   //TÍTULO DEL MODAL
    document.getElementById('modal-title-mant_Adecuaciones').innerText = "Agregar Adecuación Curricular";
    $('#Modal_Mant_Adecuaciones').modal('show');	//MOSTRAR EL MODAL SOLO CON JQUERY 

    //PONER EL FOCO SOBRE EL CUADRO DE TEXTO THAST QUE ESTÉ CARGADO EL MODAL (600ms DE ESPERA)
    window.setTimeout(function () { 
        document.getElementById('Txt_Id_Mant_Adecuaciones').focus(); 
    }, 600);
});

// EVENTO CLICK EN EL BOTÓN SUBMIT DEL FORMULARIO ACTIVO
document.getElementById('Modal_Mant_Adecuaciones').addEventListener('submit', function(e){                       
    e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página 
    Insertar_Actualizar_Tabla_Adecuaciones();
    // await Recargar_Tabla_Mant_Adecuaciones();
});

// EVENTO CLICK DEL BOTÓN EDITAR EN LAS FILAS DE LA TABLA 
$(document).on("click", ".Btn_Editar_Adecuacion", function(){
    VERIFICAR_TIEMPO_SESION_APP_CARGADA();// VERIFICA TIEMPO DE SESIÓN
    opcion_para_CRUD = 2;//INDICA QUE ES UN UPDATE
    Index_de_Fila = Tabla_Mant_Adecuaciones.row($(this).closest('tr')).index(); //CAPTURAR EL NUMERO DE FILA DEL CLICK
    ///////////// Tabla_Mant_Adecuaciones.cell(5,2).data()  === CON ESTO OBTENGO LOS DATOS DE UNA CELDA /////
    Informacion_Fila = $(this).closest("tr"); //OBTENGO LOS DATOS DE LA FILA ENTERA CON SUS COLUMNAS	

    document.getElementById('Form_Mant_Adecuaciones').reset(); //SE USA PARA LIMPIAR LOS CAMPOS
     //let numero_prueba  = parseInt(Informacion_Fila.find('td:eq(0)').text()); //CAPTURO DATO Y LOS TRANFORMO EN ENTERO	            
     let Id = Informacion_Fila.find('td:eq(0)').text();
     let Nombre = Informacion_Fila.find('td:eq(1)').text();
     
     
    document.getElementById('Txt_Id_Mant_Adecuaciones').value = Id 
    document.getElementById('Txt_Nombre_Mant_Adecuaciones').value = Nombre
    //  $("#Txt_Id_Mant_Adecuaciones").val(usuario);
    //  $("#Txt_Nombre_Mant_Adecuaciones").val(nombre);
    
    
     // VARIABLE PARA INDICAR ID DEL USUARIO A MODIFICAR
     Id_a_Editar = Id;

     // COLOR DEL HEADER DEL MODAL
     document.getElementById('modal-header-agregar-Adecuaciones').style.backgroundColor = "rgba(116, 96, 238, 0.5)";
    // TITULO DEL MODAL
    document.getElementById('modal-title-mant_Adecuaciones').innerText = "Editar Adecuación Curricular";	
     // MOSTRAR EL MODAL
     $('#Modal_Mant_Adecuaciones').modal('show');

     // PONER EL FOCO DESPUES DE MEDIO SEGUNDO EN EL CAMPO ASIGNADO
     window.setTimeout(function () { 
        document.getElementById('Txt_Id_Mant_Adecuaciones').focus(); 
    }, 600);
});


// EVENTO CLICK DEL BOTÓN BORRAR EN LAS FILAS DE LA TABLA
$(document).on("click", ".Btn_Borrar_Adecuacion", function(){
    //GUARDO EL OBJETO EN LA VARIABLE
  
    //ASIGNO A LA VARIABLE EL TEXTO QUE SE ENCUENTRA EN LA COLUMNA USUARIOS Y EN LA FILA DONDE ME ENCUENTRO
    let Id_Adecuacion_Eliminar = $(this).closest('tr').find('td:eq(0)').text() ;	
    let Nombre_Adecuacion_Eliminar = $(this).closest('tr').find('td:eq(1)').text()
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
        text: "Se eliminará la adeccuación: " + Nombre_Adecuacion_Eliminar,
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Eliminar',
        cancelButtonText: 'No, Cancelar',
        reverseButtons: true
    }).then((result) => {
        if (result.value) {
            
           
            let formdata = new FormData();
            formdata.append('opcion', opcion_para_CRUD);
            formdata.append('Id_Seleccionado', Id_Adecuacion_Eliminar);
            fetch('php/Mantenimiento/CRUD_Adecuaciones.php', { 
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
                        Mensaje_Notificacion_Success_Toast("La adecuación se eliminó correctamente","Borrado",3000);
                        Tabla_Mant_Adecuaciones.row($(this).parents('tr')).remove().draw();  
                    }
                    Se_inserto_actualizo=true;
                }
            })
            .catch(error => {
                console.log("Error al ejecutar el fetch CRUD de la tabla ADECUACIONES - " + error); 
            })

        } else if (
            // Read more about handling dismissals
            result.dismiss === Swal.DismissReason.cancel
        ) {
        
        }
    }) 
});

// FUNCIÓN PARA DETERMINAR SI PUEDO INSERTA EN LA TABLA SEGÚN EL ID
async function Verifica_si_adecuacion_existe_en_la_tabla(){
    let p = new Promise((resolve,reject) =>{
        try {
            for(let i = 0; i < Tabla_Mant_Adecuaciones.rows().count(); i ++){// RECORRER LAS FILAS DEL DATATABLE
                //Tabla_Mant_Adecuaciones.cell(i,0).data() // EXTRAER LOS DATOS DE LA FILA i, COLUMNA 0
                if (Tabla_Mant_Adecuaciones.cell(i,0).data() == (document.getElementById('Txt_Id_Mant_Adecuaciones').value).trim()){
                    Se_puede_o_no_insertar_actualizar_Adecuaciones = false;
                }
            } 
            resolve('La promesa de la función *Verifica_si_adecuacion_existe_en_la_tabla* se ejecutó con éxito');//MENSAJE DE APROBACIÓN
        } catch (erro) {
            reject(console.log('Rechazada la promesa de la función *Verifica_si_adecuacion_existe_en_la_tabla*.. - ' + erro));//MENSAJE DE RECHAZO
        }
    })    
}

// FUNCIÓN PARA DETERMINAR SI PUEDO EDITAR EN LA TABLA SEGÚN EL ID
async function Verifica_si_adecuacion_existe_en_la_tabla_al_Editar(){
    let p = new Promise((resolve,reject) =>{
        try {
            if((document.getElementById('Txt_Id_Mant_Adecuaciones').value).trim() != Id_a_Editar){   
                for(let i = 0; i < Tabla_Mant_Adecuaciones.rows().count(); i ++){// RECORRER LAS FILAS DEL DATATABLE
                    //Tabla_Mant_Adecuaciones.cell(i,0).data() // EXTRAER LOS DATOS DE LA FILA i, COLUMNA 0
                    if (Tabla_Mant_Adecuaciones.cell(i,0).data() == (document.getElementById('Txt_Id_Mant_Adecuaciones').value).trim()){
                        Se_puede_o_no_insertar_actualizar_Adecuaciones = false;
                    }
                }    
            }
            resolve('La promesa de la función *Verifica_si_adecuacion_existe_en_la_tabla_al_Editar* se ejecutó con éxito');//MENSAJE DE APROBACIÓN
        } catch (erro) {
            reject(console.log('Rechazada la promesa de la función *Verifica_si_adecuacion_existe_en_la_tabla_al_Editar*.. - ' + erro));//MENSAJE DE RECHAZO
        }
    })
}

// FUNCIÓN DE INSERTAR EN LA TABLA
async function Insertar_Adecuacion(Id_Sat,Nombre_Sat){
    await Verifica_si_adecuacion_existe_en_la_tabla(); //VERIFICA SI EL CÓDIGO A MODIFICAR O INSERTAR, EXISTE 
    if (Se_puede_o_no_insertar_actualizar_Adecuaciones == true){ // VALIDA EL RESULTADO DE LA FUNCIÓN
        let formdata = new FormData();
        formdata.append('Id_Adecuacion', Id_Sat);
        formdata.append('Nombre_Adecuacion', Nombre_Sat);
        formdata.append('opcion', opcion_para_CRUD);
        formdata.append('Id_Seleccionado', Id_a_Editar); 
        await fetch('php/Mantenimiento/CRUD_Adecuaciones.php', { 
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
            $('#Modal_Mant_Adecuaciones').modal('hide');
            if (datos.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
            }else if(datos.substring(0,14) == "ERROR BACK-END"){
                Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                'Error de acción',5000)
                console.log(datos);
            }else{
                Mensaje_Notificacion_Success_Toast("La adecuación se guardó correctamente","Guardado",2500);
                ////////////////////////////////////////////////////////////////////////////////////////////
                ///// AGREGO VALORES NUEVOS A LA FILA CORRESPONDIENTE ///////////////////////////////////
                Tabla_Mant_Adecuaciones.row.add({
                    "Ade_Codigo": Id_Sat, // SE UTILIZAN LOS NOMBRES REALES CUANDO SE CREARON - SEGUN TABLA DE BASE DE DATOS
                    "Ade_Nombre": Nombre_Sat
                }).draw();
                //////////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////////
                Se_inserto_actualizo=true;
            }
        })
        .catch(error => {
            console.log("Error al ejecutar el fetch CRUD QUE INSERTA ADECUACIONES - " + error); 
        })  
    }else{
        Mensaje_Notificacion_Warning_Toast("La adecuación con el código "+ (document.getElementById('Txt_Id_Mant_Adecuaciones').value).trim() + " ya se encuentra en la lista","No se realiza acción",5000);
    } 
}

// FUNCIÓN DE ACTUALIZAR LA TABLA
async function Actualizar_Adecuacion(Id_Sat,Nombre_Sat){
    await Verifica_si_adecuacion_existe_en_la_tabla_al_Editar(); //VERIFICA SI EL CÓDIGO A MODIFICAR O INSERTAR, EXISTE 
    if (Se_puede_o_no_insertar_actualizar_Adecuaciones == true){ // VALIDA EL RESULTADO DE LA FUNCIÓN
        let formdata = new FormData();
        formdata.append('Id_Adecuacion', Id_Sat);
        formdata.append('Nombre_Adecuacion', Nombre_Sat);
        formdata.append('opcion', opcion_para_CRUD);
        formdata.append('Id_Seleccionado', Id_a_Editar); 
        await fetch('php/Mantenimiento/CRUD_Adecuaciones.php', { 
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
            $('#Modal_Mant_Adecuaciones').modal('hide');
            if (datos.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
            }else if(datos.substring(0,14) == "ERROR BACK-END"){
                Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                'Error de acción',5000)
                console.log(datos);
            }else{   
                Mensaje_Notificacion_Success_Toast("La adecuación se editó correctamente","Editado",2500);
                /////////////////////////////////////////////////////////////////////////////////////////////
                /////////////// AGREGADO DE VALORES EDITADOS A LOS CAMPOS EN LA FILA Y CELDAS INICIALES /////
                Tabla_Mant_Adecuaciones.cell(Index_de_Fila,0).data(Id_Sat).draw();
                Tabla_Mant_Adecuaciones.cell(Index_de_Fila,1).data(Nombre_Sat).draw();
                ////////////////////////////////////////////////////////////////////////////////////////////
                ////////////////////////////////////////////////////////////////////////////////////////////
                Se_inserto_actualizo=true;
            }
        })
        .catch(error => {
            console.log("Error al ejecutar el fetch CRUD ADECUACIONES ACTUALIZAR - " + error); 
        })  
    }else{
        Mensaje_Notificacion_Warning_Toast("La adecuación con el código "+ (document.getElementById('Txt_Id_Mant_Adecuaciones').value).trim() + " ya se encuentra en la lista","No se realiza acción",5000);
    } 
}

// FUNCIÓN DEL BOTÓN SUBMIT QUE CON LA VARIABLE *OPCION DEL CRUD* DETECTA SI ACTUALIZA DATOS O INSERTA DATOS
async function Insertar_Actualizar_Tabla_Adecuaciones(){
    //PASARLOS TEXTOS ESCRITOS A VARIABLES
    Se_inserto_actualizo = false;
    Se_puede_o_no_insertar_actualizar_Adecuaciones = true;
    let Id_Sat = (document.getElementById('Txt_Id_Mant_Adecuaciones').value).trim();//QUITA ESPACIOS
    let Nombre_Sat = (document.getElementById('Txt_Nombre_Mant_Adecuaciones').value).trim().toUpperCase();//QUITA ESPACIO Y AGREGA MAYUSCULAS
    if (Id_Sat != '' && Nombre_Sat != ''){ //VALIDAR ESPACIOS EN BLANCO EN LOS INPUT TXT 
        if (opcion_para_CRUD == 1){
            Insertar_Adecuacion(Id_Sat,Nombre_Sat);
        }else if(opcion_para_CRUD == 2){
            Actualizar_Adecuacion(Id_Sat,Nombre_Sat); 
        }
    }     
};

//FUNCIÓN CANCELAR MODAL
document.getElementById('Btn_Cancelar_Adecuaciones').addEventListener('click', function () {
    $('#Modal_Mant_Adecuaciones').modal('hide');	
});