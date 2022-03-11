

-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`adecuaciones`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`adecuaciones` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`adecuaciones` (
  `Ade_Codigo` CHAR(2) NOT NULL,
  `Ade_Nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Ade_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE UNIQUE INDEX `Ade_Codigo_UNIQUE` ON `bd_sigdes_cj`.`adecuaciones` (`Ade_Codigo` ASC);


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`provincias`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`provincias` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`provincias` (
  `Prov_Codigo` CHAR(1) NOT NULL,
  `Prov_Nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Prov_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE UNIQUE INDEX `Prov_Codigo_UNIQUE` ON `bd_sigdes_cj`.`provincias` (`Prov_Codigo` ASC) ;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`cantones`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`cantones` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`cantones` (
  `Cant_Codigo` CHAR(2) NOT NULL,
  `Cant_Nombre` VARCHAR(45) NOT NULL,
  `Cant_Provincia` CHAR(1) NOT NULL,
  PRIMARY KEY (`Cant_Codigo`),
  CONSTRAINT `fk_cantones_provincias1`
    FOREIGN KEY (`Cant_Provincia`)
    REFERENCES `bd_sigdes_cj`.`provincias` (`Prov_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE UNIQUE INDEX `Cant_Codigo_UNIQUE` ON `bd_sigdes_cj`.`cantones` (`Cant_Codigo` ASC) ;

CREATE INDEX `fk_cantones_provincias1_idx` ON `bd_sigdes_cj`.`cantones` (`Cant_Provincia` ASC) ;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`distritos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`distritos` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`distritos` (
  `Dist_Codigo` CHAR(3) NOT NULL,
  `Dist_Nombre` VARCHAR(45) NOT NULL,
  `Dist_Canton` CHAR(2) NOT NULL,
  PRIMARY KEY (`Dist_Codigo`),
  CONSTRAINT `fk_distritos_cantones1`
    FOREIGN KEY (`Dist_Canton`)
    REFERENCES `bd_sigdes_cj`.`cantones` (`Cant_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE UNIQUE INDEX `Dist_Codigo_UNIQUE` ON `bd_sigdes_cj`.`distritos` (`Dist_Codigo` ASC) ;

CREATE INDEX `fk_distritos_cantones1_idx` ON `bd_sigdes_cj`.`distritos` (`Dist_Canton` ASC) ;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`grupo_profesional_doc`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`grupo_profesional_doc` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`grupo_profesional_doc` (
  `Gpd_Codigo` CHAR(2) NOT NULL,
  `Gpd_Nombre` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`Gpd_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`Clase_Especialidad_Docente`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`Clase_Especialidad_Docente` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`Clase_Especialidad_Docente` (
  `ClEspeDoc_Codigo` CHAR(2) NOT NULL,
  `ClEspeDoc_Descripcion` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`ClEspeDoc_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`docentes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`docentes` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`docentes` (
  `Doc_Cedula` VARCHAR(30) NOT NULL,
  `Doc_Nombre` VARCHAR(45) NOT NULL,
  `Doc_Apellido1` VARCHAR(45) NOT NULL,
  `Doc_Apellido2` VARCHAR(45) NOT NULL,
  `Doc_Fecha_Nac` DATE NULL DEFAULT NULL,
  `Doc_Correo` VARCHAR(70) NULL DEFAULT NULL,
  `Doc_Especialidad_Docente` CHAR(2) NOT NULL,
  `Doc_Grupo_Profesional` CHAR(2) NOT NULL,
  `Doc_Telefono1` VARCHAR(15) NULL DEFAULT NULL,
  `Doc_Telefono2` VARCHAR(15) NULL DEFAULT NULL,
  `Doc_Distrito` CHAR(3) NOT NULL,
  `Doc_Direccion` VARCHAR(150) NULL DEFAULT NULL,
  PRIMARY KEY (`Doc_Cedula`),
  CONSTRAINT `fk_docentes_distritos1`
    FOREIGN KEY (`Doc_Distrito`)
    REFERENCES `bd_sigdes_cj`.`distritos` (`Dist_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_docentes_grupo_profesional_doc1`
    FOREIGN KEY (`Doc_Grupo_Profesional`)
    REFERENCES `bd_sigdes_cj`.`grupo_profesional_doc` (`Gpd_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_docentes_Clase_Especialidad_Docente1`
    FOREIGN KEY (`Doc_Especialidad_Docente`)
    REFERENCES `bd_sigdes_cj`.`Clase_Especialidad_Docente` (`ClEspeDoc_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE UNIQUE INDEX `Doc_Cedula_UNIQUE` ON `bd_sigdes_cj`.`docentes` (`Doc_Cedula` ASC) ;

CREATE INDEX `fk_docentes_distritos1_idx` ON `bd_sigdes_cj`.`docentes` (`Doc_Distrito` ASC) ;

CREATE INDEX `fk_docentes_grupo_profesional_doc1_idx` ON `bd_sigdes_cj`.`docentes` (`Doc_Grupo_Profesional` ASC) ;

CREATE INDEX `fk_docentes_Clase_Especialidad_Docente1_idx` ON `bd_sigdes_cj`.`docentes` (`Doc_Especialidad_Docente` ASC) ;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`modalidades_esp`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`modalidades_esp` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`modalidades_esp` (
  `ModEsp_Codigo` CHAR(2) NOT NULL,
  `ModEsp_Nombre` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`ModEsp_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE UNIQUE INDEX `Mes_Codigo_UNIQUE` ON `bd_sigdes_cj`.`modalidades_esp` (`ModEsp_Codigo` ASC) ;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`especialidades`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`especialidades` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`especialidades` (
  `Esp_Codigo` CHAR(2) NOT NULL,
  `Esp_Nombre` VARCHAR(50) NOT NULL,
  `Est_Modalidad` CHAR(2) NOT NULL,
  PRIMARY KEY (`Esp_Codigo`),
  CONSTRAINT `fk_especialidades_modalidades_esp1`
    FOREIGN KEY (`Est_Modalidad`)
    REFERENCES `bd_sigdes_cj`.`modalidades_esp` (`ModEsp_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE UNIQUE INDEX `Esp_Codigo_UNIQUE` ON `bd_sigdes_cj`.`especialidades` (`Esp_Codigo` ASC) ;

CREATE INDEX `fk_especialidades_modalidades_esp1_idx` ON `bd_sigdes_cj`.`especialidades` (`Est_Modalidad` ASC) ;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`transporte`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`transporte` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`transporte` (
  `Trans_Codigo` CHAR(2) NOT NULL,
  `Trans_Nombre` VARCHAR(45) NOT NULL,
  `Trans_Detalle` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`Trans_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE UNIQUE INDEX `Trans_Codigo_UNIQUE` ON `bd_sigdes_cj`.`transporte` (`Trans_Codigo` ASC) ;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`estudiantes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`estudiantes` ;

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
  `Est_Ruta_Transporte` CHAR(2) NOT NULL,
  `Est_Distrito` CHAR(3) NOT NULL,
  `Est_Direccion` VARCHAR(150) NOT NULL,
  `Est_Adecuacion` CHAR(2) NOT NULL,
  `Est_Estado` CHAR(2) NOT NULL,
  PRIMARY KEY (`Est_Cedula`),
  CONSTRAINT `fk_estudiantes_transporte`
    FOREIGN KEY (`Est_Ruta_Transporte`)
    REFERENCES `bd_sigdes_cj`.`transporte` (`Trans_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_estudiantes_adecuaciones1`
    FOREIGN KEY (`Est_Adecuacion`)
    REFERENCES `bd_sigdes_cj`.`adecuaciones` (`Ade_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_estudiantes_distritos1`
    FOREIGN KEY (`Est_Distrito`)
    REFERENCES `bd_sigdes_cj`.`distritos` (`Dist_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_estudiantes_transporte_idx` ON `bd_sigdes_cj`.`estudiantes` (`Est_Ruta_Transporte` ASC) ;

CREATE UNIQUE INDEX `Est_Cedula_UNIQUE` ON `bd_sigdes_cj`.`estudiantes` (`Est_Cedula` ASC) ;

CREATE INDEX `fk_estudiantes_adecuaciones1_idx` ON `bd_sigdes_cj`.`estudiantes` (`Est_Adecuacion` ASC) ;

CREATE INDEX `fk_estudiantes_distritos1_idx` ON `bd_sigdes_cj`.`estudiantes` (`Est_Distrito` ASC) ;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`Periodo_Ac`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`Periodo_Ac` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`Periodo_Ac` (
  `PerAc_Anho` CHAR(4) NOT NULL,
  `PerAc_Periodo` CHAR(1) NOT NULL,
  `PerAc_Predeterminado` CHAR(1) NOT NULL,
  PRIMARY KEY (`PerAc_Anho`, `PerAc_Periodo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`niveles_ac`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`niveles_ac` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`niveles_ac` (
  `Niv_Codigo` CHAR(2) NOT NULL,
  `Niv_Nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Niv_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE UNIQUE INDEX `Niv_Codigo_UNIQUE` ON `bd_sigdes_cj`.`niveles_ac` (`Niv_Codigo` ASC) ;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`satelites`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`satelites` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`satelites` (
  `Sat_Codigo` CHAR(2) NOT NULL,
  `Sat_Nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Sat_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE UNIQUE INDEX `Sat_Codigo_UNIQUE` ON `bd_sigdes_cj`.`satelites` (`Sat_Codigo` ASC) ;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`secciones_academicas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`secciones_academicas` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`secciones_academicas` (
  `Sec_Id` SMALLINT NOT NULL,
  `Sec_Nombre` VARCHAR(45) NOT NULL,
  `Sec_Nivel` CHAR(2) NOT NULL,
  `Sec_Satelite` CHAR(2) NOT NULL,
  PRIMARY KEY (`Sec_Id`),
  CONSTRAINT `fk_secciones_academicas_niveles_ac1`
    FOREIGN KEY (`Sec_Nivel`)
    REFERENCES `bd_sigdes_cj`.`niveles_ac` (`Niv_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_secciones_academicas_satelites1`
    FOREIGN KEY (`Sec_Satelite`)
    REFERENCES `bd_sigdes_cj`.`satelites` (`Sat_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_secciones_academicas_niveles_ac1_idx` ON `bd_sigdes_cj`.`secciones_academicas` (`Sec_Nivel` ASC) ;

CREATE INDEX `fk_secciones_academicas_satelites1_idx` ON `bd_sigdes_cj`.`secciones_academicas` (`Sec_Satelite` ASC) ;

CREATE UNIQUE INDEX `Sec_Id_UNIQUE` ON `bd_sigdes_cj`.`secciones_academicas` (`Sec_Id` ASC) ;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`matriculas_ac`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`matriculas_ac` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`matriculas_ac` (
  `Mat_Codigo` INT NOT NULL AUTO_INCREMENT,
  `Mat_Estudiante` VARCHAR(30) NOT NULL,
  `Mat_Seccion` SMALLINT NOT NULL,
  `Mat_FechaMatricula` DATETIME NOT NULL,
  `Mat_Anho` CHAR(4) NOT NULL,
  `Mat_Periodo` CHAR(1) NOT NULL,
  PRIMARY KEY (`Mat_Codigo`),
  CONSTRAINT `fk_matriculas_ac_estudiantes1`
    FOREIGN KEY (`Mat_Estudiante`)
    REFERENCES `bd_sigdes_cj`.`estudiantes` (`Est_Cedula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_matriculas_ac_Periodo_Ac1`
    FOREIGN KEY (`Mat_Anho` , `Mat_Periodo`)
    REFERENCES `bd_sigdes_cj`.`Periodo_Ac` (`PerAc_Anho` , `PerAc_Periodo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_matriculas_ac_secciones_academicas1`
    FOREIGN KEY (`Mat_Seccion`)
    REFERENCES `bd_sigdes_cj`.`secciones_academicas` (`Sec_Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE UNIQUE INDEX `Mat_Codigo_UNIQUE` ON `bd_sigdes_cj`.`matriculas_ac` (`Mat_Codigo` ASC) ;

CREATE INDEX `fk_matriculas_ac_estudiantes1_idx` ON `bd_sigdes_cj`.`matriculas_ac` (`Mat_Estudiante` ASC) ;

CREATE INDEX `fk_matriculas_ac_Periodo_Ac1_idx` ON `bd_sigdes_cj`.`matriculas_ac` (`Mat_Anho` ASC, `Mat_Periodo` ASC) ;

CREATE INDEX `fk_matriculas_ac_secciones_academicas1_idx` ON `bd_sigdes_cj`.`matriculas_ac` (`Mat_Seccion` ASC) ;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`niveles_tec`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`niveles_tec` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`niveles_tec` (
  `NivT_Codigo` CHAR(1) NOT NULL,
  `NivT_Nombre` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`NivT_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE UNIQUE INDEX `NivT_Codigo_UNIQUE` ON `bd_sigdes_cj`.`niveles_tec` (`NivT_Codigo` ASC) ;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`secciones_tec`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`secciones_tec` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`secciones_tec` (
  `SecTec_Id` SMALLINT NOT NULL,
  `SecTec_Nombre` VARCHAR(30) NOT NULL,
  `SecTec_Nivel` CHAR(1) NOT NULL,
  `SecTec_Satelite` CHAR(2) NOT NULL,
  PRIMARY KEY (`SecTec_Id`),
  CONSTRAINT `fk_secciones_tec_niveles_tec1`
    FOREIGN KEY (`SecTec_Nivel`)
    REFERENCES `bd_sigdes_cj`.`niveles_tec` (`NivT_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_secciones_tec_satelites1`
    FOREIGN KEY (`SecTec_Satelite`)
    REFERENCES `bd_sigdes_cj`.`satelites` (`Sat_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_secciones_tec_niveles_tec1_idx` ON `bd_sigdes_cj`.`secciones_tec` (`SecTec_Nivel` ASC) ;

CREATE INDEX `fk_secciones_tec_satelites1_idx` ON `bd_sigdes_cj`.`secciones_tec` (`SecTec_Satelite` ASC) ;

CREATE UNIQUE INDEX `SecTec_Id_UNIQUE` ON `bd_sigdes_cj`.`secciones_tec` (`SecTec_Id` ASC) ;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`periodos_tec`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`periodos_tec` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`periodos_tec` (
  `PerTec_Anho` CHAR(4) NOT NULL,
  `PerTec_Periodo` CHAR(1) NOT NULL,
  `PerTec_Predeterminado` CHAR(1) NOT NULL,
  PRIMARY KEY (`PerTec_Anho`, `PerTec_Periodo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`matriculas_tec`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`matriculas_tec` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`matriculas_tec` (
  `MatTec_Codigo` INT NOT NULL,
  `MatTec_FechaMatricula` DATETIME NOT NULL,
  `MatTec_Estudiante` VARCHAR(30) NOT NULL,
  `MatTec_Seccion` SMALLINT NOT NULL,
  `MatTec_Anho` CHAR(4) NOT NULL,
  `MatTec_Periodo` CHAR(1) NOT NULL,
  PRIMARY KEY (`MatTec_Codigo`),
  CONSTRAINT `fk_matriculas_tec_estudiantes1`
    FOREIGN KEY (`MatTec_Estudiante`)
    REFERENCES `bd_sigdes_cj`.`estudiantes` (`Est_Cedula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_matriculas_tec_secciones_tec1`
    FOREIGN KEY (`MatTec_Seccion`)
    REFERENCES `bd_sigdes_cj`.`secciones_tec` (`SecTec_Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_matriculas_tec_periodos_tec1`
    FOREIGN KEY (`MatTec_Anho` , `MatTec_Periodo`)
    REFERENCES `bd_sigdes_cj`.`periodos_tec` (`PerTec_Anho` , `PerTec_Periodo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE UNIQUE INDEX `MatTec_Codigo_UNIQUE` ON `bd_sigdes_cj`.`matriculas_tec` (`MatTec_Codigo` ASC) ;

CREATE INDEX `fk_matriculas_tec_estudiantes1_idx` ON `bd_sigdes_cj`.`matriculas_tec` (`MatTec_Estudiante` ASC) ;

CREATE INDEX `fk_matriculas_tec_secciones_tec1_idx` ON `bd_sigdes_cj`.`matriculas_tec` (`MatTec_Seccion` ASC) ;

CREATE INDEX `fk_matriculas_tec_periodos_tec1_idx` ON `bd_sigdes_cj`.`matriculas_tec` (`MatTec_Anho` ASC, `MatTec_Periodo` ASC) ;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`modulos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`modulos` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`modulos` (
  `Mod_Codigo` VARCHAR(10) NOT NULL,
  `Mod_Nombre` VARCHAR(100) NOT NULL,
  `Mod_Atinencia` VARCHAR(45) NOT NULL,
  `Mod_Area` VARCHAR(45) NOT NULL,
  `Mod_Nivel` CHAR(2) NOT NULL,
  `Mod_Periodo` VARCHAR(45) NOT NULL,
  `Mod_Creditos` INT(11) NULL,
  `Mod_Nota_Minima` INT NULL,
  `Mod_Equivalencia` VARCHAR(45) NULL,
  PRIMARY KEY (`Mod_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE UNIQUE INDEX `Mod_Codigo_UNIQUE` ON `bd_sigdes_cj`.`modulos` (`Mod_Codigo` ASC) ;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`parametros_colegio`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`parametros_colegio` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`parametros_colegio` (
  `ParCol_Nombre_Colegio` VARCHAR(50) NOT NULL,
  `ParCol_Codigo_Colegio` VARCHAR(15) NOT NULL,
  `ParCol_Director` VARCHAR(100) NOT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`sub_areas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`sub_areas` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`sub_areas` (
  `Sub_Codigo` VARCHAR(10) NOT NULL,
  `Sub_Nombre` VARCHAR(45) NOT NULL,
  `Sub_Especialidad` CHAR(2) NOT NULL,
  `Sub_Nivel` CHAR(1) NOT NULL,
  PRIMARY KEY (`Sub_Codigo`),
  CONSTRAINT `fk_sub_areas_especialidades1`
    FOREIGN KEY (`Sub_Especialidad`)
    REFERENCES `bd_sigdes_cj`.`especialidades` (`Esp_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sub_areas_niveles_tec1`
    FOREIGN KEY (`Sub_Nivel`)
    REFERENCES `bd_sigdes_cj`.`niveles_tec` (`NivT_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE UNIQUE INDEX `Sub_Codigo_UNIQUE` ON `bd_sigdes_cj`.`sub_areas` (`Sub_Codigo` ASC) ;

CREATE INDEX `fk_sub_areas_especialidades1_idx` ON `bd_sigdes_cj`.`sub_areas` (`Sub_Especialidad` ASC) ;

CREATE INDEX `fk_sub_areas_niveles_tec1_idx` ON `bd_sigdes_cj`.`sub_areas` (`Sub_Nivel` ASC) ;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`usuario_desarrollador`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`usuario_desarrollador` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`usuario_desarrollador` (
  `UsDes_Usuario` VARCHAR(30) NOT NULL,
  `UsDes_Clave` VARCHAR(100) NOT NULL,
  `UsDes_Nombre` VARCHAR(45) NOT NULL,
  `UsDes_Apellido1` VARCHAR(45) NOT NULL,
  `UsDes_Apellido2` VARCHAR(45) NOT NULL,
  `UsDes_Tema` CHAR(1) NOT NULL,
  PRIMARY KEY (`UsDes_Usuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE UNIQUE INDEX `UsDes_Usuario_UNIQUE` ON `bd_sigdes_cj`.`usuario_desarrollador` (`UsDes_Usuario` ASC) ;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`Detalle_Matricula_Ac`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`Detalle_Matricula_Ac` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`Detalle_Matricula_Ac` (
  `DetMacAc_Modulo` VARCHAR(10) NOT NULL,
  `DetMatAc_Matricula` INT NOT NULL,
  CONSTRAINT `fk_Detalle_Matricula_Ac_modulos1`
    FOREIGN KEY (`DetMacAc_Modulo`)
    REFERENCES `bd_sigdes_cj`.`modulos` (`Mod_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Detalle_Matricula_Ac_matriculas_ac1`
    FOREIGN KEY (`DetMatAc_Matricula`)
    REFERENCES `bd_sigdes_cj`.`matriculas_ac` (`Mat_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_Detalle_Matricula_Ac_modulos1_idx` ON `bd_sigdes_cj`.`Detalle_Matricula_Ac` (`DetMacAc_Modulo` ASC) ;

CREATE INDEX `fk_Detalle_Matricula_Ac_matriculas_ac1_idx` ON `bd_sigdes_cj`.`Detalle_Matricula_Ac` (`DetMatAc_Matricula` ASC) ;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`NOTAS_AC`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`NOTAS_AC` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`NOTAS_AC` (
  `NotaAc_Estudiante` VARCHAR(30) NOT NULL,
  `NotaAc_Modulo` VARCHAR(10) NOT NULL,
  `NotaAc_Nota` TINYINT NOT NULL,
  CONSTRAINT `fk_NOTAS_AC_estudiantes1`
    FOREIGN KEY (`NotaAc_Estudiante`)
    REFERENCES `bd_sigdes_cj`.`estudiantes` (`Est_Cedula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_NOTAS_AC_modulos1`
    FOREIGN KEY (`NotaAc_Modulo`)
    REFERENCES `bd_sigdes_cj`.`modulos` (`Mod_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_NOTAS_AC_estudiantes1_idx` ON `bd_sigdes_cj`.`NOTAS_AC` (`NotaAc_Estudiante` ASC) ;

CREATE INDEX `fk_NOTAS_AC_modulos1_idx` ON `bd_sigdes_cj`.`NOTAS_AC` (`NotaAc_Modulo` ASC) ;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`user_details`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`user_details` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`user_details` (
  `iduser_details` INT NULL,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `gender` VARCHAR(45) NULL,
  `password` VARCHAR(200) NULL,
  `status` CHAR(1) NULL)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`Detalle_Matricula_Tec`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`Detalle_Matricula_Tec` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`Detalle_Matricula_Tec` (
  `DetMacTec_Sub_area` VARCHAR(10) NOT NULL,
  `DetMacTec_Matricula` INT NOT NULL,
  CONSTRAINT `fk_Detalle_Matricula_Tec_sub_areas1`
    FOREIGN KEY (`DetMacTec_Sub_area`)
    REFERENCES `bd_sigdes_cj`.`sub_areas` (`Sub_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Detalle_Matricula_Tec_matriculas_tec1`
    FOREIGN KEY (`DetMacTec_Matricula`)
    REFERENCES `bd_sigdes_cj`.`matriculas_tec` (`MatTec_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_Detalle_Matricula_Tec_sub_areas1_idx` ON `bd_sigdes_cj`.`Detalle_Matricula_Tec` (`DetMacTec_Sub_area` ASC) ;

CREATE INDEX `fk_Detalle_Matricula_Tec_matriculas_tec1_idx` ON `bd_sigdes_cj`.`Detalle_Matricula_Tec` (`DetMacTec_Matricula` ASC) ;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`Asignacion_Docentes_Sub_Areas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`Asignacion_Docentes_Sub_Areas` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`Asignacion_Docentes_Sub_Areas` (
  `docentes_Doc_Cedula` VARCHAR(30) NOT NULL,
  `sub_areas_Sub_Codigo` VARCHAR(10) NOT NULL,
  `periodos_tec_PerTec_Anho` CHAR(4) NOT NULL,
  `periodos_tec_PerTec_Periodo` CHAR(1) NOT NULL,
  CONSTRAINT `fk_Sub_areas_Docentes_docentes1`
    FOREIGN KEY (`docentes_Doc_Cedula`)
    REFERENCES `bd_sigdes_cj`.`docentes` (`Doc_Cedula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Sub_areas_Docentes_sub_areas1`
    FOREIGN KEY (`sub_areas_Sub_Codigo`)
    REFERENCES `bd_sigdes_cj`.`sub_areas` (`Sub_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Sub_areas_Docentes_periodos_tec1`
    FOREIGN KEY (`periodos_tec_PerTec_Anho` , `periodos_tec_PerTec_Periodo`)
    REFERENCES `bd_sigdes_cj`.`periodos_tec` (`PerTec_Anho` , `PerTec_Periodo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_Sub_areas_Docentes_docentes1_idx` ON `bd_sigdes_cj`.`Asignacion_Docentes_Sub_Areas` (`docentes_Doc_Cedula` ASC) ;

CREATE INDEX `fk_Sub_areas_Docentes_sub_areas1_idx` ON `bd_sigdes_cj`.`Asignacion_Docentes_Sub_Areas` (`sub_areas_Sub_Codigo` ASC) ;

CREATE INDEX `fk_Sub_areas_Docentes_periodos_tec1_idx` ON `bd_sigdes_cj`.`Asignacion_Docentes_Sub_Areas` (`periodos_tec_PerTec_Anho` ASC, `periodos_tec_PerTec_Periodo` ASC) ;


-- -----------------------------------------------------
-- Table `bd_sigdes_cj`.`Asignacion_Docentes_Modulo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bd_sigdes_cj`.`Asignacion_Docentes_Modulo` ;

CREATE TABLE IF NOT EXISTS `bd_sigdes_cj`.`Asignacion_Docentes_Modulo` (
  `ADM_Docente` VARCHAR(30) NOT NULL,
  `ADM_Modulo` VARCHAR(10) NOT NULL,
  `ADM_Anho` CHAR(4) NOT NULL,
  `ADM_Periodo` CHAR(1) NOT NULL,
  CONSTRAINT `fk_Sub_areas_Docentes_docentes10`
    FOREIGN KEY (`ADM_Docente`)
    REFERENCES `bd_sigdes_cj`.`docentes` (`Doc_Cedula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Asignacion_Docentes_Modulo_modulos1`
    FOREIGN KEY (`ADM_Modulo`)
    REFERENCES `bd_sigdes_cj`.`modulos` (`Mod_Codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Asignacion_Docentes_Modulo_Periodo_Ac1`
    FOREIGN KEY (`ADM_Anho` , `ADM_Periodo`)
    REFERENCES `bd_sigdes_cj`.`Periodo_Ac` (`PerAc_Anho` , `PerAc_Periodo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_Sub_areas_Docentes_docentes1_idx` ON `bd_sigdes_cj`.`Asignacion_Docentes_Modulo` (`ADM_Docente` ASC) ;

CREATE INDEX `fk_Asignacion_Docentes_Modulo_modulos1_idx` ON `bd_sigdes_cj`.`Asignacion_Docentes_Modulo` (`ADM_Modulo` ASC) ;

CREATE INDEX `fk_Asignacion_Docentes_Modulo_Periodo_Ac1_idx` ON `bd_sigdes_cj`.`Asignacion_Docentes_Modulo` (`ADM_Anho` ASC, `ADM_Periodo` ASC) ;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
