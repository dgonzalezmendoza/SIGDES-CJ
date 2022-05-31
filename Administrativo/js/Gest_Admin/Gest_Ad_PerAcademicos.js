
let Tabla_GesAd_PerAcademicos; // VARIABLE QUE ALMACENA LA TABLA DE DATOS PARA LOS SATÉLITES
let Se_puede_o_no_insertar_actualizar_PerAcade = false; //PARA DETERMINAR SI SE PUEDE INSERTAR O ACTUALIZAR EN LA TABLA
let Primera_vez_carga_tabla_PerAca = true; //DETERMINAR SI ES LA PRIMERA VEZ QUE CARGA LA TABLA
let Gest_Ad_Anho_Predeterminado;
let Gest_Ad_Periodo_Predeterminado;
let Gest_Ad_Anho_Seleccionado;
let Gest_Ad_Periodo_Seleccionado;

// CARGA LA TABLA CON LOS DATOS DE LOS SATELITES
async function Cargar_Tabla_GesAd_PerAcademicos (){
    if(Primera_vez_carga_tabla_PerAca){
        Primera_vez_carga_tabla_PerAca = false; 
        Tabla_GesAd_PerAcademicos = await $('#Tabla_Gest_Ad_PerAcademico').DataTable({   
            // DESTRUYE LA Tabla PARA VOLVERLA A CONSTRUIR (RELOAD O RECARGAS)
            "destroy": "true",	
            "ajax":{            
                "url": "php/Gestion_Admin/CRUD_Periodos_Academicos.php", 
                "method": 'POST', //usamos el metodo POST
                "dataType": 'json', // SE PASA A TEXT CUANDO HAY ERROR PARA VERIFICAR
                "data":{'opcion': 4}, //enviamos opcion 4 para que haga un SELECT
                "dataSrc":"",
                // "success": function(data){ // PARA DETECTAR FALLOS
                //     console.log(data);
                // },
               
            },
            "columns": [
                { "data": "PerAc_Anho" },
                { "data": "PerAc_Periodo" },
                { "data": null,
                   "render": function(value) {//data en la función es el valor del data de la columna (arriba)
                   
                            if(value["PerAc_Predeterminado"] == '1'){
                                Gest_Ad_Anho_Predeterminado = value["PerAc_Anho"];
                                Gest_Ad_Periodo_Predeterminado = value["PerAc_Periodo"];
                                // return `<div class="custom-control custom-radio">
                                //             <input type="radio" id="${value["PerAc_Anho"]}${value["PerAc_Periodo"]}" name="customRadio" class="custom-control-input RDN-PeriodosAcademicos" checked>
                                //             <label class="custom-control-label" for="${value["PerAc_Anho"]}${value["PerAc_Periodo"]}">Predeterminado</label>
                                //         </div>`
                                console.log('PRUEBA');
                                return  `<div class="radio radio-success">
                                            <input type="radio" name="radio" id="${value["PerAc_Anho"]}${value["PerAc_Periodo"]}" class="d-none RDN-PeriodosAcademicos" checked>
                                            <label class="mb-0" for="${value["PerAc_Anho"]}${value["PerAc_Periodo"]}"> Predeterminado </label>
                                        </div>`
                    
                            }
                            // return `<div class="custom-control custom-radio">
                            //         <input type="radio" id="${value["PerAc_Anho"]}${value["PerAc_Periodo"]}" name="customRadio" class="custom-control-input RDN-PeriodosAcademicos">
                            //         <label class="custom-control-label" for="${value["PerAc_Anho"]}${value["PerAc_Periodo"]}">Predeterminado</label>
                            //     </div>`
                            // return  `<div class="radio radio-success">
                            //                 <input type="radio" name="radio" id="${value["PerAc_Anho"]}${value["PerAc_Periodo"]}" class="d-none RDN-PeriodosAcademicos">
                            //                 <label class="mb-0" for="${value["PerAc_Anho"]}${value["PerAc_Periodo"]}"> Predeterminado </label>
                            //             </div>`          
                      
                        return  `<div class="radio radio-success">
                                            <input type="radio" name="radio" id="${value["PerAc_Anho"]}${value["PerAc_Periodo"]}" class="d-none RDN-PeriodosAcademicos">
                                            <label class="mb-0" for="${value["PerAc_Anho"]}${value["PerAc_Periodo"]}"> Predeterminado </label>
                                        </div>`          
                    }
                },
                { "defaultContent": `<div class='text-center'>
                                        <div class='btn-group'>
                                            <button class='btn btn-primary btn-rounded btn-sm Btn_Editar_PeriodoAcademico' title='Editar'>
                                                <i class='fas fa-pencil-alt'></i>
                                                Editar
                                            </button><button class='btn btn-danger btn-rounded btn-sm Btn_Borrar_PeriodoAcademico' title='Borrar'>
                                                <i class='fas fa-trash-alt'></i>
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>`}
            ],
            // "paging": false, //PARA NO PAGINAR LOS REGISTROS
            // "bFilter": false, // DESACTIVAR FILTRO DE BÚSQUEDA
             "bInfo": false, //DESACTIVAR INFORMACIÓN DE LA TABLA
            language: {//PARA USAR EL IDIOMA ESPAÑOL EN EL DATA TABLE
                "url": "../dist/js/pages/datatable/Spanish.json"
            },
        }); 
    }else{
        Tabla_GesAd_PerAcademicos.ajax.reload(null, false);
    }
}

