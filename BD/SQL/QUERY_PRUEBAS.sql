use cindea_judas;
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