
$('#formLogin').submit(function(e){
    //Evitamos recargar la pagina y asignar los valores de los inputs a variables
    e.preventDefault();
    var usuario = $.trim($("#usuario").val());    
    var password = $.trim($("#password").val());  
  
    
    
    if(usuario.length == "" || password == ""){
       //SI HAY ESPACIOS EN BLANCO SE EJECUTA UN MENSAJE SWEET-ALERT 
        Swal.fire({
           type:'warning',
           title:'Debe ingresar un usuario y contraseña',
       });
       return false; 

       //SI NO HAY ESPACIOS EN BLANDO SE ENVIAN LOS DATOS PARA VALIDAR SI LAS CREDENCIALES EXISTEN
     }else{
         $.ajax({
            url:"../BD/Login_Admin.php", //LA REFERENCIA INICIAL ES LOGIN.PHP - A PARTIR DE AHI SE TOMA LA JERARQUÍ DE CARPETAS
            type:"POST",
            datatype: "json",
            data: {usuario:usuario, password:password}, 
           
            success:function(data){ 
                
                // console.log(data);        
                //alert(data.substr(0,21));
                //alert(data.substr(1,22));
                
                let informacion = data.toString(); //Pasamos la informacion del data a String 
                if(informacion.substr(0,21) == "NO SE CONECTÓ A LA BD"){ //Se verifica si no hubo conección a la base de datos por el string devuelto
                    Swal.fire({
                        type:'error',
                        title: data,
                        showConfirmButton: false,
                        timer: 10000
                    });

                }else if (informacion.substr(1,22) == "CONTRASENHA INCORRECTA") {
                    Swal.fire({
                        type:'error',
                        title: "contraseña incorrecta",
                        showConfirmButton: false,
                        timer: 3200
                    });
                    
                    
                }else if (informacion.substr(1,17) == "NO EXISTE USUARIO") {
                    Swal.fire({
                        type:'error',
                        title: "El usuario no existe en el sistema",
                        showConfirmButton: false,
                        timer: 3200
                    });
                } else {
                        Swal.fire({
                        type:'success',
                        title:'Sesión iniciada',
                        showConfirmButton: false,
                        timer: 1000
                        }).then 
                        //1 SEGUNDO DESPUÉS
                        setTimeout(function(){ window.location.href = "Dashboard#/Principal"; }, 800); //UNA VEZ EXITOSAS LAS CREDENCIALES PASA A CARGAR EL DASHBOARD
                        //window.location.href = "DataTable";  //UNA VEZ EXITOSAS LAS CREDENCIALES PASA A CARGAR EL DASHBOARD
                }  
            }    
         });
     }     
 });

(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
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