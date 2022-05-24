let Codigo_Presupuestario_a_Editar; //CODIGO PRESUPUESTARIO A EDITAR 

document.getElementById('Frm_Parametros_Colegio').addEventListener('submit',function (e) { 
    e.preventDefault(); 
    let Nombre_Colegio = (document.getElementById('Txt_Ges_Ad_Nombre_Colegio').value).trim();   
    let Codigo_Colegio = (document.getElementById('Txt_Ges_Ad_Codigo_Colegio').value).trim();  
    let Nombre_Director = (document.getElementById('Txt_Ges_Ad_Director_Colegio').value).trim();  
  
    if(Nombre_Colegio != '' && Codigo_Colegio != '' && Nombre_Director != ''){
        let formdata = new FormData();
    formdata.append('Nombre_Colegio', Nombre_Colegio);
    formdata.append('Codigo_Colegio', Codigo_Colegio);
    formdata.append('Director', Nombre_Director);
    formdata.append('Codigo_Editar', Codigo_Presupuestario_a_Editar);
    formdata.append('Opcion', 2);
    fetch('php/Gestion_Admin/CRUD_Parametros_Colegio.php', { 
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
            Mensaje_Notificacion_Success_Toast("La información se guardó correctamente","Agregado",2500);
            //// ELIMINA LA CLASE QUE VALIDA LOS CAMPOS PARA ELIMINAR EL VERDE Y ROJO ////
            document.getElementById('Frm_Parametros_Colegio').classList.remove('was-validated');
            //////////////////////////////////////////////////////////////////////////////
        }
    })
    .catch(error => {
        console.log("Error al ejecutar el fetch CRUD Usuarios Desarrolladores - " + error); 
    })

    }

 })

function Ver_Parametros_Colegio() {  
    let formdata = new FormData();
    formdata.append('Opcion', 1);
    fetch('php/Gestion_Admin/CRUD_Parametros_Colegio.php', {
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
            let Mis_Datos = JSON.parse(datos);
            Codigo_Presupuestario_a_Editar = Mis_Datos.ParCol_Codigo_Colegio
            document.getElementById('Txt_Ges_Ad_Nombre_Colegio').value = Mis_Datos.ParCol_Nombre_Colegio;
            document.getElementById('Txt_Ges_Ad_Codigo_Colegio').value = Mis_Datos.ParCol_Codigo_Colegio;
            document.getElementById('Txt_Ges_Ad_Director_Colegio').value = Mis_Datos.ParCol_Director;
        }
    })
    .catch(error => {
        console.log("Error al ejecutar el fetch CRUD Usuarios Desarrolladores - " + error); 
    })

    

}