
function Ocultar_Spinner_de_carga (){
    document.getElementById("Spinner_Cargando").style.display = "none";
    document.getElementById("Texto_ingresar").style.display = "block";
    document.getElementById("Texto_ingresando").style.display = "none";
}

function Mostrar_Spinner_de_carga (){
    document.getElementById("Spinner_Cargando").style.display = "block";
    document.getElementById("Texto_ingresar").style.display = "none";
    document.getElementById("Texto_ingresando").style.display = "block";
}

document.getElementById('formLogin').addEventListener('submit', function(e){
    e.preventDefault();//Evitamos recargar la pagina y asignar los valores de los inputs a variables
    var usuario = $.trim($("#usuario").val());    
    var password = $.trim($("#password").val());  
  
    if(usuario.length == "" || password == ""){
       //SI HAY ESPACIOS EN BLANCO SE EJECUTA UN MENSAJE SWEET-ALERT 
        Swal.fire({
           type:'warning',
           title:'Debe digitar un usuario y contraseña',
       });
       return false; 

       //SI NO HAY ESPACIOS EN BLANDO SE ENVIAN LOS DATOS PARA VALIDAR SI LAS CREDENCIALES EXISTEN
     }else{

        Mostrar_Spinner_de_carga (); // MOSTRAR SPINNER Y CARGANDO
        let formData = new FormData();  //SE CREA FORMULARIO PARA ENVIAR DATOS
		formData.append('usuario', usuario);  //PARAMETROS A ENVIAR (USUARIO Y PASSWORD)
		formData.append('password', password);
        fetch('php/Al_Cargar_Pagina/Login.php', {
			 method: "POST",
			 body: formData //SE PASAN LOS PARÁMETROS AL CUERPO DEL MENSAJE DE ENVÍO
		}) 
        .then(respuesta => {
            if (respuesta.ok){
                return respuesta.text()
            }
        })
        .then(datos => {
            let informacion = datos //Pasamos los datos a una variable
                if(informacion.substring(0,21) == "NO SE CONECTÓ A LA BD"){ //Se verifica si no hubo conección a la base de datos por el string devuelto
                    Swal.fire({
                        type:'error',
                        title: datos,
                        showConfirmButton: false,
                        timer: 10000
                    });
                    Ocultar_Spinner_de_carga();
                }else if (informacion.substring(1,23) == "CONTRASENHA INCORRECTA") {
                    Swal.fire({
                        type:'error',
                        title: "contraseña incorrecta",
                        showConfirmButton: false,
                        timer: 3200
                    });
                    Ocultar_Spinner_de_carga();
                }else if (informacion.substring(1,18) == "NO EXISTE USUARIO") {
                    Swal.fire({
                        type:'error',
                        title: "El usuario no existe en el sistema",
                        showConfirmButton: false,
                        timer: 3200
                    });
                    Ocultar_Spinner_de_carga();
                } else if(datos.substring(1,15) == "ERROR BACK-END"){
                    alert('ERROR BACK-END: ' + datos)
                    console.log(datos);
                    Ocultar_Spinner_de_carga();
                }else{
                    Mostrar_Spinner_de_carga; //MOSTRAR CARGA POR 1 SEGUNDO
                    setTimeout(function(){ 
                        Ocultar_Spinner_de_carga(); //QUITAR SPINNER DE CARGA DESPUES DEL TIEMPO
                    },500);                                        
                    
                    Swal.fire({
                    type:'success',
                    title:'Sesión iniciada',
                    showConfirmButton: false,
                    timer: 1000
                    }).then 
                    //1 SEGUNDO DESPUÉS
                    setTimeout(function(){ window.location.href = "Dashboard"; }, 800); //UNA VEZ EXITOSAS LAS CREDENCIALES PASA A CARGAR EL DASHBOARD
                    } 
        })
        .catch(error => {
            console.log("Error al ejecutar el fetch LOGIN - " + error); 
            Ocultar_Spinner_de_carga();
        })
     }  
});

// $('#formLogin').submit(function(e){
       
//  });

(function ($) {
    "use strict";

    
    /*==================================================================
    [ VALDADOR ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).val().trim() == ''){
            return false;
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);


$(document).ready(function() { 
    Ocultar_Spinner_de_carga();
});