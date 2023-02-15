document.getElementById('checkbox_Est_Extranjero').addEventListener( 'change', function() {	
    if(this.checked) {
        document.getElementById("Txt_Est_Cédula_Nacional").style.display = "none";
        document.getElementById("Txt_Est_Cédula_Extranjero").style.display = "block";
    }else{
        document.getElementById("Txt_Est_Cédula_Nacional").style.display = "block";
        document.getElementById("Txt_Est_Cédula_Extranjero").style.display = "none";
    }
});