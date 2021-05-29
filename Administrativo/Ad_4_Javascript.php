
</div>
    <!-- ============================================================== -->
    <!-- End Wrapper -->
    <!-- ============================================================== -->






    

    <!-- Todos los Jquery -->
    <!-- ============================================================== -->
    <!-- <script src="../assets/libs/jquery/dist/jquery.min.js"></script> -->
    <script src="../assets/libs/jquery/dist/jquery-3.6.0.min.js"></script>
    <!-- <script src="../assets/libs/jquery/dist/jquery-3.6.0.min.js"></script> -->
    <!-- Bootstrap Core en JavaScript -->
    <script src="../assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>


    <!-- Inicialización de aplicación -->
    <script src="../dist/js/app.js"></script>
   <script src="../dist/js/app.init.dark.js"></script>
    <script src="../dist/js/app-style-switcher.js"></script>
    <!-- slimscrollbar scrollbar JavaScript -->
    <script src="../assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js"></script>
    <script src="../assets/libs/jquery-sparkline/jquery.sparkline.min.js"></script>
    <!--Wave Effects -->
    <script src="../dist/js/waves.js"></script>
    <!--Menu sidebar -->
    <script src="../dist/js/sidebarmenu.js"></script>
    <!--Custom JavaScript -->
    <script src="../dist/js/feather.min.js"></script>
    <script src="../dist/js/custom.js"></script>
   
    <!--This page JavaScript -->
    <script src="../assets/extra-libs/toastr/dist/build/toastr.min.js"></script>
    <!-- <script src="../assets/libs/bootstrap-switch/dist/js/bootstrap-switch.min.js"></script> -->

<!--ACTIVA LOS CONTROLES DEL DATATABLE -->
    <script src="../assets/libs/datatables/media/js/jquery.dataTables.js"></script>
    <script src="../dist/js/pages/datatable/custom-datatable.js"></script>


    <script src="https://cdn.datatables.net/buttons/1.5.1/js/dataTables.buttons.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.flash.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.32/pdfmake.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.32/vfs_fonts.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.html5.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.print.min.js"></script>




    

    <!--ACTIVA LOS CONTROLES DE MI DATATABLE PERSONALIZADO -->
    <script src="Iniciar_TABLITA.js"></script>

    <script src="Principal.js"></script>



    <script>

      

        $("#btn_toastr").on('click', function() {
            
            toastr.success('La información se guardó con éxito!.', 'Guardado', 
            { 
               
                "positionClass": "toastr toast-bottom-right", 
                "closeButton": true,
                "debug": false,
                "newestOnTop": false,
                "progressBar": true,
                "preventDuplicates": false,
                "onclick": null,
               
                "hideDuration": "1000", //TIEMPO QUE DIURARÁ AL ESCONDERSE
                "timeOut": "4000", //TIEMPO EN PANTALLA
               
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "slideDown",
                "hideMethod": "slideUp" });


        });
        //=============================================//
        //    File export                              //
        //=============================================//
        $('#file_export').DataTable({
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print'
            ]
        });
        $('.buttons-copy').addClass('btn btn-info text-white mr-1');
        $('.buttons-csv').addClass('btn btn-success text-white mr-1');
        $('.buttons-print').addClass('btn btn-primary text-white mr-1');
        $('.buttons-pdf').addClass('btn btn-danger text-white mr-1');
        $('.buttons-excel').addClass('btn btn-success text-white mr-1');



   
    </script>

</body>

</html>



