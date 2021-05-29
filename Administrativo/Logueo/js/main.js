
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
             

                 if(data == "null"){
                    Swal.fire({
                        type:'error',
                        title:'Usuario y/o contraseña incorrecta',
                        showConfirmButton: false,
                        timer: 1200
                    });
                }else{
                    Swal.fire({
                        type:'success',
                        title:'Sesión iniciada',
                        showConfirmButton: false,
                        timer: 1000
                        }).then 
                        //0.8 SEGUNDOS DESPUÉS
                        setTimeout(function(){ window.location.href = "Home"; }, 800); //UNA VEZ EXITOSAS LAS CREDENCIALES PASA A CARGAR EL DASHBOARD
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