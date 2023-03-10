CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`Padron_Nacional` (
  `Pad_Cedula` VARCHAR(10) NOT NULL,
  `Pad_Nombre` VARCHAR(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Pad_Apellido1` VARCHAR(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Pad_Apellido2` VARCHAR(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

LOAD DATA INFILE 'E:/Desktop/padron_completo/PADRON_COMPLETO.txt'
INTO TABLE padron_nacional
CHARACTER SET UTF8
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\r\n'
(Pad_Cedula, @ignore,@ignore,@ignore,@ignore,Pad_Nombre,Pad_Apellido1,Pad_Apellido2);

  `Pad_Borrar1` VARCHAR(10) NULL,
  `Pad_Borrar2` VARCHAR(10) NULL,
  `Pad_Borrar3` VARCHAR(10) NULL,
  `Pad_Borrar4` VARCHAR(10) NULL,