// ACTUALIZA EL PERIODO PREDETERMINADO
async function Actualizar_Periodo_Academico_Predeterminado() {
    let formdata = new FormData();
    formdata.append('anho_seleccionado',Gest_Ad_Anho_Predeterminado);
    formdata.append('periodo_seleccionado',Gest_Ad_Periodo_Predeterminado);
    formdata.append('anho',Gest_Ad_Anho_Seleccionado);
    formdata.append('periodo',Gest_Ad_Periodo_Seleccionado);
    formdata.append('opcion', 5);// Opcion para Actualizar solo el valor Predeterminado de los Periodo
    fetch('php/Gestion_Admin/CRUD_Periodos_Academicos.php',{
        method: "POST",
        body: formdata
    }).then(respuesta => {
        if (respuesta.ok){ 
            return respuesta.text(); //RESPUESTA TIPO TEXTO
        }else{
            throw new error_Php('No se puede acceder al PHP ...');
        }	 
    }).then(datos => {
        if (datos.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
            NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
        }else if(datos.substring(0,14) == "ERROR BACK-END"){
            Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                            'Error de acción',5000)
            console.log(datos);
        }else{
            Mensaje_Notificacion_Success_Toast("Se cambió el periodo predeterminado","Editado",3000);
        }
    }).catch(error => {
        console.log("Error al ejecutar el fetch CRUD Periodos Académicos - " + error); 
    })



    
}

//LLAMA A LO EVENTOS DE ACTUALIZAR PERIODO PREDETERMINADO Y RECARGA LA TABLA
async function Llamar_Actualizar_Periodo_Academico_Predeterminado(){
    await Actualizar_Periodo_Academico_Predeterminado();
    await Cargar_Tabla_GesAd_PerAcademicos ();
    await Cargar_Tabla_GesAd_PerAcademicos ();
    
}

//CON CADA CAMBIO EN CUALQUIER RADIO BUTTON CON LA CLASE DADA, ACTUALICE EL PREDETERMINADO
$(document).on("change", ".RDN-PeriodosAcademicos", function(){
    Informacion_Fila = $(this).closest("tr");
    Gest_Ad_Anho_Seleccionado = Informacion_Fila.find('td:eq(0)').text();
    Gest_Ad_Periodo_Seleccionado = Informacion_Fila.find('td:eq(1)').text();
    Llamar_Actualizar_Periodo_Academico_Predeterminado ();
  
    
});







//FUNCIÓN DEL BOTÓN AGREGAR NUEVO SATELITE
document.getElementById('BtnNuevo_Gest_Ad_Periodo_Aca').addEventListener('click', function () {
    opcion_para_CRUD = 1; //INDICAR QUE ES UN INSERT NUEVO           
    document.getElementById('Form_GesAd_Periodo_Academico').reset(); //SE USA PARA LIMPIAR LOS CAMPOS
    //ASIGNA COLOR AL HEADER O ENCABEZADO DEL MODAL
    document.getElementById('modal-header-agregar-periodoAcademico').style.backgroundColor = "rgba(26, 214, 11, 0.66)";
   //TÍTULO DEL MODAL
    document.getElementById('modal-title-mant_periodoAcademico').innerText = "Agregar Periodo Lectivo";
    $('#Modal_GestAd_PerAcademicos').modal('show');	//MOSTRAR EL MODAL SOLO CON JQUERY 

    //PONER EL FOCO SOBRE EL CUADRO DE TEXTO THAST QUE ESTÉ CARGADO EL MODAL (600ms DE ESPERA)
    window.setTimeout(function () { 
        document.getElementById('Txt_Anho_GAd_PeriodoAca').focus(); 
    }, 600);
});

