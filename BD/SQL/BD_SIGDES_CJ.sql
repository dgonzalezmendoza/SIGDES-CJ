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

-- -----------------------------------------------------
-- Schema bd_sigdes_cj
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bd_sigdes_cj` DEFAULT CHARACTER SET utf8 ;
USE `bd_sigdes_cj` ;

-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`adecuaciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`adecuaciones` (
  `Ade_Codigo` CHAR(2) NOT NULL,
  `Ade_Nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Ade_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`barrios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`barrios` (
  `Bar_Codigo` CHAR(4) NOT NULL,
  `Bar_Nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Bar_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`cantones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`cantones` (
  `Cant_Codigo` CHAR(2) NOT NULL,
  `Cant_Nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Cant_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`distritos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`distritos` (
  `Dist_Codigo` CHAR(3) NOT NULL,
  `Dist_Nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Dist_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`doc_tec_secciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`doc_tec_secciones` (
  `DocTSec_Docente` VARCHAR(30) NOT NULL,
  `DocTSec_Sub_Area` VARCHAR(10) NULL DEFAULT NULL,
  PRIMARY KEY (`DocTSec_Docente`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`docentes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`docentes` (
  `Doc_Cedula` VARCHAR(30) NOT NULL,
  `Doc_Nombre` VARCHAR(45) NOT NULL,
  `Doc_Apellido1` VARCHAR(45) NOT NULL,
  `Doc_Apellido2` VARCHAR(45) NOT NULL,
  `Doc_Fecha_Nac` DATE NULL DEFAULT NULL,
  `Doc_Correo` VARCHAR(70) NULL DEFAULT NULL,
  `Doc_Tipo_Docente` CHAR(2) NOT NULL,
  `Doc_Grupo_Profesional` CHAR(2) NOT NULL,
  `Doc_Telefono1` VARCHAR(15) NULL DEFAULT NULL,
  `Doc_Telefono2` VARCHAR(15) NULL DEFAULT NULL,
  `Doc_Provincia` CHAR(1) NULL DEFAULT NULL,
  `Doc_Canton` CHAR(2) NULL DEFAULT NULL,
  `Doc_Distrito` CHAR(3) NULL DEFAULT NULL,
  `Doc_Barrio` CHAR(4) NULL DEFAULT NULL,
  `Doc_Direccion` VARCHAR(150) NULL DEFAULT NULL,
  PRIMARY KEY (`Doc_Cedula`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`especialidades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`especialidades` (
  `Esp_Codigo` CHAR(2) NOT NULL,
  `Esp_Nombre` VARCHAR(50) NOT NULL,
  `Est_Modalidad` CHAR(2) NOT NULL,
  PRIMARY KEY (`Esp_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`estudiantes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`estudiantes` (
  `Est_Cedula` VARCHAR(30) NOT NULL,
  `Est_Nombre` VARCHAR(45) NOT NULL,
  `Est_Apellido1` VARCHAR(45) NOT NULL,
  `Est_Apellido2` VARCHAR(45) NOT NULL,
  `Est_Fecha_Nac` VARCHAR(45) NOT NULL,
  `Est_Correo` VARCHAR(70) NULL DEFAULT NULL,
  `Est_Nacionalidad` VARCHAR(45) NOT NULL,
  `Est_Genero_` CHAR(1) NOT NULL,
  `Est_Informacion_Medica` VARCHAR(150) NULL DEFAULT NULL,
  `Est_Telefono1` VARCHAR(15) NULL DEFAULT NULL,
  `Est_Telefono2` VARCHAR(15) NULL DEFAULT NULL,
  `Est_Satelite` CHAR(2) NULL DEFAULT NULL,
  `Est_Provincia` CHAR(1) NOT NULL,
  `Est_Canton` CHAR(2) NOT NULL,
  `Est_Distrito` CHAR(3) NOT NULL,
  `Est_Barrio` CHAR(4) NOT NULL,
  `Est_Direccion` VARCHAR(150) NOT NULL,
  `Est_Transporte_Ruta` CHAR(2) NULL DEFAULT NULL,
  `Est_Adecuacion` CHAR(2) NULL DEFAULT NULL,
  `Est_Estado` CHAR(2) NULL DEFAULT NULL,
  PRIMARY KEY (`Est_Cedula`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`grupo_profesional_doc`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`grupo_profesional_doc` (
  `Gpd_Codigo` CHAR(2) NOT NULL,
  `Gpd_Nombre` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`Gpd_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`matriculas_ac`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`matriculas_ac` (
  `Mat_Estudiante` VARCHAR(30) NOT NULL,
  `Mat_` VARCHAR(45) NULL DEFAULT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`matriculas_tec`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`matriculas_tec` (
  `MatTec_Estudiante` VARCHAR(30) NOT NULL,
  `MatTec_Seccion` VARCHAR(45) NULL DEFAULT NULL,
  `MatTec_Periodo` CHAR(4) NULL DEFAULT NULL,
  `MatTec_Satelite` CHAR(2) NULL DEFAULT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`modalidades_esp`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`modalidades_esp` (
  `Mes_Codigo` CHAR(2) NOT NULL,
  `Mes_Nombre` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`Mes_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`modulos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`modulos` (
  `Mod_Codigo` VARCHAR(10) NOT NULL,
  `Mod_Nombre` VARCHAR(100) NOT NULL,
  `Mod_Atinencia` VARCHAR(45) NOT NULL,
  `Mod_Area` VARCHAR(45) NOT NULL,
  `Mod_Nivel` CHAR(2) NOT NULL,
  `Mod_Periodo` VARCHAR(45) NOT NULL,
  `Mod_Creditos` INT(11) NOT NULL,
  `Mod_Nota_Minima` INT(11) NOT NULL,
  `Mod_Equivalencia` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Mod_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`niveles_ac`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`niveles_ac` (
  `Niv_Codigo` CHAR(2) NOT NULL,
  `Niv_Nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Niv_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`niveles_tec`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`niveles_tec` (
  `NivT_Codigo` CHAR(1) NOT NULL,
  `NivT_Nombre` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`NivT_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`parametros_colegio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`parametros_colegio` (
  `ParCol_Nombre_Colegio` VARCHAR(50) NOT NULL,
  `ParCol_Codigo_Colegio` VARCHAR(15) NOT NULL,
  `ParCol_Director` VARCHAR(100) NOT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`periodos_tec`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`periodos_tec` (
  `PerTec_Anho` CHAR(4) NOT NULL,
  `PerTec_Descripcion` VARCHAR(100) NOT NULL,
  `PerTec_Predeterminado` CHAR(1) NOT NULL,
  PRIMARY KEY (`PerTec_Anho`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`provincias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`provincias` (
  `Prov_Codigo` CHAR(1) NOT NULL,
  `Prov_Nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Prov_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`satelites`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`satelites` (
  `Sat_Codigo` CHAR(2) NOT NULL,
  `Sat_Nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Sat_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`secciones_academicas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`secciones_academicas` (
  `Sec_Nombre` VARCHAR(45) NOT NULL,
  `Sec_Nivel` CHAR(2) NOT NULL,
  `Sec_Satelite` CHAR(2) NOT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`secciones_tec`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`secciones_tec` (
  `SecTec_Nombre` VARCHAR(30) NOT NULL,
  `SecTec_Nivel` CHAR(1) NOT NULL,
  PRIMARY KEY (`SecTec_Nombre`, `SecTec_Nivel`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`sub_areas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`sub_areas` (
  `Sub_Codigo` VARCHAR(10) NOT NULL,
  `Sub_Nombre` VARCHAR(45) NOT NULL,
  `Sub_Especialidad` CHAR(2) NOT NULL,
  `Sub_Nivel` CHAR(1) NOT NULL,
  PRIMARY KEY (`Sub_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`tipo_docente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`tipo_docente` (
  `Tdoc_Codigo` CHAR(2) NOT NULL,
  `Tdoc_Nombre` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`Tdoc_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`USUARIO_DESARRADOR`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`USUARIO_DESARRADOR` (
  `UsDes_Usuario` VARCHAR(30) NOT NULL,
  `UsDes_Clave` VARCHAR(100) NULL,
  `UsDes_Nombre` VARCHAR(45) NULL,
  `UsDes_Apellido1` VARCHAR(45) NULL,
  `UsDes_Apellido2` VARCHAR(45) NULL,
  `UsDes_Tema` CHAR(1) NULL,
  PRIMARY KEY (`UsDes_Usuario`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



