############# USAR LA BASE DE DATOS #############
use bd_sigdes_cj;



########### OBTENER NOMBRES DE PROVINCIA CANTÓN DISTRITO ############
SELECT * FROM PROVINCIAS;
SELECT * FROM CANTONES;
Select * from distritos;
########### EL SELECT PARA SABER TODO ###########
SELECT Prov_Nombre AS Provincia, Cant_Nombre AS Canton, Dist_Nombre AS Distrito
FROM provincias,cantones,distritos WHERE Dist_Codigo = '03' AND Dist_Canton = '02' AND Dist_Provincia = '7' AND
Dist_Canton = Cant_Codigo AND Dist_Provincia = Cant_Provincia AND Cant_Provincia = Prov_Codigo;
######### CON INNER JOIN ##################
SELECT Prov_Nombre AS Provincia, Cant_Nombre AS Canton, Dist_Nombre AS Distrito
FROM distritos inner join cantones on Dist_Canton = Cant_Codigo
inner join provincias on Dist_Provincia = Cant_Provincia and Cant_Provincia = Prov_Codigo
where Dist_Codigo = '03' AND Dist_Canton = '01' AND Dist_Provincia = '6';

################### CONSULTA DE CANTONES SEGÚN LA PROVINCIA #####################
SELECT Cant_Codigo, Cant_Nombre FROM cantones
INNER JOIN provincias on Cant_Provincia = Prov_Codigo
WHERE Prov_Codigo = '6';   

#################### CONSULTA DISTRITOS SEGÚN LA PROVINCIA Y CANTÓN ###################
SELECT Dist_Codigo, Dist_Nombre
FROM distritos inner join cantones on Dist_Canton = Cant_Codigo
inner join provincias on Dist_Provincia = Cant_Provincia and Cant_Provincia = Prov_Codigo
where Dist_Canton = '01' AND Dist_Provincia = '6';
 
##################################################################################################


############### CONSULTAR PARÁMETROS DEL COLEGIO ##################
SELECT * FROM parametros_colegio; 
UPDATE parametros_colegio SET ParCol_Nombre_Colegio = 'CINDEA JUDAS',
ParCol_Codigo_Colegio = '6519', ParCol_Director = 'MSc. Luis Fernando Elizondo Carrillo'
WHERE ParCol_Codigo_Colegio = '6519';
DELETE FROM parametros_colegio WHERE ParCol_Codigo_Colegio = '6519';
###################################################################


############### CONSULTAR PERIODOS LECTIVOS ##################
SELECT * FROM periodos_academicos; 
SELECT * FROM periodos_academicos WHERE PerAc_Anho = '2015' and PerAc_Periodo = '2';
UPDATE periodo_ac SET PerAc_Anho = '2015',
PerAc_Periodo = '2'
WHERE PerAc_Anho = '2017' and PerAc_Periodo = '2015' ;
DELETE FROM periodos_academicos WHERE PerAc_Anho = '2015' and PerAc_Periodo = '2';
###################################################################


################## NACIONALIDADES ######################
SELECT * FROM nacionalidad;
SELECT * FROM nacionalidad WHERE ISO_NAC = 'CRI';
########################################################


################## GRUPO PROFESIONAL DOCENTES ######################
SELECT * FROM grupo_profesional_doc;
SELECT * FROM grupo_profesional_doc WHERE Gpd_Codigo = 'ASP';
UPDATE grupo_profesional_doc SET Gpd_Codigo = 'ASP', Gpd_Clasificacion = 'PROFESOR ASPIRANTE'
WHERE Gpd_Codigo = 'ASP';
########################################################


################## CLASE ESPECIALIDAD DOCENTES ######################
SELECT * FROM clase_especialidad_docente;
SELECT * FROM clase_especialidad_docente WHERE ClEspeDoc_Codigo = 'INF';
UPDATE clase_especialidad_docente SET ClEspeDoc_Codigo = 'INF', ClEspeDoc_Descripcion = 'INFORMATIC'
WHERE ClEspeDoc_Codigo = 'INF';
########################################################


################## MODALIDADES ESPECIALIDADES ######################
SELECT * FROM modalidades_esp;
########################################################


################## ESPECIALIDADES TÉCNICAS ######################
SELECT * FROM especialidades;
########################################################


################## NIVELES ESPECIALIDADES ######################
SELECT * FROM niveles_tecnicos;
########################################################