// EVENTO CLICK EN EL BOTÓN SUBMIT DEL FORMULARIO ACTIVO
document.getElementById('Form_GesAd_Periodo_Academico').addEventListener('submit', function(e){                       
    e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página 
    Insertar_Actualizar_Tabla_PerAcacemico();
    
});

// EVENTO CLICK DEL BOTÓN EDITAR EN LAS FILAS DE LA TABLA 
$(document).on("click", ".Btn_Editar_PeriodoAcademico", function(){
    VERIFICAR_TIEMPO_SESION_APP_CARGADA();// VERIFICA TIEMPO DE SESIÓN
    opcion_para_CRUD = 2;//INDICA QUE ES UN UPDATE
    Index_de_Fila = Tabla_GesAd_PerAcademicos.row($(this).closest('tr')).index(); //CAPTURAR EL NUMERO DE FILA DEL CLICK
    ///////////// Tabla_GesAd_PerAcademicos.cell(5,2).data()  === CON ESTO OBTENGO LOS DATOS DE UNA CELDA /////
    Informacion_Fila = $(this).closest("tr"); //OBTENGO LOS DATOS DE LA FILA ENTERA CON SUS COLUMNAS	

    document.getElementById('Form_GesAd_Periodo_Academico').reset(); //SE USA PARA LIMPIAR LOS CAMPOS
     //let numero_prueba  = parseInt(Informacion_Fila.find('td:eq(0)').text()); //CAPTURO DATO Y LOS TRANFORMO EN ENTERO	            
     let Anho = Informacion_Fila.find('td:eq(0)').text();
     let Periodo = Informacion_Fila.find('td:eq(1)').text();
     
     
    document.getElementById('Txt_Anho_GAd_PeriodoAca').value = Anho 
    document.getElementById('Txt_Nombre_GeAd_PeriodoAcademico').value = Periodo
  
     // VARIABLE PARA INDICAR ID DEL USUARIO A MODIFICAR
     Gest_Ad_Anho_Seleccionado = Anho;
     Gest_Ad_Periodo_Seleccionado = Periodo;
     // COLOR DEL HEADER DEL MODAL
     document.getElementById('modal-header-agregar-periodoAcademico').style.backgroundColor = "rgba(116, 96, 238, 0.5)";
    // TITULO DEL MODAL
    document.getElementById('modal-title-mant_periodoAcademico').innerText = "Editar Periodo Académico";	
     // MOSTRAR EL MODAL
     $('#Modal_GestAd_PerAcademicos').modal('show');
     // PONER EL FOCO DESPUES DE MEDIO SEGUNDO EN EL CAMPO ASIGNADO
     window.setTimeout(function () { 
        document.getElementById('Txt_Anho_GAd_PeriodoAca').focus(); 
    }, 600);
});


// EVENTO CLICK DEL BOTÓN BORRAR EN LAS FILAS DE LA TABLA
$(document).on("click", ".Btn_Borrar_PeriodoAcademico", function(){
    //GUARDO EL OBJETO EN LA VARIABLE
    let Anho_Eliminar = $(this).closest('tr').find('td:eq(0)').text() ;	
    let Periodo_Eliminar = $(this).closest('tr').find('td:eq(1)').text()
   
    //ASIGNO A LA VARIABLE EL TEXTO QUE SE ENCUENTRA EN LA COLUMNA USUARIOS Y EN LA FILA DONDE ME ENCUENTRO
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
        text: "Se eliminará el periodo " + Periodo_Eliminar + " del año " + Anho_Eliminar,
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Eliminar',
        cancelButtonText: 'No, Cancelar',
        reverseButtons: true
    }).then((result) => {
        if (result.value) {
            if(Gest_Ad_Anho_Predeterminado == Anho_Eliminar && Gest_Ad_Periodo_Predeterminado == Periodo_Eliminar){
                Mensaje_Notificacion_Warning_Toast("No se puede eliminar el periodo lectivo predeterminado","Accion no realizada",5000);
            }else{
                let formdata = new FormData();
            formdata.append('opcion', opcion_para_CRUD);
            formdata.append('anho_seleccionado', Anho_Eliminar);
            formdata.append('periodo_seleccionado',Periodo_Eliminar)
            fetch('php/Gestion_Admin/CRUD_Periodos_Academicos.php', { 
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
                        Tabla_GesAd_PerAcademicos.row($(this).parents('tr')).remove().draw();  
                    }
                    Se_inserto_actualizo=true;
                }
            })
            .catch(error => {
                console.log("Error al ejecutar el fetch CRUD de la tabla ADECUACIONES - " + error); 
            })
            }
            

        } else if (
            // Read more about handling dismissals
            result.dismiss === Swal.DismissReason.cancel
        ) {
        
        }
    }) 
});

