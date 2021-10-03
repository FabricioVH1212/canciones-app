-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-05-2021 a las 04:06:25
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `canciones`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tienda_detalle`
--

CREATE TABLE `tbl_canciones` (
  `IDE_CANCION` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Id de la canción',
  `DSC_NOMBRE` varchar(100) NOT NULL COMMENT 'Nombre de la canción',
  `DSC_ARTISTA` varchar(100) NOT NULL COMMENT 'Artista de la canción',
  `FEC_LANZAMIENTO` DATE COMMENT 'Fecha de lanzamiento',
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbl_canciones`
--
INSERT INTO tbl_canciones(IDE_CANCION,DSC_NOMBRE,DSC_ARTISTA,FEC_LANZAMIENTO)
VALUES(NULL,'Quiero Repetir','Ozuna','2017-08-25');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
