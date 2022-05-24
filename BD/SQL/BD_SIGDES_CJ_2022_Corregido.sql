##############################################################################
#################### ELIMINAR  EN EL UNIQUE INDEX #####################
##############################################################################

##############################################################################
######### PONER EN TODAS LAS TABLAS CON DEFAULT CHARACTER SET utf8 ###########
##############################################################################

##############################################################################
############# PONER EN TODAS LAS TABLAS CON ENGINE = InnoDB ##################
##############################################################################


-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema bd_sigdes_cj
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `bd_sigdes_cj` ;

-- -----------------------------------------------------
-- Schema bd_sigdes_cj
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bd_sigdes_cj` DEFAULT CHARACTER SET utf8 ;
USE `bd_sigdes_cj` ;

-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`adecuaciones`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`adecuaciones` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`adecuaciones` (
  `Ade_Codigo` CHAR(2) NOT NULL,
  `Ade_Nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Ade_Codigo`),
  UNIQUE INDEX `Ade_Codigo_UNIQUE` (`Ade_Codigo` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`provincias`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`provincias` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`provincias` (
  `Prov_Codigo` CHAR(1) NOT NULL,
  `Prov_Nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Prov_Codigo`),
  UNIQUE INDEX `Prov_Codigo_UNIQUE` (`Prov_Codigo` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`cantones`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`cantones` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`cantones` (
  `Cant_Provincia` CHAR(1) NOT NULL,
  `Cant_Codigo` CHAR(2) NOT NULL,
  `Cant_Nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Cant_Codigo`, `Cant_Provincia`),
  INDEX `fk_canton_provincia_idx` (`Cant_Provincia` ASC),
  CONSTRAINT `fk_canton_provincia`
    FOREIGN KEY (`Cant_Provincia`)
    REFERENCES `bd_sigdes_cj`.`provincias` (`Prov_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`distritos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`distritos` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`distritos` (
  `Dist_Provincia` CHAR(1) NOT NULL,
  `Dist_Canton` CHAR(2) NOT NULL,
  `Dist_Codigo` CHAR(2) NOT NULL,
  `Dist_Nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Dist_Codigo`, `Dist_Canton`, `Dist_Provincia`),
  INDEX `fk_distritos_cantones1_idx` (`Dist_Canton` ASC),
  INDEX `fk_distritos_provincias1_idx` (`Dist_Provincia` ASC),
  CONSTRAINT `fk_distritos_cantones1`
    FOREIGN KEY (`Dist_Canton`)
    REFERENCES `bd_sigdes_cj`.`cantones` (`Cant_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_distritos_provincias1`
    FOREIGN KEY (`Dist_Provincia`)
    REFERENCES `bd_sigdes_cj`.`provincias` (`Prov_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`grupo_profesional_doc`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`grupo_profesional_doc` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`grupo_profesional_doc` (
  `Gpd_Codigo` VARCHAR(10) NOT NULL,
  `Gpd_Clasificacion` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`Gpd_Codigo`),
  UNIQUE INDEX `Gpd_Codigo_UNIQUE` (`Gpd_Codigo` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`clase_especialidad_docente`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`clase_especialidad_docente` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`clase_especialidad_docente` (
  `ClEspeDoc_Codigo` VARCHAR(10) NOT NULL,
  `ClEspeDoc_Descripcion` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`ClEspeDoc_Codigo`),
  UNIQUE INDEX `ClEspeDoc_Codigo_UNIQUE` (`ClEspeDoc_Codigo` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`nacionalidad`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`nacionalidad` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`nacionalidad` (
  `PAIS_NAC` VARCHAR(50) NOT NULL,
  `GENTILICIO_NAC` VARCHAR(50) NOT NULL,
  `ISO_NAC` CHAR(3) NOT NULL,
  PRIMARY KEY (`ISO_NAC`),
  UNIQUE INDEX `ISO_NAC_UNIQUE` (`ISO_NAC` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`docentes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`docentes` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`docentes` (
  `Doc_Cedula` VARCHAR(30) NOT NULL,
  `Doc_Nombre` VARCHAR(100) NOT NULL,
  `Doc_Apellido1` VARCHAR(100) NOT NULL,
  `Doc_Apellido2` VARCHAR(100) NOT NULL,
  `Doc_Fecha_Nac` DATE NULL DEFAULT NULL,
  `Doc_Correo` VARCHAR(100) NULL DEFAULT NULL,
  `Doc_Grupo_Profesional` VARCHAR(10) NOT NULL,
  `Doc_Especialidad` VARCHAR(10) NOT NULL,
  `Doc_Telefono1` VARCHAR(15) NULL DEFAULT NULL,
  `Doc_Telefono2` VARCHAR(15) NULL DEFAULT NULL,
  `Doc_Distrito` CHAR(2) NOT NULL,
  `Doc_Canton` CHAR(2) NOT NULL,
  `Doc_Provincia` CHAR(1) NOT NULL,
  `Doc_Direccion` VARCHAR(150) NOT NULL,
  `Doc_Estatus` CHAR(1) NOT NULL,
  `Doc_Nacional` CHAR(3) NOT NULL,
  PRIMARY KEY (`Doc_Cedula`),
  UNIQUE INDEX `Doc_Cedula_UNIQUE` (`Doc_Cedula` ASC),
  INDEX `fk_docentes_distritos1_idx` (`Doc_Distrito` ASC, `Doc_Canton` ASC, `Doc_Provincia` ASC),
  INDEX `fk_docentes_grupo_profesional_doc1_idx` (`Doc_Grupo_Profesional` ASC),
  INDEX `fk_docentes_clase_especialidad_docente1_idx` (`Doc_Especialidad` ASC),
  INDEX `fk_docentes_nacionalidad1_idx` (`Doc_Nacional` ASC),
  CONSTRAINT `fk_docentes_distritos1`
    FOREIGN KEY (`Doc_Distrito` , `Doc_Canton` , `Doc_Provincia`)
    REFERENCES `bd_sigdes_cj`.`distritos` (`Dist_Codigo` , `Dist_Canton` , `Dist_Provincia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_docentes_grupo_profesional_doc1`
    FOREIGN KEY (`Doc_Grupo_Profesional`)
    REFERENCES `bd_sigdes_cj`.`grupo_profesional_doc` (`Gpd_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_docentes_clase_especialidad_docente1`
    FOREIGN KEY (`Doc_Especialidad`)
    REFERENCES `bd_sigdes_cj`.`clase_especialidad_docente` (`ClEspeDoc_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_docentes_nacionalidad1`
    FOREIGN KEY (`Doc_Nacional`)
    REFERENCES `bd_sigdes_cj`.`nacionalidad` (`ISO_NAC`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`periodos_tecnicos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`periodos_tecnicos` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`periodos_tecnicos` (
  `PerTec_Anho` CHAR(4) NOT NULL,
  `PerTec_Predeterminado` CHAR(1) NOT NULL,
  PRIMARY KEY (`PerTec_Anho`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`modalidades_esp`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`modalidades_esp` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`modalidades_esp` (
  `ModEsp_Codigo` CHAR(2) NOT NULL,
  `ModEsp_Nombre` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`ModEsp_Codigo`),
  UNIQUE INDEX `Mes_Codigo_UNIQUE` (`ModEsp_Codigo` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`especialidades`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`especialidades` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`especialidades` (
  `Esp_Codigo` VARCHAR(3) NOT NULL,
  `Esp_Nombre` VARCHAR(100) NOT NULL,
  `Est_Modalidad` CHAR(2) NOT NULL,
  PRIMARY KEY (`Esp_Codigo`),
  UNIQUE INDEX `Esp_Codigo_UNIQUE` (`Esp_Codigo` ASC),
  INDEX `fk_especialidades_modalidades_esp1_idx` (`Est_Modalidad` ASC),
  CONSTRAINT `fk_especialidades_modalidades_esp1`
    FOREIGN KEY (`Est_Modalidad`)
    REFERENCES `bd_sigdes_cj`.`modalidades_esp` (`ModEsp_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`niveles_tecnicos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`niveles_tecnicos` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`niveles_tecnicos` (
  `NivT_Codigo` VARCHAR(2) NOT NULL,
  `NivT_Nombre` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`NivT_Codigo`),
  UNIQUE INDEX `NivT_Codigo_UNIQUE` (`NivT_Codigo` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`sub_areas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`sub_areas` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`sub_areas` (
  `Sub_Codigo` VARCHAR(10) NOT NULL,
  `Sub_Nombre` VARCHAR(100) NOT NULL,
  `Sub_Especialidad` VARCHAR(3) NOT NULL,
  `Sub_Nivel` VARCHAR(2) NOT NULL,
  PRIMARY KEY (`Sub_Codigo`),
  UNIQUE INDEX `Sub_Codigo_UNIQUE` (`Sub_Codigo` ASC),
  INDEX `fk_sub_areas_especialidades1_idx` (`Sub_Especialidad` ASC),
  INDEX `fk_sub_areas_niveles_tecnicos1_idx` (`Sub_Nivel` ASC),
  CONSTRAINT `fk_sub_areas_especialidades1`
    FOREIGN KEY (`Sub_Especialidad`)
    REFERENCES `bd_sigdes_cj`.`especialidades` (`Esp_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sub_areas_niveles_tecnicos1`
    FOREIGN KEY (`Sub_Nivel`)
    REFERENCES `bd_sigdes_cj`.`niveles_tecnicos` (`NivT_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`asignacion_docentes_sub_areas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`asignacion_docentes_sub_areas` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`asignacion_docentes_sub_areas` (
  `docentes_Doc_Cedula` VARCHAR(30) NOT NULL,
  `sub_areas_Sub_Codigo` VARCHAR(10) NOT NULL,
  `periodos_tec_PerTec_Anho` CHAR(4) NOT NULL,
  `periodos_tec_PerTec_Periodo` CHAR(1) NOT NULL,
  INDEX `fk_Sub_areas_Docentes_docentes1_idx` (`docentes_Doc_Cedula` ASC),
  INDEX `fk_Sub_areas_Docentes_sub_areas1_idx` (`sub_areas_Sub_Codigo` ASC),
  INDEX `fk_Sub_areas_Docentes_periodos_tec1_idx` (`periodos_tec_PerTec_Anho` ASC, `periodos_tec_PerTec_Periodo` ASC),
  CONSTRAINT `fk_Sub_areas_Docentes_docentes1`
    FOREIGN KEY (`docentes_Doc_Cedula`)
    REFERENCES `bd_sigdes_cj`.`docentes` (`Doc_Cedula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Sub_areas_Docentes_periodos_tec1`
    FOREIGN KEY (`periodos_tec_PerTec_Anho`)
    REFERENCES `bd_sigdes_cj`.`periodos_tecnicos` (`PerTec_Anho`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Sub_areas_Docentes_sub_areas1`
    FOREIGN KEY (`sub_areas_Sub_Codigo`)
    REFERENCES `bd_sigdes_cj`.`sub_areas` (`Sub_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`periodos_academicos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`periodos_academicos` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`periodos_academicos` (
  `PerAc_Anho` CHAR(4) NOT NULL,
  `PerAc_Periodo` CHAR(1) NOT NULL,
  `PerAc_Predeterminado` CHAR(1) NOT NULL,
  PRIMARY KEY (`PerAc_Anho`, `PerAc_Periodo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`Tranporte_Estudiantil`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`Tranporte_Estudiantil` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`Tranporte_Estudiantil` (
  `Trans_Codigo` INT NOT NULL,
  `Trans_Nombre_Ruta` VARCHAR(50) NOT NULL,
  `Trans_Detalle` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`Trans_Codigo`),
  UNIQUE INDEX `Trans_Codigo_UNIQUE` (`Trans_Codigo` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`estudiantes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`estudiantes` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`estudiantes` (
  `Est_Cedula` VARCHAR(30) NOT NULL,
  `Est_Nombre` VARCHAR(100) NOT NULL,
  `Est_Apellido1` VARCHAR(100) NOT NULL,
  `Est_Apellido2` VARCHAR(100) NOT NULL,
  `Est_Fecha_Nac` DATE NOT NULL,
  `Est_Correo` VARCHAR(100) NULL DEFAULT NULL,
  `Est_Nacionalidad` CHAR(3) NOT NULL,
  `Est_Genero_` CHAR(1) NOT NULL,
  `Est_Ocupacion` VARCHAR(100) NULL,
  `Est_Informacion_Medica` VARCHAR(150) NULL DEFAULT NULL,
  `Est_Telefono1` VARCHAR(15) NULL DEFAULT NULL,
  `Est_Telefono2` VARCHAR(15) NULL DEFAULT NULL,
  `Est_Transporte` INT NOT NULL,
  `Est_Distrito` CHAR(2) NOT NULL,
  `Est_Canton` CHAR(2) NOT NULL,
  `Est_Provincia` CHAR(1) NOT NULL,
  `Est_Direccion` VARCHAR(150) NOT NULL,
  `Est_Adecuacion` CHAR(2) NOT NULL,
  `Est_Estatus` CHAR(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`Est_Cedula`),
  INDEX `fk_estudiantes_adecuaciones1_idx` (`Est_Adecuacion` ASC),
  INDEX `fk_estudiantes_transporte1_idx` (`Est_Transporte` ASC),
  UNIQUE INDEX `Est_Cedula_UNIQUE` (`Est_Cedula` ASC),
  INDEX `fk_estudiantes_distritos1_idx` (`Est_Distrito` ASC, `Est_Canton` ASC, `Est_Provincia` ASC),
  INDEX `fk_estudiantes_nacionalidad1_idx` (`Est_Nacionalidad` ASC),
  CONSTRAINT `fk_estudiantes_adecuaciones1`
    FOREIGN KEY (`Est_Adecuacion`)
    REFERENCES `bd_sigdes_cj`.`adecuaciones` (`Ade_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_estu_transp`
    FOREIGN KEY (`Est_Transporte`)
    REFERENCES `bd_sigdes_cj`.`Tranporte_Estudiantil` (`Trans_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_estudiantes_distritos1`
    FOREIGN KEY (`Est_Distrito` , `Est_Canton` , `Est_Provincia`)
    REFERENCES `bd_sigdes_cj`.`distritos` (`Dist_Codigo` , `Dist_Canton` , `Dist_Provincia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_estudiantes_nacionalidad1`
    FOREIGN KEY (`Est_Nacionalidad`)
    REFERENCES `bd_sigdes_cj`.`nacionalidad` (`ISO_NAC`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`satelites`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`satelites` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`satelites` (
  `Sat_Codigo` CHAR(2) NOT NULL,
  `Sat_Nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Sat_Codigo`),
  UNIQUE INDEX `Sat_Codigo_UNIQUE` (`Sat_Codigo` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`niveles_modulos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`niveles_modulos` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`niveles_modulos` (
  `NivMod_Id` VARCHAR(10) NOT NULL,
  `NivMod_Nombre` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`NivMod_Id`),
  UNIQUE INDEX `NivAca_Id_UNIQUE` (`NivMod_Id` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`secciones_academicas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`secciones_academicas` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`secciones_academicas` (
  `Sec_Id` INT NOT NULL AUTO_INCREMENT,
  `Sec_Nombre` VARCHAR(45) NOT NULL,
  `Sec_Satelite` CHAR(2) NOT NULL,
  `Sec_Anho` CHAR(4) NOT NULL,
  `Sec_Nivel` VARCHAR(10) NOT NULL,
  `Sec_Periodo` CHAR(1) NOT NULL,
  PRIMARY KEY (`Sec_Id`),
  UNIQUE INDEX `Sec_Id_UNIQUE` (`Sec_Id` ASC),
  INDEX `fk_secciones_academicas_satelites1_idx` (`Sec_Satelite` ASC),
  INDEX `fk_secciones_academicas_periodo_ac1_idx` (`Sec_Anho` ASC, `Sec_Periodo` ASC),
  INDEX `fk_secciones_academicas_niveles_modulos1_idx` (`Sec_Nivel` ASC),
  CONSTRAINT `fk_secciones_academicas_satelites1`
    FOREIGN KEY (`Sec_Satelite`)
    REFERENCES `bd_sigdes_cj`.`satelites` (`Sat_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_secciones_academicas_periodo_ac1`
    FOREIGN KEY (`Sec_Anho` , `Sec_Periodo`)
    REFERENCES `bd_sigdes_cj`.`periodos_academicos` (`PerAc_Anho` , `PerAc_Periodo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_secciones_academicas_niveles_modulos1`
    FOREIGN KEY (`Sec_Nivel`)
    REFERENCES `bd_sigdes_cj`.`niveles_modulos` (`NivMod_Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`matriculas_academicas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`matriculas_academicas` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`matriculas_academicas` (
  `Mat_Codigo` INT(11) NOT NULL AUTO_INCREMENT,
  `Mat_Estudiante` VARCHAR(30) NOT NULL,
  `Mat_FechaMatricula` DATETIME NOT NULL,
  `Mat_Seccion` INT NOT NULL,
  `Mat_Anho` CHAR(4) NOT NULL,
  `Mat_Periodo` CHAR(1) NOT NULL,
  `Mat_Beca_Crecemos` CHAR(1) NOT NULL,
  `Mat_Beca_Avancemos` CHAR(1) NOT NULL,
  `Mat_Beca_Otras` VARCHAR(200) NULL,
  PRIMARY KEY (`Mat_Codigo`),
  UNIQUE INDEX `Mat_Codigo_UNIQUE` (`Mat_Codigo` ASC),
  INDEX `fk_matriculas_ac_estudiantes1_idx` (`Mat_Estudiante` ASC),
  INDEX `fk_matriculas_ac_Periodo_Ac1_idx` (`Mat_Anho` ASC, `Mat_Periodo` ASC),
  INDEX `fk_matriculas_ac_secciones_academicas1_idx` (`Mat_Seccion` ASC),
  CONSTRAINT `fk_matriculas_ac_Periodo_Ac1`
    FOREIGN KEY (`Mat_Anho` , `Mat_Periodo`)
    REFERENCES `bd_sigdes_cj`.`periodos_academicos` (`PerAc_Anho` , `PerAc_Periodo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_matriculas_ac_estudiantes1`
    FOREIGN KEY (`Mat_Estudiante`)
    REFERENCES `bd_sigdes_cj`.`estudiantes` (`Est_Cedula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_matriculas_ac_secciones_academicas1`
    FOREIGN KEY (`Mat_Seccion`)
    REFERENCES `bd_sigdes_cj`.`secciones_academicas` (`Sec_Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`periodos_modulos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`periodos_modulos` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`periodos_modulos` (
  `PerMod_Id` VARCHAR(5) NOT NULL,
  `PerMod_Nombre` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`PerMod_Id`),
  UNIQUE INDEX `PerModCon_Id_UNIQUE` (`PerMod_Id` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`modulos_convencionales`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`modulos_convencionales` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`modulos_convencionales` (
  `ModCon_Codigo` VARCHAR(10) NOT NULL,
  `ModCon_Nombre` VARCHAR(200) NOT NULL,
  `ModCon_Atinencia` VARCHAR(100) NULL,
  `ModCon_Area` VARCHAR(100) NULL,
  `ModCon_Nivel` VARCHAR(10) NOT NULL,
  `ModCon_Periodo` VARCHAR(5) NOT NULL,
  `ModCon_Creditos` TINYINT NULL,
  `ModCon_Nota_Minima` DECIMAL(5,2) NULL,
  `ModCon_Equivalencia` VARCHAR(45) NULL,
  PRIMARY KEY (`ModCon_Codigo`),
  UNIQUE INDEX `ModCon_Codigo_UNIQUE` (`ModCon_Codigo` ASC),
  INDEX `fk_modulos_convencionales_niveles_modulos1_idx` (`ModCon_Nivel` ASC),
  INDEX `fk_modulos_convencionales_periodos_modulos1_idx` (`ModCon_Periodo` ASC),
  CONSTRAINT `fk_modulos_convencionales_niveles_modulos1`
    FOREIGN KEY (`ModCon_Nivel`)
    REFERENCES `bd_sigdes_cj`.`niveles_modulos` (`NivMod_Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_modulos_convencionales_periodos_modulos1`
    FOREIGN KEY (`ModCon_Periodo`)
    REFERENCES `bd_sigdes_cj`.`periodos_modulos` (`PerMod_Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`detalle_matricula_convencional`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`detalle_matricula_convencional` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`detalle_matricula_convencional` (
  `DetMatCon_Matricula` INT(11) NOT NULL,
  `DetMatCon_Modulo` VARCHAR(10) NOT NULL,
  `DetMatCon_Nota` DECIMAL(5,2) NOT NULL,
  INDEX `fk_Detalle_Matricula_Ac_matriculas_ac1_idx` (`DetMatCon_Matricula` ASC),
  INDEX `fk_detalle_matricula_convencional_modulos_convencionales1_idx` (`DetMatCon_Modulo` ASC),
  CONSTRAINT `fk_Detalle_Matricula_Ac_matriculas_ac1`
    FOREIGN KEY (`DetMatCon_Matricula`)
    REFERENCES `bd_sigdes_cj`.`matriculas_academicas` (`Mat_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_detalle_matricula_convencional_modulos_convencionales1`
    FOREIGN KEY (`DetMatCon_Modulo`)
    REFERENCES `bd_sigdes_cj`.`modulos_convencionales` (`ModCon_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`secciones_tecnicas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`secciones_tecnicas` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`secciones_tecnicas` (
  `SecTec_Id` INT NOT NULL AUTO_INCREMENT,
  `SecTec_Nombre` VARCHAR(30) NOT NULL,
  `SecTec_Satelite` CHAR(2) NOT NULL,
  `SecTec_Nivel` VARCHAR(2) NOT NULL,
  `SecTec_Anho_Lectivo` CHAR(4) NOT NULL,
  PRIMARY KEY (`SecTec_Id`),
  UNIQUE INDEX `SecTec_Id_UNIQUE` (`SecTec_Id` ASC),
  INDEX `fk_secciones_tec_satelites1_idx` (`SecTec_Satelite` ASC),
  INDEX `fk_secciones_tec_niveles_tec1_idx` (`SecTec_Nivel` ASC),
  INDEX `fk_secciones_tecnicas_periodos_tecnicos1_idx` (`SecTec_Anho_Lectivo` ASC),
  CONSTRAINT `fk_secciones_tec_satelites1`
    FOREIGN KEY (`SecTec_Satelite`)
    REFERENCES `bd_sigdes_cj`.`satelites` (`Sat_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_secciones_tec_niveles_tec1`
    FOREIGN KEY (`SecTec_Nivel`)
    REFERENCES `bd_sigdes_cj`.`niveles_tecnicos` (`NivT_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_secciones_tecnicas_periodos_tecnicos1`
    FOREIGN KEY (`SecTec_Anho_Lectivo`)
    REFERENCES `bd_sigdes_cj`.`periodos_tecnicos` (`PerTec_Anho`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`matriculas_tecnicas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`matriculas_tecnicas` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`matriculas_tecnicas` (
  `MatTec_Codigo` INT(11) NOT NULL AUTO_INCREMENT,
  `MatTec_FechaMatricula` DATETIME NOT NULL,
  `MatTec_Estudiante` VARCHAR(30) NOT NULL,
  `MatTec_Seccion` INT NOT NULL,
  `MatTec_Anho_Lectivo` CHAR(4) NOT NULL,
  `MatTec_Beca_Crecemos` CHAR(1) NOT NULL,
  `MatTec_Beca_Avancemos` CHAR(1) NOT NULL,
  `MatTec_Beca_Otras` VARCHAR(200) NULL,
  PRIMARY KEY (`MatTec_Codigo`),
  UNIQUE INDEX `MatTec_Codigo_UNIQUE` (`MatTec_Codigo` ASC),
  INDEX `fk_matriculas_tec_estudiantes1_idx` (`MatTec_Estudiante` ASC),
  INDEX `fk_matriculas_tec_periodos_tec1_idx` (`MatTec_Anho_Lectivo` ASC),
  INDEX `fk_matriculas_tecnicas_secciones_tecnicas1_idx` (`MatTec_Seccion` ASC),
  CONSTRAINT `fk_matriculas_tec_estudiantes1`
    FOREIGN KEY (`MatTec_Estudiante`)
    REFERENCES `bd_sigdes_cj`.`estudiantes` (`Est_Cedula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_matriculas_tec_periodos_tec1`
    FOREIGN KEY (`MatTec_Anho_Lectivo`)
    REFERENCES `bd_sigdes_cj`.`periodos_tecnicos` (`PerTec_Anho`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_matriculas_tecnicas_secciones_tecnicas1`
    FOREIGN KEY (`MatTec_Seccion`)
    REFERENCES `bd_sigdes_cj`.`secciones_tecnicas` (`SecTec_Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`detalle_matricula_tec`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`detalle_matricula_tec` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`detalle_matricula_tec` (
  `DetMacTec_Sub_area` VARCHAR(10) NOT NULL,
  `DetMacTec_Matricula` INT(11) NOT NULL,
  INDEX `fk_Detalle_Matricula_Tec_sub_areas1_idx` (`DetMacTec_Sub_area` ASC),
  INDEX `fk_Detalle_Matricula_Tec_matriculas_tec1_idx` (`DetMacTec_Matricula` ASC),
  CONSTRAINT `fk_Detalle_Matricula_Tec_matriculas_tec1`
    FOREIGN KEY (`DetMacTec_Matricula`)
    REFERENCES `bd_sigdes_cj`.`matriculas_tecnicas` (`MatTec_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Detalle_Matricula_Tec_sub_areas1`
    FOREIGN KEY (`DetMacTec_Sub_area`)
    REFERENCES `bd_sigdes_cj`.`sub_areas` (`Sub_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`parametros_colegio`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`parametros_colegio` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`parametros_colegio` (
  `ParCol_Nombre_Colegio` VARCHAR(100) NOT NULL,
  `ParCol_Codigo_Colegio` VARCHAR(15) NOT NULL,
  `ParCol_Director` VARCHAR(150) NOT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`usuario_desarrollador`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`usuario_desarrollador` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`usuario_desarrollador` (
  `UsDes_Usuario` VARCHAR(30) NOT NULL,
  `UsDes_Clave` VARCHAR(150) NOT NULL,
  `UsDes_Nombre` VARCHAR(45) NOT NULL,
  `UsDes_Apellido1` VARCHAR(45) NOT NULL,
  `UsDes_Apellido2` VARCHAR(45) NOT NULL,
  `UsDes_Tema` CHAR(1) NOT NULL,
  PRIMARY KEY (`UsDes_Usuario`),
  UNIQUE INDEX `UsDes_Usuario_UNIQUE` (`UsDes_Usuario` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`modulos_opcionales`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`modulos_opcionales` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`modulos_opcionales` (
  `ModOp_Codigo` VARCHAR(10) NOT NULL,
  `ModOp_Nombre` VARCHAR(200) NOT NULL,
  `ModOp_Atinencia` VARCHAR(100) NULL,
  `ModOp_Nivel` VARCHAR(10) NOT NULL,
  `ModOp_Creditos` TINYINT NOT NULL,
  `ModOp_Nota_Minima` DECIMAL(5,2) NULL,
  PRIMARY KEY (`ModOp_Codigo`),
  UNIQUE INDEX `ModOp_Codigo_UNIQUE` (`ModOp_Codigo` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`modulos_Emergente`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`modulos_Emergente` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`modulos_Emergente` (
  `ModEm_Codigo` VARCHAR(10) NOT NULL,
  `ModEm_Nombre` VARCHAR(200) NOT NULL,
  `ModEm_Atinencia` VARCHAR(100) NOT NULL,
  `ModEm_Creditos` TINYINT NOT NULL,
  `ModEm_Requisito` VARCHAR(10) NULL,
  PRIMARY KEY (`ModEm_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`detalle_matricula_opcional`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`detalle_matricula_opcional` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`detalle_matricula_opcional` (
  `DetMatOp_Matricula` INT(11) NOT NULL,
  `DetMatOp_Modulo` VARCHAR(10) NOT NULL,
  `DetMatOp_Nota` DECIMAL(5,2) NOT NULL,
  INDEX `fk_detalle_matricula_opcional_matriculas_academicas1_idx` (`DetMatOp_Matricula` ASC),
  INDEX `fk_detalle_matricula_opcional_modulos_opcionales1_idx` (`DetMatOp_Modulo` ASC),
  CONSTRAINT `fk_detalle_matricula_opcional_matriculas_academicas1`
    FOREIGN KEY (`DetMatOp_Matricula`)
    REFERENCES `bd_sigdes_cj`.`matriculas_academicas` (`Mat_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_detalle_matricula_opcional_modulos_opcionales1`
    FOREIGN KEY (`DetMatOp_Modulo`)
    REFERENCES `bd_sigdes_cj`.`modulos_opcionales` (`ModOp_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`matriculas_emergente`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`matriculas_emergente` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`matriculas_emergente` (
  `MatEm_Codigo` INT NOT NULL AUTO_INCREMENT,
  `MatEm_Estudiante` VARCHAR(30) NOT NULL,
  `MatEm_FechaMatricula` DATETIME NOT NULL,
  `MatEmt_Beca_Crecemos` CHAR(1) NOT NULL,
  `MatEm_Beca_Avancemos` CHAR(1) NOT NULL,
  `MatEm_Beca_Otras` VARCHAR(200) NULL,
  `MatEm_Seccion` INT NOT NULL,
  `MatEm_Anho` CHAR(4) NOT NULL,
  `MatEm_Periodo` CHAR(1) NOT NULL,
  PRIMARY KEY (`MatEm_Codigo`),
  UNIQUE INDEX `MatEm_Codigo_UNIQUE` (`MatEm_Codigo` ASC),
  INDEX `fk_matriculas_emergente_estudiantes1_idx` (`MatEm_Estudiante` ASC),
  INDEX `fk_matriculas_emergente_secciones_academicas1_idx` (`MatEm_Seccion` ASC),
  INDEX `fk_matriculas_emergente_periodos_academicos1_idx` (`MatEm_Anho` ASC, `MatEm_Periodo` ASC),
  CONSTRAINT `fk_matriculas_emergente_estudiantes1`
    FOREIGN KEY (`MatEm_Estudiante`)
    REFERENCES `bd_sigdes_cj`.`estudiantes` (`Est_Cedula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_matriculas_emergente_secciones_academicas1`
    FOREIGN KEY (`MatEm_Seccion`)
    REFERENCES `bd_sigdes_cj`.`secciones_academicas` (`Sec_Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_matriculas_emergente_periodos_academicos1`
    FOREIGN KEY (`MatEm_Anho` , `MatEm_Periodo`)
    REFERENCES `bd_sigdes_cj`.`periodos_academicos` (`PerAc_Anho` , `PerAc_Periodo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`detalle_matricula_emergente`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`detalle_matricula_emergente` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`detalle_matricula_emergente` (
  `DetMatEm_Matricula` INT NOT NULL,
  `DetMatEm_Modulo` VARCHAR(10) NOT NULL,
  INDEX `fk_detalle_matricula_emergente_matriculas_emergente1_idx` (`DetMatEm_Matricula` ASC),
  INDEX `fk_detalle_matricula_emergente_modulos_Emergente1_idx` (`DetMatEm_Modulo` ASC),
  CONSTRAINT `fk_detalle_matricula_emergente_matriculas_emergente1`
    FOREIGN KEY (`DetMatEm_Matricula`)
    REFERENCES `bd_sigdes_cj`.`matriculas_emergente` (`MatEm_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_detalle_matricula_emergente_modulos_Emergente1`
    FOREIGN KEY (`DetMatEm_Modulo`)
    REFERENCES `bd_sigdes_cj`.`modulos_Emergente` (`ModEm_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`PRUEBAS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`PRUEBAS` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`PRUEBAS` (
  `idPRUEBAS` INT NOT NULL,
  `NOTAS` DECIMAL(4,2) NULL,
  PRIMARY KEY (`idPRUEBAS`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`notas_estudiante_tecnicos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`notas_estudiante_tecnicos` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`notas_estudiante_tecnicos` (
  `NotaTec_Nota` DECIMAL(5,2) NOT NULL,
  `NotaTec_Estudiante` VARCHAR(30) NOT NULL,
  `NotaTec_Sub_Area` VARCHAR(10) NOT NULL,
  INDEX `fk_notas_estudiante_tecnicos_estudiantes1_idx` (`NotaTec_Estudiante` ASC),
  INDEX `fk_notas_estudiante_tecnicos_sub_areas1_idx` (`NotaTec_Sub_Area` ASC),
  CONSTRAINT `fk_notas_estudiante_tecnicos_estudiantes1`
    FOREIGN KEY (`NotaTec_Estudiante`)
    REFERENCES `bd_sigdes_cj`.`estudiantes` (`Est_Cedula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_notas_estudiante_tecnicos_sub_areas1`
    FOREIGN KEY (`NotaTec_Sub_Area`)
    REFERENCES `bd_sigdes_cj`.`sub_areas` (`Sub_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`apoderado_estudiante`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`apoderado_estudiante` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`apoderado_estudiante` (
  `ApoEst_Cedula` VARCHAR(30) NOT NULL,
  `ApoEst_Nombre` VARCHAR(100) NOT NULL,
  `ApoEst_Apellido1` VARCHAR(100) NOT NULL,
  `ApoEst_Apellido2` VARCHAR(100) NOT NULL,
  `ApoEst_Telefono1` VARCHAR(15) NOT NULL,
  `ApoEst_Telefono2` VARCHAR(15) NULL,
  `ApoEst_Estudiante` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`ApoEst_Cedula`, `ApoEst_Estudiante`),
  INDEX `fk_apoderado_estudiante_estudiantes1_idx` (`ApoEst_Estudiante` ASC),
  CONSTRAINT `fk_apoderado_estudiante_estudiantes1`
    FOREIGN KEY (`ApoEst_Estudiante`)
    REFERENCES `bd_sigdes_cj`.`estudiantes` (`Est_Cedula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