// FUNCIÓN PARA DETERMINAR SI PUEDO INSERTA EN LA TABLA SEGÚN EL ID
async function Verifica_si_Periodo_existe_en_la_tabla(){
    let p = new Promise((resolve,reject) =>{
        try {
            for(let i = 0; i < Tabla_GesAd_PerAcademicos.rows().count(); i ++){// RECORRER LAS FILAS DEL DATATABLE
                //Tabla_GesAd_PerAcademicos.cell(i,0).data() // EXTRAER LOS DATOS DE LA FILA i, COLUMNA 0
                if (Tabla_GesAd_PerAcademicos.cell(i,0).data() == (document.getElementById('Txt_Anho_GAd_PeriodoAca').value).trim() &&
                    Tabla_GesAd_PerAcademicos.cell(i,1).data() == (document.getElementById('Txt_Nombre_GeAd_PeriodoAcademico').value).trim()){
                    Se_puede_o_no_insertar_Actualizar_PeriodoAcademicoes = false;
                }
            } 
            resolve('La promesa de la función *Verifica_si_Periodo_existe_en_la_tabla* se ejecutó con éxito');//MENSAJE DE APROBACIÓN
        } catch (erro) {
            reject(console.log('Rechazada la promesa de la función *Verifica_si_Periodo_existe_en_la_tabla*.. - ' + erro));//MENSAJE DE RECHAZO
        }
    })    
}

// FUNCIÓN PARA DETERMINAR SI PUEDO EDITAR EN LA TABLA SEGÚN EL ID
async function Verifica_si_Periodo_existe_en_la_tabla_al_Editar(){
    let p = new Promise((resolve,reject) =>{
        try {
            if((document.getElementById('Txt_Anho_GAd_PeriodoAca').value).trim() != Id_a_Editar){   
                for(let i = 0; i < Tabla_GesAd_PerAcademicos.rows().count(); i ++){// RECORRER LAS FILAS DEL DATATABLE
                    //Tabla_GesAd_PerAcademicos.cell(i,0).data() // EXTRAER LOS DATOS DE LA FILA i, COLUMNA 0
                    if (Tabla_GesAd_PerAcademicos.cell(i,0).data() == (document.getElementById('Txt_Anho_GAd_PeriodoAca').value).trim() &&
                        Tabla_GesAd_PerAcademicos.cell(i,1).data() == (document.getElementById('Txt_Nombre_GeAd_PeriodoAcademico').value).trim()){
                        Se_puede_o_no_insertar_Actualizar_PeriodoAcademicoes = false;
                    }
                }    
            }
            resolve('La promesa de la función *Verifica_si_Periodo_existe_en_la_tabla_al_Editar* se ejecutó con éxito');//MENSAJE DE APROBACIÓN
        } catch (erro) {
            reject(console.log('Rechazada la promesa de la función *Verifica_si_Periodo_existe_en_la_tabla_al_Editar*.. - ' + erro));//MENSAJE DE RECHAZO
        }
    })
}

