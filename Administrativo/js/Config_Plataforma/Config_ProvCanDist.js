let Tabla_Config_Provincias; // VARIABLE QUE ALMACENA LA TABLA DE DATOS 
let Se_puede_o_no_insertar_actualizar_Provincia = false; //PARA DETERMINAR SI SE PUEDE INSERTAR O ACTUALIZAR EN LA TABLA
let Primera_vez_carga_tabla_Provincias = true; //DETERMINAR SI ES LA PRIMERA VEZ QUE CARGA LA TABLA

let Tabla_Config_Cantones; // VARIABLE QUE ALMACENA LA TABLA DE DATOS 
let Se_puede_o_no_insertar_actualizar_Canton = false; //PARA DETERMINAR SI SE PUEDE INSERTAR O ACTUALIZAR EN LA TABLA
let Primera_vez_carga_tabla_Cantones = true; //DETERMINAR SI ES LA PRIMERA VEZ QUE CARGA LA TABLA

let Tabla_Config_Distritos; // VARIABLE QUE ALMACENA LA TABLA DE DATOS 
let Se_puede_o_no_insertar_actualizar_Distrito = false; //PARA DETERMINAR SI SE PUEDE INSERTAR O ACTUALIZAR EN LA TABLA
let Primera_vez_carga_tabla_Distritos = true; //DETERMINAR SI ES LA PRIMERA VEZ QUE CARGA LA TABLA

let Tabla_Config_Barrios; // VARIABLE QUE ALMACENA LA TABLA DE DATOS 
let Se_puede_o_no_insertar_actualizar_Barrio = false; //PARA DETERMINAR SI SE PUEDE INSERTAR O ACTUALIZAR EN LA TABLA
let Primera_vez_carga_tabla_Barrios = true; //DETERMINAR SI ES LA PRIMERA VEZ QUE CARGA LA TABLA

// CARGA LA TABLA CON LOS DATOS
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