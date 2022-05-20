<?php
//Incluir para métros para la conexión SERVER SIDE
include_once '../../BD/0_Parametros_Conexion.php';

// INFORMACIÓN DE LA INFORMACIÓN DE CONEXIÓN
$sql_details = array(
	'user' => usuario,
	'pass' => password,
	'db'   => nombre_bd,
	'host' => servidor
);


// Tabla de la base de datos
$table = 'user_details';

// Llave primari de la tabla
$primaryKey = 'user_id';


//El ARRAY CONTIENE EL NOMBRE DE LA COLUMNA EN LA BASE DE DATOS
// Y EL NÚMERO DE LA COLUMNA EN LA QUE SE VA A INGRESAR EL DATO
$columns = array(
	array( 'db' => 'user_id', 'dt' => 0 ),
	array( 'db' => 'username',  'dt' => 1 ),
	array( 'db' => 'first_name',   'dt' => 2 ),
	array( 'db' => 'last_name',     'dt' => 3 ),
    array( 'db' => 'gender',     'dt' => 4 ),
    array( 'db' => 'status',     'dt' => 5 )



/////////////// EN CASO DE DAR FORMATOS DE FECHA Y MONTOS ECONÓMICOS
									

	// array(
	// 	'db'        => 'start_date',
	// 	'dt'        => 4,
	// 	'formatter' => function( $d, $row ) {//SE INGRESA EL FORMATO DE FECHA
	// 		return date( 'd-m-Y', strtotime($d));
	// 	}
	// ),
	// array(
	// 	'db'        => 'salary',
	// 	'dt'        => 5,
	// 	'formatter' => function( $d, $row ) {// SE INGRESA EL FORMATO DEL MONTO
	// 		return '¢'.number_format($d,2,'.'.','); // SE INDICAN 2 DECIMALES, EL SEPARADOR DE DECIMALE ES UN PUNTO Y EL SEPARADOR DE MILES ES UNA COMA
	// 	}
	// )
);



/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * SE REQUIERE HACER USO DE LA CLASE SERVER SIDE PROCESSING (SSP.CLASS)
 * UNA VEZ TERMINADA LA EJECUCIÓN SE IMPRIME (DEVUELVE) EN PANTALLA 
 * LA INFORMACIÓN DE LA TABLA
 */

require( '../../BD/ssp.class.php' );

echo json_encode(
	SSP::simple( $_GET, $sql_details, $table, $primaryKey, $columns )
);


