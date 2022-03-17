
var VARIABLE = document.getElementById('Txt_sss').value;

document.getElementById('btn_nuevo').onclick = function(){
    const XHR = new XMLHttpRequest();
    XHR.open('POST','TEMA_OSCURO.php',true);
    XHR.setRequestHeader('content-type', 'application-');
    XHR.send('opcion=' + VARIABLE);

    XHR.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var datos = this.responseText;
            tag.innerHTML = datos;
        }
        
    }
}