################## NIVELES ESPECIALIDADES ######################
SELECT * FROM sub_areas;
SELECT Sub_Codigo, Sub_Nombre, Esp_Nombre, Sub_Nivel FROM sub_areas
INNER JOIN especialidades on Sub_Especialidad = Esp_Codigo;
########################################################

SELECT UsDes_Usuario,UsDes_Nombre,UsDes_Apellido1,UsDes_Apellido2 FROM USUARIO_DESARROLLADOR;
INSERT INTO usuario_desarrollador VALUES('MEXI87','012','MEXI','CLAN','TRS','0');



CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`PRUEBAS` (
  `idPRUEBAS` INT NOT NULL,
  `NOTAS` DECIMAL(5,2) NULL,
  PRIMARY KEY (`idPRUEBAS`))
ENGINE = InnoDB;

insert into PRUEBAS values(5,2200.25);
SELECT * FROM PRUEBAS;

######################

SELECT * FROM modulos;
########################








SET @Decimal1 = 100;
SELECT @Decimal1;



insert into secciones_academicas values(1,'6P1','11','11');
UPDATE secciones_academicas SET Sec_Nivel='03' where Sec_Id = 1;
Select * from secciones_academicas;
delete from secciones_academicas where Sec_Id = 1;


insert into niveles values('01','I NIVEL');
insert into niveles values('02','II NIVEL');
insert into niveles values('03','III NIVEL');

insert into satelites values('01','SEDE CENTRAL');
insert into satelites values('02','COSTA DE PÁJAROS');
insert into satelites values('03','CHOMES');

select * from niveles;
select * from SATELITES;
select * from SECCIONES;
SELECT Sec_Nombre, Niv_Nombre, Sat_Nombre from seccion, satelites, niveles where Sec_Nivel=Niv_Codigo and Sec_Satelite=Sat_Codigo;

insert into seccion values('3P 2','02','03');

insert into PROVINCIAS values('01','PUNTARENAS');
select * from PROVINCIAS;
DELETE FROM PROVINCIAS;



insert into SECCIONES_TEC values('10-2','2019','01');
SELECT * FROM SECCIONES_TEC; 
UPDATE SECCIONES_TEC SET SecTec_Especialidad='03';
set SQL_SAFE_UPDATES=0; ### DESACTIVAR EL MODO SEGURO DE BORRADOS Y ACTUALIZACIÓN MASIVA
set SQL_SAFE_UPDATES=1; ### ACTIVAR EL MODO SEGURO DE BORRADOS Y ACTUALIZACIÓN MASIVA


################################
#MANEJO DE FECHAS DESDE MYSQL#
################################
SELECT curdate();
SELECT curtime();
SELECT now();

select YEAR(NOW());  #Selecciona el año
select MONTH (NOW()) as mes;  #Selecciona el mes
select DAY(NOW()) as dia; #Selecciona el día 
select TIME(NOW()) as hora;  #Selecciona la hora
Select LAST_DAY(NOW()); # Selecciona el ultimo dia del mes

select Date_format(now(),'%d/%M/%Y'); # '21/May/2021'
select Date_format(now(),'%Y-%M-%d %h:%i:%s %p'); #'2010-January-12 12:34:29 AM'
select Date_format(now(),'%W %d %M %Y'); # 'Tuesday 12 January 2010'
select Date_format(now(),'El año actual es %Y'); # 'El año actual es 2010'
select Date_format(now(),'%W %d %M %Y'); # 'Tuesday 12 January 2010'

SELECT DATEDIFF(NOW(),'2002-11-02'); #cuantos días han pasado
SELECT DATEDIFF(NOW(),'2010-03-20'); #Cuantos días faltan

SELECT * FROM nuestraTabla WHERE dia >=  CURDATE(); #MOSTRAR DATOS MAYOR E IGUAL A LA FECHA ACTUAL

- %d #Día del mes numérico (00...31)
- %H #Hora (00...23)
- %h #Hora (01...12)
- %i #Minutos, numérico (00...59)
- %M #Nombre mes (January...December)
- %m #Mes, numérico (00...12)
- %p #AM o PM
- %W #Nombre día semana (Sunday...Saturday)
- %Y #Año, numérico, cuatro dígitos
- %y #Año, numérico (dos dígitos)
- %s #Segundos (00...59)