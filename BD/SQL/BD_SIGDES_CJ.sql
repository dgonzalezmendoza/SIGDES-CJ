-- MariaDB dump 10.19  Distrib 10.4.18-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: BD_SIGDES_CJ
-- ------------------------------------------------------
-- Server version	10.4.18-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `adecuaciones`
--

DROP TABLE IF EXISTS `adecuaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adecuaciones` (
  `Ade_Codigo` char(2) NOT NULL,
  `Ade_Nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`Ade_Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adecuaciones`
--

LOCK TABLES `adecuaciones` WRITE;
/*!40000 ALTER TABLE `adecuaciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `adecuaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `barrios`
--

DROP TABLE IF EXISTS `barrios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `barrios` (
  `Bar_Codigo` char(4) NOT NULL,
  `Bar_Nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`Bar_Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `barrios`
--

LOCK TABLES `barrios` WRITE;
/*!40000 ALTER TABLE `barrios` DISABLE KEYS */;
/*!40000 ALTER TABLE `barrios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cantones`
--

DROP TABLE IF EXISTS `cantones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cantones` (
  `Cant_Codigo` char(2) NOT NULL,
  `Cant_Nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`Cant_Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cantones`
--

LOCK TABLES `cantones` WRITE;
/*!40000 ALTER TABLE `cantones` DISABLE KEYS */;
/*!40000 ALTER TABLE `cantones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `distritos`
--

DROP TABLE IF EXISTS `distritos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `distritos` (
  `Dist_Codigo` char(3) NOT NULL,
  `Dist_Nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`Dist_Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `distritos`
--

LOCK TABLES `distritos` WRITE;
/*!40000 ALTER TABLE `distritos` DISABLE KEYS */;
/*!40000 ALTER TABLE `distritos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doc_tec_secciones`
--

DROP TABLE IF EXISTS `doc_tec_secciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `doc_tec_secciones` (
  `DocTSec_Docente` varchar(30) NOT NULL,
  `DocTSec_Sub_Area` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`DocTSec_Docente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doc_tec_secciones`
--

LOCK TABLES `doc_tec_secciones` WRITE;
/*!40000 ALTER TABLE `doc_tec_secciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `doc_tec_secciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `docentes`
--

DROP TABLE IF EXISTS `docentes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `docentes` (
  `Doc_Cedula` varchar(30) NOT NULL,
  `Doc_Nombre` varchar(45) NOT NULL,
  `Doc_Apellido1` varchar(45) NOT NULL,
  `Doc_Apellido2` varchar(45) NOT NULL,
  `Doc_Fecha_Nac` date DEFAULT NULL,
  `Doc_Correo` varchar(70) DEFAULT NULL,
  `Doc_Tipo_Docente` char(2) NOT NULL,
  `Doc_Grupo_Profesional` char(2) NOT NULL,
  `Doc_Telefono1` varchar(15) DEFAULT NULL,
  `Doc_Telefono2` varchar(15) DEFAULT NULL,
  `Doc_Provincia` char(1) DEFAULT NULL,
  `Doc_Canton` char(2) DEFAULT NULL,
  `Doc_Distrito` char(3) DEFAULT NULL,
  `Doc_Barrio` char(4) DEFAULT NULL,
  `Doc_Direccion` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`Doc_Cedula`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `docentes`
--

LOCK TABLES `docentes` WRITE;
/*!40000 ALTER TABLE `docentes` DISABLE KEYS */;
/*!40000 ALTER TABLE `docentes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `especialidades`
--

DROP TABLE IF EXISTS `especialidades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `especialidades` (
  `Esp_Codigo` char(2) NOT NULL,
  `Esp_Nombre` varchar(50) NOT NULL,
  `Est_Modalidad` char(2) NOT NULL,
  PRIMARY KEY (`Esp_Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `especialidades`
--

LOCK TABLES `especialidades` WRITE;
/*!40000 ALTER TABLE `especialidades` DISABLE KEYS */;
/*!40000 ALTER TABLE `especialidades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estudiantes`
--

DROP TABLE IF EXISTS `estudiantes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estudiantes` (
  `Est_Cedula` varchar(30) NOT NULL,
  `Est_Nombre` varchar(45) NOT NULL,
  `Est_Apellido1` varchar(45) NOT NULL,
  `Est_Apellido2` varchar(45) NOT NULL,
  `Est_Fecha_Nac` varchar(45) NOT NULL,
  `Est_Correo` varchar(70) DEFAULT NULL,
  `Est_Nacionalidad` varchar(45) NOT NULL,
  `Est_Genero_` char(1) NOT NULL,
  `Est_Informacion_Medica` varchar(150) DEFAULT NULL,
  `Est_Telefono1` varchar(15) DEFAULT NULL,
  `Est_Telefono2` varchar(15) DEFAULT NULL,
  `Est_Satelite` char(2) DEFAULT NULL,
  `Est_Provincia` char(1) NOT NULL,
  `Est_Canton` char(2) NOT NULL,
  `Est_Distrito` char(3) NOT NULL,
  `Est_Barrio` char(4) NOT NULL,
  `Est_Direccion` varchar(150) NOT NULL,
  `Est_Transporte_Ruta` char(2) DEFAULT NULL,
  `Est_Adecuacion` char(2) DEFAULT NULL,
  `Est_Estado` char(2) DEFAULT NULL,
  PRIMARY KEY (`Est_Cedula`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudiantes`
--

LOCK TABLES `estudiantes` WRITE;
/*!40000 ALTER TABLE `estudiantes` DISABLE KEYS */;
/*!40000 ALTER TABLE `estudiantes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grupo_profesional_doc`
--

DROP TABLE IF EXISTS `grupo_profesional_doc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grupo_profesional_doc` (
  `Gpd_Codigo` char(2) NOT NULL,
  `Gpd_Nombre` varchar(10) NOT NULL,
  PRIMARY KEY (`Gpd_Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grupo_profesional_doc`
--

LOCK TABLES `grupo_profesional_doc` WRITE;
/*!40000 ALTER TABLE `grupo_profesional_doc` DISABLE KEYS */;
/*!40000 ALTER TABLE `grupo_profesional_doc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matriculas_ac`
--

DROP TABLE IF EXISTS `matriculas_ac`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `matriculas_ac` (
  `Mat_Estudiante` varchar(30) NOT NULL,
  `Mat_` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matriculas_ac`
--

LOCK TABLES `matriculas_ac` WRITE;
/*!40000 ALTER TABLE `matriculas_ac` DISABLE KEYS */;
/*!40000 ALTER TABLE `matriculas_ac` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matriculas_tec`
--

DROP TABLE IF EXISTS `matriculas_tec`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `matriculas_tec` (
  `MatTec_Estudiante` varchar(30) NOT NULL,
  `MatTec_Seccion` varchar(45) DEFAULT NULL,
  `MatTec_Periodo` char(4) DEFAULT NULL,
  `MatTec_Satelite` char(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matriculas_tec`
--

LOCK TABLES `matriculas_tec` WRITE;
/*!40000 ALTER TABLE `matriculas_tec` DISABLE KEYS */;
/*!40000 ALTER TABLE `matriculas_tec` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modalidades_esp`
--

DROP TABLE IF EXISTS `modalidades_esp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `modalidades_esp` (
  `Mes_Codigo` char(2) NOT NULL,
  `Mes_Nombre` varchar(40) NOT NULL,
  PRIMARY KEY (`Mes_Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modalidades_esp`
--

LOCK TABLES `modalidades_esp` WRITE;
/*!40000 ALTER TABLE `modalidades_esp` DISABLE KEYS */;
/*!40000 ALTER TABLE `modalidades_esp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modulos`
--

DROP TABLE IF EXISTS `modulos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `modulos` (
  `Mod_Codigo` varchar(10) NOT NULL,
  `Mod_Nombre` varchar(100) NOT NULL,
  `Mod_Atinencia` varchar(45) NOT NULL,
  `Mod_Area` varchar(45) NOT NULL,
  `Mod_Nivel` char(2) NOT NULL,
  `Mod_Periodo` varchar(45) NOT NULL,
  `Mod_Creditos` int(11) NOT NULL,
  `Mod_Nota_Minima` int(11) NOT NULL,
  `Mod_Equivalencia` varchar(45) NOT NULL,
  PRIMARY KEY (`Mod_Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modulos`
--

LOCK TABLES `modulos` WRITE;
/*!40000 ALTER TABLE `modulos` DISABLE KEYS */;
/*!40000 ALTER TABLE `modulos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `niveles_ac`
--

DROP TABLE IF EXISTS `niveles_ac`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `niveles_ac` (
  `Niv_Codigo` char(2) NOT NULL,
  `Niv_Nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`Niv_Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `niveles_ac`
--

LOCK TABLES `niveles_ac` WRITE;
/*!40000 ALTER TABLE `niveles_ac` DISABLE KEYS */;
/*!40000 ALTER TABLE `niveles_ac` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `niveles_tec`
--

DROP TABLE IF EXISTS `niveles_tec`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `niveles_tec` (
  `NivT_Codigo` char(1) NOT NULL,
  `NivT_Nombre` varchar(20) NOT NULL,
  PRIMARY KEY (`NivT_Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `niveles_tec`
--

LOCK TABLES `niveles_tec` WRITE;
/*!40000 ALTER TABLE `niveles_tec` DISABLE KEYS */;
/*!40000 ALTER TABLE `niveles_tec` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parametros_colegio`
--

DROP TABLE IF EXISTS `parametros_colegio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `parametros_colegio` (
  `ParCol_Nombre_Colegio` varchar(50) NOT NULL,
  `ParCol_Codigo_Colegio` varchar(15) NOT NULL,
  `ParCol_Director` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parametros_colegio`
--

LOCK TABLES `parametros_colegio` WRITE;
/*!40000 ALTER TABLE `parametros_colegio` DISABLE KEYS */;
/*!40000 ALTER TABLE `parametros_colegio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `periodos_tec`
--

DROP TABLE IF EXISTS `periodos_tec`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `periodos_tec` (
  `PerTec_Anho` char(4) NOT NULL,
  `PerTec_Descripcion` varchar(100) NOT NULL,
  `PerTec_Predeterminado` char(1) NOT NULL,
  PRIMARY KEY (`PerTec_Anho`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `periodos_tec`
--

LOCK TABLES `periodos_tec` WRITE;
/*!40000 ALTER TABLE `periodos_tec` DISABLE KEYS */;
/*!40000 ALTER TABLE `periodos_tec` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provincias`
--

DROP TABLE IF EXISTS `provincias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `provincias` (
  `Prov_Codigo` char(1) NOT NULL,
  `Prov_Nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`Prov_Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provincias`
--

LOCK TABLES `provincias` WRITE;
/*!40000 ALTER TABLE `provincias` DISABLE KEYS */;
/*!40000 ALTER TABLE `provincias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `satelites`
--

DROP TABLE IF EXISTS `satelites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `satelites` (
  `Sat_Codigo` char(2) NOT NULL,
  `Sat_Nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`Sat_Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `satelites`
--

LOCK TABLES `satelites` WRITE;
/*!40000 ALTER TABLE `satelites` DISABLE KEYS */;
/*!40000 ALTER TABLE `satelites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `secciones_academicas`
--

DROP TABLE IF EXISTS `secciones_academicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `secciones_academicas` (
  `Sec_Nombre` varchar(45) NOT NULL,
  `Sec_Nivel` char(2) NOT NULL,
  `Sec_Satelite` char(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `secciones_academicas`
--

LOCK TABLES `secciones_academicas` WRITE;
/*!40000 ALTER TABLE `secciones_academicas` DISABLE KEYS */;
/*!40000 ALTER TABLE `secciones_academicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `secciones_tec`
--

DROP TABLE IF EXISTS `secciones_tec`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `secciones_tec` (
  `SecTec_Nombre` varchar(30) NOT NULL,
  `SecTec_Nivel` char(1) NOT NULL,
  PRIMARY KEY (`SecTec_Nombre`,`SecTec_Nivel`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `secciones_tec`
--

LOCK TABLES `secciones_tec` WRITE;
/*!40000 ALTER TABLE `secciones_tec` DISABLE KEYS */;
/*!40000 ALTER TABLE `secciones_tec` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_areas`
--

DROP TABLE IF EXISTS `sub_areas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sub_areas` (
  `Sub_Codigo` varchar(10) NOT NULL,
  `Sub_Nombre` varchar(45) NOT NULL,
  `Sub_Especialidad` char(2) NOT NULL,
  `Sub_Nivel` char(1) NOT NULL,
  PRIMARY KEY (`Sub_Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_areas`
--

LOCK TABLES `sub_areas` WRITE;
/*!40000 ALTER TABLE `sub_areas` DISABLE KEYS */;
/*!40000 ALTER TABLE `sub_areas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_docente`
--

DROP TABLE IF EXISTS `tipo_docente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_docente` (
  `Tdoc_Codigo` char(2) NOT NULL,
  `Tdoc_Nombre` varchar(20) NOT NULL,
  PRIMARY KEY (`Tdoc_Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_docente`
--

LOCK TABLES `tipo_docente` WRITE;
/*!40000 ALTER TABLE `tipo_docente` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_docente` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-06 17:20:18
