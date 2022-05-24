document.addEventListener('DOMContentLoaded', () => { 
    
    document.getElementById('Insert_Usuarios_Desarrollador').addEventListener('click', function(){
        fetch('BD/Insertar_Nuevo_Admin.php', { 
            method: "POST"
        }) 
        .then(respuesta => {
            if (respuesta.ok){
                return respuesta.text(); //RESPUESTA TIPO TEXTO
            }else{
                throw new error_Php('No se puede acceder al PHP');
            }	 
        })
        .then(datos => {
            if (datos.substring(0,20) == "SE INSERTÓ CON ÉXITO") {
                Swal.fire({
                    type:'success',
                    title:'Agregado correctamente',
                    showConfirmButton: false,
                    timer: 1000
                    }).then 
                    //1 SEGUNDO DESPUÉS
                    // setTimeout(function(){ window.location.href = "Dashboard"; }, 800);
            
            }else{
                Swal.fire({
                    type:'warning',
                    title:'EL SERVIDOR CONTESTA:',
                    text: datos
                });
                console.log("EL SERVIDOR CONTESTA - " + datos); 
            }
        })
        .catch(error => {
            console.log("Error al ejecutar el fetch de INSERTAR USUARIOS DESARROLLADOR - " + error); 
        })
    }) 
});