$(function() {
    "use strict";
    //****************************
    /* Left header Theme Change function Start */
    //****************************
    function handlelogobg() {
        $('.theme-color .theme-item .theme-link').on("click", function() {
            var logobgskin = $(this).attr("data-logobg");
            $('.topbar .top-navbar .navbar-header').attr("data-logobg", logobgskin);
        });
    };
    handlelogobg();
    //****************************
    /* Top navbar Theme Change function Start */
    //****************************
    function handlenavbarbg() {
        if ( $('#main-wrapper').attr('data-navbarbg') == 'skin6' ) {
                    // do this
                    $(".topbar .navbar").addClass('navbar-light');
                    $(".topbar .navbar").removeClass('navbar-dark');
                } else {
                    // do that
                    
                }
        $('.theme-color .theme-item .theme-link').on("click", function() {
            var navbarbgskin = $(this).attr("data-navbarbg");
            $('#main-wrapper').attr("data-navbarbg", navbarbgskin);
            $('.topbar .navbar-collapse').attr("data-navbarbg", navbarbgskin);
            if ( $('#main-wrapper').attr('data-navbarbg') == 'skin6' ) {
                    // do this
                    $(".topbar .navbar").addClass('navbar-light');
                    $(".topbar .navbar").removeClass('navbar-dark');
                } else {
                    // do that
                    $(".topbar .navbar").removeClass('navbar-light');
                    $(".topbar .navbar").addClass('navbar-dark');
                }
        });
        
    };

    handlenavbarbg();
    
    //****************************
    // ManageSidebar Type
    //****************************
    function handlesidebartype() {
        
    };
    handlesidebartype();
     
    
    //****************************
    /* Manage sidebar bg color */
    //****************************
    function handlesidebarbg() {
        $('.theme-color .theme-item .theme-link').on("click", function() {
            var sidebarbgskin = $(this).attr("data-sidebarbg");
            $('.left-sidebar').attr("data-sidebarbg", sidebarbgskin);
        });
    };
    handlesidebarbg();
    //****************************
    /* sidebar position */
    //****************************
    function handlesidebarposition() {
		$('#sidebar-position').change(function() {
            if( $(this).is(":checked")) {
                $('#main-wrapper').attr("data-sidebar-position", 'fixed' );
                $('.topbar .top-navbar .navbar-header').attr("data-navheader", 'fixed' );
            }else {
                $('#main-wrapper').attr("data-sidebar-position", 'absolute' ); 
                $('.topbar .top-navbar .navbar-header').attr("data-navheader", 'relative' );
            }
        });
        
	};
    handlesidebarposition ();
    //****************************
    /* Header position */
    //****************************
    function handleheaderposition() {
		$('#header-position').change(function() {
            if( $(this).is(":checked")) {
                $('#main-wrapper').attr("data-header-position", 'fixed' );
            }else {
                $('#main-wrapper').attr("data-header-position", 'relative' ); 
            }      
        });
	};
    handleheaderposition ();
    //****************************
    /* sidebar position */
    //****************************
    function handleboxedlayout() {
		$('#boxed-layout').change(function() {
            if( $(this).is(":checked")) {
                $('#main-wrapper').attr("data-boxed-layout", 'boxed' );
            }else {
                $('#main-wrapper').attr("data-boxed-layout", 'full' ); 
            }
        });
        
	};
    handleboxedlayout ();
    //****************************
    /* Header position */
    //****************************
    // function handlethemeview() {
    //     //CON CADA CAMBIO DEL CHECKBOX//
    //     document.getElementById('Checkbox_Temas').addEventListener( 'change', function() {
    //         //EL CHECKBOX ESTÁ SELECCIONADO?//
    //         // if(this.checked) {
    //         //     let formData = new FormData();
    //         //     formData.append('opcion', 1);
    //         //     fetch('TEMA_OSCURO.php', {
    //         //         method: "POST",
    //         //         body: formData
    //         //     }) 
    //         //     .then(response => response.json())
    //         //     .then(data => {
    //         //         //AGREGA ATRIBUTO DARK (OSCURO) EN EL BODY DEL HTML// 
    //         //         document.getElementById('BODY').setAttribute('data-theme','dark');
    //         //        //SE AGREGA EL ATRIBUTO SKIN3 (TEMA OSCUDO) A LAS 3 CLASES QUE HAY EN EL HEADER NAVBAR Y EL DIV DEL NAVBAR//
    //         //         document.getElementById('header_topbar').setAttribute('data-navbarbg','skin3');
    //         //         document.getElementById('nav_topbar').setAttribute('data-logobg','skin3');
    //         //         document.getElementById('div_navbar').setAttribute('data-logobg','skin3');
    //         //         //SE AGREGA EL ATRIBUTO SKIN3 (TEMA OSCURO) EN EL ASIDE DEL SIDEBAR//
    //         //         document.getElementById('Aside_Left_SideBar').setAttribute('data-sidebarbg','skin3');
    //         //         //COLOR OSCURO DE LETRA DEL LOGO COLEGIO//
    //         //         document.getElementById('Div_Texto_Logo').classList.remove('text-black')
	// 		// 	 document.getElementById('Div_Texto_Logo').classList.add('text-white');
                    
    //         //     })
    //         //     .catch(error => {
    //         //         alert("Error: " + error.textStatus); 
    //         //         console.log("Error: " + error);
    //         //     })

    //         // }else{
    //         //     let formData = new FormData();
    //         //     formData.append('opcion', 2);
    //         //     fetch('TEMA_OSCURO.php', {
    //         //         method: "POST",
    //         //         body: formData
    //         //     }) 
    //         //     .then(response => response.json())
    //         //     .then(data => {
    //         //         //AGREGA ATRIBUTO DARK (OSCURO) EN EL BODY DEL HTML// 
    //         //         document.getElementById('BODY').setAttribute('data-theme','light');
    //         //         //SE AGREGA EL ATRIBUTO SKIN3 (TEMA OSCUDO) A LAS 3 CLASES QUE HAY EN EL HEADER NAVBAR Y EL DIV DEL NAVBAR//
    //         //         document.getElementById('header_topbar').setAttribute('data-navbarbg','skin6');
    //         //         document.getElementById('nav_topbar').setAttribute('data-logobg','skin6');
    //         //         document.getElementById('div_navbar').setAttribute('data-logobg','skin6');
    //         //         //SE AGREGA EL ATRIBUTO SKIN3 (TEMA OSCURO) EN EL ASIDE DEL SIDEBAR//
    //         //         document.getElementById('Aside_Left_SideBar').setAttribute('data-sidebarbg','skin6');
    //         //         //COLOR OSCURO DE LETRA DEL LOGO COLEGIO//
    //         //         document.getElementById('Div_Texto_Logo').classList.remove('text-white')
	// 		// 	    document.getElementById('Div_Texto_Logo').classList.add('text-black');

    //         //         // $('body').attr("data-theme", 'light' ); 
    //         //         // $('.topbar .top-navbar .navbar-header').attr("data-logobg", "skin6");
    //         //         // $('.left-sidebar').attr("data-sidebarbg", "skin6");
    //         //     })
    //         //     .catch(error => {
    //         //         alert("Error: " + error.textStatus); 
    //         //         console.log("Error: " + error);
    //         //     })
    //         // }
    //     });
	        
	// };
    // handlethemeview ();

    
});