// FUNCIÓN DE INSERTAR EN LA TABLA
async function Insertar_PeriodoAcademico(Id_Sat,Nombre_Sat){
    await Verifica_si_Periodo_existe_en_la_tabla(); //VERIFICA SI EL CÓDIGO A MODIFICAR O INSERTAR, EXISTE 
    if (Se_puede_o_no_insertar_Actualizar_PeriodoAcademicoes == true){ // VALIDA EL RESULTADO DE LA FUNCIÓN
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
            $('#Modal_GestAd_PerAcademicos').modal('hide');
            if (datos.substring(0,21) == "NO SE CONECTÓ A LA BD"){ 
                NOTIFICA_PERDIDA_DE_CONEXION_A_BD();
            }else if(datos.substring(0,14) == "ERROR BACK-END"){
                Mensaje_Notificacion_Error_Toast("Acción sin ejecutar desde MYSQL. Llame al administrador para que revise la consola",
                                                'Error de acción',5000)
                console.log(datos);
            }else{
                Mensaje_Notificacion_Success_Toast("El periodo lectivo se guardó correctamente","Guardado",2500);
                ////////////////////////////////////////////////////////////////////////////////////////////
                ///// AGREGO VALORES NUEVOS A LA FILA CORRESPONDIENTE ///////////////////////////////////
                Tabla_GesAd_PerAcademicos.ajax.reload();
                //////////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////////
                Se_inserto_actualizo=true;
            }
        })
        .catch(error => {
            console.log("Error al ejecutar el fetch CRUD QUE INSERTA ADECUACIONES - " + error); 
        })  
    }else{
        Mensaje_Notificacion_Warning_Toast("La adecuación con el código "+ (document.getElementById('Txt_Anho_GAd_PeriodoAca').value).trim() + " ya se encuentra en la lista","No se realiza acción",5000);
    } 
}

// FUNCIÓN DE ACTUALIZAR LA TABLA
async function Actualizar_PeriodoAcademico(Id_Sat,Nombre_Sat){
    await Verifica_si_Periodo_existe_en_la_tabla_al_Editar(); //VERIFICA SI EL CÓDIGO A MODIFICAR O INSERTAR, EXISTE 
    if (Se_puede_o_no_insertar_Actualizar_PeriodoAcademicoes == true){ // VALIDA EL RESULTADO DE LA FUNCIÓN
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
            $('#Modal_GestAd_PerAcademicos').modal('hide');
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
                Tabla_GesAd_PerAcademicos.cell(Index_de_Fila,0).data(Id_Sat).draw();
                Tabla_GesAd_PerAcademicos.cell(Index_de_Fila,1).data(Nombre_Sat).draw();
                ////////////////////////////////////////////////////////////////////////////////////////////
                ////////////////////////////////////////////////////////////////////////////////////////////
                Se_inserto_actualizo=true;
            }
        })
        .catch(error => {
            console.log("Error al ejecutar el fetch CRUD ADECUACIONES ACTUALIZAR - " + error); 
        })  
    }else{
        Mensaje_Notificacion_Warning_Toast("La adecuación con el código "+ (document.getElementById('Txt_Anho_GAd_PeriodoAca').value).trim() + " ya se encuentra en la lista","No se realiza acción",5000);
    } 
}

// FUNCIÓN DEL BOTÓN SUBMIT QUE CON LA VARIABLE *OPCION DEL CRUD* DETECTA SI ACTUALIZA DATOS O INSERTA DATOS
async function Insertar_Actualizar_Tabla_PerAcacemico(){
    //PASARLOS TEXTOS ESCRITOS A VARIABLES
    Se_inserto_actualizo = false;
    Se_puede_o_no_insertar_Actualizar_PeriodoAcademicoes = true;
    let Id_Sat = (document.getElementById('Txt_Anho_GAd_PeriodoAca').value).trim();//QUITA ESPACIOS
    let Nombre_Sat = (document.getElementById('Txt_Nombre_GeAd_PeriodoAcademico').value).trim().toUpperCase();//QUITA ESPACIO Y AGREGA MAYUSCULAS
    if (Id_Sat != '' && Nombre_Sat != ''){ //VALIDAR ESPACIOS EN BLANCO EN LOS INPUT TXT 
        if (opcion_para_CRUD == 1){
            Insertar_PeriodoAcademico(Id_Sat,Nombre_Sat);
        }else if(opcion_para_CRUD == 2){
            Actualizar_PeriodoAcademico(Id_Sat,Nombre_Sat); 
        }
    }     
};

//FUNCIÓN CANCELAR MODAL
document.getElementById('Btn_Cancelar_Adecuaciones').addEventListener('click', function () {
    $('#Modal_GestAd_PerAcademicos').modal('hide');	
});


