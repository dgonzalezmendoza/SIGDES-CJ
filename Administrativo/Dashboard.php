
<!-- ============================================================== -->
<!-- AQUÍ VA EL CONTENIDO EN CONTENIDO SUPERIOR DE LA PÁGINA ENTERA (Encabezado, NavVar y SideBar)-->
<!-- ============================================================== -->
<?php
   include 'Ad_2_Menu_SideBar.php';   
?>



<!-- ============================================================== -->
<!-- AQUÍ VA EL DIV QUE CONTENDRÁ LAS PÁGINAS CON UNA CLASE LLAMADA PAGE WRAPPER  -->
<!-- ============================================================== -->
<div class="page-wrapper" name="Contenido_Pagina" id="Contenido_Pagina">
  
        


<!-- ============================================================== -->
<!-- AQUÍ VA EL CONTENIDO QUE SE CARGA EN CADA SEGMENTO DE PÁGINA  -->
<!-- ============================================================== -->
   <?php include 'Home.php';?>
   <?php include 'Lista_Estudiantes.php';?>
   <?php include 'DataTable.php';?>
<!-- ============================================================== -->
<!-- AQUÍ VA EL CONTENIDO QUE SE CARGA EN CADA SEGMENTO DE PÁGINA  -->
<!-- ============================================================== -->







<!-- ============================================================== -->
<!-- AQUÍ VA EL PIÉ DE PÁGINA DEL CONTENEDOR-->
<!-- ============================================================== -->            
    <?php
         include 'Ad_3_Footer.php';   
    ?>
   
   





</div>
<!-- ============================================================== -->
<!-- FIN DEL Page wrapper  -->
<!-- ============================================================== -->





<!-- ============================================================== -->
<!-- FIN DEL MAIN WRAPPER, LLAMADO DE LAS DEPENDENCIAS JAVASCRIPT Y CIERRE DE LA PÁGINA  -->
<!-- ============================================================== -->
<?php
   include 'Ad_4_Javascript.php';   
?>

